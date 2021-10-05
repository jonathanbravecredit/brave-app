import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  UserAttributesInput,
  UpdateAppDataInput,
  APIService,
  TUStatusRefInput,
  TransunionInput,
} from '@shared/services/aws/api.service';
import { AgenciesSelectors, AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import * as AppDataActions from '@store/app-data/app-data.actions';
import * as UserActions from '@store/user/user.actions';
import * as AgenciesActions from '@store/agencies/agencies.actions';
import * as OnboardingActions from '@store/onboarding/onboarding.actions';
import * as DashboardActions from '@store/dashboard/dashboard.actions';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BraveUtil } from '@shared/utils/brave/brave';
import { map } from 'rxjs/operators';
import { IMergeReport } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state: { appData: AppDataStateModel } | undefined;
  state$: BehaviorSubject<{ appData: AppDataStateModel }> = new BehaviorSubject({} as { appData: AppDataStateModel });
  constructor(private api: APIService, private store: Store) {
    this.store.subscribe((state: { appData: AppDataStateModel }) => {
      this.state = state;
      this.state$.next(state);
    });
  }

  /*=====================================*/
  /*
  /*             DB SYNC
  /*
  /*=====================================*/
  /**
   * Updates the state in a promise, does not update db
   * @param appdata
   */
  async updateStateNoDBSyncAsync(appdata: AppDataStateModel): Promise<AppDataStateModel> {
    return await new Promise((resolve, reject) => {
      this.store.dispatch(new AppDataActions.Edit(appdata)).subscribe((state: { appData: AppDataStateModel }) => {
        return resolve(state.appData);
      });
    });
  }

  /**
   * Updates the state in a promise, updates the db
   * @param appdata
   */
  async updateStateDBSyncAsync(appdata: AppDataStateModel): Promise<AppDataStateModel> {
    return await new Promise((resolve, reject) => {
      this.store.dispatch(new AppDataActions.Edit(appdata)).subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          console.log('failed to update state');
          return;
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
   * Updates the state asynchronously, updates the db
   * @param appdata
   */
  updateStateDBSync(appdata: AppDataStateModel): void {
    this.store.dispatch(new AppDataActions.Edit(appdata)).subscribe((state: { appData: AppDataStateModel }) => {
      const input = { ...state.appData } as UpdateAppDataInput;
      if (!input.id) {
        console.log('failed to update state');
        return;
      } else {
        this.api.UpdateAppData(input);
      }
    });
  }

  /*=====================================*/
  /*
  /*               USER
  /*
  /*=====================================*/
  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  updateUserAttributes(attrs: UserAttributesInput): void {
    this.store.dispatch(new UserActions.UpdateAttributes(attrs)).subscribe((state: { appData: AppDataStateModel }) => {
      const input = { ...state.appData } as UpdateAppDataInput;
      if (!input.id) {
        throw new Error(`stateService:updateUserAttributes=No id provided ${input.id}`);
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
            throw new Error(`stateService:updateUserAttributesAsync=No id provided ${input.id}`);
          } else {
            this.api
              .UpdateAppData(input)
              .then((res) => resolve(res))
              .catch((err) => reject(err));
          }
        });
    });
  }

  /*=====================================*/
  /*
  /*               DASHBOARD
  /*
  /*=====================================*/
  /**
   * (Promise) Generic helper to await an increment action
   * @returns
   */
  async incrementActionAsync(Action: any): Promise<void> {
    return new Promise((resolve, reject) => {
      this.store.dispatch(new Action()).subscribe(
        (res) => resolve(res),
        (err) => reject(err),
      );
    });
  }

  /**
   * Helper to await the negative card count incrementation
   * @returns
   */
  async incrementNegativeCardCount(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.store.dispatch(new DashboardActions.IncrementNegativeCardCount()).subscribe(
        (res) => resolve(res),
        (err) => reject(err),
      );
    });
  }

  /*=====================================*/
  /*
  /*                AGENCY
  /*
  /*=====================================*/

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
        throw new Error(`stateService:updateAgencies=No id provided ${input.id}`);
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
          throw new Error(`stateService:updateAgenciesAsync=No id provided ${input.id}`);
        } else {
          this.api
            .UpdateAppData(input)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        }
      });
    });
  }

  /*=====================================*/
  /*
  /*              TRANSUNION
  /*
  /*=====================================*/
  /**
   * Helper to parse the transunion report from the agencies state
   * @returns
   */
  async getTransunion(): Promise<IMergeReport> {
    return this.store
      .selectOnce(AgenciesSelectors.getAgencies)
      .pipe(map((agencies) => BraveUtil.parsers.parseTransunionMergeReport(agencies?.transunion)))
      .toPromise();
  }

  /**
   * (Promise) Update Transunion based on the partial
   * @param param0
   */
  async updateTransunion(tuPartial: Partial<TransunionInput>): Promise<UpdateAppDataInput> {
    return new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.EditTransunion(tuPartial))
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Update the indicative enrichment states
   * @param param0
   */
  updateIndicativeEnrichment({
    indicativeEnrichmentSuccess,
    indicativeEnrichmentStatus,
  }: {
    indicativeEnrichmentSuccess: boolean;
    indicativeEnrichmentStatus: TUStatusRefInput;
  }): void {
    this.store.dispatch(
      new AgenciesActions.EditTransunion({
        indicativeEnrichmentSuccess,
        indicativeEnrichmentStatus,
      }),
    );
  }

  /**
   * (Promise) Update the indicative enrichment states
   * @param param0
   */
  async updateIndicativeEnrichmentAsync({
    indicativeEnrichmentSuccess,
    indicativeEnrichmentStatus,
  }: {
    indicativeEnrichmentSuccess: boolean;
    indicativeEnrichmentStatus: TUStatusRefInput;
  }): Promise<UpdateAppDataInput> {
    return new Promise((resolve, reject) => {
      this.store
        .dispatch(
          new AgenciesActions.EditTransunion({
            indicativeEnrichmentSuccess,
            indicativeEnrichmentStatus,
          }),
        )
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Update the indicative enrichment states
   * @param param0
   */
  updateGetAuthenticationQuestions({
    getAuthenticationQuestionsSuccess,
    getAuthenticationQuestionsStatus,
    serviceBundleFulfillmentKey,
  }: {
    getAuthenticationQuestionsSuccess: boolean;
    getAuthenticationQuestionsStatus: TUStatusRefInput;
    serviceBundleFulfillmentKey: string | null;
  }): void {
    this.store.dispatch(
      new AgenciesActions.EditTransunion({
        getAuthenticationQuestionsSuccess,
        getAuthenticationQuestionsStatus,
        serviceBundleFulfillmentKey,
      }),
    );
  }

  /**
   * (Promise) Update the indicative enrichment states
   * @param param0
   */
  async updateGetAuthenticationQuestionsAsync({
    getAuthenticationQuestionsSuccess,
    getAuthenticationQuestionsStatus,
    serviceBundleFulfillmentKey,
  }: {
    getAuthenticationQuestionsSuccess: boolean;
    getAuthenticationQuestionsStatus: TUStatusRefInput;
    serviceBundleFulfillmentKey: string | null;
  }): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(
          new AgenciesActions.EditTransunion({
            getAuthenticationQuestionsSuccess,
            getAuthenticationQuestionsStatus,
            serviceBundleFulfillmentKey,
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
  updateTransunionQuestions(questions: string): void {
    this.store.dispatch(
      new AgenciesActions.EditTransunion({
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
          new AgenciesActions.EditTransunion({
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
      new AgenciesActions.EditTransunion({
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
          new AgenciesActions.EditTransunion({
            currentRawAuthDetails: questions,
          }),
        )
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /*=====================================*/
  /*
  /*         TU ONBOARDIN DETAILS
  /*
  /*=====================================*/
  /**
   * (Asynchronous) Increment the Auth attempts
   */
  incrementAuthAttempts(): void {
    this.store.dispatch(new AgenciesActions.IncrementTransunionAuthAttempts());
  }

  /**
   * (Promise) Increment the Auth attempts
   */
  async incrementAuthAttemptsAsync(): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.IncrementTransunionAuthAttempts())
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Initiate the pin request details in state
   * - does not store in the database
   */
  initiateTransunionPinDetails(): void {
    this.store.dispatch(new AgenciesActions.InitiateTransunionPinDetails());
  }

  /**
   * (Prmoise) Initiate the pin request details in state
   * - does not store in the database
   */
  async initiateTransunionPinDetailsAsync(): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.InitiateTransunionPinDetails())
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Takse the new number of pin requests and the new current age in epoch and updates the state
   *   - Does not store in the database
   */
  incrementTransunionPinRequest(): void {
    this.store.dispatch(new AgenciesActions.IncrementTransunionPinRequest());
  }

  /**
   * (Promise) Takse the new number of pin requests and the new current age in epoch and updates the state
   *   - Does not store in the database
   */
  async incrementTransunionPinRequestAsync(): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.IncrementTransunionPinRequest())
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Takes the new number of pin attempts and updates the state
   *   - Does not store in the database
   */
  incrementTransunionPinAttempts(): void {
    this.store.dispatch(new AgenciesActions.IncrementTransunionPinAttempts());
  }

  /**
   * (Promise) Takes the new number of pin attempts and updates the state
   *   - Does not store in the database
   */
  async incrementTransunionPinAttemptsAsync(): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.IncrementTransunionPinAttempts())
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * (Asynchronous) Initiate the KBA clock in the state
   * - Does not store in the database
   */
  initiateKBADetails(): void {
    this.store.dispatch(new AgenciesActions.InitiateTransunionKBADetails());
  }

  /**
   * (Promise) Initiate the KBA clock in the state
   * - Does not store in the database
   */
  async initiateKBADetailsAsync(): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new AgenciesActions.InitiateTransunionKBADetails())
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /*=====================================*/
  /*
  /*              ONBOARDING
  /*
  /*=====================================*/
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
          throw new Error(`stateService:updateLastComplete=No id provided ${input.id}`);
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
            throw new Error(`stateService:updateLastCompleteAsync=No id provided ${input.id}`);
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
          return;
          // throw new Error(`stateService:updateLastActive=No id provided ${input.id}`);
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }

  /**
   * (Asynchronous) Update the onboarding when a user abandons the onboarding flow
   */
  updateAbandonedStatus(): void {
    this.store
      .dispatch(new OnboardingActions.AbandonOnboarding())
      .subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        if (!input.id) {
          return;
        } else {
          this.api.UpdateAppData(input);
        }
      });
  }

  /**
   * (Promise) Update the onboarding when a user abandons the onboarding flow
   */
  async updateAbandonedStatusAsync(): Promise<UpdateAppDataInput> {
    return await new Promise((resolve, reject) => {
      this.store
        .dispatch(new OnboardingActions.AbandonOnboarding())
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          if (!input.id) {
            return;
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
   */
  resetOnboarding(): void {
    this.store.dispatch(new OnboardingActions.ResetOnboarding()).subscribe((state: { appData: AppDataStateModel }) => {
      const input = { ...state.appData } as UpdateAppDataInput;
      if (!input.id) {
        return;
        // throw new Error(`stateService:updateLastActive=No id provided ${input.id}`);
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
            return;
            // throw new Error(`stateService:updateLastActiveAsync=No id provided ${input.id}`);
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
