import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { ICredentials } from '@aws-amplify/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Router } from '@angular/router';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { CognitoUser, CognitoUserSession, ISignUpResult } from 'amazon-cognito-identity-js';

@Component({
  selector: 'brave-signin-redirect',
  templateUrl: './signin-redirect.component.html',
})
export class SigninRedirectComponent implements OnInit {
  constructor(
    private router: Router,
    private sync: SyncService,
    private auth: AuthService,
    private interstitial: InterstitialService,
  ) {}

  async ngOnInit(): Promise<void> {
    // try {
    //   // const creds: ICredentials = await Auth.currentUserCredentials();
    //   const creds: CognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    //   console.log('creds ===> ', creds);
    //   const attrs = await Auth.userAttributes(creds);
    //   const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
    //   await this.sync.onboardUser(id, false);
    //   this.interstitial.closeInterstitial();
    // } catch (err) {
    //   this.router.navigate(['/auth/invalid']);
    //   console.log('hall monitor error', err);
    // }
  }
}

const navs: Record<string, any> = {};
