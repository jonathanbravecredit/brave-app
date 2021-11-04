import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';
import { MergereportToCreditreportPipe } from '@shared/pipes/mergereport-to-creditreport/mergereport-to-creditreport.pipe';
import { TradelineToDetailsPipe } from '@shared/pipes/tradeline-to-details/tradeline-to-details.pipe';
import { TradelineToPagesPipe } from './tradeline-to-pages/tradeline-to-pages.pipe';
import { DisputesToDisputesOverviewPipe } from './disputes-to-disputes-overview/disputes-to-disputes-overview.pipe';
import { DisputesToDisputesHistoricalPipe } from '@shared/pipes/disputes-to-disputes-historical/disputes-to-disputes-historical.pipe';
import { DisputeToDisputeFindingPipe } from './dispute-to-dispute-finding/dispute-to-dispute-finding.pipe';
import { MergereportToDashboardPipe } from '@shared/pipes/mergereport-to-dashboard/mergereport-to-dashboard.pipe';
import { PublicitemToDisputePipe } from './publicitem-to-dispute/publicitem-to-dispute.pipe';
import { MergereportToPublicitemsPipe } from './mergereport-to-publicitems/mergereport-to-publicitems.pipe';
import { MergereportToPersonalitemsPipe } from './mergereport-to-personalitems/mergereport-to-personalitems.pipe';
import { PublicitemToDetailsPipe } from './publicitem-to-details/publicitem-to-details.pipe';
import { PersonalitemsToDetailsPipe } from './personalitem-to-details/personalitems-to-details.pipe';
import { MergereportToTradelinesPipe } from './mergereport-to-tradelines/mergereport-to-tradelines.pipe';
import { MergereportToConsumerStatementsPipe } from './mergereport-to-consumer-statements/mergereport-to-consumer-statements.pipe';
import { AccountNumberMaskPipe } from './account-number-mask/account-number-mask.pipe';
import { SsnMaskPipe } from './ssn-mask/ssn-mask.pipe';
import { DisputesToDisputePipe } from './disputes-to-dispute/disputes-to-dispute.pipe';
import { CreditbureauToTradelinedetailsPipe } from './creditbureau-to-tradelinedetails/creditbureau-to-tradelinedetails.pipe';
import { CreditbureauToPublicitemdetailsPipe } from './creditbureau-to-publicitemdetails/creditbureau-to-publicitemdetails.pipe';
import { InvestigationresultsToPersonalitemdetailsPipe } from './investigationresults-to-personalitemdetails/investigationresults-to-personalitemdetails.pipe';
import { TradelineToAccountgroupPipe } from './tradeline-to-accountgroup/tradeline-to-accountgroup.pipe';
import { TradelineToForbearancePipe } from './tradeline-to-forbearance/tradeline-to-forbearance.pipe';
import { MergereportToSubscribersPipe } from './mergereport-to-subscribers/mergereport-to-subscribers.pipe';
import { MergereportToBreachitemsPipe } from './mergereport-to-breachitems/mergereport-to-breachitems.pipe';
import { LinkifyPipe } from './linkify/linkify.pipe';
import { FilterTradelinesPipe } from './filterTradelines/filter-tradelines.pipe';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';
import { ReasonsToPagesPipe } from './reasons-to-pages/reasons-to-pages.pipe';
import { FilterSubscribersPipe } from './filterSubscribers/filter-subscribers.pipe';
import { CreditbureauToPersonalitemdetailsPipe } from './creditbureau-to-personalitemdetails/creditbureau-to-personalitemdetails.pipe';
import { DecodePipe } from './decode/decode.pipe';
import { FilterPersonalPipe } from './filterPersonal/filter-personal.pipe';

const pipes = [
  TradelineToDetailsPipe,
  TradelineToPagesPipe,
  MergereportToNegativeTradelinesPipe,
  MergereportToCreditreportPipe,
  DisputesToDisputePipe,
  DisputesToDisputesOverviewPipe,
  DisputesToDisputesHistoricalPipe,
  DisputeToDisputeFindingPipe,
  MergereportToDashboardPipe,
  PublicitemToDisputePipe,
  PublicitemToDetailsPipe,
  PersonalitemsToDetailsPipe,
  MergereportToPublicitemsPipe,
  MergereportToPersonalitemsPipe,
  MergereportToTradelinesPipe,
  MergereportToSubscribersPipe,
  MergereportToConsumerStatementsPipe,
  MergereportToBreachitemsPipe,
  CreditbureauToTradelinedetailsPipe,
  CreditbureauToPublicitemdetailsPipe,
  CreditbureauToPersonalitemdetailsPipe,
  InvestigationresultsToPersonalitemdetailsPipe,
  TradelineToAccountgroupPipe,
  TradelineToForbearancePipe,
  AccountNumberMaskPipe,
  SsnMaskPipe,
  LinkifyPipe,
  DecodePipe,
  FilterTradelinesPipe,
  FilterSubscribersPipe,
  FilterPersonalPipe,
  ParseRiskScorePipe,
  ReasonsToPagesPipe,
];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedPipesModule {}
