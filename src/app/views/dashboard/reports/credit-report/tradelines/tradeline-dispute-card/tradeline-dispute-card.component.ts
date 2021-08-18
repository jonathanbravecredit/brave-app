import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISubscriber } from '@shared/interfaces/merge-report.interface';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';

@Component({
  selector: 'brave-tradeline-dispute-card',
  templateUrl: './tradeline-dispute-card.component.html',
})
export class TradelineDisputeCardComponent implements OnInit {
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  @Input() subscriber: ISubscriber = {} as ISubscriber;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
