import { CreditReportMetrics } from '@bravecredit/brave-sdk';
import { IMergeReport } from '@shared/interfaces';

export interface ICreditReport {
  userId: string;
  version: number;
  currentVersion: number | undefined;
  bureau: string;
  report: IMergeReport;
  metrics: CreditReportMetrics;
  createdOn: string | null;
  modifiedOn: string | null;
}
