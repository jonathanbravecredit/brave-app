import { Pipe, PipeTransform } from '@angular/core';
import { IRemark } from '@shared/interfaces/common-tu.interface';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

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
    const data = [
      this.mapToDetailsPageOne(tradeline),
      this.mapToDetailsPageTwo(tradeline),
      this.mapToPaymentHistory(tradeline),
      this.mapToRemarks(tradeline),
    ];
    return data;
  }

  private mapToDetailsPageOne(tradeline: ITradeLinePartition) {
    const originalCreditor = tu.queries.report.getOriginalCreditor(tradeline);
    return {
      isDisputePageOne: true,
      config: {
        accountNumber: tradeline.Tradeline?.accountNumber,
        accountTypeSymbol: tradeline.accountTypeSymbol,
        creditorName: tradeline.Tradeline?.creditorName,
        originalCreditor: originalCreditor,
        creditType: tradeline.Tradeline?.CollectionTrade?.creditType?.abbreviation,
        dateClosed: tradeline.Tradeline?.dateClosed?.substring(0, 10),
        dateReported: tradeline.Tradeline?.dateReported,
        accountDesignator: tradeline.Tradeline?.AccountDesignator?.description,
        termMonths: tradeline.Tradeline?.GrantedTrade?.termMonths,
        late30Count: tradeline.Tradeline?.GrantedTrade?.late30Count,
        late60Count: tradeline.Tradeline?.GrantedTrade?.late60Count,
        late90Count: tradeline.Tradeline?.GrantedTrade?.late90Count,
        monthlyPayment: tradeline.Tradeline?.GrantedTrade?.monthlyPayment,
        creditLimit: tradeline.Tradeline?.GrantedTrade?.CreditLimit,
        amountPastDue: tradeline.Tradeline?.GrantedTrade?.amountPastDue,
        currentBalance: tradeline.Tradeline?.currentBalance,
        highestBalance: tradeline.Tradeline?.highBalance,
        disputeFlag: tradeline.Tradeline?.DisputeFlag?.description,
        payStatus: tradeline?.Tradeline?.PayStatus?.description,
        maxDeliquency: tradeline?.Tradeline?.GrantedTrade?.WorstPayStatus?.description,
        status: tradeline.Tradeline?.PayStatus?.symbol,
        openClosed: tradeline.Tradeline?.OpenClosed?.symbol,
      },
    };
  }
  private mapToDetailsPageTwo(tradeline: ITradeLinePartition) {
    const originalCreditor = tu.queries.report.getOriginalCreditor(tradeline);
    return {
      isDisputePageTwo: true,
      config: {
        accountNumber: tradeline.Tradeline?.accountNumber,
        accountTypeSymbol: tradeline.accountTypeSymbol,
        creditorName: tradeline.Tradeline?.creditorName,
        originalCreditor: originalCreditor,
        creditType: tradeline.Tradeline?.CollectionTrade?.creditType?.abbreviation,
        dateOpened: tradeline.Tradeline?.dateOpened?.substring(0, 10),
        dateClosed: tradeline.Tradeline?.dateClosed?.substring(0, 10),
        dateReported: tradeline.Tradeline?.dateReported,
        accountDesignator: tradeline.Tradeline?.AccountDesignator?.description,
        termMonths: tradeline.Tradeline?.GrantedTrade?.termMonths,
        late30Count: tradeline.Tradeline?.GrantedTrade?.late30Count,
        late60Count: tradeline.Tradeline?.GrantedTrade?.late60Count,
        late90Count: tradeline.Tradeline?.GrantedTrade?.late90Count,
        monthlyPayment: tradeline.Tradeline?.GrantedTrade?.monthlyPayment,
        creditLimit: tradeline.Tradeline?.GrantedTrade?.CreditLimit,
        amountPastDue: tradeline.Tradeline?.GrantedTrade?.amountPastDue,
        currentBalance: tradeline.Tradeline?.currentBalance,
        highestBalance: tradeline.Tradeline?.highBalance,
        disputeFlag: tradeline.Tradeline?.DisputeFlag?.description,
        payStatus: tradeline?.Tradeline?.PayStatus?.description,
        maxDeliquency: tradeline?.Tradeline?.GrantedTrade?.WorstPayStatus?.description,
        status: tradeline.Tradeline?.PayStatus?.symbol,
        openClosed: tradeline.Tradeline?.OpenClosed?.symbol,
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
  parseRemarks(remarks: IRemark | IRemark[] | undefined): string | undefined {
    if (remarks === undefined) return;
    return remarks instanceof Array
      ? remarks.map((r) => r.customRemark).reduce((a, b) => `${a} \n ${b}`)
      : remarks.customRemark;
  }
}
