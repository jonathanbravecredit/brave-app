import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { CampaignService } from '@shared/services/campaign/campaign.service';
import { ReferralsService } from '@shared/services/referrals/referrals.service';

export interface AuthResolverResults {
  referralCode: string | null;
  hasReferralCode: boolean;
  validReferralCode: boolean;
  campaignActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthResolver implements Resolve<AuthResolverResults> {
  constructor(private referrals: ReferralsService, private campaign: CampaignService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<AuthResolverResults> {
    const { referralCode } = route.queryParams;
    this.referrals.referredByCode$.next(referralCode);
    const hasReferralCode = !!referralCode;
    const { valid: validReferralCode } = await this.referrals.validateReferralCode(referralCode);
    const campaignActive = await this.campaign.setCampaignActive();
    return {
      referralCode,
      hasReferralCode,
      validReferralCode,
      campaignActive,
    };
  }
}
