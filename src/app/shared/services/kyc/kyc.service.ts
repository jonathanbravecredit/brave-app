import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { OnboardingStateModel } from '@store/onboarding';
import * as OnboardingActions from '@store/onboarding/onboarding.actions';
import * as UserActions from '@store/user/user.actions';
import * as AgenciesActions from '@store/agencies/agencies.actions';
import {
  AgenciesInput,
  APIService,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { AppDataStateModel } from '@store/app-data';
import { AuthService } from '@shared/services/auth/auth.service';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  constructor(
    private api: APIService,
    private store: Store,
    private auth: AuthService
  ) {}

  /**
   * Takes a progress step ID and sets the status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  activateStep(step: number): void {
    this.store
      .dispatch(new OnboardingActions.UpdateLastActive(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          this.auth.reloadCredentials();
          return;
        } else {
          this.api.UpdateAppData(input); // the listener will update the state.
        }
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
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          this.auth.reloadCredentials();
          return;
        } else {
          this.api.UpdateAppData(input); // the listener will update the state.
        }
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
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          this.auth.reloadCredentials();
          return;
        } else {
          this.api.UpdateAppData(input); // the listener will update the state.
        }
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
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          this.auth.reloadCredentials();
          return;
        } else {
          this.api.UpdateAppData(input); // the listener will update the state.
        }
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
    const state = this.store.snapshot();
    return { ...state.user?.onboarding, lastActive, lastComplete, started };
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  updateUserAttributes(attrs: UserAttributesInput): void {
    this.store
      .dispatch(new UserActions.UpdateAttributes(attrs))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          this.auth.reloadCredentials();
          return;
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  async updateUserAttributesAsync(
    attrs: UserAttributesInput
  ): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new UserActions.UpdateAttributes(attrs))
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          if (!input.id) {
            this.auth.reloadCredentials();
            reject();
            return;
          } else {
            this.api.UpdateAppData(input);
            resolve(input);
          }
        });
    });
  }

  /**
   * Takes the agency status and updates the state with them
   * @param {AgenciesInput} agency the new agency input data to write to db and state
   */
  updateTransunionIndicativeEnrichment(agency: AgenciesInput): void {
    this.store
      .dispatch(new AgenciesActions.Edit(agency))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        console.log('after agency update', input);
        if (!input.id) {
          this.auth.reloadCredentials();
          return;
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }

  /**
   * Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateCurrentRawQuestions(questions: string): void {
    this.store.dispatch(new AgenciesActions.EditQuestions(questions));
  }

  /**
   * (Synchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateCurrentRawQuestionsAsync(
    questions: string
  ): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.EditQuestions(questions))
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }
}
