import { Component, Input, OnInit } from '@angular/core';
import {
  LATE_PAY_STATUS_CODES,
  COLLECTION_PAY_STATUS_CODES,
  UNKNOWN_PAY_STATUS_CODES,
  OTHER_PAY_STATUS_CODES,
  ONTIME_PAY_STATUS_CODES,
} from '@shared/data';

export enum TradelineIcons {
  Late = 'late',
  Collection = 'collection',
  Unknown = 'unknown',
  Current = 'current',
  Other = 'other',
}

@Component({
  selector: 'brave-tradeline-payment-icon',
  templateUrl: './tradeline-payment-icon.component.html',
})
export class TradelinePaymentIconComponent implements OnInit {
  @Input() code: string = 'U';
  tradelineIcons = TradelineIcons;
  constructor() {}

  ngOnInit(): void {}

  parseCode(code: string): TradelineIcons {
    if (LATE_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Late;
    if (UNKNOWN_PAY_STATUS_CODES[code.toUpperCase()])
      return TradelineIcons.Unknown;
    if (COLLECTION_PAY_STATUS_CODES[code.toUpperCase()])
      return TradelineIcons.Collection;
    if (ONTIME_PAY_STATUS_CODES[code.toUpperCase()])
      return TradelineIcons.Current;
    if (OTHER_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Other;
    return TradelineIcons.Other;
  }
}
