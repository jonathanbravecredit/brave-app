import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'parseRiskScore',
})
export class ParseRiskScorePipe implements PipeTransform {
  transform(report: IMergeReport): number {
    const riskScore: number = report?.TrueLinkCreditReportType?.Borrower?.CreditScore?.riskScore as number;
    const _score = Math.round(riskScore);
    if (isNaN(_score)) return -1;
    return _score;
  }
}
