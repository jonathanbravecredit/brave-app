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
  referredAmount: number = 0;
  referredTen: boolean = false;
  paymentMonth: string = '';
  paymentDay: string = '';
  month: string = moment().format("MMMM");

  constructor() {}

  ngOnInit(): void {
    this.paymentMonth = moment(this.payments?.paymentScheduledDate).format('MMM')
    this.paymentDay = moment(this.payments?.paymentScheduledDate).format('DD')
  }
}
