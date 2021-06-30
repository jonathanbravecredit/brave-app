import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-tradeline-summary',
  templateUrl: './tradeline-summary.component.html',
})
export class TradelineSummaryComponent implements OnInit {
  @Input() status: string = '';
  @Input() creditorName: string = '';
  @Input() dateReported: string = '';
  @Input() currentBalance: number | string = 0;
  @Input() openClosed: string = '';
  constructor() {}

  ngOnInit(): void {}
}
