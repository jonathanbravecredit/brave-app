import { Component, Input } from '@angular/core';

@Component({
  selector: 'brave-tradeline-detail-row',
  templateUrl: './tradeline-detail-row.component.html',
})
export class TradelineDetailRowComponent {
  /**
   * Tradeline detail row label
   * @property {string | undefined} label
   * @example
   *
   * label: 'Original Creditor'
   */
  @Input() label: string | undefined = '';
  /**
   * Tradeline detail row value
   * @property {number | string | undefined} value
   * @example
   *
   * value: 'ABC company' or 120.00
   */
  @Input() value: number | string | undefined = '';
  /**
   * Enable or disable tradeline detail row separator
   * @property {boolean} enableSeparator
   * @example
   *
   * enableSeparator: true
   */
  @Input() enableSeparator: boolean = false;
  @Input() enableMask: boolean = false;

  constructor() {}
}
