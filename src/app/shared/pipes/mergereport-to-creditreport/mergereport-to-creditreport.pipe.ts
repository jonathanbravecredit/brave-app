import { Pipe, PipeTransform } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { CREDIT_REPORT_GROUPS } from '@shared/constants/credit-report';
import { ITradeLinePartition, IMergeReport } from '@shared/interfaces/merge-report.interface';
import { PreferencesStateModel } from '@store/preferences';
import { ICreditReportTradelinesCardGroup } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToCreditreport',
})
export class MergereportToCreditreportPipe implements PipeTransform {
  transform(report: IMergeReport, prefs?: PreferencesStateModel): ICreditReportTradelinesCardGroup[] {
    let tradelines = [...report.TrueLinkCreditReportType.TradeLinePartition];
    tradelines = this.sortByCreditReportGroups(tradelines);
    tradelines = this.sortByDateOpened(tradelines);
    let creditReportAccounts = this.mapTradeLineToAccount(tradelines);
    return this.groupCreditReportAccounts(creditReportAccounts);
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private sortByCreditReportGroups(tradeLines: ITradeLinePartition[]): ITradeLinePartition[] {
    return tu.sorters.report.sortByCreditReportGroups(tradeLines);
  }

  /**
   * Sorts the tradeline by the date opened keeping the sort by account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private sortByDateOpened(tradeLines: ITradeLinePartition[]): ITradeLinePartition[] {
    return tu.sorters.report.sortTradelineByDateOpened(tradeLines);
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private mapTradeLineToAccount(tradeLines: ITradeLinePartition[]): ICreditReportCardInputs[] {
    return tu.mappers.mapTradelineToSummaryCard(tradeLines);
  }

  /**
   * Filters and groups the cards according to the account types
   * @param {ICreditReportCardInputs[] | undefined} reports
   * @returns
   */
  private groupCreditReportAccounts(
    reports: ICreditReportCardInputs[] | undefined,
  ): ICreditReportTradelinesCardGroup[] {
    if (!reports) return [{} as ICreditReportTradelinesCardGroup];
    let res: Record<string, any> = {};
    reports.forEach((r) => {
      let index = CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['group'];
      res[index] = res[index]
        ? {
            title: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['title'],
            group: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['group'],
            cards: [...res[index]['cards'], r],
            tradelines: [...res[index]['tradelines'], r.tradeline],
          }
        : {
            title: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['title'],
            group: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['group'],
            cards: [r],
            tradelines: [r.tradeline],
          };
    });
    let results: ICreditReportTradelinesCardGroup[] = Object.keys(res).map((k) => {
      return { ...res[k] } as ICreditReportTradelinesCardGroup;
    });
    return results;
  }
}
