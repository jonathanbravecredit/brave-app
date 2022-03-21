import { Pipe, PipeTransform } from '@angular/core';
import { IBreachCard } from '@shared/interfaces/breach-card.interface';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToBreachitems',
})
export class MergereportToBreachitemsPipe implements PipeTransform {
  transform(report: IMergeReport): (IBreachCard | any)[] | [] {
    return tu.queries.report.listDataBreaches(report);
  }
}
