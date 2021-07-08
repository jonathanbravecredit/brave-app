import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

export interface IDisputeNegativeCardItem extends INegativeAccountCardInputs {}
export interface IDisputeItem {
  tradeline: ITradeLinePartition;
  creditorName?: string;
  lastReported?: string;
  accountTypeDescription?: string;
  accountTypeDescriptionValue?: string;
  originalCreditor?: string;
  originalCreditorValue?: string;
  disputeFlag?: string;
  disputeFlagValue?: string;
  accountDetail: {
    accountNumber?: string;
    typeOfCollection?: string;
    amountPastDue?: number | string;
    dateOpened?: string;
    dateLastPayment?: string;
    remarks?: string;
  };
}
