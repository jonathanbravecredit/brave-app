import { IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { IPaymentHistory } from '@shared/interfaces/credit-bureau.interface';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';

export interface ITradelineCreditBureauConfig {
  tradeline: ITradeLinePartition;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: string;
  summaryReason?: string;
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
// takes the public items details table config interface and layers on the summary data
//   necessary for the investigation results view
//   - adds courtNameArray over string courtName for better formating. TBD when implemented

export interface IPublicRecordCreditBureauConfig extends IPublicItemsDetailsConfig {
  publicPartition: IPublicPartition;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: string;
  summaryReason?: string;
  itemKey?: string;
  courtNameArray: [string, string, string];
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
