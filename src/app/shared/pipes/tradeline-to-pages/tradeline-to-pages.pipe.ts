import { Pipe, PipeTransform } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'tradelineToPages',
})
export class TradelineToPagesPipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition | undefined): any[] {
    if (!tradeline || !Object.keys(tradeline).length) return [];
    console.log('tradeline', tradeline);
    const data = [
      this.mapToDetailsPageOne(tradeline),
      this.mapToDetailsPageOne(tradeline),
      this.mapToPaymentHistory(tradeline),
      this.mapToRemarks(tradeline),
    ];
    console.log('data', data);
    return data;
  }

  private mapToDetailsPageOne(tradeline: ITradeLinePartition) {
    return {
      config: {
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
      },
    };
  }

  private mapToPaymentHistory(tradeline: ITradeLinePartition) {
    const paymentHistory = tradeline.Tradeline?.GrantedTrade?.PayStatusHistory;
    if (!paymentHistory || !Object.keys(paymentHistory).length) return null;
    return { paymentHistory };
  }

  private mapToRemarks(tradeline: ITradeLinePartition) {
    const remarks = tradeline.Tradeline?.Remark?.customRemark || '';
    if (!remarks || !Object.keys(remarks).length) return null;
    return { remarks };
  }
}
