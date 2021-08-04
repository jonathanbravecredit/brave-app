import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { IPublicPartition } from '@shared/interfaces';
import { IDisputePublicItem } from '@shared/services/dispute/dispute.interfaces';

export interface IProcessDisputePublicResult {
  result: IDisputeProcessResult;
  publicitem: IPublicPartition | undefined;
}

@Component({
  selector: 'brave-disputes-public-pure-view',
  templateUrl: './disputes-public-pure.view.html',
})
export class DisputesPublicPureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  @Input() isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() initialDisputeType: string | undefined = undefined;
  @Input() dispute: IDisputePublicItem | undefined;
  @Output() goBack: EventEmitter<void> = new EventEmitter();
  @Output() processResult: EventEmitter<IProcessDisputePublicResult> = new EventEmitter();

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

  onDisputeProcessResult(result: IDisputeProcessResult): void {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    if (result.isFinished) {
      this.isDisputeSent = true;
      this.isDisputeProcessInProgress = false;
    }
  }
}
