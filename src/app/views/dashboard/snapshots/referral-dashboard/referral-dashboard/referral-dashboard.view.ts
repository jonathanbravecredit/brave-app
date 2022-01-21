import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICampaign } from '@shared/interfaces/campaign.interface';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'brave-referral-dashboard',
  templateUrl: './referral-dashboard.view.html',
})
export class ReferralDashboardView implements OnInit, OnDestroy {
  metrics = [];
  referral: IReferral | undefined;
  payments: null | undefined;
  campaign: ICampaign | undefined;
  disabled: boolean = false;
  isActiveSub$: Subscription | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((resp: any) => {
      const now = new Date();
      this.metrics = resp.referral.metrics;
      this.referral = resp.referral.referral;
      this.payments = resp.referral.payments;
      this.campaign = resp.referral.campaign;
      this.disabled = moment(now).isAfter(this.campaign?.endDate);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.isActiveSub$?.unsubscribe();
  }
}
