import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { GooglePageViewEvents as gtEvts } from '@shared/services/analytics/google/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';

@Component({
  selector: 'brave-signup-thankyou',
  templateUrl: './signup-thankyou.component.html',
})
export class SignupThankyouComponent implements OnInit, OnDestroy {
  private emailSub$: Subscription;
  private email: string | undefined;
  private interval: any;
  constructor(private router: Router, private auth: AuthService, private google: GoogleService) {
    this.emailSub$ = this.auth.email$.subscribe((email) => (this.email = email));
  }

  async ngOnInit(): Promise<void> {
    this.google.firePageViewEvent(gtEvts.AuthThankyou);
  }

  ngOnDestroy(): void {
    if (this.emailSub$) this.emailSub$.unsubscribe();
    clearInterval(this.interval);
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
