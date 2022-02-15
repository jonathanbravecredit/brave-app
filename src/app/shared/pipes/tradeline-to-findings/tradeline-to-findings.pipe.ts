import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineCreditBureauConfig } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/interfaces';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

@Pipe({
  name: 'tradelineToFindings',
})
export class TradelineToFindingsPipe implements PipeTransform {
  transform(
    tradeline: ITradelineCreditBureauConfig | null | undefined,
    ...args: unknown[]
  ): ITradelineDetailsConfig | undefined {
    if (!tradeline) return;
    const remarks = tu.parsers.report.parseRemarks(tradeline.tradeline?.Tradeline?.Remark);
    const mapped = {
      tradeline: tradeline.tradeline,
      trade: tradeline.trade,
      accountNumber: tradeline.tradeline?.Tradeline?.accountNumber?.toString(),
      accountName: tradeline.contactDetails,
      dateOpened: tradeline.tradeline?.Tradeline?.dateOpened?.substring(0, 10),
      accountDesignator: tradeline.tradeline?.Tradeline?.AccountDesignator?.description,
      accountTypeSymbol: tradeline.tradeline?.accountTypeSymbol,
      accountTypeDescription: tradeline.tradeline?.accountTypeDescription,
      accountCodeDescription: tradeline.trade?.account?.description, // can only find on trade
      currentBalance: tradeline.tradeline?.Tradeline?.currentBalance,
      highestBalance: tradeline.tradeline?.Tradeline?.highBalance,
      scheduledPayments: tradeline.trade?.terms?.description,
      mostRecentPayment: tradeline.trade?.mostRecentPayment?.date,
      creditLimit: tradeline.tradeline?.Tradeline?.GrantedTrade?.CreditLimit, // can only find on trade
      payStatus: tradeline.tradeline?.Tradeline?.PayStatus?.description,
      payStatusHistory: tradeline.tradeline?.Tradeline?.GrantedTrade?.PayStatusHistory,
      amountPastDue: tradeline.tradeline?.Tradeline?.GrantedTrade.amountPastDue,
      maxDelinquency: tradeline.tradeline?.Tradeline?.GrantedTrade?.WorstPayStatus?.description,
      highCredit: tradeline.trade?.highCredit, // can only find on trade
      remarks: remarks,
    };
    return mapped as ITradelineDetailsConfig;
  }
}
