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

  constructor() {}
}
