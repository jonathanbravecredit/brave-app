import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { SimpleSigninFormComponent } from '@shared/components/forms/simple-signin-form/simple-signin-form.component';

export type SigninState = 'init' | 'invalid';

@Component({
  selector: 'brave-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  viewState: SigninState = 'init';
  message: string = '';
  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {}

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
        } else if (cognitorUser?.challengeName === 'NEW_PASSWORD_REQUIRED') {
          const { requiredAttributes } = cognitorUser?.challengeParam;
        } else if (cognitorUser?.challengeName === 'MFA_SETUP') {
          console.log('OTP setup');
        }
      } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
          const unconfirmedUserState = {};
          this.handleSigninError('invalid', 'User is not confirmed');
        } else if (err.code === 'PasswordResetRequiredException') {
          this.handleSigninError('invalid', 'Password reset required');
        } else if (err.code === 'NotAuthorizedException') {
          this.handleSigninError('invalid', err.message);
        } else if (err.code === 'UserNotFoundException') {
          this.handleSigninError('invalid', 'Please use a registered email');
        } else {
          this.handleSigninError('invalid', err.message);
        }
      }
    } else {
      this.handleSigninError(
        'invalid',
        `This doesn't appear to be a valid email address. Perhaps choose a new one and try again.`,
      );
    }
  }

  /**
   *
   * @param viewState
   */
  handleSigninError(viewState: SigninState, message: string): void {
    this.viewState = viewState;
    this.message = message;
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

  /**
   * Method to route user to signup
   */
  goToSignup(): void {
    this.router.navigate(['/auth/signup']);
  }
}
