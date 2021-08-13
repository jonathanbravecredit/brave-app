import { Pipe, PipeTransform } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ICreditBureau } from '@shared/interfaces/credit-bureau.interface';
import { ITradelineCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';

@Pipe({
  name: 'creditbureauToTradelinedetails',
})
export class CreditbureauToTradelinedetailsPipe implements PipeTransform {
  transform(creditBureau: ICreditBureau | undefined): ITradelineCreditBureauConfig {
    const trades = tu.parser.parseCreditBureauToTrades(creditBureau);
    // const remarks = tu.parser.parseRemarks(tradeline?.Tradeline?.Remark);
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
