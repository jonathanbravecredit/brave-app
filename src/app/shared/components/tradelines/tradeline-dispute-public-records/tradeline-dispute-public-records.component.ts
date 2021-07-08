import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDisputeTradelineProcessResult } from "../tradeline-dispute-process/interfaces";
import { DEFAULT_TRADELINE_DISPUTE_PUBLIC_RECORDS_REASONS as defaultReasons } from './constants';
@Component({
  selector: 'brave-tradeline-dispute-public-records',
  templateUrl: './tradeline-dispute-public-records.component.html',
  styleUrls: ['./tradeline-dispute-public-records.component.css']
})
export class TradelineDisputePublicRecordsComponent implements OnInit {
  @Input() disputeType: string | undefined = undefined;
  @Input() initialStepId: string = 'select';
  @Input() description: string | undefined;
  @Input() dateReported: string | undefined;
  @Input() firstOptionReasonPages = defaultReasons.NOT_MINE;
  @Input() secondOptionReasonPages = defaultReasons.INACCURATE;
  @Output() disputeProcessResult: EventEmitter<IDisputeTradelineProcessResult> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
