import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroupedYearMonthReferral, IReferral } from '@shared/interfaces/referrals.interface';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

@Component({
  selector: 'brave-referral-dashboard',
  templateUrl: './referral-dashboard.view.html',
})
export class ReferralDashboardView implements OnInit {
  metrics: IGroupedYearMonthReferral[] = [];
  referral: IReferral | undefined;
  constructor(private interstitial: InterstitialService, private route: ActivatedRoute) {
    this.route.data.subscribe((resp: any) => {
      this.metrics = resp.referral.metrics;
      this.referral = resp.referral.referral;
      this.interstitial.closeInterstitial();
    });
  }

  ngOnInit(): void {}
}
