import { Component, Input, OnInit } from '@angular/core';
import { IReferral } from '@shared/interfaces/referrals.interface';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('America/Los_Angeles');

@Component({
  selector: 'brave-referral-earnings',
  templateUrl: './referral-earnings.component.html',
})
export class ReferralEarningsComponent implements OnInit {
  @Input() referral: IReferral | undefined;
  paymentLongForm: string = '';
  earnings: number = 0;

  constructor() {}

  ngOnInit(): void {
    const payDate = dayjs(this.referral?.nextPaymentDate).tz();
    this.paymentLongForm = payDate.format('dddd, MMM DD');
    this.earnings = (this.referral?.campaignActiveEarned || 0) + (this.referral?.campaignActiveBonus || 0);
  }
}
