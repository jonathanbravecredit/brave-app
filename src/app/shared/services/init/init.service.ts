import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { from, Observable, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { OnboardingStateModel } from '@store/onboarding';
import { OnboardingSelectors } from '@store/onboarding/onboarding.selectors';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { AppDataStateModel } from '@store/app-data/app-data.model';
import { Router } from '@angular/router';
import { AgenciesSelectors, AgenciesStateModel } from '@store/agencies';
import { TransunionInput } from '@shared/services/aws/api.service';
import { AppStatus } from '@shared/utils/brave/constants';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  private data: AppDataStateModel | undefined;
  private onboarding: OnboardingStateModel = {} as OnboardingStateModel;
  private onboarding$: Observable<OnboardingStateModel> = this.store.select(OnboardingSelectors.getOnboarding);
  private onboardingSub$: Subscription;

  private transunion: TransunionInput = {} as TransunionInput;
  private transunion$: Observable<TransunionInput> = this.store.select(AgenciesSelectors.getTransunion);
  private transunionSub$: Subscription;

  constructor(private store: Store, private sync: SyncService, private router: Router) {
    this.onboardingSub$ = this.onboarding$
      .pipe(filter((onboarding: OnboardingStateModel) => onboarding !== undefined))
      .subscribe((onboarding: OnboardingStateModel) => {
        this.onboarding = onboarding;
      });

    this.transunionSub$ = this.transunion$
      .pipe(filter((transunion: TransunionInput) => transunion !== undefined))
      .subscribe((transunion: TransunionInput) => {
        this.transunion = transunion;
      });
  }

  ngOnDestroy(): void {
    if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
    if (this.transunionSub$) this.transunionSub$.unsubscribe();
  }

  async resolver(): Promise<boolean> {
    const id = await this.getUserId();
    if (!id) {
      this.router.navigate(['/auth/thankyou']); // need a please confirm account view
      return false;
    } else {
      try {
        let status: boolean = false;
        const isUserNew = await this.isUserNew(id);
        const isOnboarded = await this.isUserOnboarded();
        // initiate a new user else sync db to state
        status = await this.handleUser(isUserNew, id);
        // subscribe to listeners
        status = await this.handleListeners(id);
        // if suspended, go to suspended page
        const isSuspended: AppStatus = this.data?.status as AppStatus;
        // go to onboarding if not onboarded, otherwise return true
        status = await this.handleRouting(isOnboarded, isSuspended);
        return status;
      } catch (err) {
        this.router.navigate(['/auth/signin']); // need a please confirm account view
        return false;
      }
    }
  }

  async handleUser(isUserNew: boolean = true, id: string): Promise<boolean> {
    try {
      if (isUserNew) {
        this.data = await this.initUser(id);
      } else {
        this.data = await this.syncDbToState(id);
      }
      return true;
    } catch (err) {
      console.log('handleUser:error ===> ', err);
      return false;
    }
  }

  async handleListeners(id: string): Promise<boolean> {
    try {
      await this.subscribeToListeners(id);
      return true;
    } catch (err) {
      console.log('subscribeToListeners:error ==> ', err);
      return false;
    }
  }

  async handleRouting(isOnboarded: boolean, status: AppStatus): Promise<boolean> {
    if (status === AppStatus.Suspended) {
      this.router.navigate(['/suspended/default']);
      return false;
    }
    try {
      if (!isOnboarded) {
        await this.goToLastOnboarded();
        return false;
      } else {
        this.router.navigate(['/dashboard/init']);
        return true;
      }
    } catch (err) {
      return false;
    }
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
    return this.onboarding.lastComplete === 3;
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

  /**
   * Route the user to the last onboarded view
   */
  goToLastOnboarded(): void {
    const { lastComplete } = this.onboarding;
    const transunion = this.transunion;

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
        transunion?.kbaCurrentAge
          ? this.router.navigate(['/onboarding/kba'])
          : transunion?.pinCurrentAge
          ? this.router.navigate(['/onboarding/code'])
          : this.router.navigate(['/onboarding/verify']);
        break;
      default:
        // nothing to do, stay on page
        break;
    }
  }
}
