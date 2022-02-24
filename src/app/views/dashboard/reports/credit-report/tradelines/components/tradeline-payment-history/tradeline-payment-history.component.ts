import { Component, OnInit, Input, ViewChild, ComponentRef } from '@angular/core';
import { IMonthyPayStatusItem, IPayStatusHistory } from '@shared/interfaces/merge-report.interface';
import { ModalService } from '@shared/services/modal/modal.service';
import {
  MONTH_ABBREVIATIONS,
  MONTH_DEFAULTS,
} from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/constants';
import { ITradelinePaymentHistory } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/interfaces';
import { TradelinePaymentIconKeyComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-icon-key/tradeline-payment-icon-key.component';
import * as dayjs from 'dayjs';
import * as moment from 'moment';

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
  modal: ComponentRef<unknown> | undefined;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.history = this.parsePaymentHistory(this.paymentHistory);
  }

  showModal(): void {
    this.modal = this.modalService.appendModalToBody(TradelinePaymentIconKeyComponent, { showModal: true });
  }

  /**
   * Reconstitutes raw mapped Payment Status history from Merged Report to payment history table format
   * @param {IPayStatusHistory | undefined} payments
   * @returns {ITradelinePaymentHistory}
   */
  parsePaymentHistory(payments: IPayStatusHistory = {} as IPayStatusHistory): ITradelinePaymentHistory {
    const history = payments === undefined || payments === null ? ({} as IPayStatusHistory) : payments;
    const parsed = !Object.keys(history).length
      ? {
          headers: {
            year: null,
            months: MONTH_ABBREVIATIONS,
          },
          years: [0, 1, 2].map((item, i) => {
            let dte = new Date();
            let year = dte.getFullYear() - i;
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
            const badDate = history.startDate?.substring(0, 10);
            const goodDate = moment(badDate, 'YYYY-MM-DD').toDate();
            let dte = history.startDate === undefined ? new Date() : goodDate;
            let year = dte.getFullYear() - i;
            let monthlyStatus: IMonthyPayStatusItem[];
            if (history.MonthlyPayStatus === undefined) {
              monthlyStatus = [{} as IMonthyPayStatusItem];
            } else if (history.MonthlyPayStatus instanceof Array) {
              monthlyStatus = history.MonthlyPayStatus;
            } else {
              monthlyStatus = [history.MonthlyPayStatus];
            }
            return {
              year: year.toString(),
              months: this.parseMonthlyPayments(year, monthlyStatus),
            };
          }),
        };
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
    let payments = monthlyPayments.filter((pay) => {
      if (pay.date === undefined) return false;
      const badDate = pay.date?.substring(0, 10);
      const goodDate = dayjs(badDate, 'YYYY-MM-DD').toDate();
      return goodDate.getFullYear() === year;
    });
    payments.forEach((pay) => {
      if (pay.date === undefined) return;
      const status = `${pay.status}`.length ? `${pay.status}`.toLowerCase() : 'u';
      const badDate = pay.date?.substring(0, 10);
      const goodDate = dayjs(badDate, 'YYYY-MM-DD').toDate();
      months[goodDate.getMonth()] = status;
    });
    return months;
  }
}
