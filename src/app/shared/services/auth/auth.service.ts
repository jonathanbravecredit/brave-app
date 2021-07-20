import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js';
import { SyncService } from '@shared/services/sync/sync.service';
import { Router } from '@angular/router';

export interface NewUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;

  constructor(private sync: SyncService, private router: Router) {
    Hub.listen('auth', async (data) => {
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          console.log('in signin');
          const creds: ICredentials = await this.getCurrentUserCredentials();
          console.log('current credentials', creds);
          if (creds) await this.sync.hallmonitor(creds, true);
          break;
        case 'signOut':
          this.router.navigate(['/auth/signin']);
          // handle sign out
          break;
        default:
          // do something by default
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then(async (user) => {
        console.log('authenticated user');
        const creds: ICredentials = await this.getCurrentUserCredentials();
        if (creds) await this.sync.hallmonitor(creds);
      })
      .catch(() => console.log('Not signed in'));
  }

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
      await this.sync.hallmonitor(creds);
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
   * @param {NewUser} user
   * @returns
   */
  signUp(user: NewUser): Promise<ISignUpResult> {
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
   * @param {string} username
   * @param {string} password
   * @returns
   */
  signIn(username: string, password: string): Promise<CognitoUser | any> {
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
   * @returns
   */
  signOut(): Promise<any> {
    return Auth.signOut();
  }

  /**
   * Social signin (supports facebook and google)
   * @param {CognitoHostedUIIdentityProvider} provider
   * @returns
   */
  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
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
   *
   * @param email
   * @param code
   * @param pw
   * @returns
   */
  forgotPasswordSubmit(email: string, code: string, pw: string): Promise<void> | undefined {
    return email ? Auth.forgotPasswordSubmit(email.toLowerCase(), code, pw) : undefined;
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
   * Submit email to cognito for change, if accepted returns true
   * @param email
   * @returns
   */
  async updateUserEmail(email: string): Promise<boolean> {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, { email: email });
      return true;
    } catch (err) {
      throw `authService:updateUserEmail=${err}`;
    }
  }

  /**
   * Submit code sent by cognito for email change, if accepted returns true
   * @param code
   * @returns
   */
  async verifyUserEmail(code: string): Promise<boolean> {
    try {
      await Auth.verifyCurrentUserAttributeSubmit('email', code);
      return true;
    } catch (err) {
      throw `authService:verifyUserEmail=${err}`;
    }
  }

  /**
   * Submit old and new password to change, if accepted returns true
   * @param oldPassword
   * @param newPassword
   * @returns
   */
  async resetPassword(oldPassword: string, newPassword: string): Promise<boolean> {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const resp = await Auth.changePassword(user, oldPassword, newPassword);
      return resp.toLowerCase() === 'success';
    } catch (err) {
      throw `authService:resetPassword=${err}`;
    }
  }

  /**
   * Submit user for deletion, disables in cognito
   * @returns
   */
  async deactivateAccount(): Promise<string> {
    try {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      return new Promise((resolve, reject) => {
        user.deleteUser((err, res) => {
          if (err) reject(err);
          if (res) resolve(res);
        });
      });
    } catch (err) {
      throw `authService:deactivateAccount=${err}`;
    }
  }
}
