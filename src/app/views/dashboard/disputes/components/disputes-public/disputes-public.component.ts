import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionTypes } from '@views/dashboard/disputes/components/disputes-tradeline/disputes-tradeline.component';
import {
  IDisputeProcessResult,
  IDisputeReasonCardPageItem,
} from '@views/dashboard/disputes/components/disputes-tradeline/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_PUBLIC_RECORDS_REASONS as processReasons,
  PUBLIC_REASONS_INACCURATE,
  PUBLIC_REASONS_NOTMINE,
} from './constants';

@Component({
  selector: 'brave-disputes-public',
  templateUrl: './disputes-public.component.html',
})
export class DisputesPublicComponent implements OnInit {
  @Input() disputeType: SelectionTypes | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Input() description: string | undefined;
  @Input() dateReported: string | undefined;
  @Input() firstOptionReasonPages: IDisputeReasonCardPageItem[] = PUBLIC_REASONS_NOTMINE;
  @Input() secondOptionReasonPages: IDisputeReasonCardPageItem[] = PUBLIC_REASONS_INACCURATE;
  @Output() disputeProcessResult: EventEmitter<IDisputeProcessResult> = new EventEmitter();
  processReasons = processReasons;

  constructor() {}

  ngOnInit(): void {}
}
