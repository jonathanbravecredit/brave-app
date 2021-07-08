import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { ICredentials } from '@aws-amplify/core';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { APIService } from '@shared/services/aws/api.service';
import { Store } from '@ngxs/store';
import * as AppDataActions from '@store/app-data/app-data.actions';
import * as UserActions from '@store/user/user.actions';

@Component({
  selector: 'brave-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private auth: AuthService,
    private api: APIService,
  ) {}

  ngOnInit(): void {}

  /**
   * Method to sign user up
   */
  async signInWithCognito(user: NewUser): Promise<void> {
    if (!user) return;
    // add email validation here // const isValid = await this.accountMgmtService.isEmailValid(formData.username);
    let isValid = true;
    if (isValid) {
      try {
        const cognitorUser = await this.auth.signIn(user.username, user.password);
        if (cognitorUser?.challengeName === 'SMS_MFA' || cognitorUser.challengeName === 'SOFTWARE_TOKEN_MFA') {
          console.log('MFA challenge');
          // this.router.navigate(['/account/submitmfa']);
        } else if (cognitorUser?.challengeName === 'NEW_PASSWORD_REQUIRED') {
          const { requiredAttributes } = cognitorUser?.challengeParam;
        } else if (cognitorUser?.challengeName === 'MFA_SETUP') {
          console.log('OTP setup');
          // this.auth.setupTOTP(user);
        } // don't do anything...routing handled by HUB
      } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
          const unconfirmedUserState = {};
          // TODO go to dashboard with an unconfirmed state (can't do anything)
        } else if (err.code === 'PasswordResetRequiredException') {
          // TODO handle error
          this.router.navigate(['../error'], { relativeTo: this.route });
        } else if (err.code === 'NotAuthorizedException') {
          // TODO handle error
          this.router.navigate(['../error'], { relativeTo: this.route });
        } else if (err.code === 'UserNotFoundException') {
          // TODO handle error
          this.router.navigate(['../error'], { relativeTo: this.route });
        } else {
          // TODO handle error
        }
        this.router.navigate(['../error'], { relativeTo: this.route });
      }
    } else {
      // TODO: need to provide feedback to the user on the invalid email
      this.router.navigate(['../error'], { relativeTo: this.route });
    }
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
    this.router.navigate(['../forgot'], { relativeTo: this.route });
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
