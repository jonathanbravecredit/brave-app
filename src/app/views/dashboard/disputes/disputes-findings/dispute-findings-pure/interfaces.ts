import {
  ITradeLinePartition,
  IPublicPartition,
  ISubscriber,
  IBorrower,
} from '@shared/interfaces/merge-report.interface';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

export interface ICreditBureauConfig {
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: string;
  summaryReason?: string;
  itemKey?: string;
}
export interface ITradelineCreditBureauConfig extends ICreditBureauConfig {
  tradeline: ITradeLinePartition;
  subscriber: ISubscriber;
  accountType?: string;
  contactDetails?: [string, string, string];
}
// takes the public items details table config interface and layers on the summary data
//   necessary for the investigation results view
//   - adds courtNameArray over string courtName for better formating. TBD when implemented

export interface IPublicRecordCreditBureauConfig extends IPublicItemsDetailsConfig, ICreditBureauConfig {
  publicPartition: IPublicPartition;
  courtNameArray: [string, string, string];
  amount: string;
}

export interface IPersonalInfoCreditBureauConfig extends IPersonalItemsDetailsTable, ICreditBureauConfig {}
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
