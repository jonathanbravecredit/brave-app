import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-tradeline-remarks',
  templateUrl: './tradeline-remarks.component.html',
})
export class TradelineRemarksComponent {
  /**
   * Raw remarks from Merge Report
   * @property {string} remarks
   * @default
   */
  @Input() remarks: string = '';
  /**
   * Consumer statement directly from the report
   * @property consumerStatement
   * @default
   */
  @Input() consumerStatement: string = '';
  /**
   * The creditors contact information for the tradeline
   * @property constactDetails
   * @default
   */
  @Input() contactDetails: [string?, string?, string?] | undefined = [];
  /**
   * @property showFooter - flag to turn off the 'Dispute' message
   */
  @Input() showFooter: boolean = true;

  constructor() {}
}
