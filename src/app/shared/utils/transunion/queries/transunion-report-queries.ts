import { BRAVE_ACCOUNT_TYPE, NEGATIVE_PAY_STATUS_CODES } from '@shared/constants';
import { AccountTypes, ACCOUNT_TYPES } from '@shared/constants/account-types';
import { IMergeReport, IPublicPartition, ISubscriber, ITradeLinePartition } from '@shared/interfaces';
import { FORBEARANCE_TYPE } from '@shared/utils/constants';
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

  /**
   * Helper function to calculate the max delinquency.
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getMaxDelinquency(partition: ITradeLinePartition | undefined): number {
    if (!partition) return 0;
    const count30 = partition.Tradeline?.GrantedTrade?.late30Count || 0;
    const count60 = partition.Tradeline?.GrantedTrade?.late60Count || 0;
    const count90 = partition.Tradeline?.GrantedTrade?.late90Count || 0;
    return +count30 + +count60 + +count90;
  }

  /*===================================*/
  //           CREDITOR RECORDS
  /*===================================*/
  /**
   * Helper function to securey look up the original creditor
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getOriginalCreditor(partition: ITradeLinePartition | undefined | null): string {
    if (!partition) return this.bcMissing;
    const originalCreditor = partition.Tradeline?.CollectionTrade?.originalCreditor;
    const creditorName = partition.Tradeline?.creditorName || this.bcMissing;
    if (partition.accountTypeSymbol?.toLowerCase() === 'y') {
      return originalCreditor ? originalCreditor : creditorName;
    } else {
      return creditorName;
    }
  }

  /**
   * Helper function to securey look up the original creditor
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getCreditor(partition: ITradeLinePartition | undefined | null): string {
    if (!partition) return this.bcMissing;
    return partition.Tradeline?.creditorName || this.bcMissing;
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
  //            SUBSCRIBER
  /*=====================================*/
  /**
   * Get the subscriber from the merge report by tradeline subscriber key
   * @param tradeline
   * @param subs
   * @returns
   */
  static listSubscribers(report: IMergeReport): ISubscriber[] | [] {
    const subscribers = report.TrueLinkCreditReportType?.Subscriber;
    if (subscribers instanceof Array) return subscribers;
    if (subscribers === undefined) return [];
    return [subscribers];
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

  /**
   * Helper function to securely lookup the account type
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static isForbearanceAccount(partition: ITradeLinePartition | undefined): boolean {
    if (!partition) return false;
    const symbol = partition.accountTypeSymbol?.toLowerCase();
    if (!symbol) return false;
    const accountType = FORBEARANCE_TYPE[symbol];
    if (!accountType) return false;
    if (symbol.toLowerCase() === 'm') return true; // simple mortgage
    const industry = partition.Tradeline?.IndustryCode?.description;
    if (industry?.toLowerCase().includes('student')) {
      return true;
    }
    return false;
  }

  /**
   * Helper function to securely lookup the account type
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static isNegativeAccount(partition: ITradeLinePartition | undefined): boolean {
    if (!partition) return false;
    const symbol = partition.Tradeline?.PayStatus?.symbol;
    if (!symbol) return false;
    return !!NEGATIVE_PAY_STATUS_CODES[symbol];
  }
}
