import { Pipe, PipeTransform } from '@angular/core';
import { IMergeReport } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'parseRiskScore',
})
export class ParseRiskScorePipe implements PipeTransform {
  transform(report: IMergeReport): number {
    let borrower = report.TrueLinkCreditReportType?.Borrower;
    if (!borrower) return -1;
    borrower = borrower instanceof Array ? borrower[0] : borrower;
    let credit = borrower.CreditScore;
    if (!credit) return -1;
    credit = credit instanceof Array ? credit[0] : credit;
    return credit.riskScore >= 0 ? +credit.riskScore : -1;
  }
}
