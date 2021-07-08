import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IDisputeTradelineProcessResult } from '@shared/components/tradelines/tradeline-dispute-process/interfaces';
import { TradelineDisputeProcessComponent } from '@shared/components/tradelines/tradeline-dispute-process/tradeline-dispute-process.component';

@Component({
  selector: 'brave-disputes-public-pure',
  templateUrl: './disputes-public-pure.view.html',
})
export class DisputesPublicPureView implements OnInit {
  @ViewChild(TradelineDisputeProcessComponent) disputeProcess: TradelineDisputeProcessComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() initialDisputeType: string | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}

  requestGoBack() {
    const currentInnerProcessNavigationIndex = this.disputeProcess?.getCurrentNavigationIndex();
    if (currentInnerProcessNavigationIndex) {
      if (currentInnerProcessNavigationIndex > 0) {
        this.disputeProcess?.goBack();
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
