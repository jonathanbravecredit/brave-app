import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITradeLinePartition, ISubscriber } from '@shared/interfaces';

@Component({
  selector: 'brave-dispute-tradeline-card',
  templateUrl: './dispute-tradeline-card.component.html',
})
export class DisputeTradelineCardComponent implements OnInit {
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition;
  @Input() subscriber: ISubscriber = {} as ISubscriber;
  @Input() hideConfirm: boolean = false;
  @Input() enableDispute: boolean = false;
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
