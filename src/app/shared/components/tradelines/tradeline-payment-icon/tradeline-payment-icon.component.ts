import { Component, Input, OnInit } from '@angular/core';
import {
  LATE_PAY_STATUS_CODES,
  COLLECTION_PAY_STATUS_CODES,
  REPO_PAY_STATUS_CODES,
  OTHER_PAY_STATUS_CODES,
  ONTIME_PAY_STATUS_CODES,
} from '@shared/data';

export enum TradelineIcons {
  Late = 'late',
  Collection = 'collection',
  Repossession = 'repossesion',
  Current = 'current',
  Other = 'other',
}

@Component({
  selector: 'brave-tradeline-payment-icon',
  templateUrl: './tradeline-payment-icon.component.html',
})
export class TradelinePaymentIconComponent implements OnInit {
  @Input() code: string = 'u';
  tradelineIcons = TradelineIcons;
  constructor() {}

  ngOnInit(): void {}

  parseCode(code: string): TradelineIcons {
    if (LATE_PAY_STATUS_CODES[code.toLowerCase()]) return TradelineIcons.Late;
    if (COLLECTION_PAY_STATUS_CODES[code.toLowerCase()])
      return TradelineIcons.Collection;
    if (REPO_PAY_STATUS_CODES[code.toLowerCase()])
      return TradelineIcons.Repossession;
    if (ONTIME_PAY_STATUS_CODES[code.toLowerCase()])
      return TradelineIcons.Current;
    if (OTHER_PAY_STATUS_CODES[code.toLowerCase()]) return TradelineIcons.Other;
    return TradelineIcons.Other;
  }
}
