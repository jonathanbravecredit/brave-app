import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';

@Component({
  selector: 'brave-tradeline-dispute-card',
  templateUrl: './tradeline-dispute-card.component.html',
})
export class TradelineDisputeCardComponent implements OnInit {
  @Input() tradeline: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
