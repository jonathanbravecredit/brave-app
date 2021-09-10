import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

export interface INegativeAccountCardInputs {
  tradeline: ITradeLinePartition;
  subscriber: ISubscriber;
  creditorName?: string;
  lastReported?: string;
  accountTypeDescription?: string;
  accountTypeDescriptionValue?: string;
  originalCreditor?: string;
  originalCreditorValue?: string;
  disputeFlag?: string;
  disputeFlagValue?: string;
  consumerStatement?: string;
  // accountDetail: INegativeAccountCardDetails;
}

export interface INegativeAccountCardDetails {
  accountNumber?: string;
  typeOfCollection?: string;
  amountPastDue?: number | string;
  dateOpened?: string;
  dateLastPayment?: string;
  remarks?: string;
  consumerStatement?: string;
}
