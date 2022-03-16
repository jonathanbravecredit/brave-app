const dayjs = require('dayjs');
import * as CreditReportActions from '@store/credit-report/credit-report.actions';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { CreditReportSelectors, CreditReportStateModel } from '@store/credit-report';
import { Creditreportv2Service } from '@shared/services/creditreportv2/creditreportv2.service';
import { ICreditReport } from '@shared/models/CreditReports.model';

@Injectable({
  providedIn: 'root',
})
export class CreditReportResolver implements Resolve<IMergeReport | null> {
  constructor(private store: Store, private creditReportV2: Creditreportv2Service) {}

  async resolve(): Promise<IMergeReport | null> {
    const state = await this.store.selectOnce(CreditReportSelectors.getCreditReport).toPromise();
    const fresh = await this.isFresh(state);
    if (fresh) {
      return state.report;
    } else {
      try {
        const report = await this.creditReportV2.getCurrentCreditReport();
        this.setCreditReport(report);
        const { report: mergeReport } = report;
        return mergeReport;
      } catch {
        return null;
      }
    }
  }

  async setCreditReport(creditReport: ICreditReport): Promise<void> {
    const { report, modifiedOn } = creditReport;
    const payload = { report, updatedOn: new Date().toISOString(), modifiedOn };
    await new Promise((resolve, reject) => {
      this.store
        .dispatch(new CreditReportActions.Add(payload))
        .toPromise()
        .then((res) => {
          resolve(res); //the report
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async isFresh(state: CreditReportStateModel): Promise<boolean> {
    const { updatedOn, report } = state;
    if (updatedOn === null || report === null) return false;
    const now = new Date().toISOString();
    return dayjs(now).diff(updatedOn, 'hour') < 24 ? true : false;
  }
}
