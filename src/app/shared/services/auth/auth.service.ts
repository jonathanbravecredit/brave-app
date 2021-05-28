import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable } from 'rxjs';
import {
  CognitoUser,
  CognitoUserSession,
  ISignUpResult,
} from 'amazon-cognito-identity-js';
import { Store } from '@ngxs/store';
import {
  APIService,
  CreateAppDataInput,
} from '@shared/services/aws/api.service';

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

  constructor(private store: Store, private api: APIService) {
    Hub.listen('auth', (data) => {
      const { channel, payload } = data;
      // console.log('auth change', channel, payload);
      switch (payload.event) {
        case 'signIn':
          // need to determine if first time and if so write record to db
          this.authState.next(payload.data);
          this.getAuthCredentials().then((creds: ICredentials | null) => {
            if (creds) this.seedAppData(creds); //possibly update to async
          });
          break;
        case 'signOut':
          // handle sign out
          break;
        default:
          // do something by default
          break;
      }
    });
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
   *
   * @returns
   */
  getCurrentAuthenticatedUser(): Promise<any> {
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

  /**
   *
   * @param {ICredentials} creds
   */
  async seedAppData(creds: ICredentials): Promise<void> {
    const input: CreateAppDataInput = {
      id: creds.identityId,
      user: {
        id: creds.identityId,
        onboarding: {
          lastActive: 0,
          lastComplete: -1,
        },
      },
      agencies: {
        transunion: { authenticated: false },
        experian: { authenticated: false },
        equifax: { authenticated: false },
      },
    };
    this.api
      .CreateAppData(input)
      .then((value) => null)
      .catch((err) => console.log(err));
  }
}
