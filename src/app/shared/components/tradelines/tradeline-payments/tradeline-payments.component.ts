import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brave-tradeline-payments',
  templateUrl: './tradeline-payments.component.html',
})
export class TradelinePaymentsComponent implements OnInit {
  @Input() payments: any;
  @Input() remarks: string = '';
  @Input() address: string = '';
  @Output() onDisputeClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
