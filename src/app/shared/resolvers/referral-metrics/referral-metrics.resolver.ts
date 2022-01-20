import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ReferralMetricsResolver implements Resolve<any> {
  constructor(private referral: ReferralsService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const now = new Date();
    const month = moment(now).format('MM');
    const year = moment(now).format('YYYY');
    // return await this.referralService.getReferralMonthlyCampaignEarnings(month, year);
    return [
      {
        yearMonth: 12022,
        referrals: 0,
      },
    ];
  }
}
