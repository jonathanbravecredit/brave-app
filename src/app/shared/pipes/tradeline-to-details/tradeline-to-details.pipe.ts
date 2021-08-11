import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Pipe({
  name: 'tradelineToDetails',
})
export class TradelineToDetailsPipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition | undefined): ITradelineDetailsConfig {
    const remarks = tu.parser.parseRemarks(tradeline?.Tradeline?.Remark);
    return {
      accountNumber: tradeline?.Tradeline?.accountNumber,
      accountTypeSymbol: tradeline?.accountTypeSymbol,
      creditorName: tradeline?.Tradeline?.creditorName,
      originalCreditor: tradeline?.Tradeline?.CollectionTrade?.originalCreditor,
      creditType: tradeline?.Tradeline?.CollectionTrade?.creditType?.abbreviation,
      dateOpened: tradeline?.Tradeline?.dateOpened,
      dateClosed: tradeline?.Tradeline?.dateClosed,
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
      status: tradeline?.Tradeline?.PayStatus?.symbol,
      openClosed: tradeline?.Tradeline?.OpenClosed?.symbol,
      remarks: remarks,
    } as ITradelineDetailsConfig;
  }
}
