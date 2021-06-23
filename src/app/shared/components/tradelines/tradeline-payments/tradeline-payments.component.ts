import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-tradeline-payments',
  templateUrl: './tradeline-payments.component.html',
})
export class TradelinePaymentsComponent implements OnInit {
  @Input() payments: any;
  constructor() {}

  ngOnInit(): void {}
}
