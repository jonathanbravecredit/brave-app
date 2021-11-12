import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'tradelineToDetails',
})
export class TradelineToDetailsPipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition | undefined | null): ITradelineDetailsConfig | undefined {
    if (!tradeline) return;
    const remarks = tu.parsers.report.parseRemarks(tradeline?.Tradeline?.Remark);
    const originalCreditor = tu.queries.report.getOriginalCreditor(tradeline);
    const mapped = {
      tradeline: tradeline,
      accountNumber: tradeline?.Tradeline?.accountNumber?.toString(),
      accountTypeSymbol: tradeline?.accountTypeSymbol,
      creditorName: tradeline?.Tradeline?.creditorName,
      lastReported: tradeline?.Tradeline?.dateReported,
      accountTypeDescription: tu.queries.report.getAccountType(tradeline),
      accountTypeDescriptionValue: tradeline?.Tradeline?.OpenClosed?.description || '',
      originalCreditor: originalCreditor,
      creditType: tradeline?.Tradeline?.CollectionTrade?.creditType?.abbreviation,
      dateOpened: tradeline?.Tradeline?.dateOpened?.substring(0, 10),
      dateClosed: tradeline?.Tradeline?.dateClosed?.substring(0, 10),
      dateReported: tradeline?.Tradeline?.dateReported,
      accountDesignator: tradeline?.Tradeline?.AccountDesignator?.description,
      termMonths: tradeline?.Tradeline?.GrantedTrade?.termMonths,
      late30Count: tradeline?.Tradeline?.GrantedTrade?.late30Count,
      late60Count: tradeline?.Tradeline?.GrantedTrade?.late60Count,
      late90Count: tradeline?.Tradeline?.GrantedTrade?.late90Count,
      monthlyPayment: tradeline?.Tradeline?.GrantedTrade?.monthlyPayment,
      payStatusHistory: tradeline?.Tradeline?.GrantedTrade?.PayStatusHistory,
      creditLimit: tradeline?.Tradeline?.GrantedTrade?.CreditLimit,
      amountPastDue: tradeline?.Tradeline?.GrantedTrade?.amountPastDue,
      currentBalance: tradeline?.Tradeline?.currentBalance,
      highestBalance: tradeline?.Tradeline?.highBalance,
      disputeFlag: tradeline?.Tradeline?.DisputeFlag?.description,
      payStatus: tradeline?.Tradeline?.PayStatus?.description,
      maxDelinquency: tradeline?.Tradeline?.GrantedTrade?.WorstPayStatus?.description,
      status: tradeline?.Tradeline?.PayStatus?.symbol,
      openClosed: tradeline?.Tradeline?.OpenClosed?.symbol,
      remarks: remarks,
    } as ITradelineDetailsConfig;
    return mapped;
  }
}
