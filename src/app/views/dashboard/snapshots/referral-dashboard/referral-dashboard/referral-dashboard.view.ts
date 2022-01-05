import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGroupedYearMonthReferral, IPayments, IReferral } from '@shared/interfaces/referrals.interface';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-referral-dashboard',
  templateUrl: './referral-dashboard.view.html',
})
export class ReferralDashboardView implements OnInit, OnDestroy {
  metrics: IGroupedYearMonthReferral[] = [];
  referral: IReferral | undefined;
  payments: IPayments | undefined;
  disabled: boolean = false;
  isActiveSub$: Subscription | undefined;

  constructor(private route: ActivatedRoute, private referralService: ReferralsService) {
    this.route.data.subscribe((resp: any) => {
      this.metrics = resp.referral.metrics;
      this.referral = resp.referral.referral;
      this.payments = resp.referral.payments;
    });

    this.isActiveSub$ = this.referralService.isActive$.subscribe((isActive) => {
      this.disabled = isActive;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.isActiveSub$?.unsubscribe();
  }
}
