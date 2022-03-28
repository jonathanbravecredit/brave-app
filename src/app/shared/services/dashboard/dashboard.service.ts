import * as DashboardActions from '@store/dashboard/dashboard.actions';
import * as _ from 'lodash';
const dayjs = require('dayjs');
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
import { filter, switchMap } from 'rxjs/operators';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { IAdData } from '@shared/interfaces/ads.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { AuthService } from '@shared/services/auth/auth.service';
import { IGetTrendingData, IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';
import { Initiative } from '@shared/interfaces/progress-tracker.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';

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
  tuReport: IMergeReport | undefined;
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject({} as IMergeReport);
  tuReportSub$: Subscription | undefined;
  // data to pass to child components
  dashReferral$ = new BehaviorSubject<IReferral | null>(null);
  dashReport$ = new BehaviorSubject<IMergeReport | null>(null);
  dashSnapshots$ = new BehaviorSubject<DashboardStateModel | null>(null);
  dashTrends$ = new BehaviorSubject<IGetTrendingData | null>(null);
  dashScores$ = new BehaviorSubject<IProductTrendingData[] | null>(null);
  dashScore$ = new BehaviorSubject<number | null>(null);
  dashDelta$ = new BehaviorSubject<number | null>(null);
  dashScoreSuppressed$ = new BehaviorSubject(false);
  // subscriptions to dash
  dashScoresSub$: Subscription | undefined;
  progressTrackerData$ = new BehaviorSubject<Initiative | null>(null);

  updatedOn: string | undefined;
  updatedOn$ = new BehaviorSubject<string | null>(null);
  updatedOnSub$: Subscription | undefined;

  welcome: string = '';
  name: string | undefined;

  constructor(
    private api: APIService,
    private auth: AuthService,
    private http: HttpClient,
    private store: Store,
    private statesvc: StateService,
    private reportService: CreditreportService,
    private transunion: TransunionService,
  ) {
    this.subscribeToObservables();
  }

  ngOnDestroy() {
    this.stateSub$?.unsubscribe();
    this.dashScoresSub$?.unsubscribe();
    this.tuReportSub$?.unsubscribe();
    this.updatedOnSub$?.unsubscribe();
  }

  subscribeToObservables(): void {
    this.tuReportSub$ = this.reportService.tuReport$
      .pipe(filter((report) => report !== undefined))
      .subscribe((report) => {
        this.tuReport$.next(report);
        this.tuReport = report;
      });

    this.updatedOnSub$ = this.reportService.creditReport$
      .pipe(filter((report) => report !== undefined))
      .subscribe((val) => {
        this.setLastUpdated(val.modifiedOn);
      });

    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state$.next(state.appData);
      this.state = state.appData;
    });

    this.dashScoresSub$ = this.dashScores$.subscribe((scores) => {
      const score = this.getCurrentScore(scores);
      const delta = this.calculateDelta(scores);
      this.dashScore$.next(score || 4);
      this.dashDelta$.next(delta || 0);
    });
  }

  calculateDelta(scores: IProductTrendingData[] | null): number {
    if (scores && scores.length > 1) {
      let latestScore = +scores[scores.length - 1].AttributeValue;
      let lastMonthsScore = +scores[scores.length - 2].AttributeValue;
      return isNaN(latestScore) || isNaN(lastMonthsScore) ? 0 : latestScore - lastMonthsScore;
    } else {
      return 0;
    }
  }

  getCurrentScore(scores: IProductTrendingData[] | null): number | null {
    if (scores && scores.length) {
      const sorted = scores.sort((a, b) => {
        const swap = 1;
        const keep = -1;
        return dayjs(a.AttributeDate).isBefore(b.AttributeDate) ? swap : keep;
      })[0];
      return isNaN(+sorted.AttributeValue)
        ? this.tuReport
          ? this.parseRiskScoreFromReport(this.tuReport)
          : null
        : +sorted.AttributeValue;
    } else {
      return this.tuReport ? this.parseRiskScoreFromReport(this.tuReport) : null;
    }
  }

  getWelcomeMessage(): string {
    return this.name ? `Welcome back, ${this.name}` : '';
  }

  getLastUpdated(): string | undefined {
    return this.updatedOn;
  }

  setLastUpdated(val: string | null): void {
    this.updatedOn = val ? new Date(val).toLocaleDateString() : new Date().toLocaleDateString();
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
      filter((report) => report !== undefined),
      switchMap((report) => {
        const isFrozen = report?.TrueLinkCreditReportType?.SB168Frozen?.transunion;
        return of(isFrozen ? true : false);
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
    return this.http.get<IAdData[]>(`${environment.api}/ads`, { headers }).toPromise();
  }
}
