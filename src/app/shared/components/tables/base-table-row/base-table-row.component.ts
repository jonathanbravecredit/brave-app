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
  /**
   * For greater control can choose to inject the html
   */
  @Input() injected: boolean = false;
  /**
   * The type which will determine the pipe to implement
   * - account | currency | date | unknown
   */
  @Input() valueType: BaseTableRowType = 'string';
  /**
   * The global missing value placeholder
   */
  missing = TransunionUtil.bcMissing;

  constructor() {}
}
