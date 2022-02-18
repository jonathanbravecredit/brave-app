import { IMergeReport } from '@shared/interfaces';

type typename = 'CreditReport';
export class CreditReportStateModel {
  report!: IMergeReport | null;
  updatedOn!: string;
}
