import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { OnboardingStateModel } from '@store/onboarding';
import * as OnboardingActions from '@store/onboarding/onboarding.actions';
import {
  APIService,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { AppDataStateModel } from '@store/app-data';

@Injectable({
  providedIn: 'root',
})
export class KycService implements OnDestroy {
  constructor(private api: APIService, private store: Store) {}

  ngOnDestroy(): void {
    // if (this.onboardingSub$) this.onboardingSub$.unsubscribe();
    // if (this.userSub$) this.userSub$.unsubscribe();
  }

  /**
   * Takes a progress step ID and sets the status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  activateStep(step: number): void {
    this.store
      .dispatch(new OnboardingActions.UpdateLastActive(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const data = { ...state.appData };
        // console.log('data', data);
        // const input = deleteKeyNestedObject(
        //   data,
        //   '__typename'
        // ) as UpdateAppDataInput; // If set to undefined and strigified then parsed...removes it
        // console.log('input', input);
        // console.log();
        const input = {
          id: data?.id,
          user: {
            id: data?.user?.id,
            userAttributes: data?.user?.userAttributes,
            onboarding: {
              lastActive: data?.user?.onboarding?.lastActive,
              lastComplete: data?.user?.onboarding?.lastComplete,
              started: data?.user?.onboarding?.started,
            },
          },
          agencies: {
            transunion: data?.agencies?.transunion,
            equifax: data?.agencies?.equifax,
            experian: data?.agencies?.experian,
          },
        } as UpdateAppDataInput;
        this.api.UpdateAppData(input); // the listener will update the state.
      });
  }

  /**
   * Takes a progress step ID and sets the status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async inactivateStep(step: number): Promise<void> {
    this.store
      .dispatch(new OnboardingActions.UpdateLastActive(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const data = { ...state.appData };
        const input = {
          id: data?.id,
          user: {
            id: data?.user?.id,
            userAttributes: data?.user?.userAttributes,
            onboarding: {
              lastActive: data?.user?.onboarding?.lastActive,
              lastComplete: data?.user?.onboarding?.lastComplete,
              started: data?.user?.onboarding?.started,
            },
          },
          agencies: {
            transunion: data?.agencies?.transunion,
            equifax: data?.agencies?.equifax,
            experian: data?.agencies?.experian,
          },
        } as UpdateAppDataInput;
        this.api.UpdateAppData(input); // the listener will update the state.
      });
  }

  /**
   * Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  completeStep(step: number): void {
    this.store
      .dispatch(new OnboardingActions.UpdateLastComplete(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const data = { ...state.appData };
        const input = {
          id: data?.id,
          user: {
            id: data?.user?.id,
            userAttributes: data?.user?.userAttributes,
            onboarding: {
              lastActive: data?.user?.onboarding?.lastActive,
              lastComplete: data?.user?.onboarding?.lastComplete,
              started: data?.user?.onboarding?.started,
            },
          },
          agencies: {
            transunion: data?.agencies?.transunion,
            equifax: data?.agencies?.equifax,
            experian: data?.agencies?.experian,
          },
        } as UpdateAppDataInput;
        this.api.UpdateAppData(input); // the listener will update the state.
      });
  }

  /**
   * Takes a progress step ID and sets the complete status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  incompleteStep(step: number): void {
    this.store
      .dispatch(new OnboardingActions.UpdateLastComplete(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const data = { ...state.appData };
        const input = {
          id: data?.id,
          user: {
            id: data?.user?.id,
            userAttributes: data?.user?.userAttributes,
            onboarding: {
              lastActive: data?.user?.onboarding?.lastActive,
              lastComplete: data?.user?.onboarding?.lastComplete,
              started: data?.user?.onboarding?.started,
            },
          },
          agencies: {
            transunion: data?.agencies?.transunion,
            equifax: data?.agencies?.equifax,
            experian: data?.agencies?.experian,
          },
        } as UpdateAppDataInput;
        this.api.UpdateAppData(input); // the listener will update the state.
      });
  }

  /**
   * Takes the id of the step and updates the state of the step to either active or complete
   * @param {number} id the progress step ID
   * @param {{ active: boolean } | { complete: boolean }}  state the state of the step to update (active or complete)
   * @returns
   */
  updateStep(
    lastActive: number,
    lastComplete: number,
    started: boolean = true
  ): OnboardingStateModel | undefined | void {
    // return { ...this.onboarding, lastActive, lastComplete, started };
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  updateUserAttributes(attrs: UserAttributesInput): void {
    // const state = this.store.snapshot();
    // const user: UserStateModel = {
    //   ...this.user,
    //   userAttributes: { ...this.user.userAttributes, ...attrs },
    // };
    // this.store.dispatch(new UserAction.Edit(user));
    //!!!! will be updated by listeners now
  }
}
