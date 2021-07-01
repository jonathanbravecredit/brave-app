import { IDisputeTradelineReasonCard } from '@shared/components/cards/reason-card/interfaces';

export interface IDisputeTradelineReasonCardPage {
  pageIndex: number;
  items: IDisputeTradelineReasonCard[];
}

export interface IDisputeTradelineSelectedObj {
  pageIndex: number;
  itemIndex: number;
}
