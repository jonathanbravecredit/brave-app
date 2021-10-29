import { Pipe, PipeTransform } from '@angular/core';
import { ISubscriber, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'filterSubscribers',
})
export class FilterSubscribersPipe implements PipeTransform {
  transform(subscribers: ISubscriber[], tradeline: ITradeLinePartition): ISubscriber {
    return TransunionUtil.queries.report.getTradelineSubscriberByKey(tradeline, subscribers) || ({} as ISubscriber);
  }
}
