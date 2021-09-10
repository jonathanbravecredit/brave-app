import {
  ICreditBureau,
  ILineItem,
  IProduct,
  IPublicRecord,
  ISummarySection,
  ITrade,
} from '@shared/interfaces/credit-bureau.interface';
import {
  IPublicPartition,
  ITradeLinePartition,
  ITrueLinkCreditReportType,
} from '@shared/interfaces/merge-report.interface';
import { CreditBureauFindingsType, INVESTIGATION_RESULTS_CODE_MAPPING } from '@shared/utils/transunion/constants';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';

export class TransunionDisputeQueries extends TransunionBase {
  static resultCodeMap = INVESTIGATION_RESULTS_CODE_MAPPING;
  constructor() {
    super();
  }

  /*===================================*/
  //           PUBLIC RECORDS
  //  - INCLUDES ORIGINAL AND UPDATED
  /*===================================*/
  /**
   * uses the item key from the credit bureau findings and looks up the update partition in the merge report
   * @param cbKey
   * @param partition
   * @returns
   */
  static getUpdatedPublicRecordByKey(cbKey: string, partition: IPublicPartition[]): IPublicPartition | undefined {
    const memberCode = cbKey.split('_').slice(0, 2)[1];
    if (!partition) return;
    return partition.find((item: IPublicPartition) => {
      const code = item.PublicRecord?.subscriberCode;
      return code == memberCode;
    });
  }

  /**
   * uses the Tri Merge TrueLink report (as part of investigation results) and returns the public partitions array
   * @param report
   * @returns
   */
  static listUpdatedPublicRecords(report: ITrueLinkCreditReportType): IPublicPartition[] | [] {
    if (!report) return [];
    const partition = report.PulblicRecordPartition;
    if (partition instanceof Array) {
      return partition;
    } else {
      return partition ? [partition] : [];
    }
  }

  /**
   * List the subject record from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static listPublicRecords(credit: ICreditBureau | undefined): IPublicRecord[] | [] {
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

  /*===================================*/
  //          TRADELINE RECORDS
  //  - INCLUDES ORIGINAL AND UPDATED
  /*===================================*/
  /**
   * uses the Tri Merge TrueLink report (as part of investigation results) and returns the tradeline partitions array
   * @param report
   * @returns
   */
  static listUpdatedTradelines(report: ITrueLinkCreditReportType): ITradeLinePartition[] | [] {
    if (!report) return [];
    const partition = report.TradeLinePartition;
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
  static getUpdatedTradelineByKey(cbKey: string, partition: ITradeLinePartition[]): ITradeLinePartition | undefined {
    const memberCode = cbKey.split('_').slice(0, 2)[1];
    if (!partition) return;
    return partition.find((item: ITradeLinePartition) => {
      const code = item.Tradeline?.subscriberCode;
      return code == memberCode;
    });
  }

  /*===================================*/
  //           TRADE RECORDS
  /*===================================*/
  /**
   * List the trades from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static listTrades(credit: ICreditBureau | undefined): ITrade[] | [] {
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

  /*===================================*/
  //          FINDINGS RECORDS
  /*===================================*/
  /**
   * Helper function to securely look up the dispute flag
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  static getFindingByTrade(summarySection: ISummarySection, trade: ITrade): ILineItem | undefined {
    if (!summarySection || !trade) return;
    const items = summarySection.lineItem;
    const lineItems = items instanceof Array ? items : [items];
    return lineItems.find((item) => {
      return item.itemKey === trade.itemKey;
    });
  }

  /**
   * List the subject record from the credit bureau file returned in dispute results
   * @param credit
   * @returns
   */
  static listFindings(credit: ICreditBureau | undefined): ILineItem[] | [] {
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
  static listFindingsByType(credit: ICreditBureau | undefined, type: CreditBureauFindingsType): ILineItem[] | [] {
    if (!credit) return [];
    const prodArr = credit?.productArray;
    const product = (prodArr instanceof Array ? prodArr[0] : prodArr?.product) as IProduct;
    const subjectRecord = product.subject.subjectRecord;

    const findings = subjectRecord?.fileSummary?.disclosureCoverInfo?.summarySection?.lineItem;
    let findingsArr = findings instanceof Array ? findings : findings ? [findings] : [];

    const query = type === CreditBureauFindingsType.PublicRecord ? this.listPublicRecords : this.listTrades;
    const creditItems = query(credit); // public or trade items

    return findingsArr.filter((item) => {
      const key = item.itemKey;
      return creditItems.findIndex((item: ITrade | IPublicRecord) => item.itemKey == key) >= 0;
    });
  }

  /*===================================*/
  //          RESULT CODE
  /*===================================*/
  /**
   * Lookup the results of the investigation and return our codes
   * @param result
   * @returns
   */
  static getResultCode(result: string): string {
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
