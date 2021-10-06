import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { BraveUtil } from '@shared/utils/brave/brave';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { DashboardSelectors } from '@store/dashboard/dashboard.selectors';
import { AgenciesSelectors } from '@store/agencies/agencies.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardSnapshotsResolver implements Resolve<DashboardStateModel | null> {
  constructor(private store: Store) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<DashboardStateModel | null> {
    const transunion = await this.store.selectOnce(AgenciesSelectors.getTransunion).toPromise();
    const dashboard = await this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    const report = BraveUtil.parsers.parseTransunionMergeReport(transunion);
    if (!Object.keys(transunion).length || !Object.keys(report).length) {
      return new Promise((resolve) => resolve(null));
    } else if (dashboard.isLoaded) {
      return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    } else {
      this.transform(report, dashboard);
      this.store.dispatch(new DashboardActions.Edit({ isLoaded: true }));
      return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    }
  }

  private transform(report: IMergeReport | undefined, dashboard: DashboardStateModel): void {
    if (report === undefined) return;
    let tradelines = report?.TrueLinkCreditReportType?.TradeLinePartition;
    tradelines = tradelines instanceof Array ? tradelines : ([tradelines] as ITradeLinePartition[]);
    this.flagNegativeForbearanceTradelines(tradelines);
    this.flagDatabreaches(report);
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
    if (tu.queries.report.listDataBreaches(report).length > 0)
      this.store.dispatch(new DashboardActions.FlagDatabreachSnapshot());
  }
}
