import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable } from 'rxjs';
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js';

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

  constructor() {
    Hub.listen('auth', (data) => {
      const { channel, payload } = data;
      if (channel === 'auth') {
        this.authState.next(payload.data);
      }
    });
  }

  signUp(user: NewUser): Promise<ISignUpResult> {
    return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.username,
      },
    });
  }

  //TODO eventually swap these for the local component methods
  signIn(username: string, password: string): Promise<CognitoUser | any> {
    return new Promise((resolve, reject) => {
      Auth.signIn(username, password)
        .then((user: CognitoUser | any) => {
          resolve(user);
        })
        .catch((error: any) => reject(error));
    });
  }

  //TODO eventually swap these for the local component methods
  signOut(): Promise<any> {
    return Auth.signOut();
  }

  //TODO eventually swap these for the local component methods
  socialSignIn(
    provider: CognitoHostedUIIdentityProvider
  ): Promise<ICredentials> {
    return Auth.federatedSignIn({
      provider: provider,
    });
  }

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

  async getAuthTokens(): Promise<string> {
    try {
      const user: CognitoUser = await Auth.currentAuthenticatedUser();
      let session = user.getSignInUserSession();
      return session ? session.getIdToken().getJwtToken() : '';
    } catch (err) {
      return '';
    }
  }

  getAuthState(): Observable<CognitoUser | any> {
    return this.authState$;
  }
}
