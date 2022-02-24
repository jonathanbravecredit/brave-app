import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { DashboardSelectors } from '@store/dashboard/dashboard.selectors';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';
import { CreditReportSelectors } from '@store/credit-report/credit-report.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardSnapshotsResolver implements Resolve<DashboardStateModel | null> {
  constructor(private store: Store, private statesvc: StateService) {}

  async resolve(): Promise<DashboardStateModel | null> {
    const { report } = await this.store.selectOnce(CreditReportSelectors.getCreditReport).toPromise();
    const dashboard = await this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    if (dashboard?.isLoaded && dashboard?.databreachCards && dashboard?.databreachCards?.length > 0) {
      return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    } else if (dashboard?.isLoaded && report) {
      return this.flagAndDispatch(report);
    } else if (!report) {
      return new Promise((resolve) => resolve(null));
    } else {
      return this.transformAndDispatch(report);
    }
  }

  private flagAndDispatch(report: IMergeReport): Promise<DashboardStateModel> {
    this.flagDatabreaches(report);
    return this.dispatch();
  }

  private transformAndDispatch(report: IMergeReport): Promise<DashboardStateModel> {
    this.transform(report);
    return this.dispatch();
  }

  private transform(report: IMergeReport): void {
    const {
      TrueLinkCreditReportType: { TradeLinePartition: trades },
    } = report;
    this.flagNegativeForbearanceTradelines(trades);
    this.flagDatabreaches(report);
  }

  private dispatch(): Promise<DashboardStateModel> {
    this.store
      .dispatch(new DashboardActions.Edit({ isLoaded: true }))
      .subscribe((data: { appData: AppDataStateModel }) => {
        this.statesvc.updateStateDBSync(data.appData);
      });
    return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
  }

  /**
   * Filters the tradeline by the negative status code and forbearance accounts
   * @param {ITradeLinePartition[]} tradelines
   * @returns
   */
  private flagNegativeForbearanceTradelines(tradelines: ITradeLinePartition[]): void {
    const flags = { negative: false, forbearance: false };
    tradelines.forEach((trade) => {
      const isNegative = tu.queries.report.isNegativeAccount(trade);
      const isForbearance = tu.queries.report.isForbearanceAccount(trade);
      if (isNegative) {
        flags.negative = true;
        this.store.dispatch(DashboardActions.IncrementNegativeCardCount);
      }
      if (isForbearance) flags.forbearance = true;
    });
    if (flags.negative) this.store.dispatch(new DashboardActions.FlagNegativeSnapshot());
    if (flags.forbearance) this.store.dispatch(new DashboardActions.FlagForbearanceSnapshot());
  }

  private flagDatabreaches(report: IMergeReport): void {
    const breaches = tu.queries.report.listDataBreaches(report);
    if (breaches.length > 0) {
      this.store.dispatch(new DashboardActions.AddDatabreachCards(breaches));
    }
  }
}
