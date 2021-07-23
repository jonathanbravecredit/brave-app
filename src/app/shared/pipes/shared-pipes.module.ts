import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';
import { TradelineToDisputePipe } from '@shared/pipes/tradeline-to-dispute/tradeline-to-dispute.pipe';
import { MergereportToCreditreportPipe } from '@shared/pipes/mergereport-to-creditreport/mergereport-to-creditreport.pipe';
import { TradelineToDetailsPipe } from '@shared/pipes/tradeline-to-details/tradeline-to-details.pipe';
import { TradelineToPagesPipe } from './tradeline-to-pages/tradeline-to-pages.pipe';
import { DisputesToDisputesOverviewPipe } from './disputes-to-disputes-overview/disputes-to-disputes-overview.pipe';
import { DisputeToDisputeFindingPipe } from './dispute-to-dispute-finding/dispute-to-dispute-finding.pipe';

const pipes = [
  TradelineToDisputePipe,
  TradelineToDetailsPipe,
  TradelineToPagesPipe,
  MergereportToNegativeTradelinesPipe,
  MergereportToCreditreportPipe,
  DisputesToDisputesOverviewPipe,
];

@NgModule({
  declarations: [...pipes, DisputeToDisputeFindingPipe],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedPipesModule {}
