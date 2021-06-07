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
import { IGetAuthenticationQuestionsResponseSuccess } from '@shared/models/get-authorization-questions';
import { IIndicativeEnrichmentResponseSuccess } from '@shared/models/indicative-enrichment';
import { TransunionService } from '@shared/services/transunion/transunion.service';

@Injectable({
  providedIn: 'root',
})
export class KycService {
  constructor(
    private api: APIService,
    private store: Store,
    private auth: AuthService,
    private transunion: TransunionService
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
    this.store.dispatch(
      new AgenciesActions.EditQuestions({ currentRawQuestions: questions })
    );
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
        .dispatch(
          new AgenciesActions.EditQuestions({ currentRawQuestions: questions })
        )
        .subscribe((state: { appData: AppDataStateModel }) => {
          const input = { ...state.appData } as UpdateAppDataInput;
          resolve(input);
        });
    });
  }

  /**
   * Send the indicative enrichment message to the Transunion backend and await a response
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendIndicativeEnrichment(
    data: UpdateAppDataInput
  ): Promise<any | undefined> {
    try {
      const msg = this.transunion.createIndicativeEnrichmentPayload(data);
      const res = await this.api.Transunion(
        'IndicativeEnrichment',
        JSON.stringify(msg)
      );
      return res ? res : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendGetAuthenticationQuestions(
    data: UpdateAppDataInput,
    ssn: string = ''
  ): Promise<any | undefined> {
    if (!ssn) return;
    try {
      const msg = this.transunion.createGetAuthenticationQuestionsPayload(
        data,
        ssn
      );
      const res = await this.api.Transunion(
        'GetAuthenticationQuestions',
        JSON.stringify(msg)
      );
      return res ? res : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
    }
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  async processIndicativeEnrichmentResponse(
    resp: string
  ): Promise<IIndicativeEnrichmentResponseSuccess | undefined> {
    console.log('resp', resp);
    const enrichment: IIndicativeEnrichmentResponseSuccess = JSON.parse(
      JSON.parse(resp)['IndicativeEnrichmentResults']
    );
    if (
      enrichment['s:Envelope']['s:Body'].IndicativeEnrichmentResponse
        .IndicativeEnrichmentResult['a:ResponseType']._text === 'Success'
    ) {
      // update indicative enrichment as success
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          authenticated: false,
          indicativeEnrichmentSuccess: true,
        },
      });
      // now do the authentication
      return enrichment;
    } else {
      return;
    }
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  async processGetAutthenticationQuestionsResponse(
    resp: string
  ): Promise<IGetAuthenticationQuestionsResponseSuccess | undefined> {
    const questions: IGetAuthenticationQuestionsResponseSuccess = JSON.parse(
      JSON.parse(resp)['GetAuthenticationQuestions']
    );
    if (
      questions['s:Envelope']['s:Body'].GetAuthenticationQuestionsResponse
        .GetAuthenticationQuestionsResult['a:ResponseType']._text === 'Success'
    ) {
      const fulillmentKey =
        questions['s:Envelope']['s:Body'].GetAuthenticationQuestionsResponse
          .GetAuthenticationQuestionsResult['a:ServiceBundleFulfillmentKey']
          ._text;
      // update indicative enrichment as success
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          authenticated: false,
          indicativeEnrichmentSuccess: true,
          getAuthenticationQuestionsSuccess: true,
          // serviceBundleFulfillmentKey: fulillmentKey
        },
      });
      // now do the authentication
      return questions;
    } else {
      return;
    }
  }
}
