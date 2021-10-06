import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';
import { IBreachCard } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToBreachitems',
})
export class MergereportToBreachitemsPipe implements PipeTransform {
  transform(report: IMergeReport): (IBreachCard | any)[] | [] {
    return tu.queries.report.listDataBreaches(report);
  }
}
