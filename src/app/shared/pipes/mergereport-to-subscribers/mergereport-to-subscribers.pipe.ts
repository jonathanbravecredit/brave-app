import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport, ISubscriber } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToSubscribers',
})
export class MergereportToSubscribersPipe implements PipeTransform {
  transform(report: IMergeReport): ISubscriber[] | [] {
    return tu.queries.report.listSubscribers(report);
  }
}
