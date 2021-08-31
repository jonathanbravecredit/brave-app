import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DataBreaches, DateBreachCard } from '@shared/utils/constants';

@Pipe({
  name: 'mergereportToBreachitems',
})
export class MergereportToBreachitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IBreachCard[] | [] {
    const tradelines = report.TrueLinkCreditReportType?.TradeLinePartition;
    const breachCards = [];
    for (let item in DataBreaches) {
      // for testing
      breachCards.push(DateBreachCard[item]);
      // if (isNaN(Number(item))) {
      //   if (tu.queries.report.isDataBreachCondition(report, item)) {
      //     breachCards.push(DateBreachCard[item]);
      //   }
      // }
    }
    return breachCards;
  }
}
