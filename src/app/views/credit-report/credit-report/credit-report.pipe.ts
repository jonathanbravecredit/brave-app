import { Pipe, PipeTransform } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';
import { SnapshotStatus } from '@shared/components/cards/snapshot-display-card/snapshot-display-card.component';
import {
  CreditReportGroups,
  CREDIT_REPORT_GROUPS,
} from '@shared/data/credit-report';
import {
  BRAVE_ACCOUNT_TYPE,
  POSITIVE_PAY_STATUS_CODES,
} from '@shared/data/pay-status-codes';
import {
  IMergeReport,
  ITradeLinePartition,
} from '@shared/interfaces/merge-report.interface';
import { PreferencesStateModel } from '@store/preferences';
import { ICreditReportCardGroup } from '@views/credit-report/credit-report-pure/credit-report-pure.component';

@Pipe({
  name: 'creditReport',
})
export class CreditReportPipe implements PipeTransform {
  private tradeLines!: ITradeLinePartition | ITradeLinePartition[] | undefined;
  private creditReportAccounts: ICreditReportCardInputs[] | undefined;
  transform(
    report: IMergeReport,
    prefs: PreferencesStateModel
  ): ICreditReportCardGroup[] {
    this.tradeLines = report.TrueLinkCreditReportType.TradeLinePartition;

    if (!this.tradeLines) return [{} as ICreditReportCardGroup];
    return this.tradeLines instanceof Array
      ? this.filterTradelines(this.tradeLines, prefs)
          .sortByAccountType(this.tradeLines)
          .sortByDateOpened(this.tradeLines)
          .mapTradeLineToAccount(this.tradeLines)
          .groupCreditReportAccounts(this.creditReportAccounts)
      : this.filterTradelines(this.tradeLines, prefs)
          .mapTradeLineToAccount([this.tradeLines])
          .groupCreditReportAccounts(this.creditReportAccounts);
  }

  /**
   * Filters the tradeline by the negative status code
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private filterTradelines(
    partitions: ITradeLinePartition[] | ITradeLinePartition,
    prefs: PreferencesStateModel
  ): CreditReportPipe {
    const filters = prefs.showAllAccounts;
    console.log('prefs', prefs);
    if (!filters) return this;
    if (partitions instanceof Array) {
      console.log('initial tradelines', partitions.length);
      this.tradeLines = partitions.filter((item) => {
        const sym = item.accountTypeSymbol?.toLowerCase() || '';
        console.log('sym and type', sym, item.accountTypeSymbol?.toLowerCase());
        const group: CreditReportGroups =
          CREDIT_REPORT_GROUPS[sym]?.group || '';
        const status = item.Tradeline?.PayStatus?.symbol || '';
        const pos = POSITIVE_PAY_STATUS_CODES[`${status}`] || null;
        if (filters[group]) return true;
        if (!filters[group] && pos) return false;
        if (!filters[group] && !pos) return true;
        return true;
      });
    } else {
      const sym = partitions.accountTypeSymbol || '';
      const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym].group;
      const pos =
        POSITIVE_PAY_STATUS_CODES[
          `${partitions.Tradeline?.PayStatus?.symbol}`
        ] || null;
      this.tradeLines = !(!filters[group] && pos) ? [partitions] : [];
    }
    console.log('this.tradelines', this.tradeLines);
    return this;
  }

  /**
   * Sorts the tradeline by the account type
   * @param {ITradeLinePartition[]} tradeLines
   * @returns
   */
  private sortByAccountType(
    tradeLines: ITradeLinePartition[]
  ): CreditReportPipe {
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
  private sortByDateOpened(
    tradeLines: ITradeLinePartition[]
  ): CreditReportPipe {
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
  private mapTradeLineToAccount(
    tradeLines: ITradeLinePartition[]
  ): CreditReportPipe {
    this.creditReportAccounts = tradeLines.map((item) => {
      const firstField = this.getFirstFields(item);
      const secondField = this.getSecondFields(item);
      return {
        type: item.accountTypeSymbol,
        creditorName: item.Tradeline?.creditorName,
        isOpen: item.Tradeline?.OpenClosed,
        firstFieldName: firstField.firstFieldName,
        firstFieldValue: firstField.firstFieldValue,
        secondFieldName: secondField.secondFieldName,
        secondFieldValue: secondField.secondFieldValue,
        thirdFieldName: 'Payment Status',
        thirdFieldValue: item.Tradeline?.PayStatus?.description,
      } as ICreditReportCardInputs;
    });
    console.log('credit report accounts', this.creditReportAccounts);
    return this;
  }

  /**
   * Filters and groups the cards according to the account types
   * @param {ICreditReportCardInputs[] | undefined} reports
   * @returns
   */
  private groupCreditReportAccounts(
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
   * Helper function to get the label and value for the first fields
   * @param {ITradeLinePartition | undefined} partition
   * @returns
   */
  private getFirstFields(
    partition: ITradeLinePartition | undefined
  ): { firstFieldName: string; firstFieldValue: string | number } {
    const sym = partition?.accountTypeSymbol?.toLowerCase();
    console.log('sym in first field', sym);
    if (!sym) return { firstFieldName: 'Unknown', firstFieldValue: 'Unknown' };
    const group: CreditReportGroups = CREDIT_REPORT_GROUPS[sym]['group'];
    console.log('group in first field', group);
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
  private getSecondFields(
    partition: ITradeLinePartition | undefined
  ): { secondFieldName: string; secondFieldValue: string | number } {
    const sym = partition?.accountTypeSymbol?.toLowerCase();
    if (!sym)
      return { secondFieldName: 'Unknown', secondFieldValue: 'Unknown' };
    const group = CREDIT_REPORT_GROUPS[sym]['group'];
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
}
