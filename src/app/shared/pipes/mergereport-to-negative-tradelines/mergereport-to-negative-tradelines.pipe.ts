import { Pipe, PipeTransform } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { NEGATIVE_PAY_STATUS_CODES, BRAVE_ACCOUNT_TYPE } from '@shared/constants';
import { ITradeLinePartition, IMergeReport } from "@shared/interfaces/merge-report.interface";
import { DEFAULT_TRADELINE } from '@views/negative-account/negative-account-initial/constants';

@Pipe({
  name: 'mergereportToNegativeTradelines',
})
export class MergereportToNegativeTradelinesPipe implements PipeTransform {
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;

  transform(report: IMergeReport): INegativeAccountCardInputs[] | undefined {
    this.tradeLines = report.TrueLinkCreditReportType.TradeLinePartition;
    if (!this.tradeLines) return [DEFAULT_TRADELINE];
    return this.tradeLines instanceof Array
      ? this.filterTradelines(this.tradeLines)
          .sortByAccountType(this.tradeLines)
          .sortByDateOpened(this.tradeLines)
          .mapTradeLineToAccount(this.tradeLines)
      : this.mapTradeLineToAccount([this.tradeLines]);
  }

  /**
   * Filters the tradeline by the negative status code
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  filterTradelines(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = tradeLines.filter((item) => {
      const status = NEGATIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`];
      return !!status;
    });
    return this;
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByAccountType(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = [
      ...tradeLines.sort((a, b) => {
        if (a.accountTypeSymbol?.toLowerCase() === 'y' && b.accountTypeDescription?.toLowerCase() !== 'y') {
          return 1;
        }
        if (a.accountTypeSymbol?.toLowerCase() !== 'y' && b.accountTypeDescription?.toLowerCase() === 'y') {
          return -1;
        }
        return 0;
      }),
    ];
    return this;
  }

  /**
   * Sorts the tradeline by the date opened keeping the sort by account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByDateOpened(tradeLines: ITradeLinePartition[]): MergereportToNegativeTradelinesPipe {
    this.tradeLines = [
      ...tradeLines.sort((a, b) => {
        if (a.accountTypeSymbol !== b.accountTypeSymbol) {
          return 0;
        }
        if (a.Tradeline?.dateOpened! < b.Tradeline?.dateOpened!) {
          return 1;
        }
        if (a.Tradeline?.dateOpened! > b.Tradeline?.dateOpened!) {
          return -1;
        }
        return 0;
      }),
    ];
    return this;
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  mapTradeLineToAccount(tradeLines: ITradeLinePartition[]): INegativeAccountCardInputs[] {
    const negativeAccounts = tradeLines.map((item) => {
      return {
        tradeline: item,
        creditorName: item.Tradeline?.creditorName || '',
        lastReported: item.Tradeline?.dateReported || '',
        accountTypeDescription: this.lookupAccountType(item),
        accountTypeDescriptionValue: item.Tradeline?.OpenClosed?.description || '',
        disputeFlag: 'Previously Disputed?',
        originalCreditor: 'Original Creditor',
        originalCreditorValue: this.lookupOriginalCreditor(item),
        disputeFlagValue: this.lookupDisputeFlag(item),
        accountDetail: {
          accountNumber: item.Tradeline?.accountNumber || '',
          typeOfCollection: item.accountTypeAbbreviation || '',
          amountPastDue: item.Tradeline?.currentBalance || 0,
          dateOpened: item.Tradeline?.dateOpened || '',
          dateLastPayment: item.Tradeline?.GrantedTrade?.dateLastPayment || '',
          remarks: item.Tradeline?.Remark?.customRemark || '',
        },
      };
    });
    return negativeAccounts;
  }

  /**
   * Helper function to securely lookup the account type
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  lookupAccountType(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const description = partition.accountTypeDescription;
    const status = BRAVE_ACCOUNT_TYPE[`${partition.Tradeline?.PayStatus?.symbol}`];
    return partition.accountTypeSymbol?.toLowerCase() === 'y' ? description || 'No Data / Unknown' : status;
  }

  /**
   * Helper function to securey look up the original creditor
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  lookupOriginalCreditor(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const originalCreditor = partition.Tradeline?.CollectionTrade?.originalCreditor;
    const creditorName = partition.Tradeline?.creditorName || 'unknown';
    if (partition.accountTypeSymbol?.toLowerCase() === 'y') {
      return originalCreditor ? originalCreditor : creditorName;
    } else {
      return creditorName;
    }
  }

  /**
   * Helper function to securely look up the dispute flag
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  lookupDisputeFlag(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'No';
    const symbol = partition.Tradeline?.DisputeFlag?.description || 'not';
    return symbol.indexOf('not') === -1 ? 'Yes' : 'No';
  }
}
