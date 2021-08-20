import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

@Component({
  selector: 'brave-tradeline-dispute-card',
  templateUrl: './tradeline-dispute-card.component.html',
})
export class TradelineDisputeCardComponent implements OnInit {
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition;
  @Input() subscriber: ISubscriber = {} as ISubscriber;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
