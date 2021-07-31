import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeTradelineProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
@Component({
  selector: 'brave-disputes-personal-pure-view',
  templateUrl: './disputes-personal-pure.view.html',
})
export class DisputesPersonalPureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() dateReported: string | undefined;
  @Input() dateUpdated: string | undefined;
  @Input() nameTypeAbbreviation: string | undefined;
  @Input() previousValue: string | undefined;
  @Input() valueDescription: string | undefined;

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
