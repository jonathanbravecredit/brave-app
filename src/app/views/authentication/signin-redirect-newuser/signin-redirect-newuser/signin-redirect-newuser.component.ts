import { Component, OnDestroy, ApplicationRef } from '@angular/core';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { catchError, first, tap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'brave-signin-redirect-newuser',
  templateUrl: './signin-redirect-newuser.component.html',
})
export class SigninRedirectNewuserComponent implements OnDestroy {
  private appSub$: Subscription;
  constructor(private appRef: ApplicationRef, private sync: SyncService, private interstitial: InterstitialService) {
    this.appSub$ = this.appRef.isStable
      .pipe(
        first((stable) => stable),
        tap((stable) => {
          setTimeout(async () => {
            await this.onboardUser();
          }, 4500);
        }),
        catchError((err) => of(err)),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.appSub$.unsubscribe();
  }

  async onManualRedirectClick(): Promise<void> {
    this.interstitial.changeMessage(' ');
    this.interstitial.openInterstitial();
    await this.onboardUser();
    this.interstitial.closeInterstitial();
  }

  async onboardUser(): Promise<void> {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
    const attrs = await Auth.userAttributes(user);
    const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
    await this.sync.initUser(id);
    await this.sync.subscribeToListeners(id);
    await this.sync.onboardUser(id, true);
  }
}
