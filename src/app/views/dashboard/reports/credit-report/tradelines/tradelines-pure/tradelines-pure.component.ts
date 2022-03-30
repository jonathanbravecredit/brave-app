import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradelines-pure',
  templateUrl: './tradelines-pure.component.html',
})
export class TradelinesPureComponent {
  /**
   * Config parameters with parsed tradeline data
   */
  @Input() config: ITradelineDetailsConfig | undefined | null = {} as ITradelineDetailsConfig;
  /**
   * Original tradelines are individual credit report accounts
   */
  @Input() tradeline: ITradeLinePartition | undefined | null = {} as ITradeLinePartition;
  /**
   * The matching subscriber (creditor data) to the tradeline detail
   */
  @Input() subscriber: ISubscriber | undefined | null = {} as ISubscriber;

  constructor() {}
}
