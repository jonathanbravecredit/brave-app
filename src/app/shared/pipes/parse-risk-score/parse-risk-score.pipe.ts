import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'parseRiskScore',
})
export class ParseRiskScorePipe implements PipeTransform {
  transform(report: IMergeReport | undefined): number {
    if (report === undefined) return -1;
    const creditScore = report?.TrueLinkCreditReportType?.Borrower?.CreditScore;
    const item = creditScore?.find((ele) => ele.scoreName?.toLowerCase() === 'vantagescore3') || null;
    const score = item?.riskScore;
    const _score = Math.round(score as number);
    if (isNaN(_score)) return -1;
    return _score;
  }
}
