import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SignUpErrorDescriptions, SignUpErrors } from '@views/authentication/signup/signup/content';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { NeverBounceResponse, NeverbounceService } from '@shared/services/neverbounce/neverbounce.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { IReferral } from '@shared/interfaces/referrals.interface';
import { IamService } from '@shared/services/auth/iam.service';

export type SignupState = 'init' | 'invalid';

@Component({
  selector: 'brave-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  viewState: SignupState = 'init';
  message: string = '';
  hasReferralCode: boolean = false;
  referralCode: string | undefined;
  validReferralCode: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private analytics: AnalyticsService,
    private interstitial: InterstitialService,
    private neverBounce: NeverbounceService,
    private referral: ReferralsService,
    private http: HttpClient,
    private iam: IamService,
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('referralCode')) {
          this.hasReferralCode = true;
          this.referralCode = event.url.slice(event.url.indexOf('=') + 1);
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.hasReferralCode) {
      this.checkReferralCode();
    }
  }

  async checkReferralCode() {
    let referralValidation = await this.iam.signRequest(
      `${environment.marketing}/referral/validation/${this.referralCode}`,
      'GET',
      {},
      JSON.stringify({}),
    );

    if (JSON.parse(referralValidation).valid) {
      this.validReferralCode = true;
    }
  }

  /**
   * Method to sign user up
   * @param user
   * @returns Promise
   */
  async signUpWithCognito(user: NewUser): Promise<void> {
    if (!user) return;

    let isValid: boolean = false;
    try {
      const resp: Response = await this.neverBounce.validateEmail(user.username);
      const body: NeverBounceResponse = await resp.json();
      isValid = body.result === 'invalid' || body.result === 'disposable' || body.result === 'unknown' ? false : true;
    } catch (err) {
      isValid = false;
    }

    if (isValid) {
      try {
        const { userSub: sub } = await this.auth.signUp(user);
        this.analytics.fireCompleteRegistration(0.0, 'USD');
        this.analytics.fireUserTrackingEvent(sub);
        this.analytics.addToCohort();
        const code = this.referral.referredByCode$.value;
        await this.referral.createReferral(sub, code);
        this.interstitial.fetching$.next(false);
        this.router.navigate([routes.root.auth.thankyou.full]);
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
    this.message = message || `Invalid sign up credentials`;
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
    this.router.navigate([routes.root.auth.forgot.full]);
  }

  /**
   * Method to route user to login
   */
  goToLogin(): void {
    this.router.navigate([routes.root.auth.signin.full]);
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

  goToReferralTerms(): void {
    document.location.href = 'https://www.brave.credit/referral-promotion-terms'
  }
}
