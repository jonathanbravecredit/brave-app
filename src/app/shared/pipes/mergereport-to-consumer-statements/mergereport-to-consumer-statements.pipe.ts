import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToConsumerStatements',
})
export class MergereportToConsumerStatementsPipe implements PipeTransform {
  transform(report: IMergeReport): string {
    const consumerStatement = tu.parser.parseBorrowerForCreditStatement(report.TrueLinkCreditReportType.Borrower) || '';
    return consumerStatement;
  }
}
