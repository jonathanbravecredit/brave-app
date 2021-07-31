import { Component, Input, OnInit } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';

@Component({
  selector: 'brave-tradeline-card',
  templateUrl: './tradeline-card.component.html',
})
export class TradelineCardComponent implements OnInit {
  @Input() tradeline: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;

  constructor() {}

  ngOnInit(): void {}
}
