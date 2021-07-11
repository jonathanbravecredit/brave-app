import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import { IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradeline-details',
  templateUrl: './tradeline-details.component.html',
})
export class TradelineDetailsComponent {
  /**
   * Config parameters with parsed tradeline data
   * @property {ITradelineDetailsConfig} config
   */
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  /**
   * Payments Status History from Merge Report
   * @property {IPayStatusHistory | undefined} paymentHistory
   */
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  /**
   * Remarks from Merge Report
   * @property {string} remarks
   */
  @Input() remarks: string = '';
  /**
   * Address from Merge Report...TODO need better definition
   * @property {string} address
   */
  @Input() address: string = '';
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * @property {EventEmitter<void>} disputeClick
   * @default
   */
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
