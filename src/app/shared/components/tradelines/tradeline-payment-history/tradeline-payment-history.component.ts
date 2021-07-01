import { Component, OnInit, Input } from '@angular/core';
import { MONTH_ABBREVIATIONS, MONTH_DEFAULTS } from '@shared/components/tradelines/tradeline-payment-history/constants';
import { ITradelinePaymentHistory } from '@shared/components/tradelines/tradeline-payment-history/interfaces';
import { IMonthyPayStatusItem, IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-tradeline-payment-history',
  templateUrl: './tradeline-payment-history.component.html',
})
export class TradelinePaymentHistoryComponent implements OnInit {
  /**
   * Payment status history mapped directly from Merge Report
   * @property {IPayStatusHistory | undefined} paymentHistory
   */
  @Input() paymentHistory: IPayStatusHistory | undefined = {} as IPayStatusHistory;
  /**
   * Default gridWidth in rem units
   * @property {string} gridWidth
   * @example
   *
   * gridWidth = 'w-3'
   *
   */
  gridWidth: string = 'w-3';
  /**
   * Default gridHeight in rem units
   * @property {string} gridHeight - Should be same in REM as width
   * @example
   *
   * gridWidth = 'h-3'
   *
   */
  gridHeight: string = 'h-3';
  /**
   * Reconstituted payment history from Merge Report
   * @property {ITradelinePaymentHistory} history
   */
  history!: ITradelinePaymentHistory;

  constructor() {}

  ngOnInit() {
    this.history = this.parsePaymentHistory(this.paymentHistory);
  }

  /**
   * Reconstitutes raw mapped Payment Status history from Merged Report to payment history table format
   * @param {IPayStatusHistory | undefined} payments
   * @returns {ITradelinePaymentHistory}
   */
  parsePaymentHistory(payments: IPayStatusHistory = {} as IPayStatusHistory): ITradelinePaymentHistory {
    console.log('payments 2', payments, Object.keys(payments).length);
    const parsed = !Object.keys(payments).length
      ? {
          headers: {
            year: null,
            months: MONTH_ABBREVIATIONS,
          },
          years: [0, 1, 2].map((item, i) => {
            let dte = new Date();
            let year = dte.getFullYear() - i;
            console.log('year', year);
            return {
              year: year.toString(),
              months: ['u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u'],
            };
          }),
        }
      : {
          headers: {
            year: null,
            months: MONTH_ABBREVIATIONS,
          },
          years: [0, 1, 2].map((item, i) => {
            let dte = new Date(payments.startDate);
            let year = dte.getFullYear() - i;
            return {
              year: year.toString(),
              months: this.parseMonthlyPayments(year, payments.MonthlyPayStatus),
            };
          }),
        };
    console.log('parsed', parsed);
    return parsed;
  }
  /**
   * Constructs month array for complete list of monthly pay status
   * @param {number} year
   * @param {IMonthyPayStatusItem[]} monthlyPayments
   * @returns {string[]}
   * @example
   *
   * months = ['u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u']
   *
   */
  parseMonthlyPayments(year: number, monthlyPayments: IMonthyPayStatusItem[] | undefined): string[] {
    let months = [...MONTH_DEFAULTS];
    if (monthlyPayments === undefined) return months;
    let payments = monthlyPayments.filter((pay) => new Date(pay.date).getFullYear() === year);
    payments.forEach((pay) => {
      const status = `${pay.status}`.length ? `${pay.status}`.toLowerCase() : 'u';
      console.log('test date', new Date(pay.date).getMonth(), 'status: ', status);
      months[new Date(pay.date).getMonth()] = status;
    });
    console.log('months', months);
    return months;
  }
}
