import { Selector } from '@ngxs/store';
import { CreditReportStateModel } from '@store/credit-report/credit-report.model';
import { CreditReportState } from '@store/credit-report/credit-report.state';

export class CreditReportSelectors {
  @Selector([CreditReportState])
  static getCreditReport(state: CreditReportStateModel): CreditReportStateModel {
    return state;
  }
}
