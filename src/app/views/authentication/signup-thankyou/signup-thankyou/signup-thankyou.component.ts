import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-signup-thankyou',
  templateUrl: './signup-thankyou.component.html',
})
export class SignupThankyouComponent implements OnDestroy {
  private emailSub$: Subscription;
  private email: string | undefined;
  constructor(private router: Router, private auth: AuthService) {
    this.emailSub$ = this.auth.email$.subscribe((email) => (this.email = email));
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
}
