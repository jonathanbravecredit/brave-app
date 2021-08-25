import { Injectable, OnDestroy } from '@angular/core';
import { IMergeReport } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { dateDiffInDays } from '@shared/utils/dates';
import { AppDataStateModel } from '@store/app-data';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class DashboardService implements OnDestroy {
  state$: BehaviorSubject<AppDataStateModel> = new BehaviorSubject({} as AppDataStateModel);
  stateSub$: Subscription = new Subscription();
  state: AppDataStateModel | undefined;
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject({} as IMergeReport);

  constructor(
    private statesvc: StateService,
    private reportService: CreditreportService,
    private transunion: TransunionService,
  ) {
    this.tuReport$ = this.reportService.tuReport$;
    this.stateSub$ = this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.state$.next(state.appData);
      this.state = state.appData;
    });
  }

  ngOnDestroy() {
    if (this.stateSub$) this.stateSub$.unsubscribe();
  }

  /**
   * Refresh the users report if stale
   */
  async refreshReport(): Promise<void> {
    const fulfilledOn = this.statesvc.state?.appData.agencies?.transunion?.fulfilledOn;
    if (!fulfilledOn) {
      await this.transunion.refreshCreditReport();
      return;
    }
    const now = new Date();
    const last = new Date(fulfilledOn);
    const refresh = dateDiffInDays(last, now) > 0 ? true : false;
    if (refresh) {
      await this.transunion.refreshCreditReport();
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
}
