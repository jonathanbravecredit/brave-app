import { Component, Input, OnInit } from '@angular/core';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ICampaign } from '@shared/interfaces/campaign.interface';
const dayjs = require('dayjs');

@Component({
  selector: 'brave-referral-banner',
  templateUrl: './referral-banner.component.html',
})
export class ReferralBannerComponent implements OnInit {
  @Input() referral: IReferral | undefined;
  @Input() campaign: ICampaign | undefined;
  @Input() disabled: boolean | undefined;
  referredBonus: boolean = false;
  endMonth: string = '';
  endDay: string = '';
  constructor() {}

  ngOnInit(): void {
    this.endMonth = dayjs(this.campaign?.endDate).format('MM');
    this.endDay = dayjs(this.campaign?.endDate).format('DD');
  }
}
