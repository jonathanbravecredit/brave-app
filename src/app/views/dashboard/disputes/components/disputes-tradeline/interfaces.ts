import { IDisputeReasonCard } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';

export interface IDisputeReasonCardPage {
  pageIndex: number;
  items: IDisputeReasonCardPageItem[];
}

export type IDisputeReasonCardPageItem = { reason: IDisputeReason } & Partial<IDisputeReasonCard>;

export interface IDisputeSelectedObj {
  pageIndex: number;
  itemIndex: number;
}

export interface IDisputeProcessResult {
  isFinished: boolean;
  data: {
    hasCustomInput: boolean;
    customInput: string;
    reasonsId: [string?, string?];
    reasons?: [IDisputeReason?, IDisputeReason?];
  };
}

export interface IDisputeReason {
  id: string;
  text: string;
  claimCode: string;
  userInputDescriptionText?: string | null;
}
