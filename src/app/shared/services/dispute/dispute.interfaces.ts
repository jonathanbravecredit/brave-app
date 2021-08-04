import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';
import {
  IBorrower,
  IBorrowerAddress,
  IBorrowerName,
  IEmployer,
  IPublicPartition,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { PersonalDisputeTypes } from '@views/dashboard/disputes/disputes-reconfirm/types/dispute-reconfirm-filters';

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

export interface IDisputePublicItem extends IPublicItemsDetailsConfig {}
export interface IDisputePersonalItem extends IPersonalItemsDetailsConfig {
  // borrowerPartition?: IBorrower;
  // personalType: PersonalDisputeTypes;
  // namePartition?: IBorrowerName;
  // addressPartition?: IBorrowerAddress;
  // employerPartition?: IEmployer;
  // currentLabel: string;
  // currentValue: string;
  // dateUpdated: string;
}
