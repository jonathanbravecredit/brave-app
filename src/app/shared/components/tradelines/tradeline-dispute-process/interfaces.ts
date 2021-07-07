import { IDisputeTradelineReasonCard } from '@shared/components/cards/reason-card/interfaces';

export interface IDisputeTradelineReasonCardPage {
  pageIndex: number;
  items: IDisputeTradelineReasonCardPageItem[];
}

export type IDisputeTradelineReasonCardPageItem = { reason: IDisputeReason } & Partial<IDisputeTradelineReasonCard>

export interface IDisputeTradelineSelectedObj {
  pageIndex: number;
  itemIndex: number;
}

export interface IDisputeTradelineProcessResult {
  isFinished: boolean;
  data: {
    hasCustomInput: boolean;
    customInput: string;
    reasonsId: string[];
  }
}

export interface IDisputeReason {
  id: string;
  text: string;
  userInputDescriptionText?: string | null;
}