import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { IPayStatusHistory, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradelines-pure',
  templateUrl: './tradelines-pure.component.html',
})
export class TradelinesPureComponent {
  /**
   * Tradelines are individual credit report accounts
   */
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition;
  /**
   * Config parameters with parsed tradeline data
   */
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  /**
   * Raw pay status history from Merge Report
   */
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  /**
   * Remarks from Merge Report
   */
  @Input() remarks: string = '';
  /**
   * Address from Merge Report...TODO need better definition
   */
  @Input() address: string = '';

  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * - Pass up the tradlinePartition clicked on from here
   */
  @Output() disputeClick: EventEmitter<ITradeLinePartition> = new EventEmitter();

  constructor() {}
}
