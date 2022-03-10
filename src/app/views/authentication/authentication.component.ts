import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from '@shared/services/campaign/campaign.service';
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
  constructor(private route: ActivatedRoute, private referrals: ReferralsService, private campaign: CampaignService) {
    //referral code
    this.routeSub$ = this.route.queryParams.subscribe((params) => {
      const { referralCode } = params;
      if (!referralCode) return;
      this.referrals.referredByCode$.next(referralCode);
      this.referrals.validateReferralCode(referralCode);
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub$) this.routeSub$.unsubscribe();
  }
}
