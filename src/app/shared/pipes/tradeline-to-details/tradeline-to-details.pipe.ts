import { Pipe, PipeTransform } from '@angular/core';
import { ITradelineDetailsConfig } from '@shared/components/tradelines/tradeline-details/interfaces';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'tradelineToDetails',
})
export class TradelineToDetailsPipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition): ITradelineDetailsConfig {
    return {
      accountTypeSymbol: tradeline.accountTypeSymbol || '',
      creditorName: tradeline.Tradeline?.creditorName || '',
      originalCreditor: tradeline.Tradeline?.CollectionTrade?.originalCreditor || '',
      creditType: tradeline.Tradeline?.CollectionTrade?.creditType?.abbreviation || '',
      dateOpened: tradeline.Tradeline?.dateOpened || '',
      dateReported: tradeline.Tradeline?.dateReported || '',
      accountDesignator: tradeline.Tradeline?.AccountDesignator?.description || '',
      termMonths: tradeline.Tradeline?.GrantedTrade?.termMonths || '',
      late30Count: tradeline.Tradeline?.GrantedTrade?.late30Count || '',
      late60Count: tradeline.Tradeline?.GrantedTrade?.late60Count || '',
      late90Count: tradeline.Tradeline?.GrantedTrade?.late90Count || '',
      amountPastDue: tradeline.Tradeline?.GrantedTrade?.amountPastDue || 0,
      currentBalance: tradeline.Tradeline?.currentBalance || 0,
      disputeFlag: tradeline.Tradeline?.DisputeFlag?.description || '',
      status: tradeline.Tradeline?.PayStatus?.symbol || '',
      openClosed: tradeline.Tradeline?.OpenClosed?.symbol || '',
    } as ITradelineDetailsConfig;
  }
}
