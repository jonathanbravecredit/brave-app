import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticPageViewEvents } from '@shared/services/analytics/analytics/constants';
import { OutlineInputComponent } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-signup-thankyou',
  templateUrl: './signup-thankyou.component.html',
})
export class SignupThankyouComponent implements OnInit, OnDestroy {
  private emailSub$: Subscription;
  private email: string | undefined;
  constructor(private router: Router, private auth: AuthService, private analytics: AnalyticsService) {
    this.emailSub$ = this.auth.email$.subscribe((email) => (this.email = email));
  }

  ngOnInit(): void {}

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
}
