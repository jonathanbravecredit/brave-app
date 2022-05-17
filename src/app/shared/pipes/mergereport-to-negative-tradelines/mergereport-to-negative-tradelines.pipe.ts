import { Pipe, PipeTransform } from '@angular/core';
import { NEGATIVE_PAY_STATUS_CODES } from '@shared/constants';
import { ITradeLinePartition, IMergeReport } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToNegativeTradelines',
})
export class MergereportToNegativeTradelinesPipe implements PipeTransform {
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;

  transform(report: IMergeReport): ITradeLinePartition[] | [] {
    this.tradeLines = report?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!this.tradeLines) return [{} as ITradeLinePartition];
    if (!(this.tradeLines instanceof Array)) {
      this.tradeLines = [this.tradeLines];
    }

    this.filterTradelines(this.tradeLines)?.sortByAccountType(this.tradeLines)?.sortByDateOpened(this.tradeLines);

    if (this.tradeLines === undefined) return [];
    return this.tradeLines;
  }

  /**
   * Filters the tradeline by the negative status code
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  filterTradelines(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = tu.filters.filterTradelinesByStatusCodes(tradeLines, NEGATIVE_PAY_STATUS_CODES);
    return this;
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByAccountType(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = tu.sorters.report.sortTradelineByAccountType(tradeLines);
    return this;
  }

  /**
   * Sorts the tradeline by the date opened keeping the sort by account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByDateOpened(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = tu.sorters.report.sortTradelineByDateOpened(tradeLines);
    return this;
  }
}
