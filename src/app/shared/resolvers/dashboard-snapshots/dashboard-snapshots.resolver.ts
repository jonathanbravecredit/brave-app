import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { AgenciesInput } from '@shared/services/aws/api.service';
import { StateService } from '@shared/services/state/state.service';
import { BraveUtil } from '@shared/utils/brave/brave';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { Observable, of } from 'rxjs';
import { DashboardSelectors } from '@store/dashboard/dashboard.selectors';
import { AgenciesSelectors } from '@store/agencies/agencies.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardSnapshotsResolver implements Resolve<DashboardStateModel | null> {
  constructor(private store: Store) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<DashboardStateModel | null> {
    const transunion = await this.store.selectOnce(AgenciesSelectors.getTransunion).toPromise();
    const report = BraveUtil.parsers.parseTransunionMergeReport(transunion);
    if (!Object.keys(transunion).length || !Object.keys(report).length) {
      return new Promise((resolve) => resolve(null));
    } else {
      this.transform(report);
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
    tradelines.forEach((trade) => {
      const isNegative = tu.queries.report.isNegativeAccount(trade);
      const isForbearance = tu.queries.report.isForbearanceAccount(trade);
      if (isNegative) this.store.dispatch(new DashboardActions.IncrementNegativeCardCount());
      if (isForbearance) this.store.dispatch(new DashboardActions.IncrementForbearanceCardCount());
    });
  }

  private flagDatabreaches(report: IMergeReport): void {
    tu.queries.report.listDataBreaches(report).forEach((b) => {
      this.store.dispatch(new DashboardActions.IncrementDatabreachCardCount());
    });
  }
}
