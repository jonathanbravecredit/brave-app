import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'parseRiskScore',
})
export class ParseRiskScorePipe implements PipeTransform {
  transform(report: IMergeReport | undefined): number {
    if (report === undefined) return -1;
    const creditScore = report?.TrueLinkCreditReportType?.Borrower?.CreditScore[0];
    if (creditScore instanceof Array) {
      const score = creditScore.find((value) => {
        return value?.scoreName?.toLowerCase() === 'vantagescore3';
      });
      const _score = Math.round(score?.riskScore as number);
      if (isNaN(_score)) return -1;
      return _score;
    } else {
      const score = creditScore?.riskScore;
      const _score = Math.round(score as number);
      if (isNaN(_score)) return -1;
      return _score;
    }
  }
}
