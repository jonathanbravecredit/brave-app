import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { DashboardReferralGauge } from '@views/dashboard/dashboard-enrolled/components/dashboard-referral-gauge/dashboard-referral-gauge.model';
import { DashboardReferralGaugeService } from '@views/dashboard/dashboard-enrolled/components/dashboard-referral-gauge/dashboard-referral-gauge.service';

@Component({
  selector: 'brave-dashboard-referral-gauge',
  templateUrl: './dashboard-referral-gauge.component.html',
  providers: [DashboardReferralGaugeService],
})
export class DashboardReferralGaugeComponent implements OnInit, DashboardReferralGauge {
  referral: IReferral | null = null;
  campaign: ICampaign | null = null;

  get percentage(): number {
    const referred = this.referral?.campaignActiveReferred || 0;
    const max = this.campaign?.maxReferrals || 0;
    const perc = !max ? 0 : referred / max;
    return perc * 100;
  }

  constructor(private gaugeService: DashboardReferralGaugeService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    try {
      const { referral, campaign } = await this.gaugeService.getData();
      this.referral = referral;
      this.campaign = campaign;
    } catch (err) {
      // nothing to do...don't show gauge
    }
  }

  goToReferral(): void {
    this.router.navigate([routes.root.dashboard.referrals.full]);
  }
}
