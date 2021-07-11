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
   * Raw address from Merge Report...TODO need better mapping
   * @property {string} address
   * @default
   */
  @Input() address: string = '';

  constructor() {}
}
