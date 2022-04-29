import * as _ from 'lodash';
import * as AppDataActions from '@store/app-data/app-data.actions';
import * as UserActions from '@store/user/user.actions';
import * as AgenciesActions from '@store/agencies/agencies.actions';
import * as OnboardingActions from '@store/onboarding/onboarding.actions';
import {
  UserAttributesInput,
  UpdateAppDataInput,
  APIService,
  TUStatusRefInput,
  TransunionInput,
  UpdateAppDataMutation,
} from '@shared/services/aws/api.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AgenciesSelectors, AgenciesStateModel } from '@store/agencies';
import { AppDataStateModel } from '@store/app-data';
import { BraveUtil } from '@shared/utils/brave/brave';
import { IMergeReport } from '@shared/interfaces';
import { TransunionUtil } from '@shared/utils/transunion/transunion';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state: { appData: AppDataStateModel } | undefined;
  state$: BehaviorSubject<{ appData: AppDataStateModel }> = new BehaviorSubject({} as { appData: AppDataStateModel });
  constructor(private api: APIService, private store: Store) {
    _.bindAll(this, 'scrubAndUpdate');
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
    const action = new AppDataActions.Edit(appdata);
    const res = await this.dispatchAsync<AppDataActions.Edit>(action);
    return { ...res, isLoaded: true };
  }

  /**
   * Updates the state in a promise, updates the db
   * @param appdata
   */
  async updateStateDBSyncAsync(appdata: AppDataStateModel): Promise<AppDataStateModel> {
    const action = new AppDataActions.Edit(appdata);
    const res = await this.dispatchAsync<AppDataActions.Edit>(action, true);
    return { ...res, isLoaded: true };
  }

  /**
   * Updates the state asynchronously, updates the db
   * @param appdata
   */
  updateStateDBSync(appdata: AppDataStateModel): void {
    const action = new AppDataActions.Edit(appdata);
    this.dispatch<AppDataActions.Edit>(action, true);
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
    const action = new UserActions.UpdateAttributes(attrs);
    this.dispatch<UserActions.UpdateAttributes>(action, true);
  }

  /**
   * Takes the attributes and updates the state with them
   * - syncs with DB
   * @param {UserAttributesInput} attributes
   */
  async updateUserAttributesAsync(attrs: UserAttributesInput): Promise<UpdateAppDataInput> {
    const action = new UserActions.UpdateAttributes(attrs);
    return await this.dispatchAsync<UserActions.UpdateAttributes>(action, true);
  }

  /*=====================================*/
  /*
  /*                AGENCY
  /*
  /*=====================================*/

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Syncs with
   * @param agencies
   */
  updateAgencies(agencies: AgenciesStateModel): void {
    if (!agencies) return;
    const action = new AgenciesActions.Edit(agencies);
    return this.dispatch<AgenciesActions.Edit>(action, true);
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateAgenciesAsync(agencies: AgenciesStateModel): Promise<UpdateAppDataInput | null | undefined> {
    if (!agencies) return;
    const action = new AgenciesActions.Edit(agencies);
    return await this.dispatchAsync<AgenciesActions.Edit>(action, true);
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
      .pipe(map((agencies: AgenciesStateModel) => BraveUtil.parsers.parseTransunionMergeReport(agencies?.transunion)))
      .toPromise();
  }

  /**
   * (Promise) Update Transunion based on the partial
   * @param param0
   */
  async updateTransunion(tuPartial: Partial<TransunionInput>): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.EditTransunion(tuPartial);
    return await this.dispatchAsync<AgenciesActions.EditTransunion>(action);
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
    const action = new AgenciesActions.EditTransunion({
      indicativeEnrichmentSuccess,
      indicativeEnrichmentStatus,
    });
    return this.dispatch<AgenciesActions.EditTransunion>(action);
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
    const action = new AgenciesActions.EditTransunion({
      indicativeEnrichmentSuccess,
      indicativeEnrichmentStatus,
    });
    return await this.dispatchAsync<AgenciesActions.EditTransunion>(action);
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
    const action = new AgenciesActions.EditTransunion({
      getAuthenticationQuestionsSuccess,
      getAuthenticationQuestionsStatus,
      serviceBundleFulfillmentKey,
    });
    return this.dispatch<AgenciesActions.EditTransunion>(action);
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
    const action = new AgenciesActions.EditTransunion({
      getAuthenticationQuestionsSuccess,
      getAuthenticationQuestionsStatus,
      serviceBundleFulfillmentKey,
    });
    return await this.dispatchAsync<AgenciesActions.EditTransunion>(action);
  }

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateTransunionQuestions(questions: string): void {
    const action = new AgenciesActions.EditTransunion({ currentRawQuestions: questions });
    return this.dispatch<AgenciesActions.EditTransunion>(action);
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateTransunionQuestionsAsync(questions: string): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.EditTransunion({ currentRawQuestions: questions });
    return await this.dispatchAsync<AgenciesActions.EditTransunion>(action);
  }

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateTransunionAuthDetails(questions: string): void {
    const action = new AgenciesActions.EditTransunion({ currentRawAuthDetails: questions });
    return this.dispatch<AgenciesActions.EditTransunion>(action);
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateTransunionAuthDetailsAsync(questions: string): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.EditTransunion({ currentRawAuthDetails: questions });
    return await this.dispatchAsync<AgenciesActions.EditTransunion>(action);
  }

  /**
   * (Asynchronous) Update the indicative enrichment states
   * @param param0
   */
  updateAcknowledgeDisputeTerms({
    acknowledgedDisputeTerms,
    acknowledgedDisputeTermsOn,
  }: {
    acknowledgedDisputeTerms: boolean;
    acknowledgedDisputeTermsOn: string;
  }): void {
    const action = new AgenciesActions.EditAcknowledgeDisputeTerms({
      acknowledgedDisputeTerms,
      acknowledgedDisputeTermsOn,
    });
    return this.dispatch<AgenciesActions.EditAcknowledgeDisputeTerms>(action);
  }

  /**
   * (Promise) Update the indicative enrichment states
   * @param param0
   */
  async updateAcknowledgeDisputeTermsAsync({
    acknowledgedDisputeTerms,
    acknowledgedDisputeTermsOn,
  }: {
    acknowledgedDisputeTerms: boolean;
    acknowledgedDisputeTermsOn: string;
  }): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.EditAcknowledgeDisputeTerms({
      acknowledgedDisputeTerms,
      acknowledgedDisputeTermsOn,
    });
    return await this.dispatchAsync<AgenciesActions.EditAcknowledgeDisputeTerms>(action);
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
    const action = new AgenciesActions.IncrementTransunionAuthAttempts();
    return this.dispatch<AgenciesActions.IncrementTransunionAuthAttempts>(action);
  }

  /**
   * (Promise) Increment the Auth attempts
   */
  async incrementAuthAttemptsAsync(): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.IncrementTransunionAuthAttempts();
    return await this.dispatchAsync<AgenciesActions.IncrementTransunionAuthAttempts>(action);
  }

  /**
   * (Asynchronous) Initiate the pin request details in state
   * - does not store in the database
   */
  initiateTransunionPinDetails(): void {
    const action = new AgenciesActions.InitiateTransunionPinDetails();
    this.dispatch<AgenciesActions.InitiateTransunionPinDetails>(action);
  }

  /**
   * (Prmoise) Initiate the pin request details in state
   * - does not store in the database
   */
  async initiateTransunionPinDetailsAsync(): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.InitiateTransunionPinDetails();
    return await this.dispatchAsync<AgenciesActions.InitiateTransunionPinDetails>(action);
  }

  /**
   * (Asynchronous) Takse the new number of pin requests and the new current age in epoch and updates the state
   *   - Does not store in the database
   */
  incrementTransunionPinRequest(): void {
    const action = new AgenciesActions.IncrementTransunionPinRequest();
    this.dispatch<AgenciesActions.IncrementTransunionPinRequest>(action);
  }

  /**
   * (Promise) Takse the new number of pin requests and the new current age in epoch and updates the state
   *   - Does not store in the database
   */
  async incrementTransunionPinRequestAsync(): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.IncrementTransunionPinRequest();
    return await this.dispatchAsync<AgenciesActions.IncrementTransunionPinRequest>(action);
  }

  /**
   * (Asynchronous) Takes the new number of pin attempts and updates the state
   *   - Does not store in the database
   */
  incrementTransunionPinAttempts(): void {
    const action = new AgenciesActions.IncrementTransunionPinAttempts();
    this.dispatch<AgenciesActions.IncrementTransunionPinAttempts>(action);
  }

  /**
   * (Promise) Takes the new number of pin attempts and updates the state
   *   - Does not store in the database
   */
  async incrementTransunionPinAttemptsAsync(): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.IncrementTransunionPinAttempts();
    return await this.dispatchAsync<AgenciesActions.IncrementTransunionPinAttempts>(action);
  }

  /**
   * (Asynchronous) Initiate the KBA clock in the state
   * - Does not store in the database
   */
  initiateKBADetails(): void {
    const action = new AgenciesActions.InitiateTransunionKBADetails();
    this.dispatch<AgenciesActions.InitiateTransunionKBADetails>(action);
  }

  /**
   * (Promise) Initiate the KBA clock in the state
   * - Does not store in the database
   */
  async initiateKBADetailsAsync(): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.InitiateTransunionKBADetails();
    return await this.dispatchAsync<AgenciesActions.InitiateTransunionKBADetails>(action);
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
    const action = new OnboardingActions.UpdateLastComplete(step);
    this.dispatch<OnboardingActions.UpdateLastComplete>(action, true);
  }

  /**
   * (Promise) Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async updateLastCompleteAsync(step: number): Promise<UpdateAppDataInput | null | undefined> {
    const action = new OnboardingActions.UpdateLastComplete(step);
    return await this.dispatchAsync<OnboardingActions.UpdateLastComplete>(action, true);
  }

  /**
   * (Promise) Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async updateAuthenticatedOnAsync(authenticated: boolean, authenticatedOn: string): Promise<UpdateAppDataInput> {
    const action = new AgenciesActions.UpdateAuthentication({ authenticated, authenticatedOn });
    return await this.dispatchAsync<AgenciesActions.UpdateAuthentication>(action, true);
  }

  /**
   * (Asynchronous) Takes a progress step ID and sets the active status to true or false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  updateLastActive(step: number): void {
    const action = new OnboardingActions.UpdateLastActive(step);
    this.dispatch<OnboardingActions.UpdateLastActive>(action, true);
  }

  /**
   * (Promise) Takes a progress step ID and sets the active status to true or false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async updateLastActiveAsync(step: number): Promise<UpdateAppDataInput | null | undefined> {
    const action = new OnboardingActions.UpdateLastActive(step);
    return await this.dispatchAsync<OnboardingActions.UpdateLastActive>(action, true);
  }

  /**
   * (Asynchronous) Update the onboarding when a user abandons the onboarding flow
   */
  updateAbandonedStatus(): void {
    const action = new OnboardingActions.AbandonOnboarding();
    this.dispatch<OnboardingActions.AbandonOnboarding>(action, true);
  }

  /**
   * (Promise) Update the onboarding when a user abandons the onboarding flow
   */
  async updateAbandonedStatusAsync(): Promise<UpdateAppDataInput> {
    const action = new OnboardingActions.AbandonOnboarding();
    return await this.dispatchAsync<OnboardingActions.AbandonOnboarding>(action, true);
  }
  /**
   * (Asynchronous) Takes a progress step ID and sets the active status to true or false
   * Then updates the state
   */
  resetOnboarding(): void {
    const action = new OnboardingActions.ResetOnboarding();
    this.dispatch<OnboardingActions.ResetOnboarding>(action, true);
  }

  /**
   *
   * @param action NGXS store action
   * @param sync flag to initiate a sync between the state and the DB
   */
  dispatch<T>(action: T, sync = false): void {
    sync ? this.store.dispatch(action).subscribe(this.scrubAndUpdate) : this.store.dispatch(action);
  }

  /**
   * (Promise) helper to dispatch an NGXS to a store
   * @param action NGXS store action
   * @param sync flag to initiate a sync between the state and the DB
   */
  async dispatchAsync<T>(action: T, sync = false): Promise<UpdateAppDataMutation | UpdateAppDataInput> {
    return new Promise((resolve, reject) => {
      this.store.dispatch(action).subscribe((state: { appData: AppDataStateModel }) => {
        const input = { ...state.appData } as UpdateAppDataInput;
        const clean = TransunionUtil.scrubbers.scrubBackendData(input) as UpdateAppDataInput;
        if (!clean.id) {
          return;
        } else {
          if (sync) {
            this.api
              .UpdateAppData(clean)
              .then((res) => resolve(res))
              .catch((err) => reject(err));
          } else {
            resolve(clean);
          }
        }
      });
    });
  }

  scrubAndUpdate(state: { appData: AppDataStateModel }): void {
    const input = { ...state.appData } as UpdateAppDataInput;
    const clean = TransunionUtil.scrubbers.scrubBackendData(input);
    if (!clean.id) {
      console.log('failed to update state');
      return;
    } else {
      this.api.UpdateAppData(clean);
    }
  }
}
