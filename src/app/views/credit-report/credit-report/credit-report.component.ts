import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { POSITIVE_PAY_STATUS_CODES } from '@shared/data';
import {
  CreditReportGroups,
  CREDIT_REPORT_GROUPS,
} from '@shared/data/credit-report';
import {
  IMergeReport,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { TransunionInput } from '@shared/services/aws/api.service';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
})
export class CreditReportComponent implements OnInit {
  creditReport$: Observable<IMergeReport>;
  filters = {
    [CreditReportGroups.CreditCards]: false,
    [CreditReportGroups.CollectionsAccounts]: false,
    [CreditReportGroups.InstallmentLoans]: false,
    [CreditReportGroups.Mortgages]: false,
  };

  constructor(private creditReportService: CreditreportService) {
    this.creditReport$ = this.creditReportService.tuReport$.pipe(
      map((report: IMergeReport) => {
        return this.filterReport(report);
      })
    );
  }

  ngOnInit(): void {}

  filterReport(report: IMergeReport): IMergeReport {
    let partition = report.TrueLinkCreditReportType.TradeLinePartition;
    if (!partition) return report;
    return {
      ...report,
      TrueLinkCreditReportType: {
        TradeLinePartition: this.filterGroup(partition),
      },
    };
  }

  filterGroup(
    partition: ITradeLinePartition | ITradeLinePartition[]
  ): ITradeLinePartition[] {
    if (partition instanceof Array) {
      return partition.filter((item) => {
        const sym = item.accountTypeSymbol || '';
        const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym].group;
        const pos =
          POSITIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`] ||
          null;
        return !(this.filters[group] && pos);
      });
    } else {
      const sym = partition.accountTypeSymbol || '';
      const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym].group;
      const pos =
        POSITIVE_PAY_STATUS_CODES[
          `${partition.Tradeline?.PayStatus?.symbol}`
        ] || null;
      return !(this.filters[group] && pos) ? [partition] : [];
    }
  }
}
