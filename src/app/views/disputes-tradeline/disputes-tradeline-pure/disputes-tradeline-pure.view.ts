import { Component, EventEmitter, Input, OnInit, ViewChild, Output } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeTradelineProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

@Component({
  selector: 'brave-disputes-tradeline-pure-view',
  templateUrl: './disputes-tradeline-pure.view.html',
})
export class DisputesTradelinePureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() initialDisputeType: string | undefined = undefined;
  @Input() dispute: IDisputeItem | undefined;
  @Output() processResult: EventEmitter<any> = new EventEmitter();
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

  onDisputeProcessResult(result: IDisputeTradelineProcessResult, tradeline: ITradeLinePartition | undefined): void {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    if (tradeline === undefined) throw new Error(`Tradeline is missing from dispute`);
    console.log('dispute result', result);
    console.log('dispute partition', tradeline);
    if (result.isFinished) {
      this.isDisputeSent = true;
      this.isDisputeProcessInProgress = false;
    }
  }
}
