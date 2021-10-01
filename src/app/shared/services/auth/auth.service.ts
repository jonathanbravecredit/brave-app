import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable, Subscription, BehaviorSubject } from 'rxjs';
import { CognitoUser, CognitoUserSession, CognitoUserAttribute, ISignUpResult } from 'amazon-cognito-identity-js';
import { SyncService } from '@shared/services/sync/sync.service';
import { Router } from '@angular/router';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';

export interface NewUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public email$: BehaviorSubject<string> = new BehaviorSubject('');
  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;

  constructor(private router: Router, private interstitial: InterstitialService) {}

  /**
   * This method is designed to help reload the user if the ID ever goes null
   * will perform the following:
   *  1. Get current credentials (if the token is still valid)
   *  2. If no token available, and on a different page...go back to login
   *  3. If on sign in or sign up...do nothing
   * @returns
   */
  async reloadCredentials(): Promise<void> {
    const creds = await this.getCurrentUserCredentials();
    if (creds) {
      // await this.sync.hallmonitor(creds);
    } else {
      switch (this.router.url) {
        case '/auth/signin':
          break;
        case '/auth/signup':
          break;
        case '/signin':
          break;
        case '/signin':
          break;
        default:
          this.router.navigate(['/auth/signin']);
          break;
      }
    }
  }

  /**
   * Cognito sign up method
   * - triggers but does not resolve fetching
   * @param {NewUser} user
   * @returns
   */
  signUp(user: NewUser): Promise<ISignUpResult> {
    this.email$.next(user.username);
    this.interstitial.fetching$.next(true);
    return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.username,
      },
    });
  }

  /**
   * Cognito sign in method
   * - triggers but does not resolve fetching
   * @param {string} username
   * @param {string} password
   * @returns
   */
  signIn(username: string, password: string): Promise<CognitoUser | any> {
    this.interstitial.fetching$.next(true);
    return new Promise((resolve, reject) => {
      Auth.signIn(username, password)
        .then((user: CognitoUser | any) => {
          resolve(user);
        })
        .catch((error: any) => reject(error));
    });
  }

  /**
   * Simple sign out method
   * - triggers but does not resolve fetching
   * @returns
   */
  signOut(): Promise<any> {
    this.interstitial.fetching$.next(true);
    return Auth.signOut();
  }

  /**
   * Social signin (supports facebook and google)
   * @param {CognitoHostedUIIdentityProvider} provider
   * @returns
   */
  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    window.sessionStorage.setItem('braveOAuthProvider', provider); // save for redirect back...Angular does not persist params on bootstrap
    return Auth.federatedSignIn({
      provider: provider,
    });
  }

  /**
   *
   * @param {string} email
   * @returns
   */
  resendSignUp(email: string): Promise<string> | undefined {
    return email ? Auth.resendSignUp(email) : undefined;
  }

  /**
   * @param email users email address to send password reset code to
   */
  forgotPassword(email: string): Promise<any> | undefined {
    return email ? Auth.forgotPassword(email) : undefined;
  }
  /**
   *
   * @param email
   * @param code
   * @param pw
   * @returns
   */
  forgotPasswordSubmit(email: string, code: string, pw: string): Promise<any> | undefined {
    return email && code && pw ? Auth.forgotPasswordSubmit(email.toLowerCase(), code, pw) : undefined;
  }

  /**
   * Get authenticated credentials of current user.
   * @return - A promise resolves to be current user's credentials
   */
  getCurrentUserCredentials(): Promise<ICredentials> {
    return Auth.currentUserCredentials();
  }

  /**
   * Get current authenticated user
   * @return - A promise resolves to current authenticated CognitoUser if success
   */
  getCurrentAuthenticatedUser(): Promise<CognitoUser> {
    return Auth.currentAuthenticatedUser();
  }

  /**
   *
   * @returns
   */
  refreshSession(): Promise<CognitoUserSession> {
    return Auth.currentSession();
  }

  /**
   *
   */
  async getAuthTokens(): Promise<string> {
    try {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      let session = user.getSignInUserSession();
      return session ? session.getIdToken().getJwtToken() : '';
    } catch (err) {
      return '';
    }
  }

  /**
   *
   */
  async getAuthCredentials(): Promise<ICredentials | null> {
    try {
      const creds: ICredentials = await Auth.currentUserCredentials();
      return creds;
    } catch (err) {
      return null;
    }
  }

  /**
   * Returns email from user attributes.
   *  - Email is the one attribute that is required
   * @returns
   */
  async getUserEmail(): Promise<string> {
    try {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      const attrs = await Auth.userAttributes(user);
      const email = attrs.filter((a) => a.Name.toLowerCase() === 'email')[0]?.Value;
      return email;
    } catch (err) {
      return '';
    }
  }

  /**
   * Submit email to cognito for change, if accepted returns true
   * - triggers and resolves fetching
   * @param email
   * @returns
   */
  async updateUserEmail(email: string): Promise<boolean> {
    this.interstitial.fetching$.next(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { email: email });
      this.interstitial.fetching$.next(false);
      return true;
    } catch (err) {
      this.interstitial.fetching$.next(false);
      throw `authService:updateUserEmail=${err}`;
    }
  }

  /**
   * Submit code sent by cognito for email change, if accepted returns true
   * - triggers and resolves fetching
   * @param code
   * @returns
   */
  async verifyUserEmail(code: string): Promise<boolean> {
    this.interstitial.fetching$.next(true);
    try {
      await Auth.verifyCurrentUserAttributeSubmit('email', code);
      this.interstitial.fetching$.next(false);
      return true;
    } catch (err) {
      this.interstitial.fetching$.next(false);
      throw `authService:verifyUserEmail=${err}`;
    }
  }

  /**
   * Submit old and new password to change, if accepted returns true
   * - triggers and resolves fetching
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  async resetPassword(oldPassword: string, newPassword: string): Promise<string> {
    this.interstitial.fetching$.next(true);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const resp = await Auth.changePassword(user, oldPassword, newPassword);
      this.interstitial.fetching$.next(false);
      return resp.toLowerCase();
    } catch (err: any) {
      this.interstitial.fetching$.next(false);
      return err.message;
    }
  }

  /**
   * Submit user for deletion, disables in cognito
   * - triggers and resolves fetching
   * @returns
   */
  async deactivateAccount(): Promise<string> {
    this.interstitial.fetching$.next(true);
    try {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      return new Promise((resolve, reject) => {
        this.interstitial.fetching$.next(false);
        user.deleteUser((err, res) => {
          if (err) reject(err);
          if (res) resolve(res);
        });
      });
    } catch (err) {
      this.interstitial.fetching$.next(false);
      throw `authService:deactivateAccount=${err}`;
    }
  }
}
