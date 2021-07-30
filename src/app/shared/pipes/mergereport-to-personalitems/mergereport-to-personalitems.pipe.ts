import { Pipe, PipeTransform } from '@angular/core';
import { IBorrower, IMergeReport } from '@shared/interfaces';

@Pipe({
  name: 'mergereportToPersonalitems',
})
export class MergereportToPersonalitemsPipe implements PipeTransform {
  transform(report: IMergeReport): IBorrower[] | undefined {
    if (report === undefined) return;
    const personal = report.TrueLinkCreditReportType?.Borrower;
    if (personal === undefined) return;
    if (personal instanceof Array) return personal;
    if (!(personal instanceof Array)) return [personal];
    return;
  }
}
