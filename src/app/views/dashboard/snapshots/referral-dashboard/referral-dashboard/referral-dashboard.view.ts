import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';

@Component({
  selector: 'brave-referral-dashboard',
  templateUrl: './referral-dashboard.view.html',
})
export class ReferralDashboardView implements OnInit {
  metrics: IGroupedYearMonthReferral[] = [];
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((resp: any) => {
      this.metrics = resp.metrics;
      console.log('metrics ==> ', this.metrics);
    });
  }

  ngOnInit(): void {}
}
