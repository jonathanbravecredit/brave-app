import { IUserCurrentDispute, IUserHistoryDispute } from "./interfaces";

export const MOCK_DEFAULT_USER_CURRENT_DISPUTE: IUserCurrentDispute[] = [
  {
    creditorName: 'Bank of States, N.A.',
    accountType: 'Collections Account',
    dateSubmitted: '05/15/2021',
    status: 'Processing'
  }
];

export const MOCK_DEFAULT_USER_HISTORY_DISPUTE: IUserHistoryDispute[] = [
  {
    creditorName: 'Bank of States, N.A.',
    latestDateSubmitted: '05/15/2021',
    decision: 'Does not meet FCRA standards'
  }
];
