import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { ICredentials } from '@aws-amplify/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Router } from '@angular/router';

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
    try {
      const creds: ICredentials = await this.auth.getCurrentUserCredentials();
      await this.sync.onboardUser(creds, false);
      this.interstitial.closeInterstitial();
    } catch (err) {
      this.router.navigate(['/auth/invalid']);
      console.log('hall monitor error', err);
    }
  }
}

const navs: Record<string, any> = {};
