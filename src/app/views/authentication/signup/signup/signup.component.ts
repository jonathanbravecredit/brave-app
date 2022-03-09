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
import { environment } from '@environments/environment';
import { IamService } from '@shared/services/auth/iam.service';
import { CampaignService } from '@shared/services/campaign/campaign.service';
const dayjs = require('dayjs');

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
  fetchingFinished: boolean = false;
  campaignActive: boolean = false; //true is campaign still active

  constructor(
    private router: Router,
    private auth: AuthService,
    private analytics: AnalyticsService,
    private interstitial: InterstitialService,
    private neverBounce: NeverbounceService,
    private referral: ReferralsService,
    private campaign: CampaignService,
    private iam: IamService,
  ) {
    router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('referralCode')) {
          await this.checkCampaign();
          this.hasReferralCode = true;
          this.referralCode = event.url.slice(event.url.indexOf('=') + 1);
          this.checkReferralCode();
        } else {
          this.fetchingFinished = true;
        }
      }
    });
  }

  ngOnInit(): void {}

  async checkCampaign() {
    const res = await this.campaign.getCampaignPublic();
    if (res) res.campaign = 'test';
    this.campaignActive = dayjs(res?.endDate).isAfter(new Date()) && res?.campaign !== 'NO_CAMPAIGN';
  }

  async checkReferralCode() {
    let referralValidationRequest = await this.iam.signRequest(
      `${environment.api}/referral/validation/${this.referralCode}`,
      'POST',
      {},
      JSON.stringify({}),
    );

    let referralValidationData = await fetch(referralValidationRequest);

    let referralValidation: { valid: boolean } = await referralValidationData.json();

    if (referralValidation.valid) {
    }

    this.validReferralCode = true;

    this.fetchingFinished = true;
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
      isValid = body.result === 'valid' ? true : false;
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
    document.location.href = 'https://www.brave.credit/referral-promotion-terms';
  }
}
