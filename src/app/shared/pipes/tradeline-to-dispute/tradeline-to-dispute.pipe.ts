import { Pipe, PipeTransform } from '@angular/core';
import { BRAVE_ACCOUNT_TYPE } from '@shared/constants';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { IDisputeItem } from '@shared/services/dispute/dispute.interfaces';

@Pipe({
  name: 'tradelineToDispute',
})
export class TradelineToDisputePipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition | null): IDisputeItem | undefined {
    if (!tradeline) return;
    return this.mapTradeLineToAccount(tradeline);
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition} tradeLines
   * @returns
   */
  mapTradeLineToAccount(tradeline: ITradeLinePartition): IDisputeItem {
    const mapped = {
      tradeline: tradeline,
      creditorName: tradeline.Tradeline?.creditorName || '',
      lastReported: tradeline.Tradeline?.dateReported || '',
      accountTypeDescription: this.lookupAccountType(tradeline),
      accountTypeDescriptionValue: tradeline.Tradeline?.OpenClosed?.description || '',
      disputeFlag: 'Previously Disputed?',
      originalCreditor: "Original Creditor",
      originalCreditorValue: this.lookupOriginalCreditor(tradeline),
      disputeFlagValue: this.lookupDisputeFlag(tradeline),
      accountDetail: {
        accountNumber: tradeline.Tradeline?.accountNumber || '',
        typeOfCollection: tradeline.accountTypeAbbreviation || '',
        amountPastDue: tradeline.Tradeline?.currentBalance || 0,
        dateOpened: tradeline.Tradeline?.dateOpened || '',
        dateLastPayment: tradeline.Tradeline?.GrantedTrade?.dateLastPayment || '',
        remarks: tradeline.Tradeline?.Remark?.customRemark || '',
      },
    };
    return mapped;
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
