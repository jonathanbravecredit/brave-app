import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Component({
  selector: 'brave-signin-redirect-newuser',
  templateUrl: './signin-redirect-newuser.component.html',
})
export class SigninRedirectNewuserComponent implements AfterViewInit {
  constructor(private router: Router, private sync: SyncService, private interstitial: InterstitialService) {}

  async ngAfterViewInit(): Promise<void> {
    setTimeout(async () => {
      await this.onboardUser();
    }, 9000);
  }

  async onManualRedirectClick(): Promise<void> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    await this.onboardUser();
    this.interstitial.closeInterstitial();
  }

  async onboardUser(): Promise<void> {
    const creds: CognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const attrs = await Auth.userAttributes(creds);
    const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
    await this.sync.initUser(id);
    await this.sync.subscribeToListeners(id);
    await this.sync.onboardUser(id, true);
  }
}
