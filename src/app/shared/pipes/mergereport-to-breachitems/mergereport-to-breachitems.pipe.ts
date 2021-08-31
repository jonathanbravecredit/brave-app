import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DataBreaches, DateBreachCard } from '@shared/utils/constants';

@Pipe({
  name: 'mergereportToBreachitems',
})
export class MergereportToBreachitemsPipe implements PipeTransform {
  transform(report: IMergeReport): (IBreachCard | any)[] | [] {
    const breachCards = Object.values(DataBreaches)
      .filter((item) => {
        return tu.queries.report.isDataBreachCondition(report, item) !== DataBreaches.None;
      })
      .map((key) => {
        return DateBreachCard[key];
      });
    return breachCards;
  }
}
