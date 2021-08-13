import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { IPaymentHistory } from '@shared/interfaces/credit-bureau.interface';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

export interface ITradelineCreditBureauConfig {
  updatedTradeline: ITradeLinePartition;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  itemKey?: string;
  accountType?: string;
  dateOpened?: string;
  dateClosed?: string;
  creditLimit?: string | number;
  creditorStreet?: string;
  creditorLocation?: string;
  creditorNameArr?: [string, string];
  paymentHistory?: IPaymentHistory;
  term?: string;
  name?: [string, string, string];
}
export interface IPublicRecordCreditBureauConfig {
  updatedPublicRecord: IPublicPartition;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  itemKey?: string;
  courtType: string;
  docketNumber: string;
  responsibility: string;
  estimatedRemoval: string;
  dateUpdated: string;
  dateFiled: string;
  datePaid: string;
  type: string;
  name: [string, string, string];
  amount: string;
}

export interface IPersonalInfoCreditBureauConfig extends IPersonalItemsDetailsConfig {}
// ssn: string;
// name: string;
// currentAddress: string;
// previousAddress: string;
// previousAddressArray: string[];
// telephone: string;
// telephoneArray: string[];
// employer: string;
// employerArray: string[];
// previousEmployer: string;
