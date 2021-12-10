import { Component, Input, OnInit } from "@angular/core";
import { IGroupedYearMonthReferral, IPayments } from "@shared/interfaces/referrals.interface";
import * as moment from "moment";

@Component({
  selector: "brave-referral-earnings",
  templateUrl: "./referral-earnings.component.html",
})
export class ReferralEarningsComponent implements OnInit {
  @Input() metrics: IGroupedYearMonthReferral[] = [];
  @Input() payments: IPayments | undefined
  earningsAmount: number = 0;
  currencyType: string = "USD";
  referredAmount: number = 0;
  referredTen: boolean = false;
  paymentMonth: string = '';
  paymentDay: string = '';
  month: string = moment().format("MMMM");

  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const currYearMonth = +moment(now).format("YYYYMM");

    this.paymentMonth = moment(this.payments?.paymentScheduledDate).format('MMM')
    this.paymentDay = moment(this.payments?.paymentScheduledDate).format('DD')

    if (this.metrics.length) {
      const metric = this.metrics.find((m) => m.yearMonth == currYearMonth);
      if (metric) {
        this.earningsAmount =
          metric.referrals >= 10 ? 60 : metric?.earnings || 0;
        this.currencyType = metric.currency || "USD";
        this.referredAmount = metric.referrals || 0;
        this.referredTen = (metric.referrals || 0) >= 10;
      }
    }
  }
}
