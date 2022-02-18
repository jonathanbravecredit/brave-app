import * as dayjs from 'dayjs';
import * as CreditReportActions from '@store/credit-report/credit-report.actions';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { CreditReportSelectors, CreditReportStateModel } from '@store/credit-report';
import { Creditreportv2Service } from '@shared/services/creditreportv2/creditreportv2.service';

@Injectable({
  providedIn: 'root',
})
export class CreditReportResolver implements Resolve<IMergeReport | null> {
  constructor(private store: Store, private creditReportV2: Creditreportv2Service) {}

  async resolve(): Promise<IMergeReport | null> {
    const state = await this.store.selectOnce(CreditReportSelectors.getCreditReport).toPromise();
    const fresh = await this.isFresh(state);
    if (!fresh) {
      try {
        const report = await this.creditReportV2.getCurrentCreditReport();
        this.setCreditReport(report);
        return report;
      } catch {
        return null;
      }
    }
    return state.report;
  }

  async setCreditReport(report: IMergeReport | null = null): Promise<void> {
    const payload = { report, updatedOn: new Date().toISOString() };
    await this.store.dispatch(new CreditReportActions.Add(payload)).toPromise();
  }

  async isFresh(state: CreditReportStateModel): Promise<boolean> {
    const { updatedOn, report } = state;
    if (updatedOn === null || report === null) return false;
    const now = new Date().toISOString();
    return dayjs(now).diff(updatedOn, 'hour') < 24 ? true : false;
  }
}
