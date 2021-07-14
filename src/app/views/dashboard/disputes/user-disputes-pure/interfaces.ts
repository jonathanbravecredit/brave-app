export interface IUserCurrentDispute {
  creditorName: string;
  status: string;
  accountType: string;
  dateSubmitted: string;
}

export interface IUserHistoryDispute {
  latestDateSubmitted: string;
  creditorName: string;
  decision: string;
}
