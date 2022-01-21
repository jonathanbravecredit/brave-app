import { Component, Input, OnInit } from '@angular/core';
import { ICampaign } from '@shared/interfaces/campaign.interface';

@Component({
  selector: 'brave-referral-body-text',
  templateUrl: './referral-body-text.component.html',
})
export class ReferralBodyTextComponent implements OnInit {
  @Input() campaign: ICampaign | undefined;
  bonusThreshold: number = 0;
  denomination: number = 0;
  bonusAmount: number = 0;
  maxEarnings: number = 0;
  maxReferrals: number = 0;
  addOn: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.bonusThreshold = this.campaign?.bonusThreshold || 0;
    this.bonusAmount = this.campaign?.bonusAmount || 0;
    this.denomination = this.campaign?.denomination || 0;
    this.maxReferrals = this.campaign?.maxReferrals || 0;
    this.addOn = this.campaign?.addOnFlagOne === 'enrollment' ? 0 : this.denomination;
    this.maxEarnings = this.maxReferrals * this.denomination + this.addOn;
  }
}
