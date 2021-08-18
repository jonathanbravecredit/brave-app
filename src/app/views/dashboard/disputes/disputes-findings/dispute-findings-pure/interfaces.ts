import { ITradeLinePartition, IPublicPartition, ISubscriber } from '@shared/interfaces/merge-report.interface';
import { IPaymentHistory } from '@shared/interfaces/credit-bureau.interface';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';

export interface ITradelineCreditBureauConfig {
  tradeline: ITradeLinePartition;
  subscriber: ISubscriber;
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: string;
  summaryReason?: string;
  itemKey?: string;
  accountType?: string;
  contactDetails?: [string, string, string];
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
