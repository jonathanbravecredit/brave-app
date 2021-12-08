import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IGroupedYearMonthReferral, IReferral } from '@shared/interfaces/referrals.interface';
import { ReferralMetricsResolver } from '@shared/resolvers/referral-metrics/referral-metrics.resolver';
import { ReferralRecordResolver } from '@shared/resolvers/referral-record/referral-record.resolver';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

export interface IReferralResolver {
  metrics: IGroupedYearMonthReferral[] | null;
  referral: IReferral | null;
}

@Injectable({
  providedIn: 'root',
})
export class ReferralResolver implements Resolve<IReferralResolver> {
  constructor(
    private interstitial: InterstitialService,
    protected referralMetrics: ReferralMetricsResolver,
    protected referralRecord: ReferralRecordResolver,
  ) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IReferralResolver> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    const metrics = await this.referralMetrics.resolve(route, state);
    const referral = await this.referralRecord.resolve(route, state);
    return {
      metrics,
      referral,
    };
  }
}
