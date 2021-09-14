import { ApplicationRef, Component, OnDestroy } from '@angular/core';
import { AuthService } from '@shared/services/auth/auth.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { Router } from '@angular/router';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'brave-signin-redirect',
  templateUrl: './signin-redirect.component.html',
})
export class SigninRedirectComponent implements OnDestroy {
  provider = CognitoHostedUIIdentityProvider;
  appSub$: Subscription;
  constructor(
    private router: Router,
    private sync: SyncService,
    private auth: AuthService,
    private appRef: ApplicationRef,
    private interstitial: InterstitialService,
  ) {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    this.appSub$ = this.appRef.isStable
      .pipe(
        first((stable) => stable),
        tap((stable) => {
          console.log('stable ===> ');
          setTimeout(async () => {
            await this.onboardUser();
          }, 5000);
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.appSub$.unsubscribe();
  }

  async onboardUser(): Promise<void> {
    try {
      const creds: CognitoUser = await Auth.currentAuthenticatedUser();
      const attrs = await Auth.userAttributes(creds);
      const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
      const isNew = await this.sync.isUserBrandNew(id);
      if (isNew) {
        this.cleanUp();
        this.router.navigate(['/auth/created']);
      } else {
        await this.sync.initUser(id);
        await this.sync.subscribeToListeners(id);
        await this.sync.onboardUser(id, true);
        this.cleanUp();
      }
    } catch (err) {
      const provider = window.sessionStorage.getItem('braveOAuthProvider') as CognitoHostedUIIdentityProvider;
      if (provider) {
        await this.auth.socialSignIn(provider);
      } else {
        this.router.navigate(['/auth/invalid']);
        this.cleanUp();
      }
    }
  }

  cleanUp(): void {
    window.sessionStorage.removeItem('braveOAuthProvider');
    this.interstitial.closeInterstitial();
  }
}
