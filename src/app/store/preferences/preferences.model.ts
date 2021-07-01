import { CreditReportGroups } from '@shared/constants/credit-report';

export class PreferencesStateModel {
  showAllAccounts!: {
    [CreditReportGroups.CreditCards]: boolean | undefined;
    [CreditReportGroups.CollectionsAccounts]: boolean | undefined;
    [CreditReportGroups.InstallmentLoans]: boolean | undefined;
    [CreditReportGroups.Mortgages]: boolean | undefined;
  };
}
