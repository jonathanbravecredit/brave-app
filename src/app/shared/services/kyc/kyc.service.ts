import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";
import { OnboardingStateModel } from "@store/onboarding";
import {
  TransunionInput,
  TUStatusRefInput,
  UpdateAppDataInput,
  UserAttributesInput,
} from "@shared/services/aws/api.service";
import { AppDataStateModel } from "@store/app-data";
import { TransunionService } from "@shared/services/transunion/transunion.service";
import { AgenciesStateModel } from "@store/agencies";
import { StateService } from "@shared/services/state/state.service";
import {
  ITransunionKBAQuestions,
  ITransunionKBAQuestion,
  IVerifyAuthenticationAnswer,
  ITUServiceResponse,
  IGetAuthenticationQuestionsResult,
  IIndicativeEnrichmentResult,
  IVerifyAuthenticationQuestionsResult,
  IMergeReport,
} from "@shared/interfaces";
import { Router } from "@angular/router";
import { BraveUtil as bc } from "@shared/utils/brave/brave";
import { TransunionUtil as tu } from "@shared/utils/transunion/transunion";
import { TUBundles } from "@shared/utils/transunion/constants";
import { AppStatus, AppStatusReason } from "@shared/utils/brave/constants";
import { AnalyticErrorEvents } from "@shared/services/analytics/analytics/constants";
import { AuthService } from "@shared/services/auth/auth.service";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { ROUTE_NAMES as routes } from "@shared/routes/routes.names";
import * as CreditReportActions from "@store/credit-report/credit-report.actions";
import { ICreditReport } from "@shared/models/CreditReports.model";

export enum KYCResponse {
  Failed = "failed",
  Success = "success",
}

@Injectable()
export class KycService {
  constructor(
    private store: Store,
    private auth: AuthService,
    private statesvc: StateService,
    private transunion: TransunionService,
    private analytics: AnalyticsService,
    private router: Router
  ) {}

  /*=====================================*/
  /*
  /*              ONBOARDING
  /*
  /*=====================================*/
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
  async completeStep(step: number): Promise<void> {
    await this.statesvc.updateLastCompleteAsync(step);
  }

  /**
   * Takes a progress step ID and sets the complete status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async incompleteStep(step: number): Promise<void> {
    await this.statesvc.updateLastCompleteAsync(step);
  }

  /**
   * Process and clean the indicative enrichment response back from Transunion
   * @param {string} resp this is the JSON string back from the Transunion service
   * @returns
   */
  updateStep(
    lastActive: number,
    lastComplete: number,
    started: boolean = true
  ): OnboardingStateModel | undefined | void {
    const state = this.store.snapshot();
    return { ...state?.user?.onboarding, lastActive, lastComplete, started };
  }

  /**
   * Takes a progress step ID and sets the complete status to false
   * Then updates the state
   * @param {number} step the progress step ID
   */
  async updateAuthenticatedOn(
    authenticated: boolean,
    authenticatedOn: string
  ): Promise<void> {
    await this.statesvc.updateAuthenticatedOnAsync(
      authenticated,
      authenticatedOn
    );
  }

  async abandonOnboarding(): Promise<void> {
    await this.statesvc.updateAbandonedStatusAsync();
  }

  // abandonOnboarding(): void {
  //   this.statesvc.updateAbandonedStatus();
  // }

  /*=====================================*/
  /*
  /*              USER ATTRIBUTES
  /*
  /*=====================================*/
  /**
   * Takes the attributes and updates the state with them
   * @param {UserAttributesInput} attributes
   */
  async updateUserAttributesAsync(
    attrs: UserAttributesInput
  ): Promise<UpdateAppDataInput> {
    return await this.statesvc.updateUserAttributesAsync(attrs);
  }

  /**
   * Invokes the auth service method to return the current user email
   * @returns
   */
  async getUserEmail(): Promise<string> {
    return await this.auth.getUserEmail();
  }

  /**
   * Invokes the auth service method to return the current user sub
   * @returns
   */
  async getUserSub(): Promise<string> {
    return await this.auth.getUserSub();
  }

  /*=====================================*/
  /*
  /*              AGENCY
  /*
  /*=====================================*/
  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateAgenciesAsync(
    agencies: AgenciesStateModel | null | undefined
  ): Promise<UpdateAppDataInput | null | undefined> {
    if (!agencies) return;
    return await this.statesvc.updateAgenciesAsync(agencies);
  }

  /*=====================================*/
  /*
  /*              TRANSUNION
  /*
  /*=====================================*/
  //========== GENERAL ==================//
  async updateTransunion(
    tuPartial: Partial<TransunionInput>
  ): Promise<UpdateAppDataInput> {
    return await this.statesvc.updateTransunion(tuPartial);
  }

  //======== INDICATIVE ENRICHMENT ======//
  /**
   * Method to send and process the indicative enrichment request and response.
   * @param {UpdateAppDataInput} appData
   * @returns Full ssn or a failure (TODO: handle failures)
   */
  async getIndicativeEnrichmentResults(
    appData: UpdateAppDataInput
  ): Promise<ITUServiceResponse<IIndicativeEnrichmentResult | undefined>> {
    try {
      return await this.transunion.sendIndicativeEnrichment(appData);
    } catch (err) {
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
    resp?: ITUServiceResponse<IIndicativeEnrichmentResult | undefined>
  ): Promise<IIndicativeEnrichmentResult | undefined> {
    if (enrichment.ResponseType.toLowerCase() === "success") {
      const status = tu.generators.createOnboardingStatus(
        TUBundles.IndicativeEnrichment,
        true,
        resp
      );
      await this.updateIndicativeEnrichment({
        indicativeEnrichmentSuccess: true,
        indicativeEnrichmentStatus: status,
      });
      return enrichment;
    } else {
      const status = tu.generators.createOnboardingStatus(
        TUBundles.IndicativeEnrichment,
        false,
        resp
      );
      await this.updateIndicativeEnrichment({
        indicativeEnrichmentSuccess: false,
        indicativeEnrichmentStatus: status,
      });
      return;
    }
  }

  /**
   * Takes the updated indicative enrichment state and updates the state with it
   * @param param0
   */
  updateIndicativeEnrichment({
    indicativeEnrichmentSuccess,
    indicativeEnrichmentStatus,
  }: {
    indicativeEnrichmentSuccess: boolean;
    indicativeEnrichmentStatus: TUStatusRefInput;
  }): void {
    this.statesvc.updateIndicativeEnrichment({
      indicativeEnrichmentSuccess,
      indicativeEnrichmentStatus,
    });
  }

  //======== GET AUTHENICATION QUESTIONS ======//
  /**
   * Method to send and process the authentication questions request and response
   *   - Does not verify the accuracy of the methods...see (sendVerifyAuthenticationQuestions)
   * @param {UpdateAppDataInput} data
   * @returns
   */
  async getGetAuthenticationQuestionsResults(
    appData: UpdateAppDataInput
  ): Promise<
    ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>
  > {
    const ssn = appData?.user?.userAttributes?.ssn?.full;
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
    ssn: string = ""
  ): Promise<
    ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>
  > {
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
    questions: IGetAuthenticationQuestionsResult
  ): Promise<IGetAuthenticationQuestionsResult | undefined> {
    const { appData } = this.statesvc.state$.value;
    const transunion = appData?.agencies?.transunion;
    if (questions.ResponseType.toLowerCase() === "success") {
      const status = tu.generators.createOnboardingStatus(
        TUBundles.GetAuthenticationQuestions,
        true
      );
      await this.updateGetAuthenticationQuestions({
        getAuthenticationQuestionsSuccess: true,
        getAuthenticationQuestionsStatus: status,
        serviceBundleFulfillmentKey: questions.ServiceBundleFulfillmentKey,
      });
      // now do the authentication
      return questions;
    } else {
      const status = tu.generators.createOnboardingStatus(
        TUBundles.GetAuthenticationQuestions,
        false
      );
      await this.updateGetAuthenticationQuestions({
        getAuthenticationQuestionsSuccess: false,
        getAuthenticationQuestionsStatus: status,
        serviceBundleFulfillmentKey: null,
      });
      return;
    }
  }

  /**
   * - Parse the questions xml data
   * - Resave it in the db as object
   * - find the OTP question (if not go to KBA)
   * - Choose send to send to cell phone (over landline)
   * - Confirm response, save to state, and go to code input
   * BE CAREFUL OF RACE CONDITIONS HERE!!!
   * @param resp
   */
  async handleGetAuthenticationFlow(
    resp: ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>
  ): Promise<void> {
    if (!resp.success || !resp.data) {
      // TU response or BC technical error
      this.handleGetAuthenticationBailout<IGetAuthenticationQuestionsResult>(
        resp
      );
    } else {
      const questions = await this.processGetAuthenticationQuestionsResponse(
        resp.data
      );
      const xml = tu.parsers.onboarding.parseAuthQuestions(questions);
      if (!xml) {
        this.handleGetAuthenticationBailout();
      } else {
        const kbaAppData = await this.updateCurrentRawQuestionsAsync(xml); // will throw error if connection issue
        const authQuestions =
          tu.parsers.onboarding.parseCurrentRawAuthXML<ITransunionKBAQuestions>(
            xml
          ); // check if OTP eligible
        const otpQuestion = this.getOTPQuestion(authQuestions);
        if (otpQuestion) {
          const otpResp = await this.sendOTPResponse(otpQuestion);
          if (!otpResp?.success || !otpResp?.data) {
            this.handleGetAuthenticationBailout<IVerifyAuthenticationQuestionsResult>(
              otpResp
            );
          } else {
            const codeQuestions = otpResp?.data?.AuthenticationDetails;
            const pinData = await this.startPinClock();
            const questionData = await this.updateCurrentRawQuestionsAsync(
              codeQuestions
            );
            await this.updateAgenciesAsync(questionData?.agencies); // success, sync up to db
            this.router.navigate([routes.root.onboarding.code.full]);
          }
        } else {
          // since no otp question found, they are kba based and already save...start KBA countdown
          const kbaData = await this.startKbaClock();
          await this.updateAgenciesAsync(kbaData?.agencies);
          this.router.navigate([routes.root.onboarding.kba.full]);
        }
      }
    }
  }

  /**
   * - Parse the questions xml data
   * - Resave it in the db as object
   * - find the OTP question (if not go to KBA)
   * - Choose send to send to cell phone (over landline)
   * - Confirm response, save to state, and go to code input
   * BE CAREFUL OF RACE CONDITIONS HERE!!!
   * @param resp
   */
  async handleVerificationInProgressFlow(
    resp: ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>
  ): Promise<void> {
    if (!resp.success || !resp.data) {
      // TU response or BC technical error
      this.handleGetAuthenticationBailout<IVerifyAuthenticationQuestionsResult>(
        resp
      );
    } else {
      const questions = resp.data; // skipping the updating of the bundle key
      const xml =
        tu.parsers.onboarding.parseVerificationInProgressQuestions(questions);
      if (!xml) {
        this.handleGetAuthenticationBailout();
      } else {
        await this.updateCurrentRawQuestionsAsync(xml); // will throw error if connection issue
        // do not restart clock
        this.router.navigate([routes.root.onboarding.kba.full]);
      }
    }
  }

  /**
   * Takes the updated indicative enrichment state and updates the state with it
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
    this.statesvc.updateGetAuthenticationQuestions({
      getAuthenticationQuestionsSuccess,
      getAuthenticationQuestionsStatus,
      serviceBundleFulfillmentKey,
    });
  }

  /**
   * Method to:
   * - Find the correct OTP answer in the response from TU
   * - Select the answer for the user to receive a text message
   * - Confirm answer is received
   */
  async sendOTPResponse(
    otpQuestion: ITransunionKBAQuestion
  ): Promise<
    ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>
  > {
    const res = this.store.snapshot(); // refresh state for new bundle key
    const state = res?.appData;
    const otpAnswer = this.getOTPSendTextAnswer(otpQuestion);
    try {
      const resp = await this.sendVerifyAuthenticationQuestions(state, [
        otpAnswer,
      ]);
      if (!resp.success || !resp.data) {
        return resp;
      } else {
        const parsed = resp.data
          ? resp.data
          : ({} as IVerifyAuthenticationQuestionsResult);
        const success = parsed
          ? parsed.ResponseType.toLowerCase() === "success"
          : false;
        return { success, data: parsed };
      }
    } catch (err: any) {
      return { success: false };
    }
  }

  //======== VERIFY AUTHENTICATION QUESTIONS ======//
  /**
   * Invoke the service method to send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendVerifyAuthenticationQuestions(
    appData: UpdateAppDataInput | AppDataStateModel | undefined,
    answers: IVerifyAuthenticationAnswer[] | undefined
  ): Promise<
    ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>
  > {
    if (!answers?.length || !appData?.id) return bc.technicalError;
    try {
      return await this.transunion.sendVerifyAuthenticationQuestions(
        appData,
        answers
      );
    } catch (err) {
      return bc.technicalError;
    }
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateCurrentRawQuestionsAsync(
    questions: string
  ): Promise<UpdateAppDataInput> {
    try {
      return await this.statesvc.updateTransunionQuestionsAsync(questions);
    } catch (err) {
      throw new Error(`kycService:updateCurrentRawQuestionsAsync=${err}`);
    }
  }

  /**
   * (Promise) Takes the string of KBA questions returned by the agency service and stores them in state
   *   - Does not store in the database as there is no need to.
   * @param {string} questions the string of xml questions returned by Transunion or other agency
   */
  async updateCurrentRawAuthDetailsAsync(
    questions: string
  ): Promise<UpdateAppDataInput> {
    try {
      return this.statesvc.updateTransunionAuthDetailsAsync(questions);
    } catch (err) {
      throw new Error(`kycService:updateCurrentRawAuthDetailsAsync=${err}`);
    }
  }

  //======== ENROLL ======//
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
  /*=====================================*/
  /*
  /*         TU ONBOARDING FLOW
  /*
  /*=====================================*/
  /**
   * Increment auth attempts by 1.
   */
  async incrementAuthAttempt(): Promise<UpdateAppDataInput> {
    return await this.statesvc.incrementAuthAttemptsAsync();
  }
  /**
   * Initiate the OTP pin in DB
   */
  async startPinClock(): Promise<UpdateAppDataInput> {
    return await this.statesvc.initiateTransunionPinDetailsAsync();
  }

  /**
   * Increment pin request by 1. Resets pin age
   */
  async incrementPinRequest(): Promise<UpdateAppDataInput> {
    return await this.statesvc.incrementTransunionPinRequestAsync();
  }

  /**
   * Increment pin attempt by 1.
   */
  async incrementPinAttempts(): Promise<UpdateAppDataInput> {
    return await this.statesvc.incrementTransunionPinAttemptsAsync();
  }

  /**
   * Initiate the OTP pin in DB
   */
  async startKbaClock(): Promise<UpdateAppDataInput> {
    return await this.statesvc.initiateKBADetailsAsync();
  }

  /*=====================================*/
  /*
  /*                STATE
  /*
  /*=====================================*/
  async setCreditReport(creditReport: ICreditReport): Promise<void> {
    const { report, modifiedOn } = creditReport;
    const payload = { report, updatedOn: new Date().toISOString(), modifiedOn };
    await this.store
      .dispatch(new CreditReportActions.Add(payload))
      ?.toPromise();
  }

  /*=====================================*/
  /*
  /*                PARSERS
  /*
  /*=====================================*/
  /**
   * Runs a series of tests to see if the question is a OTP
   * @param {ITransunionKBAQuestions} questions
   * @returns
   */
  getOTPQuestion(
    questions: ITransunionKBAQuestions
  ): ITransunionKBAQuestion | undefined {
    return tu.parsers.onboarding.parseOTPQuestion(questions);
  }

  /**
   * Runs a series of test to find the 'Send text message' answer for OTP
   * @param {ITransunionKBAQuestion} question
   * @returns
   */
  getOTPSendTextAnswer(
    question: ITransunionKBAQuestion
  ): IVerifyAuthenticationAnswer {
    return tu.parsers.onboarding.parseOTPSendTextAnswer(question);
  }

  /**
   * Runs a series of tests to see if the question is for the passcode
   * @param {ITransunionKBAQuestions} questions
   * @returns
   */
  getPassCodeQuestion(
    questions: ITransunionKBAQuestions
  ): ITransunionKBAQuestion | undefined {
    return tu.parsers.onboarding.parsePassCodeQuestion(questions);
  }

  /**
   * Runs a series of test to find the 'Send text message' answer for OTP
   * @param {ITransunionKBAQuestion} question
   * @returns
   */
  getPassCodeAnswer(
    question: ITransunionKBAQuestion,
    input: string
  ): IVerifyAuthenticationAnswer {
    return tu.parsers.onboarding.parsePassCodeAnswer(question, input);
  }

  /*=====================================*/
  /*
  /*         ONBOARDING BAILOUT
  /*
  /*=====================================*/

  async bailoutFromOnboarding(
    tuPartial: Partial<TransunionInput>,
    resp?: ITUServiceResponse<any | undefined>
  ): Promise<void> {
    const appData = await this.incrementAuthAttempt();
    const agencies = appData?.agencies;
    const transunion = appData?.agencies?.transunion;
    if (!resp || resp.error?.Code === -1 || !agencies || !transunion) {
      // technical error...api did not respond and error thrown (empty resp);
      this.analytics.fireErrorEvent(AnalyticErrorEvents.ApiTechnicalIssue);
      this.router.navigate([routes.root.onboarding.retry.full]);
    } else {
      const critical = tu.queries.exceptions.isErrorCritical(resp);
      const authAttempts = transunion.authAttempt || 0;
      await this.statesvc.updateAgenciesAsync({
        ...appData?.agencies,
        transunion: {
          ...transunion,
          ...tuPartial,
        },
      });
      if (critical) {
        await this.handleSuspension(AppStatusReason.ThirtyDayLockout);
      } else if (authAttempts >= 2) {
        await this.handleSuspension(AppStatusReason.AuthAttemptsExceeded);
      } else {
        this.router.navigate([routes.root.onboarding.retry.full]);
      }
    }
  }

  /**
   * Method to route user to appropriate error screen using kyc service
   * @param resp
   */
  handleGetAuthenticationBailout<T>(resp?: ITUServiceResponse<T | undefined>) {
    const tuPartial: {
      getAuthenticationQuestionsSuccess: boolean;
      getAuthenticationQuestionsStatus: TUStatusRefInput;
      serviceBundleFulfillmentKey: string | null;
    } = {
      getAuthenticationQuestionsSuccess: false,
      getAuthenticationQuestionsStatus: tu.generators.createOnboardingStatus(
        TUBundles.GetAuthenticationQuestions,
        false,
        resp
      ),
      serviceBundleFulfillmentKey: "",
    };
    this.updateGetAuthenticationQuestions(tuPartial);
    this.bailoutFromOnboarding(tuPartial, resp);
  }

  /**
   * Helper to generate suspension requests
   * @param reason
   */
  async handleSuspension(reason: AppStatusReason): Promise<void> {
    const suspension = {
      status: AppStatus.Suspended,
      reason: reason,
      duration: 24 * 30,
    };
    await this.suspendUser(suspension);
    this.router.navigate([routes.root.suspended.default.full]);
  }

  /**
   * Takes the current user and suspends their account
   */
  async suspendUser({
    status,
    reason,
    duration,
  }: {
    status: AppStatus;
    reason: AppStatusReason;
    duration: number;
  }): Promise<void> {
    const { appData } = this.statesvc.state$.value;
    const suspended = bc.generators.createSuspendedStatus({
      status,
      reason,
      duration,
    });
    const newData = {
      ...appData,
      ...suspended,
    };
    if (appData.id && newData.id) {
      try {
        await this.statesvc.updateStateDBSyncAsync(newData);
      } catch (err) {
        console.log(`kycService:suspendUser=Db Sync Error ${err}`);
      }
    }
  }
}
