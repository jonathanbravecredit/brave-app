import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserAttributesInput, UpdateAppDataInput, APIService } from '@shared/services/aws/api.service';
import { AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import * as UserActions from '@store/user/user.actions';
import * as AgenciesActions from '@store/agencies/agencies.actions';
import * as OnboardingActions from '@store/onboarding/onboarding.actions';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state: { appData: AppDataStateModel } | undefined;
  state$: BehaviorSubject<{ appData: AppDataStateModel }> = new BehaviorSubject({} as { appData: AppDataStateModel });
  constructor(private api: APIService, private store: Store) {
    this.store.subscribe((state: { appData: AppDataStateModel }) => {
      console.log('state in state service', state);
      this.state = state;
      this.state$.next(state);
    });
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  updateUserAttributes(attrs: UserAttributesInput): void {
    this.store.dispatch(new UserActions.UpdateAttributes(attrs)).subscribe((state: { appData: AppDataStateModel }) => {
      const input = { ...state.appData } as UpdateAppDataInput;
      if (!input.id) {
        throw new Error(`Error in stateService:updateUserAttributes=No id provided ${input.id}`);
      } else {
        this.api.UpdateAppData(input);
      }
    });
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  async updateUserAttributesAsync(attrs: UserAttributesInput): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new UserActions.UpdateAttributes(attrs))
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          if (!input.id) {
            throw new Error(`Error in stateService:updateUserAttributesAsync=No id provided ${input.id}`);
          } else {
            this.api
              .UpdateAppData(input)
              .then((res) => resolve(res))
              .catch((err) => reject(err));
          }
        });
    });
  }

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param agencies
   */
  updateAgencies(agencies: AgenciesStateModel): void {
    if (!agencies) return;
    this.store.dispatch(new AgenciesActions.Edit(agencies)).subscribe((state: { appData: AppDataStateModel }) => {
      const input = { ...state.appData } as UpdateAppDataInput;
      if (!input.id) {
        throw new Error(`Error in stateService:updateAgencies=No id provided ${input.id}`);
      } else {
        this.api.UpdateAppData(input);
      }
    });
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateAgenciesAsync(agencies: AgenciesStateModel): Promise<UpdateAppDataInput | null | undefined> {
    if (!agencies) return;
    return await new Promise((resolve, reject) => {
      this.store.dispatch(new AgenciesActions.Edit(agencies)).subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          throw new Error(`Error in stateService:updateAgenciesAsync=No id provided ${input.id}`);
        } else {
          this.api
            .UpdateAppData(input)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        }
      });
    });
  }

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateTransunionQuestions(questions: string): void {
    this.store.dispatch(
      new AgenciesActions.EditTransunionQuestions({
        currentRawQuestions: questions,
      }),
    );
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateTransunionQuestionsAsync(questions: string): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(
          new AgenciesActions.EditTransunionQuestions({
            currentRawQuestions: questions,
          }),
        )
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateTransunionAuthDetails(questions: string): void {
    this.store.dispatch(
      new AgenciesActions.EditTransunionAuthDetails({
        currentRawAuthDetails: questions,
      }),
    );
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateTransunionAuthDetailsAsync(questions: string): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(
          new AgenciesActions.EditTransunionAuthDetails({
            currentRawAuthDetails: questions,
          }),
        )
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  updateLastComplete(step: number): void {
    this.store
      .dispatch(new OnboardingActions.UpdateLastComplete(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          throw new Error(`Error in stateService:updateLastComplete=No id provided ${input.id}`);
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }

  /**
   * (Promise) Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async updateLastCompleteAsync(step: number): Promise<UpdateAppDataInput | null | undefined> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new OnboardingActions.UpdateLastComplete(step))
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          if (!input.id) {
            throw new Error(`Error in stateService:updateLastCompleteAsync=No id provided ${input.id}`);
          } else {
            this.api
              .UpdateAppData(input)
              .then((res) => resolve(res))
              .catch((err) => reject(err));
          }
        });
    });
  }

  /**
   * (Asynchronous) Takes a progress step ID and sets the active status to true or false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  updateLastActive(step: number): void {
    this.store
      .dispatch(new OnboardingActions.UpdateLastActive(step))
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          throw new Error(`Error in stateService:updateLastActive=No id provided ${input.id}`);
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }

  /**
   * (Promise) Takes a progress step ID and sets the active status to true or false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async updateLastActiveAsync(step: number): Promise<UpdateAppDataInput | null | undefined> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new OnboardingActions.UpdateLastActive(step))
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          if (!input.id) {
            throw new Error(`Error in stateService:updateLastActiveAsync=No id provided ${input.id}`);
          } else {
            this.api
              .UpdateAppData(input)
              .then((res) => resolve(res))
              .catch((err) => reject(err));
          }
        });
    });
  }
}
