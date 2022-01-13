import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SignInErrorDescriptions, SignInErrors } from '@views/authentication/signin/signin/content';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AnalyticClickEvents } from '@shared/services/analytics/analytics/constants';

export type SigninState = 'init' | 'invalid';

@Component({
  selector: 'brave-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  viewState: SigninState = 'init';
  message: string = '';
  constructor(
    private router: Router,
    private auth: AuthService,
    private interstitial: InterstitialService,
    private analytics: AnalyticsService,
  ) {}

  /**
   * Method to sign user up
   */
  async signInWithCognito(user: NewUser): Promise<void> {
    if (!user) return;
    try {
      const cognitorUser = await this.auth.signIn(user.username, user.password);
      this.analytics.fireClickEvent(AnalyticClickEvents.UserLogIn, { google: true, mixpanel: true, brave: true });
      if (cognitorUser?.challengeName === 'SMS_MFA' || cognitorUser.challengeName === 'SOFTWARE_TOKEN_MFA') {
      } else if (cognitorUser?.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const { requiredAttributes } = cognitorUser?.challengeParam;
      } else if (cognitorUser?.challengeName === 'MFA_SETUP') {
      }
      // this.interstitial.fetching$.next(false);
    } catch (err: any) {
      this.interstitial.fetching$.next(false);
      if (err.code === SignInErrors.UserNotConfirmedException) {
        const unconfirmedUserState = {};
        this.handleSigninError('invalid', SignInErrorDescriptions[SignInErrors.UserNotConfirmedException]);
      } else if (err.code === SignInErrors.PasswordResetRequiredException) {
        this.handleSigninError('invalid', SignInErrorDescriptions[SignInErrors.PasswordResetRequiredException]);
      } else if (err.code === SignInErrors.NotAuthorizedException) {
        this.handleSigninError('invalid', err.message);
      } else if (err.code === SignInErrors.UserNotFoundException) {
        this.handleSigninError('invalid', SignInErrorDescriptions[SignInErrors.UserNotFoundException]);
      } else {
        this.handleSigninError('invalid', err.message);
      }
    }
  }

  /**
   * Passes error message to form
   * - excepts simple strings or html
   * @param viewState
   */
  handleSigninError(viewState: SigninState, message: string): void {
    this.viewState = viewState;
    this.message =
      message || `This doesn't appear to be a valid email address. Perhaps choose a new one and try again.`;
  }

  /**
   * Method to sign user up/in with Facebook
   */
  signInWithFacebook(): void {
    let provider = CognitoHostedUIIdentityProvider.Facebook;
    this.auth.socialSignIn(provider);
  }

  /**
   * Method to sign user up/in with Google
   */
  signInWithGoogle(): void {
    let provider = CognitoHostedUIIdentityProvider.Google;
    this.auth.socialSignIn(provider);
  }

  /**
   * Method to route user to forgot
   */
  goToForgot(): void {
    this.router.navigate([routes.root.auth.forgot.full]);
  }

  /**
   * Method to route user to privacy policy
   */
  goToPrivacy(): void {
    this.router.navigate([routes.root.compliance.privacy.full]);
  }

  /**
   * Method to route user to terms of service
   */
  goToTerms(): void {
    this.router.navigate([routes.root.compliance.tos.full]);
  }

  /**
   * Method to route user to signup
   */
  goToSignup(): void {
    this.router.navigate([routes.root.auth.signup.full]);
  }
}
