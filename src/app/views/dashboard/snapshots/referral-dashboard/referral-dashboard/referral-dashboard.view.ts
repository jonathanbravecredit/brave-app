import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroupedYearMonthReferral, IPayments, IReferral } from '@shared/interfaces/referrals.interface';

@Component({
  selector: 'brave-referral-dashboard',
  templateUrl: './referral-dashboard.view.html',
})
export class ReferralDashboardView implements OnInit {
  metrics: IGroupedYearMonthReferral[] = [];
  referral: IReferral | undefined;
  payments: IPayments | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((resp: any) => {
      this.metrics = resp.referral.metrics;
      this.referral = resp.referral.referral;
      this.payments = resp.referral.payments;
    });
  }

  ngOnInit(): void {}
}