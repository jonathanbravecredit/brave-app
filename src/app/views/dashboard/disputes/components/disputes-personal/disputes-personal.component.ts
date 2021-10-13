import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IDisputeProcessResult,
  IDisputeReasonCardPageItem,
} from '@views/dashboard/disputes/components/disputes-tradeline/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS as processReasons,
  DISPUTES_PERSONAL_REASONS_TOBEREMOVED,
} from './constants';

@Component({
  selector: 'brave-disputes-personal',
  templateUrl: './disputes-personal.component.html',
})
export class DisputesPersonalComponent {
  @Input() dateReported: string | undefined;
  @Input() dateUpdated: string | undefined;
  @Input() nameTypeAbbreviation: string | undefined;
  @Input() previousValue: string | undefined;
  @Input() valueDescription: string | undefined;
  @Input() defaultReasonPage: IDisputeReasonCardPageItem[] = DISPUTES_PERSONAL_REASONS_TOBEREMOVED;
  @Output() disputeProcessResult: EventEmitter<IDisputeProcessResult> = new EventEmitter();
  processReasons = processReasons;
  constructor() {}
}
