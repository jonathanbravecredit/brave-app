import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable, Subscription } from 'rxjs';
import {
  CognitoUser,
  CognitoUserSession,
  ISignUpResult,
} from 'amazon-cognito-identity-js';
import { SyncService } from '@shared/services/sync/sync.service';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

export interface NewUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState: Subject<CognitoUser | any> = new Subject<
    CognitoUser | any
  >();
  authState$: Observable<CognitoUser | any> = this.authState.asObservable();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;

  constructor(
    private store: Store,
    private sync: SyncService,
    private router: Router
  ) {
    Hub.listen('auth', async (data) => {
      const { channel, payload } = data;
      switch (payload.event) {
        case 'signIn':
          this.authState.next(payload.data);
          const creds: ICredentials = await this.getCurrentUserCredentials();
          this.sync.hallmonitor(creds);
          break;
        case 'signOut':
          // handle sign out
          break;
        default:
          // do something by default
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('authenticated user');
        this.authState.next(user);
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
  socialSignIn(
    provider: CognitoHostedUIIdentityProvider
  ): Promise<ICredentials> {
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
  forgotPasswordSubmit(
    email: string,
    code: string,
    pw: string
  ): Promise<void> | undefined {
    return email
      ? Auth.forgotPasswordSubmit(email.toLowerCase(), code, pw)
      : undefined;
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
  getAuthState(): Observable<CognitoUser | any> {
    return this.authState$;
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
   * @param {CognitoUser} user
   * @returns
   */
  async refreshAuthState(user?: CognitoUser): Promise<void> {
    if (user) {
      this.authState.next(user);
      return;
    }
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.authState.next(user);
    } catch (err) {
      const unconfirmed = await Auth.currentCredentials();
      this.authState.next(null);
    }
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
}
