import { BRAVE_ACCOUNT_TYPE } from '@shared/constants';
import { AccountTypes, ACCOUNT_TYPES } from '@shared/constants/account-types';
import { IPublicPartition, ISubscriber, ITradeLinePartition } from '@shared/interfaces';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionReportQueries extends TransunionBase {
  constructor() {
    super();
  }

  /*===================================*/
  //           TRADELINE RECORDS
  /*===================================*/
  /**
   * Helper function to securely lookup the account type, falls back to pay status.
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getBraveTradelineDescription(partition: ITradeLinePartition | undefined): string {
    if (!partition) return this.bcMissing;
    const description = partition.accountTypeDescription;
    const status = BRAVE_ACCOUNT_TYPE[`${partition.Tradeline?.PayStatus?.symbol}`];
    return partition.accountTypeSymbol?.toLowerCase() === 'y' ? description || this.bcMissing : status;
  }

  /**
   * Helper function to securely lookup the account type, falls back to pay status.
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getTradelineTypeDescription(partition: ITradeLinePartition | undefined): AccountTypes {
    if (!partition) return AccountTypes.Unknown;
    const description = ACCOUNT_TYPES[`${partition.accountTypeSymbol?.toLowerCase()}`];
    return description ? description : AccountTypes.Unknown;
  }

  /*===================================*/
  //           CREDITOR RECORDS
  /*===================================*/
  /**
   * Helper function to securey look up the original creditor
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getOriginalCreditor(partition: ITradeLinePartition | undefined): string {
    if (!partition) return this.bcMissing;
    const originalCreditor = partition.Tradeline?.CollectionTrade?.originalCreditor;
    const creditorName = partition.Tradeline?.creditorName || this.bcMissing;
    if (partition.accountTypeSymbol?.toLowerCase() === 'y') {
      return originalCreditor ? originalCreditor : creditorName;
    } else {
      return creditorName;
    }
  }

  /*=====================================*/
  //            SUBSCRIBER
  /*=====================================*/
  /**
   * Get the subscriber from the merge report by tradeline subscriber key
   * @param tradeline
   * @param subs
   * @returns
   */
  static getTradelineSubscriberByKey(
    tradeline: ITradeLinePartition | undefined,
    subs: ISubscriber[] = [],
  ): ISubscriber | undefined {
    const code = tradeline?.Tradeline?.subscriberCode;
    if (!code || !tradeline) return;
    return subs.find((sub) => {
      return sub.subscriberCode == code;
    });
  }

  /**
   * Get the subscriber from the merge report by publicItem subscriber key
   * @param publicItem
   * @param subs
   * @returns
   */
  static getPublicSubscriberByKey(
    publicItem: IPublicPartition | undefined,
    subs: ISubscriber[] = [],
  ): ISubscriber | undefined {
    const code = publicItem?.PublicRecord?.subscriberCode;
    if (!code || !publicItem) return;
    return subs.find((sub) => {
      return sub.subscriberCode == code;
    });
  }

  /*=====================================*/
  //            DISPUTE FLAG
  /*=====================================*/
  /**
   * Helper function to securely look up the dispute flag
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getDisputeFlag(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'No';
    const symbol = partition.Tradeline?.DisputeFlag?.description || 'not';
    return symbol.indexOf('not') === -1 ? 'Yes' : 'No';
  }

  /*=====================================*/
  //            ACCOUNT TYPE
  /*=====================================*/
  /**
   * Helper function to securely lookup the account type
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getAccountType(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const description = partition.accountTypeDescription;
    const status = BRAVE_ACCOUNT_TYPE[`${partition.Tradeline?.PayStatus?.symbol}`];
    return partition.accountTypeSymbol?.toLowerCase() === 'y' ? description || 'No Data / Unknown' : status;
  }
}
