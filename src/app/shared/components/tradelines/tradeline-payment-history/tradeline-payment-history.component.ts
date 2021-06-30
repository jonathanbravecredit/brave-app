import { Component, OnInit, Input } from '@angular/core';
import { IMonthyPayStatusItem, IPayStatusHistory } from '@shared/interfaces/merge-report.interface';

export interface ITradelinePaymentHistory {
  headers: {
    year: string | null;
    months: string[];
  };
  years: {
    year: string;
    months: string[];
  }[];
}

@Component({
  selector: 'brave-tradeline-payment-history',
  templateUrl: './tradeline-payment-history.component.html',
})
export class TradelinePaymentHistoryComponent implements OnInit {
  @Input() payments: IPayStatusHistory | undefined = {} as IPayStatusHistory;

  gridWidth: string = 'w-3';
  gridHeight: string = 'h-3';
  history: ITradelinePaymentHistory;
  constructor() {
    this.history = this.parsePaymentHistory(this.payments);
  }

  ngOnInit(): void {}

  /**
   *
   * @param {IPayStatusHistory | undefined} payments
   */
  parsePaymentHistory(payments: IPayStatusHistory = {} as IPayStatusHistory): ITradelinePaymentHistory {
    console.log('payments 2', payments, Object.keys(payments).length);
    return !Object.keys(payments).length
      ? {
          headers: {
            year: null,
            months: months,
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
            months: months,
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
  }

  /**
   * Takes the payments and fills out the month array with available status values
   * @param {number} year
   * @param {IMonthyPayStatusItem[]} monthlyPayments
   * @returns
   */
  parseMonthlyPayments(year: number, monthlyPayments: IMonthyPayStatusItem[] | undefined): string[] {
    let months = ['u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u', 'u'];
    if (monthlyPayments === undefined) return months;
    let payments = monthlyPayments.filter((pay) => new Date(pay.date).getFullYear() === year);
    payments.forEach((pay) => {
      months[new Date(pay.date).getMonth()] = pay.status.toLowerCase();
    });
    return months;
  }
}

const months = ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'];
