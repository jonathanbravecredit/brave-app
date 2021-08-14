import { BRAVE_ACCOUNT_TYPE } from '@shared/constants';
import { AccountTypes, ACCOUNT_TYPES } from '@shared/constants/account-types';
import { IPublicPartition, ITradeLinePartition, ITrueLinkCreditReportType } from '@shared/interfaces';
import {
  ICreditBureau,
  ILineItem,
  IProduct,
  IPublicRecord,
  ISubjectRecord,
  ISummarySection,
  ITrade,
} from '@shared/interfaces/credit-bureau.interface';
import { CreditBureauFindingsType, INVESTIGATION_RESULTS_CODE_MAPPING } from '@shared/utils/transunion/constants';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionQueries extends TransunionBase {
  static resultCodeMap = INVESTIGATION_RESULTS_CODE_MAPPING;
  constructor() {
    super();
  }

  /**
   * Helper function to securely lookup the account type, falls back to pay status.
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static lookupBraveTradelineDescription(partition: ITradeLinePartition | undefined): string {
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
  static lookupTradelineTypeDescription(partition: ITradeLinePartition | undefined): AccountTypes {
    if (!partition) return AccountTypes.Unknown;
    const description = ACCOUNT_TYPES[`${partition.accountTypeSymbol?.toLowerCase()}`];
    return description ? description : AccountTypes.Unknown;
  }

  /**
   * Helper function to securey look up the original creditor
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static lookupOriginalCreditor(partition: ITradeLinePartition | undefined): string {
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
   * Helper function to securely look up the dispute flag
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static lookupDisputeFlag(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'No';
    const symbol = partition.Tradeline?.DisputeFlag?.description || 'not';
    return symbol.indexOf('not') === -1 ? 'Yes' : 'No';
  }

  /**
   * Helper function to securely look up the dispute flag
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static lookupLineItemFromSummarySection(summarySection: ISummarySection, trade: ITrade): ILineItem | undefined {
    if (!summarySection || !trade) return;
    const items = summarySection.lineItem;
    const lineItems = items instanceof Array ? items : [items];
    return lineItems.find((item) => {
      return item.itemKey === trade.itemKey;
    });
  }

  /**
   * Get the subject record from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static lookupCreditBureauFindings(credit: ICreditBureau | undefined): ILineItem[] | [] {
    if (!credit) return [];
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = product.subject.subjectRecord;

    const lineItems = subjectRecord?.fileSummary?.disclosureCoverInfo?.summarySection?.lineItem;
    if (lineItems instanceof Array) {
      return lineItems;
    } else {
      return lineItems ? [lineItems] : [];
    }
  }

  /**
   * Get the subject record from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static lookupCreditBureauFindingsByType(
    credit: ICreditBureau | undefined,
    type: CreditBureauFindingsType,
  ): ILineItem[] | [] {
    if (!credit) return [];
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = product.subject.subjectRecord;

    const findings = subjectRecord?.fileSummary?.disclosureCoverInfo?.summarySection?.lineItem;
    let findingsArr = findings instanceof Array ? findings : findings ? [findings] : [];

    const query =
      type === CreditBureauFindingsType.PublicRecord
        ? this.lookupCreditBureauPublicRecords
        : this.lookupCreditBureauTrades;
    const creditItems = query(credit); // public or trade items

    return findingsArr.filter((item) => {
      const key = item.itemKey;
      return creditItems.findIndex((item: ITrade | IPublicRecord) => item.itemKey == key) >= 0;
    });
  }

  /**
   * Get the subject record from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static lookupCreditBureauPublicRecords(credit: ICreditBureau | undefined): IPublicRecord[] | [] {
    if (!credit) return [];
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = product.subject.subjectRecord;

    const publicRecord = subjectRecord?.custom?.credit?.publicRecord;
    if (publicRecord instanceof Array) {
      return publicRecord;
    } else {
      return publicRecord ? [publicRecord] : [];
    }
  }

  /**
   * Get the trades from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static lookupCreditBureauTrades(credit: ICreditBureau | undefined): ITrade[] | [] {
    if (!credit) return [];
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = product.subject.subjectRecord;

    const trade = subjectRecord?.custom?.credit?.trade;
    if (trade instanceof Array) {
      return trade;
    } else {
      return trade ? [trade] : [];
    }
  }
  /**
   * uses the item key from the credit bureau findings and looks up the update partition in the merge report
   * @param cbKey
   * @param partition
   * @returns
   */
  static lookupUpdatedTradelineFromCreditBureauKey(
    cbKey: string,
    partition: ITradeLinePartition[],
  ): ITradeLinePartition | undefined {
    const memberCode = cbKey.split('_').slice(0, 2)[1];
    if (!partition) return;
    return partition.find((item: ITradeLinePartition) => {
      const code = item.Tradeline?.subscriberCode;
      console.log('lookupInvestigationResultFromCreditBureau  ===> start');
      console.log('code ===> ', code);
      console.log('memberCode ===> ', memberCode);
      return code === memberCode;
    });
  }

  /**
   * uses the Tri Merge TrueLink report and returns the tradeline partitions array
   * @param report
   * @returns
   */
  static lookupUpdatedTradelineFromInvestigationResults(report: ITrueLinkCreditReportType): ITradeLinePartition[] | [] {
    if (!report) return [];
    const partition = report.TradeLinePartition;
    if (partition instanceof Array) {
      return partition;
    } else {
      return partition ? [partition] : [];
    }
  }

  /**
   * uses the Tri Merge TrueLink report and returns the public partitions array
   * @param report
   * @returns
   */
  static lookupUpdatedPublicRecordFromInvestigationResults(report: ITrueLinkCreditReportType): IPublicPartition[] | [] {
    if (!report) return [];
    const partition = report.PulblicRecordPartition;
    if (partition instanceof Array) {
      return partition;
    } else {
      return partition ? [partition] : [];
    }
  }

  /**
   * uses the item key from the credit bureau findings and looks up the update partition in the merge report
   * @param cbKey
   * @param partition
   * @returns
   */
  static lookupUpdatedPublicRecordFromCreditBureauKey(
    cbKey: string,
    partition: IPublicPartition[],
  ): IPublicPartition | undefined {
    const memberCode = cbKey.split('_').slice(0, 2)[1];
    if (!partition) return;
    return partition.find((item: IPublicPartition) => {
      const code = item.PublicRecord?.subscriberCode;
      console.log('lookupUpdatedPublicRecordFromCreditBureauKey  ===> start');
      console.log('code ===> ', code);
      console.log('memberCode ===> ', memberCode);
      return code === memberCode;
    });
  }

  static findResultCode(result: string): string {
    // check one...exact match
    const exactMatch = this.resultCodeMap.find((item) => {
      return item.title.toLowerCase() == result.toLowerCase();
    });
    if (exactMatch) return exactMatch.type;

    //check two..squishy match
    const parsedResult = result.split(' ');
    let match: string = '';
    let matchCount: number = 0;
    this.resultCodeMap.forEach((item) => {
      const parsedTitle = item.title.split(' ');
      let count: number = 0;
      parsedResult.forEach((word) => {
        const found = parsedTitle.find((t) => t.toLowerCase() == word.toLowerCase());
        if (found) count++;
      });
      if (count > matchCount) {
        match = item.type;
        matchCount = count;
      }
    });
    return match;
  }
}
