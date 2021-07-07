import { Component, OnInit, ViewChild } from '@angular/core';
import { IDisputeTradelineProcessResult } from '@shared/components/tradelines/tradeline-dispute-process/interfaces';
import { TradelineDisputeProcessComponent } from '@shared/components/tradelines/tradeline-dispute-process/tradeline-dispute-process.component';

@Component({
  selector: 'brave-tradeline-dispute-process-view',
  templateUrl: './tradeline-dispute-process.component.html',
  styleUrls: ['./tradeline-dispute-process.component.css']
})
export class TradelineDisputeProcessView implements OnInit {
  @ViewChild(TradelineDisputeProcessComponent) tradelineDisputeProcess: TradelineDisputeProcessComponent | undefined;
  isDisputeProcessInProgress = true;
  isDisputeSent = false;
  constructor() { }

  ngOnInit(): void {
  }

  requestGoBack() {
    const currentInnerProcessNavigationIndex = this.tradelineDisputeProcess?.getCurrentNavigationIndex();
    if (currentInnerProcessNavigationIndex) {
      if (currentInnerProcessNavigationIndex > 0) {
        this.tradelineDisputeProcess?.goBack();
      }
    } 
  }

  onDisputeProcessResult(result: IDisputeTradelineProcessResult): void {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component 
    if (result.isFinished) {
      this.isDisputeSent = true;
      this.isDisputeProcessInProgress = false;
    }
  }
}
