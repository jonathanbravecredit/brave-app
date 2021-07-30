import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';
import { TradelineToDisputePipe } from '@shared/pipes/tradeline-to-dispute/tradeline-to-dispute.pipe';
import { MergereportToCreditreportPipe } from '@shared/pipes/mergereport-to-creditreport/mergereport-to-creditreport.pipe';
import { TradelineToDetailsPipe } from '@shared/pipes/tradeline-to-details/tradeline-to-details.pipe';
import { TradelineToPagesPipe } from './tradeline-to-pages/tradeline-to-pages.pipe';
import { DisputesToDisputesOverviewPipe } from './disputes-to-disputes-overview/disputes-to-disputes-overview.pipe';
import { DisputeToDisputeFindingPipe } from './dispute-to-dispute-finding/dispute-to-dispute-finding.pipe';
import { MergereportToDashboardPipe } from '@shared/pipes/mergereport-to-dashboard/mergereport-to-dashboard.pipe';
import { PublicitemToDisputePipe } from './publicitem-to-dispute/publicitem-to-dispute.pipe';
import { MergereportToPublicitemsPipe } from './mergereport-to-publicitems/mergereport-to-publicitems.pipe';
import { MergereportToPersonalitemsPipe } from './mergereport-to-personalitems/mergereport-to-personalitems.pipe';
import { PublicitemToDetailsPipe } from './publicitem-to-details/publicitem-to-details.pipe';

const pipes = [
  TradelineToDisputePipe,
  TradelineToDetailsPipe,
  TradelineToPagesPipe,
  MergereportToNegativeTradelinesPipe,
  MergereportToCreditreportPipe,
  DisputesToDisputesOverviewPipe,
  DisputeToDisputeFindingPipe,
  MergereportToDashboardPipe,
  PublicitemToDisputePipe,
  PublicitemToDetailsPipe,
  MergereportToPublicitemsPipe,
  MergereportToPersonalitemsPipe,
];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedPipesModule {}
