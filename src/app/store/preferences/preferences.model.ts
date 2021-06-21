import { CreditReportGroups } from '@shared/data/credit-report';

export class PreferencesStateModel {
  showAllAccounts!: {
    [CreditReportGroups.CreditCards]: boolean | undefined;
    [CreditReportGroups.CollectionsAccounts]: boolean | undefined;
    [CreditReportGroups.InstallmentLoans]: boolean | undefined;
    [CreditReportGroups.Mortgages]: boolean | undefined;
  };
}
