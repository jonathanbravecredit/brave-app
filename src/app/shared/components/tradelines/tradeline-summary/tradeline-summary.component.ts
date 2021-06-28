import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-tradeline-summary',
  templateUrl: './tradeline-summary.component.html',
})
export class TradelineSummaryComponent implements OnInit {
  @Input() status: string = '';
  constructor() {}

  ngOnInit(): void {}
}
