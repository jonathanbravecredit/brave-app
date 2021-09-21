import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { OnboardingStateModel } from '@store/onboarding';
import * as parser from 'fast-xml-parser';
const he = require('he');
import {
  AgenciesInput,
  TransunionInput,
  UpdateAppDataInput,
  UserAttributesInput,
} from '@shared/services/aws/api.service';
import { AppDataStateModel } from '@store/app-data';
import { TransunionService } from '@shared/services/transunion/transunion.service';
import { AgenciesStateModel } from '@store/agencies';
import { StateService } from '@shared/services/state/state.service';
import {
  ITransunionKBAQuestions,
  ITransunionKBAChallengeAnswer,
  ITransunionKBAQuestion,
  IVerifyAuthenticationAnswer,
  ITUServiceResponse,
  IGetAuthenticationQuestionsResult,
  IIndicativeEnrichmentResult,
  IVerifyAuthenticationQuestionsResult,
  IErrorResponse,
} from '@shared/interfaces';
import { Router } from '@angular/router';
import { BraveUtil as bc } from '@shared/utils/brave/brave';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';
import { from } from 'rxjs';
import { TUBundles } from '@shared/utils/transunion/constants';
import { AppStatus, AppStatusReason } from '@shared/utils/brave/constants';

export enum KYCResponse {
  Failed = 'failed',
  Success = 'success',
}

export enum OTPQuestion {
  FullText = 'Please select your preferred method of Authentication?(Standard text message and voice rates apply)*</FullQuestionText',
  PartialOne = 'preferred method of Authentication',
  PartialTwo = 'Standard text message and voice rates apply',
}

export enum OTPReponse {
  FullText = 'Deliver passcode via Text Message',
  PartialOne = 'via Text Message',
}

export enum PassCodeQuestion {
  FullText = 'Enter the passcode you received',
  PartialOne = 'passcode',
}

const parserOptions = {
  attributeNamePrefix: '',
  ignoreAttributes: false,
  ignoreNameSpace: true,
  parseAttributeValue: true,
  attrValueProcessor: (val: any, attrName: any) => he.encode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val: any, tagName: any) => he.encode(val), //default is a=>a
};

@Injectable()
export class KycService {
  constructor(
    private store: Store,
    private statesvc: StateService,
    private transunion: TransunionService,
    private router: Router,
  ) {}

  /**
   * Takes a progress step ID and sets the status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  activateStep(step: number): void {
    this.statesvc.updateLastActive(step);
  }

  /**
   * Takes a progress step ID and sets the status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  inactivateStep(step: number): void {
    this.statesvc.updateLastActive(step);
  }

  /**
   * Takes a progress step ID and sets the complete status to true
   * Then updates the state
   * @param {number} step the progress step ID
   */
  completeStep(step: number): void {
    this.statesvc.updateLastComplete(step);
  }

  /**
   * Takes a progress step ID and sets the complete status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  incompleteStep(step: number): void {
    this.statesvc.updateLastComplete(step);
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  updateStep(
    lastActive: number,
    lastComplete: number,
    started: boolean = true,
  ): OnboardingStateModel | undefined | void {
    const state = this.store.snapshot();
    return { ...state.user?.onboarding, lastActive, lastComplete, started };
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  updateUserAttributes(attrs: UserAttributesInput): void {
    this.statesvc.updateUserAttributes(attrs);
  }

  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  async updateUserAttributesAsync(attrs: UserAttributesInput): Promise<UpdateAppDataInput> {
    try {
      return await this.statesvc.updateUserAttributesAsync(attrs);
    } catch (err) {
      throw new Error(`kycService:updateUserAttributesAsync=${err}`);
    }
  }

  /**
   * (Asynchronous) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param agencies
   */
  updateAgencies(agencies: AgenciesStateModel | undefined): void {
    if (!agencies) return;
    this.statesvc.updateAgencies(agencies);
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateAgenciesAsync(
    agencies: AgenciesStateModel | null | undefined,
  ): Promise<UpdateAppDataInput | null | undefined> {
    if (!agencies) return;
    return await this.statesvc.updateAgenciesAsync(agencies);
  }

  /**
   * Takes the current user and suspends their account
   */
  async suspendUserOnAge(): Promise<void> {
    const { appData } = this.statesvc.state$.value;
    const duration = 24 * 30;
    const suspended = bc.generators.createSuspendedStatus({
      status: AppStatus.Suspended,
      reason: AppStatusReason.AgeRestriction,
      duration: duration,
    });
    const newData = {
      ...appData,
      ...suspended,
    };
    if (appData.id && newData.id) {
      try {
        await this.statesvc.updateStateDBSyncAsync(newData);
      } catch (err) {
        console.log(`kycService:suspendUserOnAge=Db Sync Error ${err}`);
      }
    }
  }

  /**
   * Takes the current user and suspends their account
   */
  async suspendUserOnCriticalFail(): Promise<void> {
    const { appData } = this.statesvc.state$.value;
    const duration = 24 * 30;
    const suspended = bc.generators.createSuspendedStatus({
      status: AppStatus.Suspended,
      reason: AppStatusReason.ThirtyDayLockout,
      duration: duration,
    });
    const newData = {
      ...appData,
      ...suspended,
    };
    if (appData.id && newData.id) {
      try {
        await this.statesvc.updateStateDBSyncAsync(newData);
      } catch (err) {
        console.log(`kycService:suspendUserOnAge=Db Sync Error ${err}`);
      }
    }
  }

  /**
   * Takes the current user and suspends their account
   */
  async suspendUserOnAuthAttempts(): Promise<void> {
    const { appData } = this.statesvc.state$.value;
    const duration = 24 * 30;
    const suspended = bc.generators.createSuspendedStatus({
      status: AppStatus.Suspended,
      reason: AppStatusReason.AuthAttemptsExceeded,
      duration: duration,
    });
    const newData = {
      ...appData,
      ...suspended,
    };
    if (appData.id && newData.id) {
      try {
        await this.statesvc.updateStateDBSyncAsync(newData);
      } catch (err) {
        console.log(`kycService:suspendUserOnAge=Db Sync Error ${err}`);
      }
    }
  }

  /**
   * Takes the agency status and updates the state with them
   * @param {AgenciesInput} agency the new agency input data to write to db and state
   */
  updateTransunionIndicativeEnrichment(agency: AgenciesInput): void {
    this.statesvc.updateAgencies(agency);
  }

  /**
   * Method to send and process the indicative enrichment request and response.
   * @param {UpdateAppDataInput} appData
   * @returns Full ssn or a failure (TODO: handle failures)
   */
  async getIndicativeEnrichmentResults(
    appData: UpdateAppDataInput,
  ): Promise<ITUServiceResponse<IIndicativeEnrichmentResult | undefined>> {
    try {
      return await this.transunion.sendIndicativeEnrichment(appData);
    } catch {
      return bc.technicalError;
    }
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  async processIndicativeEnrichmentResponse(
    enrichment: IIndicativeEnrichmentResult,
  ): Promise<IIndicativeEnrichmentResult | undefined> {
    const { appData } = this.statesvc.state$.value;
    const transunion = appData.agencies?.transunion;
    if (enrichment.ResponseType.toLowerCase() === 'success') {
      const status = tu.generators.createOnboardingStatus(TUBundles.IndicativeEnrichment, true);
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          ...transunion,
          authenticated: false,
          indicativeEnrichmentSuccess: true,
          indicativeEnrichmentStatus: status,
        },
      });
      return enrichment;
    } else {
      const status = tu.generators.createOnboardingStatus(TUBundles.IndicativeEnrichment, false);
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          ...transunion,
          authenticated: false,
          indicativeEnrichmentSuccess: false,
          indicativeEnrichmentStatus: status,
        },
      });
      return;
    }
  }

  /**
   * Method to send and process the authentication questions request and response
   *   - Does not verify the accuracy of the methods...see (sendVerifyAuthenticationQuestions)
   * @param {UpdateAppDataInput} data
   * @returns
   */
  async getGetAuthenticationQuestionsResults(
    appData: UpdateAppDataInput,
  ): Promise<ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>> {
    const ssn = appData.user?.userAttributes?.ssn?.full;
    if (!ssn) return bc.technicalError;
    try {
      return await this.sendGetAuthenticationQuestions(appData, ssn);
    } catch {
      return bc.technicalError;
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendGetAuthenticationQuestions(
    appData: UpdateAppDataInput | AppDataStateModel,
    ssn: string = '',
  ): Promise<ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>> {
    if (!ssn) return bc.technicalError;
    try {
      return await this.transunion.sendGetAuthenticationQuestions(appData, ssn);
    } catch (err) {
      return bc.technicalError;
    }
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * TODO move parsers to Transunion Service and then eventually backend
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  async processGetAuthenticationQuestionsResponse(
    questions: IGetAuthenticationQuestionsResult,
  ): Promise<IGetAuthenticationQuestionsResult | undefined> {
    const { appData } = this.statesvc.state$.value;
    const transunion = appData.agencies?.transunion;
    if (questions.ResponseType.toLowerCase() === 'success') {
      const status = tu.generators.createOnboardingStatus(TUBundles.GetAuthenticationQuestions, true);
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          ...transunion,
          getAuthenticationQuestionsSuccess: true,
          getAuthenticationQuestionsStatus: status,
          serviceBundleFulfillmentKey: questions.ServiceBundleFulfillmentKey,
        },
      });
      // now do the authentication
      return questions;
    } else {
      const status = tu.generators.createOnboardingStatus(TUBundles.GetAuthenticationQuestions, false);
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          ...transunion,
          getAuthenticationQuestionsSuccess: false,
          getAuthenticationQuestionsStatus: status,
        },
      });
      return;
    }
  }

  /**
   * Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateCurrentRawQuestions(questions: string): void {
    this.statesvc.updateTransunionQuestions(questions);
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateCurrentRawQuestionsAsync(questions: string): Promise<UpdateAppDataInput | undefined> {
    try {
      return await this.statesvc.updateTransunionQuestionsAsync(questions);
    } catch (err) {
      throw new Error(`kycService:updateCurrentRawQuestionsAsync=${err}`);
    }
  }

  /**
   * Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  updateCurrentRawAuthDetails(questions: string): void {
    this.statesvc.updateTransunionAuthDetails(questions);
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateCurrentRawAuthDetailsAsync(questions: string): Promise<UpdateAppDataInput | undefined> {
    try {
      return this.statesvc.updateTransunionAuthDetailsAsync(questions);
    } catch (err) {
      throw new Error(`kycService:updateCurrentRawAuthDetailsAsync=${err}`);
    }
  }

  /**
   * Runs a series of tests to see if the question is a OTP
   * @param {ITransunionKBAQuestions} questions
   * @returns
   */
  getOTPQuestion(questions: ITransunionKBAQuestions): ITransunionKBAQuestion | undefined {
    const series: ITransunionKBAQuestion[] | ITransunionKBAQuestion =
      questions?.ChallengeConfigurationType?.MultiChoiceQuestion instanceof Array
        ? questions?.ChallengeConfigurationType?.MultiChoiceQuestion
        : new Array(questions?.ChallengeConfigurationType?.MultiChoiceQuestion);
    return series.find(
      (q) =>
        q.FullQuestionText === OTPQuestion.FullText ||
        q.FullQuestionText.indexOf(OTPQuestion.PartialOne) >= 0 ||
        q.FullQuestionText.indexOf(OTPQuestion.PartialTwo) >= 0,
    );
  }

  /**
   * Runs a series of test to find the 'Send text message' answer for OTP
   * @param {ITransunionKBAQuestion} question
   * @returns
   */
  getOTPSendTextAnswer(question: ITransunionKBAQuestion): IVerifyAuthenticationAnswer {
    const answerChoice =
      question?.AnswerChoice instanceof Array ? question?.AnswerChoice : new Array(question?.AnswerChoice);

    let answer = answerChoice.find(
      (c) => c.AnswerChoiceText === OTPReponse.FullText || c.AnswerChoiceText.indexOf(OTPReponse.PartialOne) >= 0,
    );
    return {
      VerifyChallengeAnswersRequestMultiChoiceQuestion: {
        QuestionId: question?.QuestionId,
        SelectedAnswerChoice: {
          AnswerChoiceId: answer?.AnswerChoiceId || '',
        },
      },
    };
  }

  /**
   * Runs a series of tests to see if the question is for the passcode
   * @param {ITransunionKBAQuestions} questions
   * @returns
   */
  getPassCodeQuestion(questions: ITransunionKBAQuestions): ITransunionKBAQuestion | undefined {
    const series: ITransunionKBAQuestion[] =
      questions.ChallengeConfigurationType.MultiChoiceQuestion instanceof Array
        ? questions.ChallengeConfigurationType.MultiChoiceQuestion
        : new Array(questions.ChallengeConfigurationType.MultiChoiceQuestion);
    return series.find(
      (q) =>
        q.FullQuestionText === PassCodeQuestion.FullText ||
        q.FullQuestionText.indexOf(PassCodeQuestion.PartialOne) >= 0,
    );
  }

  /**
   * Runs a series of test to find the 'Send text message' answer for OTP
   * @param {ITransunionKBAQuestion} question
   * @returns
   */
  getPassCodeAnswer(question: ITransunionKBAQuestion, input: string): IVerifyAuthenticationAnswer {
    const answerChoice =
      question.AnswerChoice instanceof Array ? question.AnswerChoice : new Array(question.AnswerChoice);
    const answer = answerChoice.find(
      (c) =>
        c.AnswerChoiceText === PassCodeQuestion.FullText ||
        c.AnswerChoiceText.indexOf(PassCodeQuestion.PartialOne) >= 0,
    );
    return {
      VerifyChallengeAnswersRequestMultiChoiceQuestion: {
        QuestionId: question?.QuestionId,
        SelectedAnswerChoice: {
          AnswerChoiceId: answer?.AnswerChoiceId || '',
          UserInputAnswer: input,
        },
      },
    };
  }

  /**
   * Invoke the service method to send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendVerifyAuthenticationQuestions(
    appData: UpdateAppDataInput | AppDataStateModel | undefined,
    answers: IVerifyAuthenticationAnswer[] | undefined,
  ): Promise<ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>> {
    if (!answers?.length || !appData?.id) return bc.technicalError;
    try {
      return await this.transunion.sendVerifyAuthenticationQuestions(appData, answers);
    } catch (err) {
      return bc.technicalError;
    }
  }

  /**
   * Invoke the service method to send the verified user to transunion to complete onboarding
   *  - enrolls them in report and score as well as disputes
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendCompleteOnboarding(): Promise<ITUServiceResponse<any>> {
    try {
      return await this.transunion.sendCompleteOnboarding();
    } catch (err) {
      return bc.technicalError;
    }
  }

  /**
   * Invoke the service method to send the verified user to transunion to complete onboarding
   *  - enrolls them in report and score as well as disputes
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendEnrollRequest(): Promise<ITUServiceResponse<any>> {
    try {
      return await this.transunion.sendEnrollRequest();
    } catch (err) {
      return bc.technicalError;
    }
  }

  async bailoutFromOnboarding(
    tuPartial: Partial<TransunionInput>,
    resp?: ITUServiceResponse<any | undefined>,
  ): Promise<void> {
    debugger;
    const agencies = this.statesvc.state$.value.appData.agencies;
    const transunion = this.statesvc.state$.value.appData.agencies?.transunion;
    if (!resp || resp.error?.Code === -1 || !agencies || !transunion) {
      // technical error...api did not respond and error thrown (empty resp);
      this.router.navigate(['/onboarding/retry']);
    } else {
      const critical = tu.queries.exceptions.isErrorCritical(resp);
      const authAttempt = (transunion.authAttempt || 0) + 1;
      if (critical) {
        await this.statesvc.updateAgenciesAsync({
          ...agencies,
          transunion: {
            ...transunion,
            ...tuPartial,
            authAttempt,
          },
        });
        await this.suspendUserOnCriticalFail();
        this.router.navigate(['/suspended/default']);
      } else if (authAttempt >= 2) {
        await this.statesvc.updateAgenciesAsync({
          ...agencies,
          transunion: {
            ...transunion,
            ...tuPartial,
            authAttempt,
          },
        });
        await this.suspendUserOnAuthAttempts();
        this.router.navigate(['/suspended/default']);
      } else {
        this.router.navigate(['/onboarding/retry']);
      }
    }
  }
}
