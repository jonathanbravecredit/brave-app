import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { DEFAULT_TRADELINE } from '@views/dashboard/snapshots/negative-account/negative-account-initial/constants';
import { MergeReportPipeHelper as helper } from '../mergereport-to-negative-tradelines/helper';
import { AccountTypes } from '@shared/constants/account-types';

@Pipe({
  name: 'mergereportToTradelines',
})
export class MergereportToTradelinesPipe implements PipeTransform {
  transform(report: IMergeReport, ...args: any[]): ITradelineDetailsConfig[] {
    const accountType = args[0];
    const partition = report?.TrueLinkCreditReportType?.TradeLinePartition;
    const borrower = report?.TrueLinkCreditReportType?.Borrower;
    const statement = tu.parser.parseBorrowerForCreditStatement(borrower);
    if (!partition) return [DEFAULT_TRADELINE];
    let tradelines = !(partition instanceof Array) ? [partition] : partition;
    tradelines = [...this.filterByAccountType(tradelines, accountType)];
    // tradelines = [...tu.sortTradelineByAccountType(tradelines)];
    tradelines = [...tu.sorter.sortTradelineByPayStatus(tradelines)];
    let config = tradelines.map((line) => this.mapPartitionsToDetails(line, statement));
    return config;
  }

  mapPartitionsToDetails(partition: ITradeLinePartition, statement?: string): ITradelineDetailsConfig {
    return {
      tradeline: partition,
      accountNumber: partition?.Tradeline?.accountNumber || tu.bcMissing,
      accountTypeSymbol: partition?.accountTypeSymbol || tu.bcMissing,
      accountTypeDescription: tu.query.lookupBraveTradelineDescription(partition) || '',
      creditorName: partition?.Tradeline?.creditorName || tu.bcMissing,
      originalCreditor: partition?.Tradeline?.CollectionTrade?.originalCreditor || tu.bcMissing,
      creditType: partition?.Tradeline?.CollectionTrade?.creditType?.abbreviation || tu.bcMissing,
      dateOpened: partition?.Tradeline?.dateOpened || tu.bcMissing,
      dateClosed: partition?.Tradeline?.dateClosed || tu.bcMissing,
      dateReported: partition?.Tradeline?.dateReported || tu.bcMissing,
      accountDesignator: partition?.Tradeline?.AccountDesignator?.description || tu.bcMissing,
      termMonths: partition?.Tradeline?.GrantedTrade?.termMonths || tu.bcMissing,
      late30Count: partition?.Tradeline?.GrantedTrade?.late30Count || tu.bcMissing,
      late60Count: partition?.Tradeline?.GrantedTrade?.late60Count || tu.bcMissing,
      late90Count: partition?.Tradeline?.GrantedTrade?.late90Count || tu.bcMissing,
      monthlyPayment: partition?.Tradeline?.GrantedTrade?.monthlyPayment || tu.bcMissing,
      creditLimit: partition?.Tradeline?.GrantedTrade?.CreditLimit || tu.bcMissing,
      amountPastDue: partition?.Tradeline?.GrantedTrade?.amountPastDue || tu.bcMissing,
      currentBalance: partition?.Tradeline?.currentBalance || tu.bcMissing,
      highestBalance: partition?.Tradeline?.highBalance || tu.bcMissing,
      disputeFlag: partition?.Tradeline?.DisputeFlag?.description || tu.bcMissing,
      status: partition?.Tradeline?.PayStatus?.symbol || tu.bcMissing,
      openClosed: partition?.Tradeline?.OpenClosed?.symbol || tu.bcMissing,
      consumerStatement: statement || tu.bcMissing,
    } as ITradelineDetailsConfig;
  }

  filterByAccountType(tradelines: ITradeLinePartition[], accountType: AccountTypes): ITradeLinePartition[] | [] {
    return tradelines.filter((item) => {
      const _accountType = tu.query.lookupTradelineTypeDescription(item);
      return _accountType === accountType;
    });
  }
}
