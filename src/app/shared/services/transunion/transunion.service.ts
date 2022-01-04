import { Injectable } from '@angular/core';
import {
  ITUServiceResponse,
  IIndicativeEnrichmentResult,
  IGetAuthenticationQuestionsResult,
  IVerifyAuthenticationAnswer,
  IVerifyAuthenticationQuestionsResult,
  IEnrollResult,
  IFulfillResult,
  IGetDisputeStatusResponseSuccess,
  IIndicativeEnrichmentMsg,
  IGetAuthenticationQuestionsMsg,
  IVerifyAuthenticationQuestionsMsg,
  IEnrollServiceProductResponse,
} from '@shared/interfaces';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { IDispute } from '@shared/interfaces/disputes';
import { APIService, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { TransunionUtil } from '@shared/utils/transunion/transunion';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputePersonalResult } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { IProcessDisputePublicResult } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { IProcessDisputeTradelineResult } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

/*============IMPORTANT==============*/
// TODO this is where the JSON transform the interfaces
//  - add ajv schema validation
// !!! TODO !!! a lot of this functionality needs to be pushed to the server
//  - push the payload structuring to the backend
//  - better structure the responses
// update state > graphql > tu > graphql > appsync > app > updatestate
@Injectable({
  providedIn: 'root',
})
export class TransunionService {
  tu = TransunionUtil;
  constructor(private api: APIService) {}

  async sendTransunionAPICall<T>(action: string, message: string): Promise<ITUServiceResponse<T | undefined>> {
    try {
      const res = await this.api.Transunion(action, message);
      return res ? JSON.parse(res) : undefined;
    } catch (err: any) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the indicative enrichment message to the Transunion backend and await a response
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendIndicativeEnrichment(
    data: UpdateAppDataInput | AppDataStateModel,
  ): Promise<ITUServiceResponse<IIndicativeEnrichmentResult | undefined>> {
    if (!data.user) throw new Error(`Missing user:${data.user}`);
    try {
      const msg = this.createIndicativeEnrichmentPayload(data);
      const clean = this.tu.scrubbers.scrubBackendData(msg);
      const res = await this.api.Transunion('IndicativeEnrichment', JSON.stringify(clean));
      return res ? JSON.parse(res) : undefined;
    } catch (err: any) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param data AppData state
   * @param ssn Users social security number
   * @returns
   */
  async sendGetAuthenticationQuestions(
    data: UpdateAppDataInput | AppDataStateModel,
    ssn: string = '',
  ): Promise<ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>> {
    if (!ssn) throw new Error(`Missing ssn; ssn:${ssn}`);
    try {
      const msg = this.createGetAuthenticationQuestionsPayload(data, ssn);
      const clean = this.tu.scrubbers.scrubBackendData(msg);
      const res = await this.api.Transunion('GetAuthenticationQuestions', JSON.stringify(clean));
      return res ? JSON.parse(res) : undefined;
    } catch (err: any) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param appData AppData state
   * @param answers answers to authentication questions (OTP and KBA)
   * @returns
   */
  async sendVerifyAuthenticationQuestions(
    appData: UpdateAppDataInput | AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[],
  ): Promise<ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>> {
    if (!answers.length) throw new Error(`No answers submitted; Answers:${answers}`);
    try {
      const msg = this.createVerifyAuthenticationQuestionsPayload(appData, answers);
      const clean = this.tu.scrubbers.scrubBackendData(msg);
      const res = await this.api.Transunion('VerifyAuthenticationQuestions', JSON.stringify(clean));
      return res ? JSON.parse(res) : undefined;
    } catch (err: any) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the verified user to transunion to enroll them and receive their report
   */
  async sendCompleteOnboarding(): Promise<ITUServiceResponse<any>> {
    return this.sendTransunionAPICall<any>('CompleteOnboardingEnrollments', JSON.stringify({}));
  }

  /**
   * Send the verified user to transunion to enroll them and receive their report
   */
  async sendEnrollRequest(): Promise<ITUServiceResponse<IEnrollResult | undefined>> {
    return this.sendTransunionAPICall<IEnrollResult>('Enroll', JSON.stringify({}));
  }

  /**
   * Send the verified user to transunion to enroll them and receive their report
   */
  async sendEnrollDisputesRequest(): Promise<ITUServiceResponse<IEnrollResult | undefined>> {
    return this.sendTransunionAPICall<IEnrollResult>('EnrollDisputes', JSON.stringify({}));
  }

  /**
   * Send fulfillment key to Transunion to refresh their report
   */
  async getCreditReport(): Promise<ITUServiceResponse<IFulfillResult | undefined>> {
    return this.sendTransunionAPICall<IFulfillResult>('Fulfill', JSON.stringify({}));
  }

  /**
   * Send request to backend to get their credit score snapshots
   */
  async getCreditScores(): Promise<ITUServiceResponse<ICreditScoreTracking | undefined>> {
    return this.sendTransunionAPICall<ICreditScoreTracking>('GetCreditScoreTracking', JSON.stringify({}));
  }

  /**
   * Send the preflight check which performs the following:
   *  - Checks if the user is enrolled in disputes, if not, enrolls them
   *  - Checks when the user last refreshed their report, if < 24hrs, refreshes
   *  - Checks the dispute status, if eligible, returns true, otherwise false
   */
  async sendDisputePreflightCheck(): Promise<ITUServiceResponse<any>> {
    return this.sendTransunionAPICall<any>('DisputePreflightCheck', JSON.stringify({}));
  }

  /**
   * Send fulfillment key to Transunion to refresh their report
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async getDisputeStatus(): Promise<ITUServiceResponse<IGetDisputeStatusResponseSuccess | undefined>> {
    return this.sendTransunionAPICall<IGetDisputeStatusResponseSuccess>('GetDisputeStatus', JSON.stringify({}));
  }

  /**
   * Request the trending data by user from a given date
   * @param fromDate ISO string date format
   * @returns
   */
  async getTrendingData(fromDate: string): Promise<ITUServiceResponse<any | undefined>> {
    return this.sendTransunionAPICall<any>('GetTrendingData', JSON.stringify({ fromDate }));
  }

  /**
   * Send disputes to Transunion
   * @param {IProcessDisputeTradelineResult[]} disputes AppData state
   * @returns
   */
  async sendStartDispute(
    disputes: (IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult)[],
  ): Promise<ITUServiceResponse<any>> {
    const msg = { disputes }; //this.createStartDisputePayload(data, disputes);
    const clean = this.tu.scrubbers.scrubBackendData(msg);
    return this.sendTransunionAPICall<any>('StartDispute', JSON.stringify(clean));
  }

  /**
   * Call the backend to query TU for investigation results
   * - occurs if a dispute is closed, but the results not returned
   * @param disputeId
   * @returns
   */
  async getInvestigationResults(disputeId: string): Promise<ITUServiceResponse<any>> {
    const msg = { disputeId };
    return this.sendTransunionAPICall<any>('GetInvestigationResults', JSON.stringify(msg));
  }

  /**
   * Get the investigation results data from IR table.
   * @param id
   * @returns
   */
  async getInvestigationResultsById(id: string): Promise<ITUServiceResponse<any | undefined>> {
    return this.sendTransunionAPICall<any>('GetInvestigationResultsByID', JSON.stringify({ id }));
  }

  /**
   * Call the backend to query TU for investigation results
   * - occurs if a dispute is closed, but the results not returned
   * - this happens when results are auto closed
   * @param disputeId
   * @returns
   */
  async getCreditBureauResultsById(id: string): Promise<ITUServiceResponse<any | undefined>> {
    return this.sendTransunionAPICall<any>('GetCreditBureauResultsByID', JSON.stringify({ id }));
  }

  /**
   * List all disputes by user
   * @returns
   */
  async listAllDisputesByUser(): Promise<ITUServiceResponse<IDispute[] | undefined>> {
    return this.sendTransunionAPICall<IDispute[]>('GetAllDisputesByUser', JSON.stringify({}));
  }

  /**
   * Gets only the latest and current dispute by user
   * @returns
   */
  async getCurrentDisputeByUser(): Promise<ITUServiceResponse<IDispute | undefined>> {
    return this.sendTransunionAPICall<IDispute>('GetCurrentDisputeByUser', JSON.stringify({}));
  }

  /**
   * Generates the message payload for TU services
   * @param {UpdateAppDataInput | AppDataStateModel} data
   * @returns
   */
  createIndicativeEnrichmentPayload(
    data: UpdateAppDataInput | AppDataStateModel,
  ): IIndicativeEnrichmentMsg | undefined {
    const attrs = data.user?.userAttributes;
    if (!attrs) {
      return;
    }
    const dob = attrs?.dob;
    const ssn = attrs?.ssn;
    const name = attrs.name;
    const address = attrs.address;
    if (!dob || !ssn || !name || !address) {
      return;
    }
    return {
      dob,
      ssn,
      name,
      address,
    } as IIndicativeEnrichmentMsg;
  }

  /**
   * Generates the message payload for TU services
   * @param {UpdateAppDataInput | AppDataStateModel} data
   * @param {string} ssn
   * @returns
   */
  createGetAuthenticationQuestionsPayload(
    data: UpdateAppDataInput | AppDataStateModel,
    ssn: string = '',
  ): IGetAuthenticationQuestionsMsg | undefined {
    const attrs = data.user?.userAttributes;
    if (!attrs) {
      return;
    }
    const dob = attrs?.dob;
    const name = attrs.name;
    const address = attrs.address;
    const phone = attrs.phone;
    if (!dob || !ssn || !name || !address || !phone) {
      return;
    }
    return {
      name,
      address,
      dob,
      phone,
      ssn: {
        lastfour: ssn.slice(-4),
        full: ssn,
      },
    } as IGetAuthenticationQuestionsMsg;
  }

  /**
   * Generates the message payload for TU VerifyAuthenticationQuestions request
   * @param {UpdateAppDataInput | AppDataStateModel} data
   * @param {IVerifyAuthenticationAnswer[]} answers
   * @returns
   */
  createVerifyAuthenticationQuestionsPayload(
    data: UpdateAppDataInput | AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[],
  ): IVerifyAuthenticationQuestionsMsg | undefined {
    if (!answers.length) return;
    return {
      answers: answers,
      key: data.agencies?.transunion?.serviceBundleFulfillmentKey || '',
    };
  }
}
