import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ReferralsService } from '@shared/services/referrals/referrals.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardReferralsResolver implements Resolve<IReferral> {
  constructor(private referralService: ReferralsService) {}
  async resolve(): Promise<IReferral> {
    return await this.referralService.getReferral();
  }
}
