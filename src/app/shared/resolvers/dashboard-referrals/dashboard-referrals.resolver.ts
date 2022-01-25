import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DashboardReferralsResolver implements Resolve<IReferral> {
  constructor(private referralService: ReferralsService) {}
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IReferral> {
    const now = new Date();
    const month = moment(now).format('MM');
    const year = moment(now).format('YYYY');
    return await this.referralService.getReferral();
  }
}
