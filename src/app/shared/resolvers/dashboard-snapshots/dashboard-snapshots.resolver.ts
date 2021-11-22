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
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';

@Injectable({
  providedIn: 'root',
})
export class DashboardSnapshotsResolver implements Resolve<DashboardStateModel | null> {
  constructor(private store: Store, private statesvc: StateService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<DashboardStateModel | null> {
    const transunion = await this.store.selectOnce(AgenciesSelectors.getTransunion).toPromise();
    const dashboard = await this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    const report = BraveUtil.parsers.parseTransunionMergeReport(transunion);
    if (!Object.keys(transunion).length || !Object.keys(report).length) {
      return new Promise((resolve) => resolve(null));
    } else if (dashboard?.isLoaded && dashboard?.databreachCards && dashboard?.databreachCards?.length > 0) {
      // loaded and databreach cards already loaded
      // TODO...check if there are any new one
      return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    } else if (dashboard?.isLoaded) {
      // loaded but databreach cards not loaded...need to load them up
      this.flagDatabreaches(report);
      this.store
        .dispatch(new DashboardActions.Edit({ isLoaded: true }))
        .subscribe((data: { appData: AppDataStateModel }) => {
          this.statesvc.updateStateDBSync(data.appData);
        });
      return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    } else {
      this.transform(report);
      this.store
        .dispatch(new DashboardActions.Edit({ isLoaded: true }))
        .subscribe((data: { appData: AppDataStateModel }) => {
          this.statesvc.updateStateDBSync(data.appData);
        });
      return this.store.selectOnce(DashboardSelectors.getDashboard).toPromise();
    }
  }

  private transform(report: IMergeReport | undefined): void {
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
    const breaches = tu.queries.report.listDataBreaches(report);
    if (breaches.length > 0) {
      this.store.dispatch(new DashboardActions.AddDatabreachCards(breaches));
      // this.store.dispatch(new DashboardActions.FlagDatabreachSnapshot());
    }
  }
}
