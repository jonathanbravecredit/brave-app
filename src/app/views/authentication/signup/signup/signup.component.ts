import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SignUpErrorDescriptions, SignUpErrors } from '@views/authentication/signup/signup/content';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { NeverBounceResponse, NeverbounceService } from '@shared/services/neverbounce/neverbounce.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { ReferralsService } from '@shared/services/referrals/referrals.service';
import { CampaignService } from '@shared/services/campaign/campaign.service';
import { combineLatest, from, of, Subscription } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

export type SignupState = 'init' | 'invalid';

@Component({
  selector: 'brave-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnDestroy {
  viewState: SignupState = 'init';
  message: string = '';
  hasReferralCode: boolean = false;
  referralCode: string | undefined;
  validReferralCode: boolean = false;
  fetchingFinished: boolean = false;
  campaignActive: boolean = false; //true is campaign still active

  paramsSub$: Subscription | undefined;
  validateSub$: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private analytics: AnalyticsService,
    private interstitial: InterstitialService,
    private neverBounce: NeverbounceService,
    private referral: ReferralsService,
    private campaign: CampaignService,
  ) {
    router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.paramsSub$ = this.route.queryParams.subscribe((params) => {
          this.handleParams(params);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSub$?.unsubscribe();
    this.validateSub$?.unsubscribe();
  }

  handleParams(params: Params): void {
    const { referralCode } = params;
    referralCode ? this.validate(referralCode) : this.cleanUp();
  }

  validate(code: string): void {
    this.hasReferralCode = true;
    this.referralCode = code;
    const codeValid$ = from(this.referral.validateReferralCode(this.referralCode));
    this.validateSub$ = combineLatest([this.campaign.isActive$, codeValid$]).subscribe(([active, validation]) => {
      this.campaignActive = active;
      this.validReferralCode = validation.valid;
      this.cleanUp();
    });
  }

  cleanUp(): void {
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
