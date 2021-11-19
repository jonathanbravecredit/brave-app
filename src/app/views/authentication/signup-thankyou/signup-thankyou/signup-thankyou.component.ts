import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';
import { OutlineVerificationcodeFormComponent } from '@shared/components/forms/outline-verificationcode-form/outline-verificationcode-form.component';

@Component({
  selector: 'brave-signup-thankyou',
  templateUrl: './signup-thankyou.component.html',
})
export class SignupThankyouComponent implements OnInit, OnDestroy {
  private emailSub$: Subscription;
  private email: string | undefined;
  @ViewChild(OutlineInputComponent) input: OutlineInputComponent | undefined;
  constructor(
    private router: Router,
    private auth: AuthService,
    private analytics: AnalyticsService,
    private referralsService: ReferralsService,
  ) {
    this.emailSub$ = this.auth.email$.subscribe((email) => (this.email = email));
  }

  ngOnInit(): void {
    this.analytics.firePageViewEvent(AnalyticPageViewEvents.AuthThankyou);
    this.auth.getCurrentUserCredentials().then((t1) => {
      console.log('t1 ===> ', t1);
    });
    this.auth.getUserSub().then((t2) => {
      console.log('t2 ===> ', t2);
    });
    this.auth.getAuthTokens().then((t4) => {
      console.log('t4 ===> ', t4);
    });
  }

  ngOnDestroy(): void {
    if (this.emailSub$) this.emailSub$.unsubscribe();
  }

  /**
   * Call AWS to resend code, sign user out and redirect them to signin
   */
  onResendClick() {
    if (this.email) {
      this.auth.resendSignUp(this.email)?.then(() => {
        setTimeout(async () => {
          await this.auth.signOut();
          this.router.navigate(['/auth/signin']);
        }, 2000);
      });
    }
  }

  test(): void {
    const input = this.input?.componentFormGroup.getRawValue();
    console.log('input ===> ', input);
    this.referralsService.createReferral('jpizzolato36@gmail.com').then((res) => {
      console.log('res ===> ', res);
    });
  }
}
