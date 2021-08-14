import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

export type SignupState = 'init' | 'invalid';

@Component({
  selector: 'brave-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  viewState: SignupState = 'init';
  message: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private interstitial: InterstitialService,
  ) {}

  ngOnInit(): void {}

  /**
   * Method to sign user up
   * @param user
   * @returns Promise
   */
  async signUpWithCognito(user: NewUser): Promise<void> {
    if (!user) return;
    // add email validation here // const isValid = await this.accountMgmtService.isEmailValid(formData.username);
    let isValid = true;
    if (isValid) {
      try {
        await this.auth.signUp(user);
        this.interstitial.fetching$.next(false);
        this.router.navigate(['../thankyou'], { relativeTo: this.route });
      } catch (err) {
        this.interstitial.fetching$.next(false);
        this.handleSignupError('invalid', err.message);
      }
    } else {
      this.interstitial.fetching$.next(false);
      this.handleSignupError('invalid', 'Invalid sign up credentials');
    }
  }

  /**
   *
   * @param message
   */
  handleSignupError(viewState: SignupState, message: string): void {
    this.viewState = viewState;
    this.message = message;
  }

  /**
   * Method to sign user up/in with Facebook
   */
  signUpWithFacebook(): void {
    let provider = CognitoHostedUIIdentityProvider.Facebook;
    this.auth.socialSignIn(provider);
  }

  /**
   * Method to sign user up/in with Google
   */
  signUpWithGoogle(): void {
    let provider = CognitoHostedUIIdentityProvider.Google;
    this.auth.socialSignIn(provider);
  }

  /**
   * Method to route user to forgot
   */
  goToForgot(): void {
    this.router.navigate(['../forgot'], { relativeTo: this.route });
  }

  /**
   * Method to route user to login
   */
  goToLogin(): void {
    this.router.navigate(['../signin'], { relativeTo: this.route });
  }

  /**
   * Method to route user to privacy policy
   */
  goToPrivacy(): void {
    this.router.navigate(['/legal/privacy']);
  }

  /**
   * Method to route user to terms of service
   */
  goToTerms(): void {
    this.router.navigate(['/legal/tos']);
  }
}
