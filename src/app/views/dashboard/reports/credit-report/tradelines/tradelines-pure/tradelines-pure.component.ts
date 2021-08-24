import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { IPayStatusHistory, ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradelines-pure',
  templateUrl: './tradelines-pure.component.html',
})
export class TradelinesPureComponent implements OnInit {
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
  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  /**
   * Event emitter when dispute button clicked on tradeline detail
   * - Pass up the tradlinePartition clicked on from here
   */
  @Output() disputeClick: EventEmitter<ITradeLinePartition | undefined | null> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('current subscriber ==> ', this.subscriber);
  }
}
