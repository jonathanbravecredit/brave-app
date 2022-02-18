import { IProgressStep } from '@shared/components/progressbars/filled-checktext-progressbar/filled-checktext-progressbar.component';
import { IMergeReport, ITrueLinkCreditReportType } from '@shared/interfaces';
import { Dayjs } from 'dayjs';

export interface CreditReportStep extends IProgressStep {}
type typename = 'CreditReport';
export class CreditReportStateModel {
  report: IMergeReport | undefined = {TrueLinkCreditReportType: {SafetyCheckPassed: 'TEST SUCCESS'}} as IMergeReport;
  updatedOn: Dayjs = new Dayjs();
}
