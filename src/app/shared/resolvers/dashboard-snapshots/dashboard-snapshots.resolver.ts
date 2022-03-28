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
import { Nested as _nest } from '@shared/utils/nested/Nested';
import { CreditReportStateModel } from '@store/credit-report';

@Injectable({
  providedIn: 'root',
})
export class DashboardSnapshotsResolver implements Resolve<DashboardStateModel | null> {
  public creditReport: CreditReportStateModel | undefined;
  public dashboard: DashboardStateModel | undefined;
  constructor(private store: Store, private statesvc: StateService) {}

  async resolve(): Promise<DashboardStateModel | null> {
    this.creditReport = await this.store.selectOnce(CreditReportSelectors.getCreditReport).toPromise();
    this.dashboard = await this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    const { report } = this.creditReport;
    const { isLoaded, isFresh } = this.dashboard;
    if (!report) return Promise.resolve(null);
    const results = isLoaded && isFresh ? Promise.resolve(this.dashboard) : this.processDataAndSync(report);
    return results;
  }

  async processDataAndSync(report: IMergeReport): Promise<DashboardStateModel> {
    this.store.dispatch(new DashboardActions.ResetNegativeCardCount());
    this.store.dispatch(new DashboardActions.ResetDatabreachCards());
    const trades = _nest.find<ITradeLinePartition[]>(report, 'TradeLinePartition') || [];
    this.flagTradelines(trades);
    this.flagDatabreaches(report);
    await new Promise((resolve) => {
      this.store
        .dispatch(new DashboardActions.Edit({ isLoaded: true, isFresh: true }))
        .subscribe((data: { appData: AppDataStateModel }) => {
          this.statesvc.updateStateDBSync(data.appData);
          resolve(null);
        });
    });
    return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
  }

  /**
   * Looks up all the databreach cards that are relevent to the individual
   * @param report
   */
  flagDatabreaches(report: IMergeReport): void {
    const breaches = tu.queries.report.listDataBreaches(report);
    if (breaches.length > 0) {
      this.store.dispatch(new DashboardActions.AddDatabreachCards(breaches));
    }
  }

  /**
   * Filters the tradeline by the negative status code and forbearance accounts
   * @param {ITradeLinePartition[]} tradelines
   * @returns
   */
  flagTradelines(tradelines: ITradeLinePartition[]): void {
    const flags = { negative: false, forbearance: false };
    tradelines.forEach((trade) => {
      flags.negative = this.handleNegative(trade) || false;
      flags.forbearance = this.handleForbearance(trade) || false;
    });
    if (flags.negative) this.store.dispatch(new DashboardActions.FlagNegativeSnapshot());
    if (flags.forbearance) this.store.dispatch(new DashboardActions.FlagForbearanceSnapshot());
  }

  /**
   * Check if the tradeline is classified as negative
   * @param trade
   * @returns
   */
  handleNegative(trade: ITradeLinePartition) {
    const isNegative = tu.queries.report.isNegativeAccount(trade);
    if (isNegative) this.store.dispatch(DashboardActions.IncrementNegativeCardCount);
    return isNegative;
  }

  /**
   * Check if the tradeline qualifies for forbearance
   * @param trade
   * @returns
   */
  handleForbearance(trade: ITradeLinePartition) {
    const isForbearance = tu.queries.report.isForbearanceAccount(trade);
    return isForbearance;
  }
}
