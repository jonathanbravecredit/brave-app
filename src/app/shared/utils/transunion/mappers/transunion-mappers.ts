import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces';
import { IDisputePublicItem } from '@shared/services/dispute/dispute.interfaces';
import { TransunionBase } from '@shared/utils/transunion/transunion-base';
import { TransunionParsers } from '@shared/utils/transunion/parsers/transunion-parsers';
import { TransunionQueries } from '@shared/utils/transunion/queries/transunion-queries';
import { IPersonalItemsDetailsTable } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/interfaces';
import {
  ICreditReportCardInputs,
  ReportCardFieldTypes,
} from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { CREDIT_REPORT_GROUPS, CreditReportGroups } from '@shared/constants/credit-report';
import { POSITIVE_PAY_STATUS_CODES } from '@shared/constants/pay-status-codes';

export class TransunionMappers extends TransunionBase {
  static parser = TransunionParsers;
  static query = TransunionQueries;

  constructor() {
    super();
  }

  static mapBorrowerToDetails(borrower: IBorrower): IPersonalItemsDetailsTable {
    let names =
      borrower.BorrowerName instanceof Array
        ? borrower.BorrowerName
        : borrower.BorrowerName
        ? [borrower.BorrowerName]
        : [];
    let employers =
      borrower.Employer instanceof Array ? borrower.Employer : borrower.Employer ? [borrower.Employer] : [];
    let prevAddress =
      borrower.PreviousAddress instanceof Array
        ? borrower.PreviousAddress
        : borrower.PreviousAddress
        ? [borrower.PreviousAddress]
        : [];
    let currAddress =
      borrower.BorrowerAddress instanceof Array ? borrower.BorrowerAddress[0] : borrower.BorrowerAddress;
    let phones =
      borrower.BorrowerTelephone instanceof Array
        ? borrower.BorrowerTelephone
        : borrower.BorrowerTelephone
        ? [borrower.BorrowerTelephone]
        : [];

    const unNames = names.map((name) => this.parser.report.unparseName(name));
    const unAddress = this.parser.report.unparseAddress(currAddress?.CreditAddress);
    const unPrevAddress = prevAddress.map((addr) => this.parser.report.unparseAddress(addr?.CreditAddress));
    const unPhones = phones.map((phone) => this.parser.report.unparsePhone(phone?.PhoneNumber));
    const unEmployers = employers.map((emp) => this.parser.report.unparseEmployer(emp));
    const results = {
      personalItem: borrower,
      ssn: `${borrower.SocialSecurityNumber}`,
      currentAddress: unAddress,
      borrowerNamesArray: unNames || [],
      previousAddressesArray: unPrevAddress || [],
      telephonesArray: unPhones || [],
      employersArray: unEmployers || [],
      borrowersNamesRaw: names || [],
      currentAddressRaw: currAddress || {},
      previousAddressesRaw: prevAddress || [],
      employersRaw: employers || [],
      telephonesRaw: phones || [],
    };
    return results;
  }

  static mapPublicItemToDispute(item: IPublicPartition): IDisputePublicItem {
    const publicRecord = item.PublicRecord instanceof Array ? item.PublicRecord[0] : item.PublicRecord; // schema says array but should not be;
    return {
      publicPartition: item,
      docketNumber: publicRecord?.referenceNumber || this.bcMissing,
      courtName: publicRecord?.courtName || this.bcMissing,
      courtLocation: publicRecord?.LegalItem?.CourtLocation?.description || this.bcMissing,
      dateFiled: publicRecord?.dateFiled || this.bcMissing,
      dateUpdated: publicRecord?.dateUpdated || this.bcMissing,
      publicItemType: publicRecord?.Type?.description || this.bcMissing,
      expirationDate: publicRecord?.ExpirationDate || this.bcMissing,
    };
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  static mapTradelineToSummaryCard(tradeLines: ITradeLinePartition[]): ICreditReportCardInputs[] {
    return tradeLines.map((item) => {
      const firstField = this.getFirstFields(item);
      const secondField = this.getSecondFields(item);
      const { accountTypeSymbol, Tradeline: { creditorName, OpenClosed, PayStatus } = {} } = item;
      return {
        type: accountTypeSymbol,
        creditorName: creditorName,
        isOpen: `${OpenClosed?.symbol}`.toLowerCase() !== 'c',
        firstFieldName: firstField.firstFieldName,
        firstFieldValue: firstField.firstFieldValue,
        firstFieldType: firstField.firstFieldType,
        secondFieldName: secondField.secondFieldName,
        secondFieldValue: secondField.secondFieldValue,
        secondFieldType: secondField.secondFieldType,
        thirdFieldName: 'Payment Status',
        thirdFieldValue: PayStatus?.description,
        status: PayStatus?.symbol,
        positive: POSITIVE_PAY_STATUS_CODES[`${PayStatus?.symbol}`] || false,
        tradeline: item,
      } as ICreditReportCardInputs;
    });
  }

  /**
   * Helper function to get the label and value for the first fields
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  private static getFirstFields(
    partition: ITradeLinePartition | undefined,
  ): { firstFieldName: string; firstFieldValue: string | number; firstFieldType: ReportCardFieldTypes } {
    const sym = partition?.accountTypeSymbol?.toLowerCase();
    if (!sym) return { firstFieldName: 'Unknown', firstFieldValue: 'Unknown', firstFieldType: 'string' };
    const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym]['group'];
    switch (group) {
      case CreditReportGroups.CreditCards:
      case CreditReportGroups.InstallmentLoans:
      case CreditReportGroups.Mortgages:
        return {
          firstFieldName: 'Current Balance',
          firstFieldValue: partition?.Tradeline?.currentBalance || 0,
          firstFieldType: 'currency',
        };
      case CreditReportGroups.CollectionsAccounts:
        return {
          firstFieldName: 'Original Creditor',
          firstFieldValue: partition?.Tradeline?.CollectionTrade?.originalCreditor || '',
          firstFieldType: 'string',
        };
      default:
        return { firstFieldName: 'Unknown', firstFieldValue: 'Unknown', firstFieldType: 'string' };
    }
  }

  /**
   * Helper function to get the label and value for the second fields
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  private static getSecondFields(
    partition: ITradeLinePartition | undefined,
  ): { secondFieldName: string; secondFieldValue: string | number; secondFieldType: ReportCardFieldTypes } {
    const sym = partition?.accountTypeSymbol?.toLowerCase();
    if (!sym) return { secondFieldName: 'Unknown', secondFieldValue: 'Unknown', secondFieldType: 'string' };
    const group = CREDIT_REPORT_GROUPS[sym]['group'];
    switch (group) {
      case CreditReportGroups.CreditCards:
        return {
          secondFieldName: 'Credit Limit',
          secondFieldValue: partition?.Tradeline?.GrantedTrade?.CreditLimit || 0,
          secondFieldType: 'currency',
        };
      case CreditReportGroups.CollectionsAccounts:
        return {
          secondFieldName: 'Original Creditor',
          secondFieldValue: partition?.Tradeline?.CollectionTrade?.originalCreditor || '',
          secondFieldType: 'string',
        };
      case CreditReportGroups.InstallmentLoans:
        return {
          secondFieldName: 'Original Loan Amount',
          secondFieldValue: partition?.Tradeline?.highBalance || '',
          secondFieldType: 'currency',
        };
      case CreditReportGroups.Mortgages:
        return {
          secondFieldName: 'Loan Amount',
          secondFieldValue: partition?.Tradeline?.highBalance || '',
          secondFieldType: 'currency',
        };
      default:
        return { secondFieldName: 'Unknown', secondFieldValue: 'Unknown', secondFieldType: 'string' };
    }
  }
}
