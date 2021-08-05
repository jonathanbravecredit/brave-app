import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { IMergeReport, ITradeLinePartition } from '@shared/interfaces';
import { TransunionUtil as TU } from '@shared/utils/transunion/transunion';
import { DEFAULT_TRADELINE } from '@views/dashboard/snapshots/negative-account/negative-account-initial/constants';
import { MergeReportPipeHelper } from '../mergereport-to-negative-tradelines/helper';
import { AccountTypes } from '@shared/constants/account-types';

@Pipe({
  name: 'mergereportToTradelines',
})
export class MergereportToTradelinesPipe implements PipeTransform {
  transform(report: IMergeReport, ...args: any[]): ITradelineDetailsConfig[] {
    const accountType = args[0];
    const partition = report?.TrueLinkCreditReportType?.TradeLinePartition;
    if (!partition) return [DEFAULT_TRADELINE];
    let tradelines = !(partition instanceof Array) ? [partition] : partition;
    tradelines = [...this.filterByAccountType(tradelines, accountType)];
    // tradelines = [...TU.sortTradelineByAccountType(tradelines)];
    tradelines = [...TU.sortTradelineByPayStatus(tradelines)];
    let config = tradelines.map((line) => this.mapPartitionsToDetails(line));
    return MergeReportPipeHelper.addCustomerStatementToArrOfObj(config, report) as ITradelineDetailsConfig[];
  }

  mapPartitionsToDetails(partition: ITradeLinePartition): ITradelineDetailsConfig {
    return {
      tradeline: partition,
      accountNumber: partition?.Tradeline?.accountNumber || TU.bcMissing,
      accountTypeSymbol: partition?.accountTypeSymbol || TU.bcMissing,
      accountTypeDescription: TU.lookupBraveTradelineDescription(partition) || '',
      creditorName: partition?.Tradeline?.creditorName || TU.bcMissing,
      originalCreditor: partition?.Tradeline?.CollectionTrade?.originalCreditor || TU.bcMissing,
      creditType: partition?.Tradeline?.CollectionTrade?.creditType?.abbreviation || TU.bcMissing,
      dateOpened: partition?.Tradeline?.dateOpened || TU.bcMissing,
      dateClosed: partition?.Tradeline?.dateClosed || TU.bcMissing,
      dateReported: partition?.Tradeline?.dateReported || TU.bcMissing,
      accountDesignator: partition?.Tradeline?.AccountDesignator?.description || TU.bcMissing,
      termMonths: partition?.Tradeline?.GrantedTrade?.termMonths || TU.bcMissing,
      late30Count: partition?.Tradeline?.GrantedTrade?.late30Count || TU.bcMissing,
      late60Count: partition?.Tradeline?.GrantedTrade?.late60Count || TU.bcMissing,
      late90Count: partition?.Tradeline?.GrantedTrade?.late90Count || TU.bcMissing,
      monthlyPayment: partition?.Tradeline?.GrantedTrade?.monthlyPayment || TU.bcMissing,
      creditLimit: partition?.Tradeline?.GrantedTrade?.CreditLimit || TU.bcMissing,
      amountPastDue: partition?.Tradeline?.GrantedTrade?.amountPastDue || TU.bcMissing,
      currentBalance: partition?.Tradeline?.currentBalance || TU.bcMissing,
      highestBalance: partition?.Tradeline?.highBalance || TU.bcMissing,
      disputeFlag: partition?.Tradeline?.DisputeFlag?.description || TU.bcMissing,
      status: partition?.Tradeline?.PayStatus?.symbol || TU.bcMissing,
      openClosed: partition?.Tradeline?.OpenClosed?.symbol || TU.bcMissing,
    } as ITradelineDetailsConfig;
  }

  filterByAccountType(tradelines: ITradeLinePartition[], accountType: AccountTypes): ITradeLinePartition[] | [] {
    return tradelines.filter((item) => {
      const _accountType = TU.lookupTradelineTypeDescription(item);
      return _accountType === accountType;
    });
  }
}
