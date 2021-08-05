import { Component, EventEmitter, Input, OnInit, ViewChild, Output } from '@angular/core';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

export interface IProcessDisputeTradelineResult {
  result: IDisputeProcessResult;
  tradeline: ITradeLinePartition | undefined;
}

@Component({
  selector: 'brave-disputes-tradeline-pure-view',
  templateUrl: './disputes-tradeline-pure.view.html',
})
export class DisputesTradelinePureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  @Input() isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() initialDisputeType: string | undefined = undefined;
  @Input() dispute: IDisputeItem | undefined;
  @Output() goBack: EventEmitter<void> = new EventEmitter();
  @Output() processResult: EventEmitter<IProcessDisputeTradelineResult> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log('dispute item', this.dispute);
  }
}
