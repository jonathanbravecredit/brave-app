import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Router } from '@angular/router';
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
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const creds: CognitoUser = await Auth.currentAuthenticatedUser();
      const attrs = await Auth.userAttributes(creds);
      const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
      await this.sync.onboardUser(id, false);
      this.interstitial.closeInterstitial();
    } catch (err) {
      const provider = [this.provider.Google, this.provider.Facebook].find((p, i) => {
        return (
          (i === 0 && this.router.url.toLowerCase().includes('google')) ||
          (i === 1 && this.router.url.toLowerCase().includes('facebook'))
        );
      });
      provider ? this.auth.socialSignIn(provider) : this.router.navigate(['/auth/invalid']);
      console.log('hall monitor error', err, provider);
    }
  }
}
