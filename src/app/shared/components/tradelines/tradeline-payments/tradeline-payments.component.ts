import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradeline-payments',
  templateUrl: './tradeline-payments.component.html',
})
export class TradelinePaymentsComponent implements OnInit {
  @Input() payments: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  @Input() remarks: string = '';
  @Input() address: string = '';
  @Output() onDisputeClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
