import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergereportToNegativeTradelinesPipe } from '@shared/pipes/mergereport-to-negative-tradelines/mergereport-to-negative-tradelines.pipe';
import { TradelineToDisputePipe } from '@shared/pipes/tradeline-to-dispute/tradeline-to-dispute.pipe';
import { MergereportToCreditreportPipe } from '@shared/pipes/mergereport-to-creditreport/mergereport-to-creditreport.pipe';
import { TradelineToDetailsPipe } from '@shared/pipes/tradeline-to-details/tradeline-to-details.pipe';

const pipes = [
  TradelineToDisputePipe,
  TradelineToDetailsPipe,
  MergereportToNegativeTradelinesPipe,
  MergereportToCreditreportPipe,
];

@NgModule({
  declarations: [...pipes],
  imports: [CommonModule],
  exports: [...pipes],
})
export class SharedPipesModule {}
