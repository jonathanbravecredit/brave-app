import { Pipe, PipeTransform } from '@angular/core';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';
import { NEGATIVE_PAY_STATUS_CODES } from '@shared/constants';
import { ITradeLinePartition, IMergeReport, ISubscriber } from '@shared/interfaces/merge-report.interface';
import { DEFAULT_TRADELINE } from '@views/dashboard/snapshots/negative-account/negative-account-initial/constants';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToNegativeTradelines',
})
export class MergereportToNegativeTradelinesPipe implements PipeTransform {
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;

  transform(report: IMergeReport): INegativeAccountCardInputs[] | undefined {
    this.tradeLines = report?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!this.tradeLines) return [DEFAULT_TRADELINE];
    if (!(this.tradeLines instanceof Array)) {
      this.tradeLines = [this.tradeLines];
    }

    let subscribers = report.TrueLinkCreditReportType?.Subscriber;
    subscribers = subscribers instanceof Array ? subscribers : [subscribers || ({} as ISubscriber)];

    const consumerStatement =
      tu.parsers.report.parseBorrowerForCreditStatement(report.TrueLinkCreditReportType.Borrower) || '';

    const filteredTradelines = this.filterTradelines(this.tradeLines)
      .sortByAccountType(this.tradeLines)
      .sortByDateOpened(this.tradeLines)
      .mapTradeLineToAccount(this.tradeLines, subscribers, consumerStatement);
    return filteredTradelines;
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

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  mapTradeLineToAccount(
    tradeLines: ITradeLinePartition[],
    subscribers: ISubscriber[],
    consumerStatement: string,
  ): INegativeAccountCardInputs[] {
    const negativeAccounts = tradeLines.map((tradeline) => {
      const subscriber = tu.queries.report.getTradelineSubscriberByKey(tradeline, subscribers) || ({} as ISubscriber);
      const accountTypeDescription = tu.queries.report.getBraveTradelineDescription(tradeline);
      const originalCreditorValue = tu.queries.report.getOriginalCreditor(tradeline);
      const disputeFlagValue = tu.queries.report.getDisputeFlag(tradeline);
      return {
        tradeline: tradeline,
        subscriber: subscriber,
        creditorName: tradeline.Tradeline?.creditorName || '',
        lastReported: tradeline.Tradeline?.dateReported || '',
        accountTypeDescription: accountTypeDescription,
        accountTypeDescriptionValue: tradeline.Tradeline?.OpenClosed?.description || '',
        disputeFlag: 'Previously Disputed?',
        originalCreditor: 'Original Creditor',
        originalCreditorValue: originalCreditorValue,
        disputeFlagValue: disputeFlagValue,
        consumerStatement: consumerStatement,
      };
    });
    return negativeAccounts;
  }
}
