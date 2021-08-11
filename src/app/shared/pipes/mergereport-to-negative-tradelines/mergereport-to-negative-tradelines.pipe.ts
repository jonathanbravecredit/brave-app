import { Pipe, PipeTransform } from '@angular/core';
import { INegativeAccountCardInputs } from '@views/dashboard/snapshots/negative-account/negative-account-card/interfaces';
import { NEGATIVE_PAY_STATUS_CODES, BRAVE_ACCOUNT_TYPE } from '@shared/constants';
import { ITradeLinePartition, IMergeReport } from '@shared/interfaces/merge-report.interface';
import { DEFAULT_TRADELINE } from '@views/dashboard/snapshots/negative-account/negative-account-initial/constants';
import { MergeReportPipeHelper } from './helper';
import { TransunionUtil as TU } from '@shared/utils/transunion/transunion';

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

    const consumerStatement = TU.parser.parseBorrowerForCreditStatement(report.TrueLinkCreditReportType.Borrower) || '';

    const filteredTradelines = this.filterTradelines(this.tradeLines)
      .sortByAccountType(this.tradeLines)
      .sortByDateOpened(this.tradeLines)
      .mapTradeLineToAccount(this.tradeLines, consumerStatement);
    return filteredTradelines;
  }

  /**
   * Filters the tradeline by the negative status code
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  filterTradelines(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = TU.filter.filterTradelinesByStatusCodes(tradeLines, NEGATIVE_PAY_STATUS_CODES);
    return this;
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByAccountType(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = TU.sorter.sortTradelineByAccountType(tradeLines);
    return this;
  }

  /**
   * Sorts the tradeline by the date opened keeping the sort by account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByDateOpened(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = TU.sorter.sortTradelineByDateOpened(tradeLines);
    return this;
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  mapTradeLineToAccount(tradeLines: ITradeLinePartition[], consumerStatement: string): INegativeAccountCardInputs[] {
    const negativeAccounts = tradeLines.map((item) => {
      return {
        tradeline: item,
        creditorName: item.Tradeline?.creditorName || '',
        lastReported: item.Tradeline?.dateReported || '',
        accountTypeDescription: TU.query.lookupBraveTradelineDescription(item),
        accountTypeDescriptionValue: item.Tradeline?.OpenClosed?.description || '',
        disputeFlag: 'Previously Disputed?',
        originalCreditor: 'Original Creditor',
        originalCreditorValue: TU.query.lookupOriginalCreditor(item),
        disputeFlagValue: TU.query.lookupDisputeFlag(item),
        accountDetail: {
          accountNumber: item.Tradeline?.accountNumber || '',
          typeOfCollection: item.accountTypeAbbreviation || '',
          amountPastDue: item.Tradeline?.currentBalance || 0,
          dateOpened: item.Tradeline?.dateOpened || '',
          dateLastPayment: item.Tradeline?.GrantedTrade?.dateLastPayment || '',
          remarks: TU.parser.parseRemarks(item.Tradeline?.Remark),
          consumerStatement: consumerStatement,
        },
      };
    });
    return negativeAccounts;
  }
}
