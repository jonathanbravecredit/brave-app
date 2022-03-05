import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RenderedViews } from '@shared/services/monitor/rendered/rendered.service';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent implements OnDestroy {
  routeSub$: Subscription | undefined;
  public tag = RenderedViews.Authentication;
  constructor(private route: ActivatedRoute, private referrals: ReferralsService) {
    //referral code
    this.routeSub$ = this.route.queryParams.subscribe((params) => {
      const { referralCode } = params;
      if (!referralCode) return;
      this.referrals.referredByCode$.next(referralCode);
      this.referrals.checkCodeValidity(referralCode);
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }
}
