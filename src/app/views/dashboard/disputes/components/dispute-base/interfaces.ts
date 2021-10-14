import { IDisputeReason } from '@views/dashboard/disputes/components/cards/reason-card/interfaces';

export interface IDisputeProcessResult {
  isFinished: boolean;
  data: {
    hasCustomInput: boolean;
    customInput: string;
    reasonsId: [string?, string?];
    reasons?: [IDisputeReason?, IDisputeReason?];
  };
}
