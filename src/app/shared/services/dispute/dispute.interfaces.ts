import { INegativeAccountCardInputs } from '@views/dashboard/negative-account/components/negative-account-card/interfaces';
import { ICreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';

export interface IDisputeNegativeCardItem extends INegativeAccountCardInputs {}
export interface IDisputeTradelineItem extends ITradelineDetailsConfig {}
export interface IDisputePublicItem extends IPublicItemsDetailsConfig {}
export interface IDisputePersonalItem extends IPersonalItemsDetailsConfig {}
export interface IInvestigationPublicItem extends IDisputePublicItem {
  // publicPartition: null;
  creditBureau: ICreditBureau;
  estMonthToBeRemoved?: string;
  responsibility?: string;
  courtType?: string;
  amount?: string | number;
  type?: string;
}
