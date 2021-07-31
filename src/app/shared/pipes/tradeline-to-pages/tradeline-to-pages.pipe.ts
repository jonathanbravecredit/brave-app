import { Pipe, PipeTransform } from '@angular/core';
import { IRemark } from '@shared/interfaces/common-tu.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Pipe({
  name: 'tradelineToPages',
})
export class TradelineToPagesPipe implements PipeTransform {
  transform(tradeline: ITradeLinePartition | undefined): any[] {
    if (!tradeline || !Object.keys(tradeline).length)
      return [
        this.mapToDetailsPageOne({}),
        this.mapToDetailsPageTwo({}),
        this.mapToPaymentHistory({}),
        this.mapToRemarks({}),
      ];
    console.log('tradeline', tradeline);
    const data = [
      this.mapToDetailsPageOne(tradeline),
      this.mapToDetailsPageTwo(tradeline),
      this.mapToPaymentHistory(tradeline),
      this.mapToRemarks(tradeline),
    ];
    console.log('data', data);
    return data;
  }

  private mapToDetailsPageOne(tradeline: ITradeLinePartition) {
    return {
      isDisputePageOne: true,
      config: {
        accountNumber: tradeline.Tradeline?.accountNumber || '',
        accountTypeSymbol: tradeline.accountTypeSymbol || '',
        creditorName: tradeline.Tradeline?.creditorName || '',
        originalCreditor: tradeline.Tradeline?.CollectionTrade?.originalCreditor || '',
        creditType: tradeline.Tradeline?.CollectionTrade?.creditType?.abbreviation || '',
        dateOpened: tradeline.Tradeline?.dateOpened || '',
        dateClosed: tradeline.Tradeline?.dateClosed || '',
        dateReported: tradeline.Tradeline?.dateReported || '',
        accountDesignator: tradeline.Tradeline?.AccountDesignator?.description || '',
        termMonths: tradeline.Tradeline?.GrantedTrade?.termMonths || '',
        late30Count: tradeline.Tradeline?.GrantedTrade?.late30Count || '',
        late60Count: tradeline.Tradeline?.GrantedTrade?.late60Count || '',
        late90Count: tradeline.Tradeline?.GrantedTrade?.late90Count || '',
        monthlyPayment: tradeline.Tradeline?.GrantedTrade?.monthlyPayment || '',
        creditLimit: tradeline.Tradeline?.GrantedTrade?.CreditLimit || '',
        amountPastDue: tradeline.Tradeline?.GrantedTrade?.amountPastDue || '',
        currentBalance: tradeline.Tradeline?.currentBalance || '',
        highestBalance: tradeline.Tradeline?.highBalance || '',
        disputeFlag: tradeline.Tradeline?.DisputeFlag?.description || '',
        status: tradeline.Tradeline?.PayStatus?.symbol || '',
        openClosed: tradeline.Tradeline?.OpenClosed?.symbol || '',
      },
    };
  }
  private mapToDetailsPageTwo(tradeline: ITradeLinePartition) {
    return {
      isDisputePageTwo: true,
      config: {
        accountNumber: tradeline.Tradeline?.accountNumber || '',
        accountTypeSymbol: tradeline.accountTypeSymbol || '',
        creditorName: tradeline.Tradeline?.creditorName || '',
        originalCreditor: tradeline.Tradeline?.CollectionTrade?.originalCreditor || '',
        creditType: tradeline.Tradeline?.CollectionTrade?.creditType?.abbreviation || '',
        dateOpened: tradeline.Tradeline?.dateOpened || '',
        dateClosed: tradeline.Tradeline?.dateClosed || '',
        dateReported: tradeline.Tradeline?.dateReported || '',
        accountDesignator: tradeline.Tradeline?.AccountDesignator?.description || '',
        termMonths: tradeline.Tradeline?.GrantedTrade?.termMonths || '',
        late30Count: tradeline.Tradeline?.GrantedTrade?.late30Count || '',
        late60Count: tradeline.Tradeline?.GrantedTrade?.late60Count || '',
        late90Count: tradeline.Tradeline?.GrantedTrade?.late90Count || '',
        monthlyPayment: tradeline.Tradeline?.GrantedTrade?.monthlyPayment || '',
        creditLimit: tradeline.Tradeline?.GrantedTrade?.CreditLimit || '',
        amountPastDue: tradeline.Tradeline?.GrantedTrade?.amountPastDue || '',
        currentBalance: tradeline.Tradeline?.currentBalance || '',
        highestBalance: tradeline.Tradeline?.highBalance || '',
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
    const remarks = this.parseRemarks(tradeline.Tradeline?.Remark);
    const showFooter = false;
    if (!remarks || !Object.keys(remarks).length) return { showFooter };
    return { remarks, showFooter };
  }

  /**
   * Flatten the remarks into one paragraph
   * @param remarks
   * @returns
   */
  parseRemarks(remarks: IRemark | IRemark[] | undefined): string {
    if (remarks === undefined) return '';
    return remarks instanceof Array
      ? remarks.map((r) => r.customRemark || '').reduce((a, b) => `${a} \n ${b}`)
      : remarks.customRemark || '';
  }
}
