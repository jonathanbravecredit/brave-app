import { Component, Input, OnInit } from '@angular/core';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import * as moment from 'moment';

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
    this.endMonth = moment(this.campaign?.endDate).format('MM');
    this.endDay = moment(this.campaign?.endDate).format('DD');
  }
}
