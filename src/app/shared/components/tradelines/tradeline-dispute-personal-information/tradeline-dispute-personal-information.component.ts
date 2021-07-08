import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDisputeTradelineProcessResult } from '../tradeline-dispute-process/interfaces';
import { DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS as defaultReasons } from './constants';

@Component({
  selector: 'brave-tradeline-dispute-personal-information',
  templateUrl: './tradeline-dispute-personal-information.component.html',
  styleUrls: ['./tradeline-dispute-personal-information.component.css']
})
export class TradelineDisputePersonalInformationComponent implements OnInit {
  @Input() dateReported: string | undefined;
  @Input() dateUpdated: string | undefined;
  @Input() nameTypeAbbreviation: string | undefined;
  @Input() previousValue: string | undefined;
  @Input() valueDescription: string | undefined;

  @Input() defaultReasonPage = defaultReasons.TO_BE_REMOVED;
  @Output() disputeProcessResult: EventEmitter<IDisputeTradelineProcessResult> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
