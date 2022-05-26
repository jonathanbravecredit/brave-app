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
import { StateService } from '@shared/services/state/state.service';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Injectable()
export class OnboardingService implements OnDestroy {
  private onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  private onboarding$: Observable<OnboardingStateModel> = this.store.select(OnboardingSelectors.getOnboarding);
  private onboardingSub$: Subscription;

  private agencies: AgenciesStateModel = {} as AgenciesStateModel;
  private agencies$: Observable<AgenciesStateModel> = this.store.select(AgenciesSelectors.getAgencies);
  private agenciesSub$: Subscription;

  constructor(private store: Store, private statesvc: StateService, private sync: SyncService, private router: Router) {
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
    if (this.agenciesSub$) this.agenciesSub$.unsubscribe();
  }

  /**
   * Returns the user id from the authenticated user
   */
  async getUserId(): Promise<string | undefined> {
    const user: CognitoUser = await Auth.currentAuthenticatedUser();
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
   * Creates a user record in the database
   * @param id
   */
  async initUser(id: string): Promise<AppDataStateModel | undefined> {
    return await this.sync.initAppData(id);
  }

  /**
   * Returns whether the user has completed the onboarding steps
   * @param id
   */
  async isUserOnboarded(): Promise<boolean> {
    const onboarding = await from(this.onboarding$).toPromise();
    return onboarding.lastComplete === 3;
  }

  /**
   * Subscribe to AppSync socket listeners
   * @param id
   */
  async subscribeToListeners(id: string): Promise<void> {
    return await this.sync.subscribeToListeners(id);
  }

  /**
   * Sync the database records to state
   * @param id
   */
  async syncDbToState(id: string): Promise<any> {
    return await this.sync.syncDBDownToState(id);
  }

  async abandonOnboarding(): Promise<void> {
    await this.statesvc.updateAbandonedStatusAsync();
  }

  /**
   * Route the user to the last onboarded view
   */
  async goToLastOnboarded(): Promise<void> {
    const { lastComplete } = await from(this.onboarding$).toPromise();
    const { transunion } = await from(this.agencies$).toPromise();

    switch (lastComplete) {
      case -1:
        this.router.navigate([routes.root.onboarding.name.full]);
        break;
      case 0:
        this.router.navigate([routes.root.onboarding.address.full]);
        break;
      case 1:
        this.router.navigate([routes.root.onboarding.identity.full]);
        break;
      case 2:
        // if last on otp or kba go to either one.
        transunion?.kbaCurrentAge
          ? this.router.navigate([routes.root.onboarding.kba.full])
          : this.router.navigate([routes.root.onboarding.code.full]);
        break;
      default:
        // nothing to do, stay on same route
        this.router.navigate([routes.root.auth.signin.full]);
        break;
    }
  }
}
