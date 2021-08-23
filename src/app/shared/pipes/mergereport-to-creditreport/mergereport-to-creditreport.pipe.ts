import { Pipe, PipeTransform } from '@angular/core';
import {
  ICreditReportCardInputs,
  ReportCardFieldTypes,
} from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { POSITIVE_PAY_STATUS_CODES } from '@shared/constants';
import { CreditReportGroups, CREDIT_REPORT_GROUPS } from '@shared/constants/credit-report';
import { ITradeLinePartition, IMergeReport } from '@shared/interfaces/merge-report.interface';
import { PreferencesStateModel } from '@store/preferences';
import { ICreditReportTradelinesCardGroup } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'mergereportToCreditreport',
})
export class MergereportToCreditreportPipe implements PipeTransform {
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;
  private creditReportAccounts: ICreditReportCardInputs[] | undefined;
  transform(report: IMergeReport, prefs: PreferencesStateModel): ICreditReportTradelinesCardGroup[] {
    this.tradeLines = report?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!this.tradeLines) return [{} as ICreditReportTradelinesCardGroup];
    return this.tradeLines instanceof Array
      ? this.sortByCreditReportGroups(this.tradeLines)
          .sortByDateOpened(this.tradeLines)
          .mapTradeLineToAccount(this.tradeLines)
          .groupCreditReportAccounts(this.creditReportAccounts)
      : this.mapTradeLineToAccount([this.tradeLines]).groupCreditReportAccounts(this.creditReportAccounts);
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private sortByCreditReportGroups(tradeLines: ITradeLinePartition[]): MergereportToCreditreportPipe {
    this.tradeLines = tu.sorters.report.sortByCreditReportGroups(tradeLines);
    return this;
  }

  /**
   * Sorts the tradeline by the date opened keeping the sort by account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private sortByDateOpened(tradeLines: ITradeLinePartition[]): MergereportToCreditreportPipe {
    this.tradeLines = tu.sorters.report.sortTradelineByDateOpened(tradeLines);
    return this;
  }

  /**
   * Map the tradeline object to the negative account object
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private mapTradeLineToAccount(tradeLines: ITradeLinePartition[]): MergereportToCreditreportPipe {
    this.creditReportAccounts = tradeLines.map((item) => {
      const firstField = this.getFirstFields(item);
      const secondField = this.getSecondFields(item);
      return {
        type: item.accountTypeSymbol,
        creditorName: item.Tradeline?.creditorName,
        isOpen: item.Tradeline?.OpenClosed,
        firstFieldName: firstField.firstFieldName,
        firstFieldValue: firstField.firstFieldValue,
        firstFieldType: firstField.firstFieldType,
        secondFieldName: secondField.secondFieldName,
        secondFieldValue: secondField.secondFieldValue,
        secondFieldType: secondField.secondFieldType,
        thirdFieldName: 'Payment Status',
        thirdFieldValue: item.Tradeline?.PayStatus?.description,
        status: item.Tradeline?.PayStatus?.symbol,
        positive: POSITIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`] || false,
        tradeline: item,
      } as ICreditReportCardInputs;
    });
    return this;
  }

  /**
   * Filters and groups the cards according to the account types
   * @param {ICreditReportCardInputs[] | undefined} reports
   * @returns
   */
  private groupCreditReportAccounts(
    reports: ICreditReportCardInputs[] | undefined,
  ): ICreditReportTradelinesCardGroup[] {
    if (!reports) return [{} as ICreditReportTradelinesCardGroup];
    let res: Record<string, any> = {};
    reports.forEach((r) => {
      let index = CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['group'];
      res[index] = res[index]
        ? {
            title: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['title'],
            group: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['group'],
            cards: [...res[index]['cards'], r],
          }
        : {
            title: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['title'],
            group: CREDIT_REPORT_GROUPS[r.type.toLowerCase()]['group'],
            cards: [r],
          };
    });
    let results: ICreditReportTradelinesCardGroup[] = Object.keys(res).map((k) => {
      return { ...res[k] } as ICreditReportTradelinesCardGroup;
    });
    return results;
  }

  /**
   * Helper function to get the label and value for the first fields
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  private getFirstFields(
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
  private getSecondFields(
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
