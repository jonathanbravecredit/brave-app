import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeTradelineProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

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
  @Input() dispute: IDisputeItem | undefined;
  @Output() goBack: EventEmitter<void> = new EventEmitter();
  @Output() processResult: EventEmitter<IProcessDisputeTradelineResult> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // requestGoBack() {
  //   const currentInnerProcessNavigationIndex = this.disputeProcess?.getCurrentNavigationIndex();
  //   if (currentInnerProcessNavigationIndex) {
  //     if (currentInnerProcessNavigationIndex > 0) {
  //       this.disputeProcess?.goBack();
  //     }
  //   }
  // }

  // onDisputeProcessResult(result: IDisputeTradelineProcessResult): void {
  //   // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
  //   if (result.isFinished) {
  //     this.isDisputeSent = true;
  //     this.isDisputeProcessInProgress = false;
  //   }
  // }
}
