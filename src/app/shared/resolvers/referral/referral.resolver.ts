import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { CampaignResolver } from '@shared/resolvers/campaign/campaign.resolver';
import { ReferralRecordResolver } from '@shared/resolvers/referral-record/referral-record.resolver';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

export interface IReferralResolver {
  metrics: null;
  referral: IReferral | null;
  payments: null;
  campaign: ICampaign | null;
}

@Injectable({
  providedIn: 'root',
})
export class ReferralResolver implements Resolve<IReferralResolver> {
  constructor(
    private interstitial: InterstitialService,
    protected referralRecord: ReferralRecordResolver,
    protected campaignResolver: CampaignResolver,
  ) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IReferralResolver> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();

    let metrics = null;
    let payments = null;

    let referral;
    try {
      referral = await this.referralRecord.resolve(route, state);
    } catch {
      referral = null;
    }

    let campaign;
    try {
      campaign = await this.campaignResolver.resolve();
    } catch {
      campaign = null;
    }

    return {
      metrics,
      referral,
      payments,
      campaign,
    };
  }
}
