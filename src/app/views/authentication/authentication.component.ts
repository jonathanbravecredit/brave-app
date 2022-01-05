import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnDestroy {
  routeSub$: Subscription | undefined;
  constructor(private route: ActivatedRoute, private referrals: ReferralsService) {
    //referral code
    this.routeSub$ = this.route.queryParams.subscribe((params) => {
      const { referralCode } = params;
      if (!referralCode) return;
      this.referrals.referredByCode$.next(referralCode);
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }
}
