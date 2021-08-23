import { Pipe, PipeTransform } from '@angular/core';
import { BRAVE_ACCOUNT_TYPE } from '@shared/constants';
import { IRemark } from '@shared/interfaces/common-tu.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { IDisputeTradelineItem } from '@shared/services/dispute/dispute.interfaces';

@Pipe({
  name: 'tradelineToDispute',
})
export class TradelineToDisputePipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition | null): IDisputeTradelineItem | undefined {
    if (!tradeline) return;
    const dispute = this.mapTradeLineToAccount(tradeline);
    return dispute;
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition} tradeLines
   * @returns
   */
  mapTradeLineToAccount(tradeline: ITradeLinePartition): IDisputeTradelineItem {
    const mapped = {
      tradeline: tradeline,
      creditorName: tradeline.Tradeline?.creditorName || '',
      lastReported: tradeline.Tradeline?.dateReported || '',
      accountTypeDescription: this.lookupAccountType(tradeline),
      accountTypeDescriptionValue: tradeline.Tradeline?.OpenClosed?.description || '',
      disputeFlag: 'Previously Disputed?',
      originalCreditor: 'Original Creditor',
      originalCreditorValue: this.getOriginalCreditor(tradeline),
      disputeFlagValue: this.getDisputeFlag(tradeline),
      accountDetail: {
        accountNumber: tradeline.Tradeline?.accountNumber || '',
        typeOfCollection: tradeline.accountTypeAbbreviation || '',
        amountPastDue: tradeline.Tradeline?.currentBalance || 0,
        dateOpened: tradeline.Tradeline?.dateOpened || '',
        dateLastPayment: tradeline.Tradeline?.GrantedTrade?.dateLastPayment || '',
        remarks: this.parseRemarks(tradeline.Tradeline?.Remark),
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
  getOriginalCreditor(partition: ITradeLinePartition | undefined): string {
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
  getDisputeFlag(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'No';
    const symbol = partition.Tradeline?.DisputeFlag?.description || 'not';
    return symbol.indexOf('not') === -1 ? 'Yes' : 'No';
  }

  /**
   * Flatten the remarks into one paragraph
   * @param remarks
   * @returns
   */
  parseRemarks(remarks: IRemark | IRemark[] | undefined): string {
    if (remarks === undefined) return '';
    return remarks instanceof Array
      ? remarks.map((r) => r.customRemark || '').reduce((a, b) => `${a} \n ${b}`)
      : remarks.customRemark || '';
  }
}
