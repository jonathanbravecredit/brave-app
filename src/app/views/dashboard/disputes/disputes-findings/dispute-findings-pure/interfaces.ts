import { ITradeLinePartition, IPublicPartition, ISubscriber } from '@shared/interfaces/merge-report.interface';
import { TInvestigationResultCode } from '@views/dashboard/disputes/components/findings/dispute-findings-results-details/interfaces';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

export interface ICreditBureauConfig {
  summaryItemKey?: string;
  summaryItemType?: number | string;
  summaryResult?: string;
  summaryResultCode?: TInvestigationResultCode;
  summaryReason?: string;
  itemKey?: string;
}
export interface ITradelineCreditBureauConfig extends ICreditBureauConfig {
  tradeline: ITradeLinePartition;
  subscriber: ISubscriber;
  accountType?: string;
  contactDetails?: [string, string, string];
}

export interface IPublicRecordCreditBureauConfig extends IPublicItemsDetailsConfig, ICreditBureauConfig {
  publicPartition: IPublicPartition;
  courtNameArray: [string, string, string];
  amount: string;
}

export interface IPersonalInfoCreditBureauConfig extends IPersonalItemsDetailsTable, ICreditBureauConfig {}
