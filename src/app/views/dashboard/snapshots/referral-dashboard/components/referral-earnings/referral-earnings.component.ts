import { Component, Input, OnInit } from "@angular/core";
import { IGroupedYearMonthReferral } from "@shared/interfaces/referrals.interface";
import * as moment from "moment";

@Component({
  selector: "brave-referral-earnings",
  templateUrl: "./referral-earnings.component.html",
})
export class ReferralEarningsComponent implements OnInit {
  @Input() metrics: IGroupedYearMonthReferral[] = [];
  earningsAmount: number = 0;
  currencyType: string = "USD";
  referredAmount: number = 0;
  referredTen: boolean = false;
  month: string = moment(new Date().getMonth() + 1, "M").format("MMMM");
  nextMonth: string = moment().add(1, "month").format("MMMM");
  nextGiftDate: string = moment().add(1, "week").isoWeekday(2).toISOString()

  nextMonthTuesday: string = moment()
    .add(1, "month")
    .startOf("month")
    .add(6 - moment().day("Tuesday").day(), "days")
    .startOf("week")
    .day(2)
    .toISOString();

  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const currYearMonth = +moment(now).format("YYYYMM");
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
