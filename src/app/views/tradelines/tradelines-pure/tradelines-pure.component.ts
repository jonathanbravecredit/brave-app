import { Component, Input } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import { IPayStatusHistory, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradelines-pure',
  templateUrl: './tradelines-pure.component.html',
})
export class TradelinesPureComponent {
  /**
   * @property {ITradeLinePartition} tradeline
   */
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition;
  /**
   * Config parameters with parsed tradeline data
   * @property {ITradelineDetailsConfig} config
   */
  @Input() config: ITradelineDetailsConfig = {} as ITradelineDetailsConfig;
  /**
   * Raw pay status history from Merge Report
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

  constructor() {}
}
