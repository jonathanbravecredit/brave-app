import { IMergeReport } from '@shared/interfaces';

export class CreditReportStateModel {
  report!: IMergeReport | null;
  updatedOn!: string | null;
}
