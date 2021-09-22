import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { OnboardingStateModel } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';

@Injectable()
export class OnboardingService implements OnDestroy {
  private onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  private onboarding$: Observable<OnboardingStateModel> = this.store.select(
    OnboardingSelectors.getOnboarding
  );
  private onboardingSub$: Subscription;

  constructor(private store: Store, private sync: SyncService) {
    this.onboardingSub$ = this.onboarding$
      .pipe(
        filter((onboarding: OnboardingStateModel) => onboarding !== undefined)
      )
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });
  }

  ngOnDestroy(): void {
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
  }

  async getUserId(): Promise<string | undefined> {
    const user: CognitoUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const attrs = await Auth.userAttributes(user);
    const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
    return id;
  }

  /**
   * Returns whether the user is brand new or not (no data)
   * @param id
   */
  async isUserBrandNew(id: string): Promise<boolean | undefined> {
    return await this.sync.isUserBrandNew(id);
  }

    /**
   * Returns whether the user has completed the onboarding steps
   * @param id
   * @returns
   */
     async isUserOnboarded(): Promise<boolean> {
       const onboarding = await from(this.onboarding$).toPromise()
       return onboarding.lastComplete === 3;
    }


  async onboardUser(id: string): Promise<void> {
    await this.sync.initUser(id);
    await this.sync.subscribeToListeners(id);
    await this.sync.onboardUser(id, true);
  }
  // const creds: CognitoUser = await Auth.currentAuthenticatedUser();
  // const attrs = await Auth.userAttributes(creds);
  // const id = attrs.filter((a) => a.Name === 'sub')[0]?.Value;
  // if (id) {
  //   this.interstitial.changeMessage(' ');
  //   this.interstitial.openInterstitial();
  //   await this.sync.initUser(id);
  //   await this.sync.subscribeToListeners(id);
  //   await this.sync.onboardUser(id, true);
  //   this.interstitial.closeInterstitial();
  // }


  // async onManualRedirectClick(): Promise<void> {
  //   this.interstitial.changeMessage(' ');
  //   this.interstitial.openInterstitial();
  //   await this.onboardUser();
  //   this.interstitial.closeInterstitial();
  // }

}
