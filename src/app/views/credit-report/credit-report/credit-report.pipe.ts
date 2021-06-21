import { Pipe, PipeTransform } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import {
  CreditReportGroups,
  CREDIT_REPORT_GROUPS,
} from '@shared/data/credit-report';
import {
  BRAVE_ACCOUNT_TYPE,
  NEGATIVE_PAY_STATUS_CODES,
} from '@shared/data/pay-status-codes';
import {
  IMergeReport,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { ICreditReportCardGroup } from '@views/credit-report/credit-report-pure/credit-report-pure.component';

@Pipe({
  name: 'creditReport',
})
export class CreditReportPipe implements PipeTransform {
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;
  private creditReportAccounts: ICreditReportCardInputs[] | undefined;
  transform(report: IMergeReport): ICreditReportCardGroup[] {
    this.tradeLines = report.TrueLinkCreditReportType.TradeLinePartition;
    if (!this.tradeLines) return [{} as ICreditReportCardGroup];
    return this.tradeLines instanceof Array
      ? this.filterTradelines(this.tradeLines)
          .sortByAccountType(this.tradeLines)
          .sortByDateOpened(this.tradeLines)
          .mapTradeLineToAccount(this.tradeLines)
          .groupCreditReportAccounts(this.creditReportAccounts)
      : this.mapTradeLineToAccount([this.tradeLines]).groupCreditReportAccounts(
          this.creditReportAccounts
        );
  }

  /**
   * Filters the tradeline by the negative status code
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  filterTradelines(tradeLines: ITradeLinePartition[]): CreditReportPipe {
    this.tradeLines = tradeLines.filter((item) => {
      const status =
        NEGATIVE_PAY_STATUS_CODES[`${item.Tradeline?.PayStatus?.symbol}`];
      return !!status;
    });
    return this;
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByAccountType(tradeLines: ITradeLinePartition[]): CreditReportPipe {
    this.tradeLines = [
      ...tradeLines.sort((a, b) => {
        const symA = a.accountTypeSymbol?.toLowerCase();
        const symB = b.accountTypeSymbol?.toLowerCase();
        if (!symA || !symB) return 0;
        return (
          CREDIT_REPORT_GROUPS[symA]['order'] -
          CREDIT_REPORT_GROUPS[symB]['order']
        );
      }),
    ];
    return this;
  }

  /**
   * Sorts the tradeline by the date opened keeping the sort by account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  sortByDateOpened(tradeLines: ITradeLinePartition[]): CreditReportPipe {
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
  mapTradeLineToAccount(tradeLines: ITradeLinePartition[]): CreditReportPipe {
    this.creditReportAccounts = tradeLines.map((item) => {
      const firstField = this.getFirstFields(item);
      const secondField = this.getSecondFields(item);
      return {
        type: item.accountTypeSymbol,
        creditorName: CREDIT_REPORT_GROUPS[item.accountTypeSymbol!],
        isOpen: item.Tradeline?.OpenClosed,
        firstFieldName: firstField.firstFieldName,
        firstFieldValue: firstField.firstFieldValue,
        secondFieldName: secondField.secondFieldName,
        secondFieldValue: secondField.secondFieldValue,
        thirdFieldName: 'Payment Status',
        thirdFieldValue: item.Tradeline?.PayStatus?.description,
      } as ICreditReportCardInputs;
    });
    return this;
  }

  /**
   * Filters and groups the cards according to the account types
   * @param {ICreditReportCardInputs[] | undefined} reports
   * @returns
   */
  groupCreditReportAccounts(
    reports: ICreditReportCardInputs[] | undefined
  ): ICreditReportCardGroup[] {
    if (!reports) return [{} as ICreditReportCardGroup];
    const creditCards = reports.filter(
      (r) => r.type.toLowerCase() === 'c' || r.type.toLowerCase() === 'r'
    );
    const collections = reports.filter((r) => r.type.toLowerCase() === 'y');
    const installments = reports.filter((r) => r.type.toLowerCase() === 'i');
    const mortgages = reports.filter((r) => r.type.toLowerCase() === 'm');
    let results: ICreditReportCardGroup[] = [];
    results = creditCards.length
      ? [
          ...results,
          {
            title: CREDIT_REPORT_GROUPS['c']['title'],
            group: CREDIT_REPORT_GROUPS['c']['group'],
            cards: creditCards,
          },
        ]
      : results;
    results = collections.length
      ? [
          ...results,
          {
            title: CREDIT_REPORT_GROUPS['y']['title'],
            group: CREDIT_REPORT_GROUPS['y']['group'],
            cards: collections,
          },
        ]
      : results;
    results = installments.length
      ? [
          ...results,
          {
            title: CREDIT_REPORT_GROUPS['i']['title'],
            group: CREDIT_REPORT_GROUPS['i']['group'],
            cards: installments,
          },
        ]
      : results;
    results = mortgages.length
      ? [
          ...results,
          {
            title: CREDIT_REPORT_GROUPS['m']['title'],
            group: CREDIT_REPORT_GROUPS['m']['group'],
            cards: mortgages,
          },
        ]
      : results;
    return results;
  }

  /**
   * Helper function to securely lookup the account type
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  lookupAccountType(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const description = partition.accountTypeDescription;
    const status =
      BRAVE_ACCOUNT_TYPE[`${partition.Tradeline?.PayStatus?.symbol}`];
    return partition.accountTypeSymbol?.toLowerCase() === 'y'
      ? description || 'No Data / Unknown'
      : status;
  }

  /**
   * Helper function to securey look up the original creditor
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  lookupOriginalCreditor(partition: ITradeLinePartition | undefined): string {
    if (!partition) return 'unknown';
    const originalCreditor =
      partition.Tradeline?.CollectionTrade?.originalCreditor;
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

  /**
   * Helper function to get the label and value for the first fields
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  getFirstFields(
    partition: ITradeLinePartition | undefined
  ): { firstFieldName: string; firstFieldValue: string | number } {
    const sym = partition?.accountTypeSymbol?.toLowerCase();
    if (!sym) return { firstFieldName: 'Unknown', firstFieldValue: 'Unknown' };
    const group = CREDIT_REPORT_GROUPS[sym];
    switch (group) {
      case CreditReportGroups.CreditCards:
      case CreditReportGroups.InstallmentLoans:
      case CreditReportGroups.Mortgages:
        return {
          firstFieldName: 'Current Balance',
          firstFieldValue: partition?.Tradeline?.currentBalance || 0,
        };
      case CreditReportGroups.CollectionsAccounts:
        return {
          firstFieldName: 'Original Creditor',
          firstFieldValue:
            partition?.Tradeline?.CollectionTrade?.originalCreditor || '',
        };
      default:
        return { firstFieldName: 'Unknown', firstFieldValue: 'Unknown' };
    }
  }

  /**
   * Helper function to get the label and value for the second fields
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  getSecondFields(
    partition: ITradeLinePartition | undefined
  ): { secondFieldName: string; secondFieldValue: string | number } {
    const sym = partition?.accountTypeSymbol?.toLowerCase();
    if (!sym)
      return { secondFieldName: 'Unknown', secondFieldValue: 'Unknown' };
    const group = CREDIT_REPORT_GROUPS[sym];
    switch (group) {
      case CreditReportGroups.CreditCards:
        return {
          secondFieldName: 'Credit Limit',
          secondFieldValue:
            partition?.Tradeline?.GrantedTrade?.CreditLimit || 0,
        };
      case CreditReportGroups.CollectionsAccounts:
        return {
          secondFieldName: 'Original Creditor',
          secondFieldValue:
            partition?.Tradeline?.CollectionTrade?.originalCreditor || '',
        };
      case CreditReportGroups.InstallmentLoans:
        return {
          secondFieldName: 'Original Loan Amount',
          secondFieldValue: partition?.Tradeline?.highBalance || '',
        };
      case CreditReportGroups.Mortgages:
        return {
          secondFieldName: 'Loan Amount',
          secondFieldValue: partition?.Tradeline?.highBalance || '',
        };
      default:
        return { secondFieldName: 'Unknown', secondFieldValue: 'Unknown' };
    }
  }

  /**
   * Helper function to get the proper status to color the circle
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  getStatus(partition: ITradeLinePartition | undefined): SnapshotStatus {
    const sym = partition?.Tradeline?.PayStatus?.symbol?.toString() || '';
    if (!sym) return SnapshotStatus.Default;
    switch (sym.toLowerCase()) {
      case 'u':
      case 'c':
      case '0':
      case '7':
        return SnapshotStatus.Safe;
      case '1':
      case '2':
      case '3':
      case '4':
        return SnapshotStatus.Danger;
      case '8r':
      case '9':
        return SnapshotStatus.Critical;
      default:
        return SnapshotStatus.Default;
    }
  }
}
