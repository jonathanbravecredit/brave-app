export interface IDispute {
  id: string;
  appDataId: string;
  disputeId: string;
  disputeStatus: string;
  disputeLetterCode: string;
  disputeLetterContent: string;
  openDisputes: IDisputeSummary;
  closedDisputes: IDisputeSummary;
  pvDisputedItems: IPVDisputedItems;
  agencyName: string;
  openedOn: string;
  closedOn: string;
  disputeItems: string;
  disputeInvestigationResults: { id: string };
  disputeCreditBureau: { id: string };
  notificationStatus: string;
  notificationMessage: string;
  notificationSentOn: string;
}

export interface IDisputeSummary {
  estimatedCompletionDate: string;
  lastUpdatedDate: string;
  openDate: string;
  requestedDate: string;
  totalClosedDisputedItems: string;
  totalDisputedItems: string;
  totalOpenDisputedItems: string;
  totalPVDisputedItemCount: string;
}

export interface IPVDisputedItems {
  pvTradelines: string;
  pvPublicRecords: string;
}
