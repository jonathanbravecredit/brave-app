import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { ActivatedRoute, Router } from '@angular/router';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Component({
  selector: 'brave-signin-redirect',
  templateUrl: './signin-redirect.component.html',
})
export class SigninRedirectComponent implements OnInit {
  provider = CognitoHostedUIIdentityProvider;
  constructor(
    private router: Router,
    private sync: SyncService,
    private auth: AuthService,
    private interstitial: InterstitialService,
  ) {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
  }

  async ngOnInit(): Promise<void> {
    try {
      const creds: CognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      const attrs = await Auth.userAttributes(creds);
      const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
      await this.sync.initUser(id);
      await this.sync.subscribeToListeners(id);
      await this.sync.onboardUser(id, true);
      this.interstitial.closeInterstitial();
    } catch (err) {
      const provider = window.sessionStorage.getItem('braveOAuthProvider') as CognitoHostedUIIdentityProvider;
      if (provider) {
        await this.auth.socialSignIn(provider);
      } else {
        this.interstitial.closeInterstitial();
        this.router.navigate(['/auth/invalid']);
      }
    }
  }
}
