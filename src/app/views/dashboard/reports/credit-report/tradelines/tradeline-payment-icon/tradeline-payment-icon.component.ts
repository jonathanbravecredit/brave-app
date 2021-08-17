import { Component, Input } from '@angular/core';
import {
  LATE_PAY_STATUS_CODES,
  COLLECTION_PAY_STATUS_CODES,
  UNKNOWN_PAY_STATUS_CODES,
  OTHER_PAY_STATUS_CODES,
  ONTIME_PAY_STATUS_CODES,
  LATE_30_STATUS_CODE,
  LATE_120_STATUS_CODE,
  LATE_60_STATUS_CODE,
  LATE_90_STATUS_CODE,
  REPOSSESSION_PAY_STATUS_CODE,
} from '@shared/constants';
import { TradelineIcons } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-icon/constants';

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
    if (LATE_30_STATUS_CODE[code.toUpperCase()]) return TradelineIcons.Late30;
    if (LATE_60_STATUS_CODE[code.toUpperCase()]) return TradelineIcons.Late60;
    if (LATE_90_STATUS_CODE[code.toUpperCase()]) return TradelineIcons.Late90;
    if (LATE_120_STATUS_CODE[code.toUpperCase()]) return TradelineIcons.Late120;
    if (REPOSSESSION_PAY_STATUS_CODE[code.toUpperCase()]) return TradelineIcons.Repossession;
    if (COLLECTION_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Collection;
    if (ONTIME_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Current;
    if (UNKNOWN_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Unknown;
    if (OTHER_PAY_STATUS_CODES[code.toUpperCase()]) return TradelineIcons.Other;
    return TradelineIcons.Unknown;
  }
}
