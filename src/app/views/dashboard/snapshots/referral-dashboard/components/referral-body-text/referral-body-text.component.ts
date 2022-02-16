import { Component, Input, OnInit } from '@angular/core';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('America/Los_Angeles');

@Component({
  selector: 'brave-referral-body-text',
  templateUrl: './referral-body-text.component.html',
})
export class ReferralBodyTextComponent implements OnInit {
  @Input() campaign: ICampaign | undefined;
  paymentLongForm: string = '';
  bonusThreshold: number = 0;
  denomination: number = 0;
  bonusAmount: number = 0;
  maxEarnings: number = 0;
  maxReferrals: number = 10;
  addOn: number = 0;
  constructor() {}

  ngOnInit(): void {
    const payDate = dayjs(this.campaign?.endDate).tz();
    this.paymentLongForm = payDate.format('MMMM Do');
    this.bonusThreshold = this.campaign?.bonusThreshold || 0;
    this.bonusAmount = this.campaign?.bonusAmount || 0;
    this.denomination = this.campaign?.denomination || 0;
    this.maxReferrals = this.campaign?.maxReferrals || 10;
    this.addOn = this.campaign?.addOnFlagOne === 'enrollment' ? 0 : this.denomination;
    this.maxEarnings = this.maxReferrals * this.denomination;
  }
}
