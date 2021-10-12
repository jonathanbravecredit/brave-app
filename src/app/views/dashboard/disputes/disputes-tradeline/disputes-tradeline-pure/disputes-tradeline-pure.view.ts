import { Component, EventEmitter, Input, ViewChild, Output } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { IDisputeTradelineItem } from '@shared/services/dispute/dispute.interfaces';
import { DisputesTradelineComponent } from '@views/dashboard/disputes/components/disputes-tradeline/disputes-tradeline.component';
import { IDisputeProcessResult } from '@views/dashboard/disputes/components/disputes-tradeline/interfaces';

export interface IProcessDisputeTradelineResult {
  result: IDisputeProcessResult;
  tradeline: ITradeLinePartition | undefined;
}

@Component({
  selector: 'brave-disputes-tradeline-pure-view',
  templateUrl: './disputes-tradeline-pure.view.html',
})
export class DisputesTradelinePureView {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  @Input() isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() initialDisputeType: string | undefined = undefined;
  @Input() dispute: IDisputeTradelineItem | undefined;
  @Output() goBack: EventEmitter<void> = new EventEmitter();
  @Output() processResult: EventEmitter<IProcessDisputeTradelineResult> = new EventEmitter();
  constructor() {}
}
