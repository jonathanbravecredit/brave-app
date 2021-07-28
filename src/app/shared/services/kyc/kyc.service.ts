import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { OnboardingStateModel } from '@store/onboarding';
import * as parser from 'fast-xml-parser';
const he = require('he');
import { AgenciesInput, UpdateAppDataInput, UserAttributesInput } from '@shared/services/aws/api.service';
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
} from '@shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute,
    private transunion: TransunionService,
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
   * Takes the agency status and updates the state with them
   * @param {AgenciesInput} agency the new agency input data to write to db and state
   */
  updateTransunionIndicativeEnrichment(agency: AgenciesInput): void {
    this.statesvc.updateAgencies(agency);
  }

  /**
   * Send the indicative enrichment message to the Transunion backend and await a response
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendIndicativeEnrichment(
    appData: UpdateAppDataInput | AppDataStateModel,
  ): Promise<IIndicativeEnrichmentResult | undefined> {
    try {
      const { success, error, data } = await this.transunion.sendIndicativeEnrichment(appData);
      console.log('indicative enrichment ===> ', success, error, data);
      return success ? data : undefined;
    } catch (err) {
      throw new Error(`kycService:sendIndicativeEnrichment=${err}`);
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
    if (enrichment.ResponseType.toLowerCase() === 'success') {
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          authenticated: false,
          indicativeEnrichmentSuccess: true,
        },
      });
      return enrichment;
    } else {
      return;
    }
  }

  /**
   * Method to send and process the indicative enrichment request and response.
   * @param {UpdateAppDataInput} data
   * @returns Full ssn or a failure (TODO: handle failures)
   */
  async getIndicativeEnrichmentResults(data: UpdateAppDataInput): Promise<KYCResponse | string> {
    let enrichmentResponse: IIndicativeEnrichmentResult | undefined;
    let enrichment: IIndicativeEnrichmentResult | undefined;

    try {
      enrichmentResponse = await this.sendIndicativeEnrichment(data);
      console.log('enrichmentResponse', enrichmentResponse, data);
      if (!enrichmentResponse) return KYCResponse.Failed;
      enrichment = await this.processIndicativeEnrichmentResponse(enrichmentResponse);
      if (!enrichment) return KYCResponse.Failed;
      console.log('enrichment', enrichment, enrichmentResponse);
      const ssn = `${enrichment.SSN}`;
      return ssn ? ssn : KYCResponse.Failed;
    } catch {
      return KYCResponse.Failed;
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
  ): Promise<IGetAuthenticationQuestionsResult | undefined> {
    if (!ssn) return;
    try {
      const { success, error, data } = await this.transunion.sendGetAuthenticationQuestions(appData, ssn);
      return success ? data : undefined;
    } catch (err) {
      throw new Error(`kycService:sendGetAuthenticationQuestions=${err}`);
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
    if (questions.ResponseType.toLowerCase() === 'success') {
      await this.updateTransunionIndicativeEnrichment({
        transunion: {
          authenticated: false,
          indicativeEnrichmentSuccess: true,
          getAuthenticationQuestionsSuccess: true,
          serviceBundleFulfillmentKey: questions.ServiceBundleFulfillmentKey,
        },
      });
      // now do the authentication
      return questions;
    } else {
      return;
    }
  }

  /**
   * Method to send and process the authentication questions request and response
   *   - Does not verify the accuracy of the methods...see (sendVerifyAuthenticationQuestions)
   * @param {UpdateAppDataInput} data
   * @returns
   */
  async getGetAuthenticationQuestionsResults(data: UpdateAppDataInput): Promise<KYCResponse | string> {
    let questionResponse: IGetAuthenticationQuestionsResult | undefined;
    let questions: IGetAuthenticationQuestionsResult | undefined;
    const ssn = data.user?.userAttributes?.ssn?.full;
    if (!ssn) return KYCResponse.Failed;
    // GetAuthorizationQuestions response from TU service
    try {
      questionResponse = await this.sendGetAuthenticationQuestions(data, ssn);
      if (!questionResponse) return KYCResponse.Failed;
      questions = await this.processGetAuthenticationQuestionsResponse(questionResponse);
      if (!questions) return KYCResponse.Failed;
      // Sucess...parse questions and pass to question component
      const questionXml = questions.Questions;
      const xmlText = questionXml ? questionXml : null;
      if (!xmlText) return KYCResponse.Failed;
      await this.updateCurrentRawQuestionsAsync(xmlText || '');
      return xmlText;
    } catch {
      return KYCResponse.Failed;
    }
  }

  /**
   * This parses the xml string and returns it as the TU question format
   * - TODO move this back to server
   * @param {string} xml xml string in the TU question schema
   * @returns
   */
  parseCurrentRawQuestions(xml: string): ITransunionKBAQuestions {
    // need two decodes, encoded by TU and our default parser settings
    const clean = he.decode(he.decode(xml));
    const questions: ITransunionKBAQuestions = parser.parse(clean, parserOptions);
    return questions;
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
   * This parses the xml string and returns it as the TU question format
   * @param {string} xml xml string in the TU question schema
   * @returns
   */
  parseCurrentRawAuthDetails(xml: string): ITransunionKBAChallengeAnswer {
    // need two decodes, encoded by TU and our default parser settings
    const clean = he.decode(he.decode(xml));
    const questions: ITransunionKBAChallengeAnswer = parser.parse(clean, parserOptions);
    return questions;
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
    console.log('getPassCodeQuestion', questions);
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
    appData: UpdateAppDataInput | AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[],
  ): Promise<ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>> {
    if (!answers.length) throw new Error('No answers provided');
    try {
      return await this.transunion.sendVerifyAuthenticationQuestions(appData, answers);
    } catch (err) {
      throw new Error(`kycService:sendVerifyAuthenticationQuestions=${err}`);
    }
  }

  /**
   * Invoke the service method to send the verified user to transunion to complete onboarding
   *  - enrolls them in report and score as well as disputes
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendCompleteOnboarding(data: UpdateAppDataInput | AppDataStateModel): Promise<ITUServiceResponse<any>> {
    try {
      return await this.transunion.sendCompleteOnboarding(data);
    } catch (err) {
      throw new Error(`kycService:sendEnrollRequest=${err}`);
    }
  }
}
