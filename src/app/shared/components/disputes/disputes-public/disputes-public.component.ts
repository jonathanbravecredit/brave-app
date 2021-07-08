import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDisputeTradelineProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS as defaultReasons } from './constants';

@Component({
  selector: 'brave-disputes-public',
  templateUrl: './disputes-public.component.html',
})
export class DisputesPublicComponent implements OnInit {
  @Input() disputeType: string | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Input() description: string | undefined;
  @Input() dateReported: string | undefined;
  @Input() firstOptionReasonPages = defaultReasons.NOT_MINE;
  @Input() secondOptionReasonPages = defaultReasons.INACCURATE;
  @Output() disputeProcessResult: EventEmitter<IDisputeTradelineProcessResult> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
