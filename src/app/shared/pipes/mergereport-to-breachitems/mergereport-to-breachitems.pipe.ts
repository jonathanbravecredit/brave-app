import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToBreachitems',
})
export class MergereportToBreachitemsPipe implements PipeTransform {
  transform(report: IMergeReport): ITradeLinePartition[] | [] {
    const tradelines = report.TrueLinkCreditReportType?.TradeLinePartition;
    if (tradelines instanceof Array) {
      return tradelines; // TODO need a query to filter for beach entities
    } else if (tradelines) {
      return [tradelines];
    } else {
      return [];
    }
  }
}
