import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Params, Router } from "@angular/router";
import { AuthService, NewUser } from "@shared/services/auth/auth.service";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { SignUpErrorDescriptions, SignUpErrors } from "@views/authentication/signup/signup/content";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { NeverBounceResponse, NeverbounceService } from "@shared/services/neverbounce/neverbounce.service";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import { ReferralsService } from "@shared/services/referrals/referrals.service";
import { Subscription } from "rxjs";
import { AuthResolverResults } from "@shared/resolvers/auth/auth.resolver";

export type SignupState = "init" | "invalid";

@Component({
  selector: "brave-signup",
  templateUrl: "./signup.component.html",
})
export class SignupComponent implements OnDestroy {
  viewState: SignupState = "init";
  message: string = "";
  hasReferralCode: boolean = false;
  referralCode: string | null | undefined;
  validReferralCode: boolean = false;
  campaignActive: boolean = false; //true is campaign still active
  routeSub$: Subscription | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private analytics: AnalyticsService,
    private interstitial: InterstitialService,
    private neverBounce: NeverbounceService,
    private referral: ReferralsService
  ) {
    this.subscribeToRouteDate();
  }

  ngOnDestroy(): void {
    this.routeSub$?.unsubscribe();
  }

  subscribeToRouteDate(): void {
    this.routeSub$ = this.route.data.subscribe((resp: any) => {
      const { referralCode, hasReferralCode, validReferralCode, campaignActive } = resp.data as AuthResolverResults;
      this.hasReferralCode = hasReferralCode;
      this.referralCode = referralCode;
      this.validReferralCode = validReferralCode;
      this.campaignActive = campaignActive;
    });
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
      isValid = body.result.toLowerCase() === "valid" ? true : false;
    } catch (err) {
      isValid = false;
    }

    if (isValid) {
      try {
        const { userSub: sub } = await this.auth.signUp(user);
        this.createReferrals(sub);
        this.handleAnalytics(sub);
        this.router.navigate([routes.root.auth.thankyou.full]);
      } catch (err: any) {
        if (err.code === SignUpErrors.UsernameExistsException) {
          this.handleSignupError("invalid", SignUpErrorDescriptions[SignUpErrors.UsernameExistsException]);
        } else if (err.code === SignUpErrors.NotAuthorizedException) {
          this.handleSignupError("invalid", err.message);
        } else if (err.code === SignUpErrors.InvalidPasswordException) {
          this.handleSignupError("invalid", SignUpErrorDescriptions[SignUpErrors.InvalidPasswordException]);
        } else {
          console.log("unknown error", err);
          this.handleSignupError("invalid", "Unknown signup error");
        }
      }
    } else {
      this.interstitial.fetching$.next(false);
      this.handleSignupError("invalid", "Please use a valid email");
    }
  }

  /**
   *
   * @param message
   */
  handleSignupError(viewState: SignupState, message: string): void {
    this.viewState = viewState;
    this.message = message || `Invalid sign up credentials`;
    this.interstitial.fetching$.next(false);
  }

  handleAnalytics(sub: string): void {
    try {
      this.analytics.fireCompleteRegistration(0.0, "USD");
      this.analytics.fireUserTrackingEvent(sub);
      this.analytics.addToCohort();
    } catch (err) {
      console.log("mixpanel error: ", err);
    }
  }

  createReferrals(sub: string): void {
    try {
      const code = this.referralCode;
      this.referral.createReferral(sub, code);
    } catch (err) {
      console.log("create referral error");
    }
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
    document.location.href = "https://www.brave.credit/referral-promotion-terms";
  }
}
