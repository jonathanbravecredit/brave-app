import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { GooglePageViewEvents as gtEvts } from '@shared/services/analytics/google/constants';
import { SignUpErrorDescriptions, SignUpErrors } from '@views/authentication/signup/signup/content';

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
    private google: GoogleService,
    private interstitial: InterstitialService,
  ) {}

  ngOnInit(): void {
    this.google.firePageViewEvent(gtEvts.AuthSignup);
  }

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
        const resp = await this.auth.signUp(user);
        const signin = await this.auth.signIn(user.username, user.password);
        // this.interstitial.fetching$.next(false);
        // this.router.navigate(['../thankyou'], { relativeTo: this.route });
      } catch (err: any) {
        if (err.code === SignUpErrors.UsernameExistsException) {
          this.handleSignupError('invalid', SignUpErrorDescriptions[SignUpErrors.UsernameExistsException]);
        } else if (err.code === SignUpErrors.NotAuthorizedException) {
          this.handleSignupError('invalid', err.message);
        } else if (err.code === SignUpErrors.InvalidPasswordException) {
          this.handleSignupError('invalid', SignUpErrorDescriptions[SignUpErrors.InvalidPasswordException]);
        } else {
          this.handleSignupError('invalid', 'Invalid sign up credentials');
        }
      }
      this.interstitial.fetching$.next(false);
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
