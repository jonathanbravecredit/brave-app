import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDisputeProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';
import {
  DEFAULT_TRADELINE_DISPUTE_PROCESS_PERSONAL_INFO_REASONS as processReasons,
  DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS as defaultReasons,
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

  @Input() defaultReasonPage = defaultReasons.TO_BE_REMOVED;
  @Output() disputeProcessResult: EventEmitter<IDisputeProcessResult> = new EventEmitter();
  processReasons = processReasons;
  constructor() {}
}
