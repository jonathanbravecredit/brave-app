import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { OnboardingStateModel } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { AppDataStateModel } from '@store/app-data/app-data.model';
import { Router } from '@angular/router';
import { AgenciesSelectors, AgenciesStateModel } from '@store/agencies';

@Injectable()
export class OnboardingService implements OnDestroy {
  private onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  private onboarding$: Observable<OnboardingStateModel> = this.store.select(OnboardingSelectors.getOnboarding);
  private onboardingSub$: Subscription;

  private agencies: AgenciesStateModel = {} as AgenciesStateModel;
  private agencies$: Observable<AgenciesStateModel> = this.store.select(AgenciesSelectors.getAgencies);
  private agenciesSub$: Subscription;

  constructor(private store: Store, private sync: SyncService, private router: Router) {
    this.onboardingSub$ = this.onboarding$
      .pipe(filter((onboarding: OnboardingStateModel) => onboarding !== undefined))
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });

    this.agenciesSub$ = this.agencies$
      .pipe(filter((agencies: AgenciesStateModel) => agencies !== undefined))
      .subscribe((agencies: AgenciesStateModel) => {
        this.agencies = agencies;
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
  async isUserNew(id: string): Promise<boolean | undefined> {
    return await this.sync.isUserBrandNew(id);
  }

  /**
   * Returns whether the user has completed the onboarding steps
   * @param id
   * @returns
   */
  async isUserOnboarded(): Promise<boolean> {
    const onboarding = await from(this.onboarding$).toPromise();
    return onboarding.lastComplete === 3;
  }

  async initUser(id: string): Promise<AppDataStateModel | undefined> {
    return await this.sync.initAppData(id);
  }

  async subscribeToListeners(id: string): Promise<void> {
    return await this.sync.subscribeToListeners(id);
  }

  async syncDbToState(id: string): Promise<any> {
    return await this.sync.syncDBDownToState(id);
  }

  async goToLastOnboarded(): Promise<void> {
    const { lastComplete } = await from(this.onboarding$).toPromise();
    const { transunion } = await from(this.agencies$).toPromise();

    switch (lastComplete) {
      case -1:
        this.router.navigate(['/onboarding/name']);
        break;
      case 0:
        this.router.navigate(['/onboarding/address']);
        break;
      case 1:
        this.router.navigate(['/onboarding/identity']);
        break;
      case 2:
        // if last on otp or kba go to either one.
        this.router.navigate(['/onboarding/verify']);
        break;
      default:
        // nothing to do, stay on same route
        break;
    }
  }

  // async onboardUser(id: string): Promise<void> {
  //   await this.sync.onboardUser(id, true);
  // }

  // /**
  //  * Handle returning users (implicit) !isUserBrandNew
  //  * 1. No ID from Amplify to validate against...bail out
  //  * 2. User has fully onboarded and a signin event...go to dashboard
  //  * 3. User has fully onboarded and NOT a signin event...stay put
  //  * 4. User has NOT fully onboarded and a signin event...go to last complete
  //  * 5. User has NOT fully onboarded and NOT a signin event...go to last complete
  //  * @param creds
  //  * @param signInEvent
  //  */
  //  async onboardUser(id: string, signInEvent: boolean): Promise<void> {
  //   const isOnboarded = await this.isUserOnboarded(id);
  //   if (isOnboarded) {
  //     signInEvent ? await this.goToDashboard(id) : await this.stayPut(id);
  //   } else {
  //     await this.goToLastOnboarded(id);
  //   }
  // }
}
