import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "brave-referral-earnings",
  templateUrl: "./referral-earnings.component.html",
})
export class ReferralEarningsComponent implements OnInit {
  @Input() referredTen: boolean = false;
  @Input() earningsAmount: number = 50;
  @Input() currencyType: string = "USD";
  month: string = moment(new Date().getMonth() + 1, "M").format("MMMM");
  nextMonth: string = moment().add(1, "month").format("MMMM");
  nextGiftDate: string = moment().isoWeekday(2).toISOString();
  nextMonthMonday: string = moment()
    .add(1, "month")
    .startOf("month")
    .add(6 - moment().day("Monday").day(), "days")
    .startOf("week")
    .day(1)
    .toISOString();

  constructor() {}

  ngOnInit(): void {
    console.log("DATE STUFF", moment().isoWeekday(2));
  }
}
