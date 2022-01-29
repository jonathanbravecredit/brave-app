import { Component, Input, OnInit } from '@angular/core';
import { IReferral } from '@shared/interfaces/referrals.interface';
import * as moment from 'moment';

@Component({
  selector: 'brave-referral-earnings',
  templateUrl: './referral-earnings.component.html',
})
export class ReferralEarningsComponent implements OnInit {
  @Input() referral: IReferral | undefined;
  paymentMonth: string = '';
  paymentDay: any = '';
  earnings: number = 0;
  month: string = moment().format('MMMM');

  constructor() {}

  ngOnInit(): void {
    this.paymentMonth = moment(this.referral?.nextPaymentDate).format('MMM');
    this.paymentDay = moment(this.referral?.nextPaymentDate).format('DD');
    this.earnings = (this.referral?.campaignActiveEarned || 0) + (this.referral?.campaignActiveBonus || 0);
  }
}
