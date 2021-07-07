export interface IGetTransunionResponse {
  id: string;
  agencies?: {
    transunion?: {
      disputes?: {
        disputePreflightStatus?: string | null;
        disputeInflightStatus?: string | null;
        disputeEligibility?: string | null;
        disputeResults?: string | null;
        disputeHistory?: Array<string | null> | null;
        modifiedOn?: number | null;
        createdOn?: number | null;
        notificationStatus?: string | null;
        notificationMessage?: string | null;
        notificationSentOn?: number | null;
      };
    };
  };
}
