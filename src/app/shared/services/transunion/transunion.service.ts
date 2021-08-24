import { NullTemplateVisitor } from '@angular/compiler';
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
  IEnrollRequest,
  IFulfillRequest,
  IGetDisputeStatusRequest,
  IEnrollServiceProductResponse,
  IFulfillServiceProductResponse,
} from '@shared/interfaces';
import { APIService, TUReportResponseInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { MONTH_MAP } from '@shared/services/transunion/constants';
import { returnNestedObject } from '@shared/utils/utils';
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
  constructor(private api: APIService) {}

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
      const res = await this.api.Transunion('IndicativeEnrichment', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendGetAuthenticationQuestions(
    data: UpdateAppDataInput | AppDataStateModel,
    ssn: string = '',
  ): Promise<ITUServiceResponse<IGetAuthenticationQuestionsResult | undefined>> {
    if (!ssn) throw new Error(`Missing ssn; ssn:${ssn}`);
    try {
      const msg = this.createGetAuthenticationQuestionsPayload(data, ssn);
      const res = await this.api.Transunion('GetAuthenticationQuestions', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the full ssn to the Transunion backend and await the KBA questions
   *   - questions can be actual questions or a passcode for the phone
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async sendVerifyAuthenticationQuestions(
    appData: UpdateAppDataInput | AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[],
  ): Promise<ITUServiceResponse<IVerifyAuthenticationQuestionsResult | undefined>> {
    if (!answers.length) throw new Error(`No answers submitted; Answers:${answers}`);
    try {
      const msg = this.createVerifyAuthenticationQuestionsPayload(appData, answers);
      const res = await this.api.Transunion('VerifyAuthenticationQuestions', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the verified user to transunion to enroll them and receive their report
   * @param {UpdateAppDataInput} data AppData state
   * @param {boolean} dispute Flag to enroll the user in the dispute process
   * @returns
   */
  async sendCompleteOnboarding(data: UpdateAppDataInput | AppDataStateModel): Promise<ITUServiceResponse<any>> {
    try {
      const res = await this.api.Transunion('CompleteOnboardingEnrollments', JSON.stringify({}));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the verified user to transunion to enroll them and receive their report
   * @param {UpdateAppDataInput} data AppData state
   * @param {boolean} dispute Flag to enroll the user in the dispute process
   * @returns
   */
  async sendEnrollRequest(
    data: UpdateAppDataInput | AppDataStateModel,
    dispute: boolean = false,
  ): Promise<ITUServiceResponse<IEnrollResult | undefined>> {
    try {
      const res = await this.api.Transunion('Enroll', JSON.stringify({}));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the verified user to transunion to enroll them and receive their report
   * @param {UpdateAppDataInput} data AppData state
   * @param {boolean} dispute Flag to enroll the user in the dispute process
   * @returns
   */
  async sendEnrollDisputesRequest(
    data: UpdateAppDataInput | AppDataStateModel,
    dispute: boolean = false,
  ): Promise<ITUServiceResponse<IEnrollResult | undefined>> {
    try {
      const res = await this.api.Transunion('EnrollDisputes', JSON.stringify({}));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send fulfillment key to Transunion to refresh their report
   * @param {UpdateAppDataInput} data AppData state
   * @param {boolean} refresh flag to indicate it is only a 24 hour refresh call for disputes. Defaults to true
   * @returns
   */
  async getCreditReport(
    data: UpdateAppDataInput | AppDataStateModel,
    refresh: boolean = true,
  ): Promise<ITUServiceResponse<IFulfillResult | undefined>> {
    try {
      const res = await this.api.Transunion('Fulfill', JSON.stringify({}));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send id to Transunion to refresh their report
   * @param id user id
   * @returns
   */
  async refreshCreditReport(id: string): Promise<ITUServiceResponse<IFulfillResult | undefined>> {
    try {
      const res = await this.api.Transunion('Fulfill', JSON.stringify({}));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send the preflight check which performs the following:
   *  - Checks if the user is enrolled in disputes, if not, enrolls them
   *  - Checks when the user last refreshed their report, if < 24hrs, refreshes
   *  - Checks the dispute status, if eligible, returns true, otherwise false
   * @param data
   * @returns
   */
  async sendDisputePreflightCheck(data: { id: string }): Promise<ITUServiceResponse<any>> {
    try {
      const res = await this.api.Transunion('DisputePreflightCheck', JSON.stringify({}));
      return res ? JSON.parse(res) : false;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send fulfillment key to Transunion to refresh their report
   *  - TODO allow for direct input of dispute ID
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async getDisputeStatus(
    data: UpdateAppDataInput | AppDataStateModel,
  ): Promise<ITUServiceResponse<IGetDisputeStatusResponseSuccess | undefined>> {
    try {
      const res = await this.api.Transunion('GetDisputeStatus', JSON.stringify({}));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Send disputes to Transunion
   * @param {IProcessDisputeTradelineResult[]} disputes AppData state
   * @returns
   */
  async sendStartDispute(
    id: string,
    disputes: (IProcessDisputeTradelineResult | IProcessDisputePublicResult | IProcessDisputePersonalResult)[],
  ): Promise<ITUServiceResponse<any>> {
    try {
      const msg = { id, disputes }; //this.createStartDisputePayload(data, disputes);
      const res = await this.api.Transunion('StartDispute', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Call the backend to query TU for investigation results
   * - occurs if a dispute is closed, but the results not returned
   * - this happens when results are auto closed
   * @param id
   * @returns
   */
  async getInvestigationResults(id: string, disputeId: string): Promise<ITUServiceResponse<any>> {
    try {
      const msg = { id, disputeId };
      const res = await this.api.Transunion('GetInvestigationResults', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      return { success: false, error: err };
    }
  }

  /**
   * Generates the message payload for TU services
   * @param {UpdateAppDataInput | AppDataStateModel} data
   * @returns
   */
  createIndicativeEnrichmentPayload(
    data: UpdateAppDataInput | AppDataStateModel,
  ): IIndicativeEnrichmentMsg | undefined {
    // const id = data.id?.split(':').pop();
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
    // const id = data.id?.split(':').pop();
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

  /**
   * Genarates the message payload for TU Enroll service
   * @param { UpdateAppDataInput | AppDataStateModel} data
   * @returns
   */
  createEnrollPayload(
    data: UpdateAppDataInput | AppDataStateModel,
    dispute: boolean = false,
  ): IEnrollRequest | undefined {
    const id = data.id?.split(':')?.pop();
    const attrs = data.user?.userAttributes;
    const dob = attrs?.dob;
    const serviceBundleCode = dispute ? 'CC2BraveCreditTUDispute' : 'CC2BraveCreditTUReportV3Score';
    const version = dispute ? '7.1' : '7';

    if (!id || !attrs || !dob) {
      return;
    }

    return {
      AdditionalInputs: {
        Data: {
          Name: 'CreditReportVersion',
          Value: version,
        },
      },
      ClientKey: id,
      Customer: {
        CurrentAddress: {
          AddressLine1: attrs.address?.addressOne || '',
          AddressLine2: attrs.address?.addressTwo || '',
          City: attrs.address?.city || '',
          State: attrs.address?.state || '',
          Zipcode: attrs.address?.zip || '',
        },
        DateOfBirth:
          `${attrs.dob?.year}-${MONTH_MAP[dob?.month?.toLowerCase() || '']}-${`0${dob.day}`.slice(-2)}` || '',
        FullName: {
          FirstName: attrs.name?.first || '',
          LastName: attrs.name?.last || '',
          MiddleName: attrs.name?.middle || '',
        },
        Ssn: attrs.ssn?.full || '',
      },
      ServiceBundleCode: serviceBundleCode,
    } as IEnrollRequest;
  }
}

// TODO use a pascal to camel converter
const mapReportResponse = (res: IEnrollServiceProductResponse | undefined): TUReportResponseInput | null => {
  if (res === undefined) return null;
  return {
    bureau: res['Bureau'],
    errorResponse: res['ErrorResponse'],
    serviceProduct: res['ServiceProduct'],
    serviceProductFullfillmentKey: res['ServiceProductFulfillmentKey'],
    serviceProductObject: JSON.stringify(res['ServiceProductObject']),
    serviceProductTypeId: res['ServiceProductTypeId'],
    serviceProductValue: res['ServiceProductValue'],
    status: res['Status'],
  } as TUReportResponseInput;
};
