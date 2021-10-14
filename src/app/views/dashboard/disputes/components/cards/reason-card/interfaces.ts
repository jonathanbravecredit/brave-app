export interface IDisputeReasonCard {
  reason: IDisputeReason;
  allowInput?: boolean;
  allowMore?: boolean;
  selected?: boolean;
  customInput?: string;
  index?: number;
}

export interface IDisputeReason {
  id: string;
  text: string;
  claimCode: string;
  userInputDescriptionText?: string | null;
}
