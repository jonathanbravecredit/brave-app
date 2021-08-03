import { Injectable, OnDestroy } from '@angular/core';
import { IMergeReport } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { StateService } from '@shared/services/state/state.service';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { dateDiffInDays } from '@shared/utils/dates';
import { AppDataStateModel } from '@store/app-data';
import { BehaviorSubject, Subscription } from 'rxjs';

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
   * Enroll the user in report and score if not already
   * @returns
   */
  async enrollInReportAndScore(): Promise<boolean> {
    const appData = this.statesvc.state?.appData;
    const id = this.statesvc.state?.appData?.id;
    const enrolled = this.statesvc.state?.appData?.agencies?.transunion?.enrolled;
    if (!appData || !id || enrolled) return false; // no id or already enrolled;
    const { success, error, data } = await this.transunion.sendEnrollRequest(appData);
    return success;
  }

  isCreditFreezeEnabled(): boolean {
    const creditreport = this.tuReport$.value.TrueLinkCreditReportType;
    const isFreezeEnabled = creditreport.SB168Frozen && creditreport.SB168Frozen?.transunion;
    return isFreezeEnabled ? true : false;
  }
  /**
   * Refresh the users report if stale
   */
  async refreshReport(): Promise<void> {
    const id = this.statesvc.state?.appData?.id;
    if (!id) return;
    const fulfilledOn = this.statesvc.state?.appData.agencies?.transunion?.fulfilledOn;
    if (!fulfilledOn) {
      await this.transunion.refreshCreditReport(id);
      return;
    }
    const now = new Date();
    const last = new Date(fulfilledOn);
    const refresh = dateDiffInDays(last, now) > 0 ? true : false;
    if (refresh) {
      await this.transunion.refreshCreditReport(id);
    }
    return;
  }
}
