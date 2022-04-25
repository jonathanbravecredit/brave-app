import { Injectable } from '@angular/core';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { CampaignService } from '@shared/services/campaign/campaign.service';
import { ReferralsService } from '@shared/services/referrals/referrals.service';

@Injectable()
export class DashboardReferralGaugeService {
  constructor(private referralService: ReferralsService, private campaignService: CampaignService) {}

  async getData(): Promise<{ referral: IReferral | null; campaign: ICampaign | null }> {
    let referral = null;
    let campaign = null;
    try {
      referral = await this.referralService.getReferral();
      campaign = await this.campaignService.getCampaign();
      return { referral, campaign };
    } catch (err) {
      return { referral, campaign };
    }
  }
}
