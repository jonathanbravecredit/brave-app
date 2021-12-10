import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ReferralsService } from '@shared/services/referrals/referrals.service';

@Injectable({
  providedIn: 'root',
})
export class ReferralRecordResolver implements Resolve<IReferral> {
  constructor(private referralService: ReferralsService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IReferral> {
    return await this.referralService.getReferral();
  }
}
