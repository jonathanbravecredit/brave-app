import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { IDisputePersonalItem } from '@shared/services/dispute/dispute.interfaces';

export interface IProcessDisputePersonalResult {
  result: IDisputeProcessResult;
  personalItem: IDisputePersonalItem;
}

@Component({
  selector: 'brave-disputes-personal-pure-view',
  templateUrl: './disputes-personal-pure.view.html',
})
export class DisputesPersonalPureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() personalDispute: IDisputePersonalItem = {} as IDisputePersonalItem;
  @Output() processResult: EventEmitter<IProcessDisputePersonalResult> = new EventEmitter();
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

  // onDisputeProcessResult(result: IDisputeProcessResult): void {
  //   // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
  //   if (result.isFinished) {
  //     this.isDisputeSent = true;
  //     this.isDisputeProcessInProgress = false;
  //   }
  // }
}
