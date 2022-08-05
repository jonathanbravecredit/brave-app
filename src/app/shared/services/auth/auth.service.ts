import { Inject, Injectable } from "@angular/core";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { ICredentials } from "@aws-amplify/core";
import { Auth } from "@aws-amplify/auth";
import { BehaviorSubject } from "rxjs";
import { CognitoUser, CognitoUserSession, ISignUpResult } from "amazon-cognito-identity-js";
import { Router } from "@angular/router";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";

export interface NewUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public email$: BehaviorSubject<string> = new BehaviorSubject("");
  public static SIGN_IN = "signIn";
  public static SIGN_OUT = "signOut";
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;

  constructor(
    private router: Router,
    private interstitial: InterstitialService,
    @Inject(Auth) private auth: typeof Auth
  ) {}

  /**
   * Cognito sign up method
   * - triggers but does not resolve fetching
   * @param {NewUser} user
   * @returns
   */
  signUp(user: NewUser): Promise<ISignUpResult> {
    this.email$.next(user.username);
    this.interstitial.fetching$.next(true);
    return this.auth.signUp({
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
      this.auth
        .signIn(username, password)
        ?.then((user: CognitoUser | any) => {
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
    return this.auth.signOut();
  }

  /**
   * Social signin (supports facebook and google)
   * @param {CognitoHostedUIIdentityProvider} provider
   * @returns
   */
  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    window.sessionStorage.setItem("braveOAuthProvider", provider); // save for redirect back...Angular does not persist params on bootstrap
    return this.auth.federatedSignIn({
      provider: provider,
    });
  }

  /**
   *
   * @param {string} email
   * @returns
   */
  async resendSignUp(email: string): Promise<string | undefined> {
    try {
      if (email) {
        return await this.auth.resendSignUp(email);
      } else {
        return undefined;
      }
    } catch (e) {
      return undefined;
    }
  }

  /**
   * @param email users email address to send password reset code to
   */
  forgotPassword(email: string): Promise<any> | undefined {
    return email ? this.auth.forgotPassword(email) : undefined;
  }
  /**
   *
   * @param email
   * @param code
   * @param pw
   * @returns
   */
  forgotPasswordSubmit(email: string, code: string, pw: string): Promise<any> | undefined {
    return email && code && pw ? this.auth.forgotPasswordSubmit(email.toLowerCase(), code, pw) : undefined;
  }

  /**
   * Get authenticated credentials of current user.
   * @return - A promise resolves to be current user's credentials
   */
  getCurrentUserCredentials(): Promise<ICredentials> {
    return this.auth.currentUserCredentials();
  }

  /**
   * Get current authenticated user
   * @return - A promise resolves to current authenticated CognitoUser if success
   */
  getcurrentAuthenticatedUser(): Promise<CognitoUser> {
    return this.auth.currentAuthenticatedUser();
  }

  /**
   *
   * @returns
   */
  refreshSession(): Promise<CognitoUserSession> {
    return this.auth.currentSession();
  }

  /**
   * Get JWT tokens for auth
   * @returns
   */
  async getAccessTokenJwtToken(): Promise<string | null> {
    try {
      return (await this.auth.currentSession()).getAccessToken().getJwtToken();
    } catch (err) {
      return null;
    }
  }

  /**
   *
   */
  async getIdTokenJwtTokens(): Promise<string> {
    try {
      const user: CognitoUser = await this.auth.currentAuthenticatedUser();
      let session = user?.getSignInUserSession();
      return session ? session.getIdToken().getJwtToken() : "";
    } catch (err) {
      return "";
    }
  }

  /**
   *
   */
  async getAuthCredentials(): Promise<ICredentials | null> {
    try {
      const creds: ICredentials = await this.auth.currentUserCredentials();
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
      const user: CognitoUser = await this.auth.currentAuthenticatedUser();
      const attrs = await this.auth.userAttributes(user);
      const email = attrs.filter((a) => a.Name.toLowerCase() === "email")[0]?.Value;
      return email;
    } catch (err) {
      return "";
    }
  }

  /**
   * Returns email from user attributes.
   *  - Email is the one attribute that is required
   * @returns
   */
  async getUserSub(): Promise<string> {
    try {
      const user: CognitoUser = await this.auth.currentAuthenticatedUser();
      const attrs = await this.auth.userAttributes(user);
      const email = attrs.filter((a) => a.Name.toLowerCase() === "sub")[0]?.Value;
      return email;
    } catch (err) {
      return "";
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
      const user = await this.auth.currentAuthenticatedUser();
      await this.auth.updateUserAttributes(user, { email: email });
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
      await this.auth.verifyCurrentUserAttributeSubmit("email", code);
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
      const user = await this.auth.currentAuthenticatedUser();
      const resp = await this.auth.changePassword(user, oldPassword, newPassword);
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
      const user: CognitoUser = await this.auth.currentAuthenticatedUser();
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
