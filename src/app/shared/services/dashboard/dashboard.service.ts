import * as DashboardActions from '@store/dashboard/dashboard.actions';
import * as _ from 'lodash';
import * as dayjs from 'dayjs';
import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { APIService, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { dateDiffInDays } from '@shared/utils/dates';
import { AppDataStateModel } from '@store/app-data';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { IAdData } from '@shared/interfaces/ads.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/auth/auth.service';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';

export interface IDashboardData {
  dashReport: IMergeReport | null;
  dashSnapshots: DashboardStateModel | null;
  dashTrends: IGetTrendingData | null;
  dashScores: IProductTrendingData[] | null;
  dashScore: number | null;
  dashScoreSuppressed: boolean | null;
}

@Injectable()
export class DashboardService implements OnDestroy {
  state: AppDataStateModel | undefined;
  state$: BehaviorSubject<AppDataStateModel> = new BehaviorSubject({} as AppDataStateModel);
  stateSub$: Subscription = new Subscription();
  // hold the merge report for easy access...this may be redundant
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject({} as IMergeReport);
  // data to pass to child components
  dashReport$ = new BehaviorSubject<IMergeReport | null>(null);
  dashSnapshots$ = new BehaviorSubject<DashboardStateModel | null>(null);
  dashTrends$ = new BehaviorSubject<IGetTrendingData | null>(null);
  dashScores$ = new BehaviorSubject<IProductTrendingData[] | null>(null);
  dashScore$ = new BehaviorSubject<number | null>(null);
  dashScoreSuppressed$ = new BehaviorSubject(false);
  // subscriptions to dash
  dashScoresSub$: Subscription | undefined;

  welcome: string = '';
  name: string | undefined;
  updatedOn: string | undefined;

  constructor(
    private api: APIService,
    private auth: AuthService,
    private http: HttpClient,
    private store: Store,
    private statesvc: StateService,
    private reportService: CreditreportService,
    private transunion: TransunionService,
  ) {
    this.tuReport$ = this.reportService.tuReport$;
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state$.next(state.appData);
      this.state = state.appData;
    });

    this.dashScoresSub$ = this.dashScores$.subscribe((scores) => {
      const score = this.getCurrentScore(scores);
      this.dashScore$.next(score || 4);
    });
  }

  ngOnDestroy() {
    this.stateSub$?.unsubscribe();
    this.dashScoresSub$?.unsubscribe();
  }

  getCurrentScore(scores: IProductTrendingData[] | null): number | null {
    if (scores && scores.length) {
      const sorted = scores.sort((a, b) => {
        const keepOrder = 1;
        const switchOrder = -1;
        return dayjs(a.AttributeDate).isBefore(b.AttributeDate) ? keepOrder : switchOrder;
      })[0];
      return isNaN(+sorted.AttributeValue) ? null : +sorted.AttributeValue;
    } else {
      return this.tuReport$ ? this.parseRiskScoreFromReport(this.tuReport$.getValue()) : null;
    }
  }

  getWelcomeMessage(): string {
    return this.name ? `Welcome back, ${this.name}` : '';
  }

  getLastUpdated(): string | undefined {
    return this.updatedOn;
  }
  setLastUpdated(): void {
    const fullfilled = _.find(this.state, 'fulfilledOn') as string;
    if (fullfilled) {
      this.updatedOn = new Date(fullfilled).toLocaleDateString();
    }
  }

  setUserName(): void {
    this.name = this.state?.user?.userAttributes?.name?.first;
  }

  parseRiskScoreFromReport(report: IMergeReport): number {
    return new ParseRiskScorePipe().transform(report);
  }
  /**
   * Refresh the users report if stale
   */
  async refreshReport(): Promise<void> {
    const fulfilledOn = this.statesvc.state?.appData.agencies?.transunion?.fulfilledOn;
    if (!fulfilledOn) {
      await this.transunion.getCreditReport();
      return;
    }
    const now = new Date();
    const last = new Date(fulfilledOn);
    const refresh = dateDiffInDays(last, now) > 0 ? true : false;
    if (refresh) {
      await this.transunion.getCreditReport();
    }
    return;
  }

  isCreditFreezeEnabled(): Observable<boolean> {
    return this.tuReport$.pipe(
      switchMap((report) => {
        const creditreport = report?.TrueLinkCreditReportType;
        const isFreezeEnabled = creditreport?.SB168Frozen && creditreport?.SB168Frozen?.transunion;
        return of(isFreezeEnabled ? true : false);
      }),
    );
  }

  syncDashboardStateToDB(payload: Partial<DashboardStateModel>): void {
    this.store.dispatch(new DashboardActions.Edit(payload)).subscribe((state: { appData: AppDataStateModel }) => {
      const input = { ...state.appData } as UpdateAppDataInput;
      if (!input.id) {
        console.log('failed to update state');
        return;
      } else {
        this.api.UpdateAppData(input);
      }
    });
  }

  async getAdData(): Promise<IAdData[]> {
    const token = await this.auth.getIdTokenJwtTokens();
    const headers = new HttpHeaders({
      Authorization: `${token}`,
    });

    return this.http.get<IAdData[]>(environment.ads + '/ads', { headers }).toPromise();
  }
}
