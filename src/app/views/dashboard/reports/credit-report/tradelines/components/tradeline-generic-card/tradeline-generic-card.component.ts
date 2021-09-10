import { Component, Input, OnInit } from '@angular/core';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { tradelineGenericCardContent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-generic-card/content';

@Component({
  selector: 'brave-tradeline-generic-card',
  templateUrl: './tradeline-generic-card.component.html',
})
export class TradelineGenericCardComponent implements OnInit {
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition;
  @Input() subscribers: ISubscriber[] = [];
  missing = tu.bcMissing;
  subscriber: ISubscriber | undefined = {} as ISubscriber;
  content = tradelineGenericCardContent;

  constructor() {}

  ngOnInit(): void {
    this.subscriber = tu.queries.report.getTradelineSubscriberByKey(this.tradeline);
  }
}
