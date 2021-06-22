import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-trade-account-summary-pure',
  templateUrl: './trade-account-summary-pure.component.html',
})
export class TradeAccountSummaryPureComponent implements OnInit {
  @Input() status: string = '';
  constructor() {}

  ngOnInit(): void {}
}
