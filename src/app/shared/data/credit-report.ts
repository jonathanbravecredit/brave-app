export const enum CreditReportGroups {
  CreditCards = 'creditCards',
  CollectionsAccounts = 'collectionsAccounts',
  InstallmentLoans = 'installmentLoans',
  Mortgages = 'mortgages',
}

export const CREDIT_REPORT_GROUPS: Record<string, any> = {
  c: { order: 1, group: 'creditCards', title: 'Credit Cards' },
  r: { order: 1, group: 'creditCards', title: 'Credit Cards' },
  y: { order: 2, group: 'collectionsAccounts', title: 'Collections Accounts' },
  i: {
    order: 3,
    group: 'installmentLoans',
    title: 'Student, Car & Personal Loans',
  },
  m: { order: 4, group: 'mortgages', title: 'Mortgages' },
};
