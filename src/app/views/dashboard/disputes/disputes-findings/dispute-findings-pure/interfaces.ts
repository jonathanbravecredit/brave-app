import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { IPaymentHistory } from '@shared/interfaces/credit-bureau.interface';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';

export interface ITradelineCreditBureauConfig {
  tradeline: ITradeLinePartition;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: string;
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
  publicPartition: IPublicPartition;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: string;
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

export interface IPersonalInfoCreditBureauConfig extends IPersonalItemsDetailsTable {}
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
