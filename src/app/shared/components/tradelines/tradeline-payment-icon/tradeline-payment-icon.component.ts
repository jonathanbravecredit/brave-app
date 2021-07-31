import { Component, Input } from '@angular/core';
import { TradelineIcons } from '@shared/components/tradelines/tradeline-payment-icon/constants';
import {
  LATE_PAY_STATUS_CODES,
  COLLECTION_PAY_STATUS_CODES,
  UNKNOWN_PAY_STATUS_CODES,
  OTHER_PAY_STATUS_CODES,
  ONTIME_PAY_STATUS_CODES,
} from '@shared/constants';

@Component({
  selector: 'brave-tradeline-payment-icon',
  templateUrl: './tradeline-payment-icon.component.html',
})
export class TradelinePaymentIconComponent {
  /**
   * Payment status code for the month
   * @property {string} code
   * @default
   */
  @Input() code: string = 'U';
  /**
   * Icon height for grid
   * @property {string} height
   * @default
   */
  @Input() height: string = 'h-4';
  /**
   * Icon widht for grid
   * @property {string} width
   * @default
   */
  @Input() width: string = 'w-4';
  /**
   * Available Icon Codes
   * @property {TradelineIcons} tradelineIcons
   */
  tradelineIcons = TradelineIcons;

  constructor() {}

  /**
   * Maps the raw pay status code to tradeline icon code
   * @param {string} code
   * @returns {TradelineIcons}
   */
  parseCode(code: string): TradelineIcons {
    if (LATE_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Late;
    if (UNKNOWN_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Unknown;
    if (COLLECTION_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Collection;
    if (ONTIME_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Current;
    if (OTHER_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Other;
    return TradelineIcons.Unknown;
  }
}
