export const enum CreditReportGroups {
  CreditCards = 'creditCards',
  CollectionsAccounts = 'collectionsAccounts',
  InstallmentLoans = 'installmentLoans',
  Mortgages = 'mortgages',
}

export const CREDIT_REPORT_GROUPS: Record<string, any> = {
  c: { order: 1, group: CreditReportGroups.CreditCards, title: 'Credit Cards' },
  r: { order: 1, group: CreditReportGroups.CreditCards, title: 'Credit Cards' },
  y: {
    order: 2,
    group: CreditReportGroups.CollectionsAccounts,
    title: 'Collections Accounts',
  },
  i: {
    order: 3,
    group: CreditReportGroups.InstallmentLoans,
    title: 'Student, Car & Personal Loans',
  },
  m: { order: 4, group: CreditReportGroups.Mortgages, title: 'Mortgages' },
};
