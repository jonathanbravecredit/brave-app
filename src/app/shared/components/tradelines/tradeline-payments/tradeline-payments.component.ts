import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradeline-payments',
  templateUrl: './tradeline-payments.component.html',
})
export class TradelinePaymentsComponent {
  /**
   * Raw pay status history from Merge Report
   * @property {IPayStatusHistory | undefined} paymentHistory
   */
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
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
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * @property {EventEmitter<void>} disputeClick
   * @default
   */
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
