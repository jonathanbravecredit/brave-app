import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MergereportToNegativeTradelinesPipe } from "@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe";
import { MergereportToCreditreportPipe } from "@shared/pipes/mergereport-to-creditreport/mergereport-to-creditreport.pipe";
import { TradelineToDetailsPipe } from "@shared/pipes/tradeline-to-details/tradeline-to-details.pipe";
import { TradelineToPagesPipe } from "./tradeline-to-pages/tradeline-to-pages.pipe";
import { DisputesToDisputesOverviewPipe } from "./disputes-to-disputes-overview/disputes-to-disputes-overview.pipe";
import { DisputesToDisputesHistoricalPipe } from "@shared/pipes/disputes-to-disputes-historical/disputes-to-disputes-historical.pipe";
import { DisputeToDisputeFindingPipe } from "./dispute-to-dispute-finding/dispute-to-dispute-finding.pipe";
import { PublicitemToDisputePipe } from "./publicitem-to-dispute/publicitem-to-dispute.pipe";
import { MergereportToPublicitemsPipe } from "./mergereport-to-publicitems/mergereport-to-publicitems.pipe";
import { MergereportToPersonalitemsPipe } from "./mergereport-to-personalitems/mergereport-to-personalitems.pipe";
import { PublicitemToDetailsPipe } from "./publicitem-to-details/publicitem-to-details.pipe";
import { PersonalitemsToDetailsPipe } from "./personalitem-to-details/personalitems-to-details.pipe";
import { AccountNumberMaskPipe } from "./account-number-mask/account-number-mask.pipe";
import { SsnMaskPipe } from "./ssn-mask/ssn-mask.pipe";
import { DisputesToDisputePipe } from "./disputes-to-dispute/disputes-to-dispute.pipe";
import { CreditbureauToTradelinedetailsPipe } from "./creditbureau-to-tradelinedetails/creditbureau-to-tradelinedetails.pipe";
import { CreditbureauToPublicitemdetailsPipe } from "./creditbureau-to-publicitemdetails/creditbureau-to-publicitemdetails.pipe";
import { TradelineToForbearancePipe } from "./tradeline-to-forbearance/tradeline-to-forbearance.pipe";
import { MergereportToSubscribersPipe } from "./mergereport-to-subscribers/mergereport-to-subscribers.pipe";
import { LinkifyPipe } from "./linkify/linkify.pipe";
import { ParseRiskScorePipe } from "@shared/pipes/parse-risk-score/parse-risk-score.pipe";
import { CreditbureauToPersonalitemdetailsPipe } from "./creditbureau-to-personalitemdetails/creditbureau-to-personalitemdetails.pipe";
import { DecodePipe } from "./decode/decode.pipe";
import { FilterArrayPipe } from "./filterArray/filter-array.pipe";
import { FindingsTransformerPipe } from "./findingsTransformer/findings-transformer.pipe";
import { ConfigToUtilizationPipe } from "./config-to-utilization/config-to-utilization.pipe";
import { TradelineToFindingsPipe } from "./tradeline-to-findings/tradeline-to-findings.pipe";
import { AccountStatusToHexPipe } from "@shared/pipes/account-status-to-hex/account-status-to-hex.pipe";
import { TradelineToAccountgroupPipe } from "./tradeline-to-accountgroup/tradeline-to-accountgroup.pipe";
import { MergereportToTradelinesPipe } from "./mergereport-to-tradelines/mergereport-to-tradelines.pipe";

const pipes = [
  TradelineToDetailsPipe,
  TradelineToPagesPipe,
  MergereportToNegativeTradelinesPipe,
  MergereportToCreditreportPipe,
  DisputesToDisputePipe,
  DisputesToDisputesOverviewPipe,
  DisputesToDisputesHistoricalPipe,
  DisputeToDisputeFindingPipe,
  PublicitemToDisputePipe,
  PublicitemToDetailsPipe,
  PersonalitemsToDetailsPipe,
  MergereportToPublicitemsPipe,
  MergereportToPersonalitemsPipe,
  MergereportToSubscribersPipe,
  CreditbureauToTradelinedetailsPipe,
  CreditbureauToPublicitemdetailsPipe,
  CreditbureauToPersonalitemdetailsPipe,
  TradelineToAccountgroupPipe,
  TradelineToForbearancePipe,
  TradelineToFindingsPipe,
  AccountNumberMaskPipe,
  SsnMaskPipe,
  LinkifyPipe,
  DecodePipe,
  FilterArrayPipe,
  ParseRiskScorePipe,
  FindingsTransformerPipe,
  ConfigToUtilizationPipe,
  AccountStatusToHexPipe,
  MergereportToTradelinesPipe,
];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedPipesModule {}
