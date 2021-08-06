import { Component, Input } from '@angular/core';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

export type BaseTableRowType = 'account' | 'currency' | 'date' | 'string';
@Component({
  selector: 'brave-base-table-row',
  templateUrl: './base-table-row.component.html',
})
export class BaseTableRowComponent {
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
  @Input() value: number | string | undefined;
  /**
   * Enable or disable tradeline detail row separator
   * @property {boolean} enableSeparator
   * @example
   *
   * enableSeparator: true
   */
  @Input() enableSeparator: boolean = false;
  @Input() valueType: BaseTableRowType = 'string';
  missing = TransunionUtil.bcMissing;
  constructor() {}
}
