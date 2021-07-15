import { Injectable } from '@angular/core';
import { IDisputeReason } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { IEnrollRequest } from '@shared/interfaces/enroll-rquest.interface';
import {
  IEnrollResponseSuccess,
  IEnrollResult,
  IEnrollServiceProductResponse,
} from '@shared/interfaces/enroll.interface';
import { IFulfillRequest } from '@shared/interfaces/fulfill-request.interface';
import {
  IFulfillResponseSuccess,
  IFulfillResult,
  IFulfillServiceProductResponse,
} from '@shared/interfaces/fulfill.interface';
import { IGetDisputeStatusRequest } from '@shared/interfaces/get-dispute-status-request.interface';
import { IGetDisputeStatusResponseSuccess } from '@shared/interfaces/get-dispute-status.interface';
import { ILineItem, IClaimCode } from '@shared/interfaces/start-dispute.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { IVerifyAuthenticationQuestionsMsg } from '@shared/interfaces/verify-authentication-questions.interface';
import { IVerifyAuthenticationResponseSuccess } from '@shared/interfaces/verify-authentication-response.interface';
import {
  IGetAuthenticationQuestionsMsg,
  IGetAuthenticationQuestionsResponseSuccess,
} from '@shared/models/get-authorization-questions';
import { IIndicativeEnrichmentMsg, IIndicativeEnrichmentResponseSuccess } from '@shared/models/indicative-enrichment';
import { APIService, TUReportResponseInput, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { MONTH_MAP } from '@shared/services/transunion/constants';
import { returnNestedObject } from '@shared/utils/utils';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

/*============IMPORTANT==============*/
// TODO this is where the JSON transform the interfaces
//  - add ajv schema validation
// !!! TODO !!! a lot of this functionality needs to be pushed to the server
//  - push the payload structuring to the backend
//  - better structure the responses

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
  ): Promise<IIndicativeEnrichmentResponseSuccess | undefined> {
    if (!data.id || !data.user) throw new Error(`Missing id and user; id:${data.id} and user:${data.user}`);
    try {
      const msg = this.createIndicativeEnrichmentPayload(data);
      const res = await this.api.Transunion('IndicativeEnrichment', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
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
    data: UpdateAppDataInput | AppDataStateModel,
    ssn: string = '',
  ): Promise<IGetAuthenticationQuestionsResponseSuccess | undefined> {
    if (!ssn) throw new Error(`Missing ssn; ssn:${ssn}`);
    try {
      const msg = this.createGetAuthenticationQuestionsPayload(data, ssn);
      const res = await this.api.Transunion('GetAuthenticationQuestions', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
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
  async sendVerifyAuthenticationQuestions(
    data: UpdateAppDataInput | AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[],
  ): Promise<IVerifyAuthenticationResponseSuccess | undefined> {
    if (!answers.length) throw new Error(`No answers submitted; Answers:${answers}`);
    try {
      const msg = this.createVerifyAuthenticationQuestionsPayload(data, answers);
      const res = await this.api.Transunion('VerifyAuthenticationQuestions', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
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
  ): Promise<IEnrollResponseSuccess | undefined> {
    try {
      const msg = this.createEnrollPayload(data, dispute);
      const res = await this.api.Transunion('Enroll', JSON.stringify(msg));
      console.log('enroll transunion response', res);
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
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
  ): Promise<IFulfillResponseSuccess | undefined> {
    try {
      const msg = this.createFulfillPayload(data, refresh);
      const res = await this.api.Transunion('Fulfill', JSON.stringify(msg));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
    }
  }

  /**
   * Send fulfillment key to Transunion to refresh their report
   * @param {UpdateAppDataInput} data AppData state
   * @returns
   */
  async getDisputeStatus(
    data: UpdateAppDataInput | AppDataStateModel,
  ): Promise<IGetDisputeStatusResponseSuccess | undefined> {
    try {
      const msg = this.createGetDisputeStatusPayload(data);
      const res = await this.api.Transunion('GetDisputeStatus', JSON.stringify(msg));
      console.log('dspute status back', JSON.parse(res || ''));
      return res ? JSON.parse(res) : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
    }
  }

  /**
   * Send disputes to Transunion
   * @param {IProcessDisputeTradelineResult[]} disputes AppData state
   * @returns
   */
  async sendStartDispute(
    data: UpdateAppDataInput | AppDataStateModel,
    disputes: IProcessDisputeTradelineResult[],
  ): Promise<string | undefined> {
    try {
      console.log('sendDispute: data', data);
      console.log('sendDispute: dispute', disputes);
      const msg = this.createStartDisputePayload(data, disputes);
      const res = await this.api.Transunion('StartDispute', JSON.stringify(msg));
      console.log(res);
      return res ? res : undefined;
    } catch (err) {
      console.log('err ', err);
      return;
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
    const id = data.id?.split(':').pop();
    const attrs = data.user?.userAttributes;
    const dob = attrs?.dob;

    if (!attrs || !id || !dob) {
      console.log(`no attrs, id, or dob: attrs=${attrs}; id=${id}; dob=${dob}`);
      return;
    }

    return {
      AdditionalInputs: {
        Data: {
          Name: 'CreditReportVersion',
          Value: '7',
        },
      },
      RequestKey: '',
      ClientKey: id,
      Customer: {
        CurrentAddress: {
          AddressLine1: attrs.address?.addressOne || '',
          AddressLine2: attrs.address?.addressTwo || '',
          City: attrs.address?.city || '',
          State: attrs.address?.state || '',
          Zipcode: attrs.address?.zip || '',
        },
        PreviousAddress: {},
        DateOfBirth: `${attrs.dob?.year}-${MONTH_MAP[dob.month.toLowerCase()]}-${`0${dob.day}`.slice(-2)}` || '',
        FullName: {
          FirstName: attrs.name?.first || '',
          LastName: attrs.name?.last || '',
          MiddleName: attrs.name?.middle || '',
          Prefix: null,
          Suffix: null,
        },
        Ssn: `000000000${attrs.ssn?.lastfour}`.slice(-9) || '',
      },
      ServiceBundleCode: 'CC2BraveCreditIndicativeEnrichment',
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
    const id = data.id?.split(':')?.pop();
    const attrs = data.user?.userAttributes;
    const dob = attrs?.dob;

    if (!attrs || !id || !dob) {
      console.log(`no attrs, id, or dob: attrs=${attrs}; id=${id}; dob=${dob}`);
      return;
    }

    return {
      AdditionalInputs: {
        Data: {
          Name: 'CreditReportVersion',
          Value: '7',
        },
      },
      RequestKey: '',
      ClientKey: id,
      Customer: {
        CurrentAddress: {
          AddressLine1: attrs.address?.addressOne || '',
          AddressLine2: attrs.address?.addressTwo || '',
          City: attrs.address?.city || '',
          State: attrs.address?.state || '',
          Zipcode: attrs.address?.zip || '',
        },
        PreviousAddress: {},
        DateOfBirth:
          `${attrs.dob?.year}-${MONTH_MAP[dob?.month?.toLowerCase() || '']}-${`0${dob.day}`.slice(-2)}` || '',
        FullName: {
          FirstName: attrs.name?.first || '',
          LastName: attrs.name?.last || '',
          MiddleName: attrs.name?.middle || '',
        },
        PhoneNumber: attrs.phone?.primary || '',
        Ssn: ssn || '',
      },
      ServiceBundleCode: 'CC2BraveCreditAuthentication',
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
    const id = data.id?.split(':')?.pop();

    if (!id || !answers.length) {
      console.log(`no id or answers provided: id=${id}; answers=${answers.length}`);
      return;
    }

    return {
      RequestKey: '',
      ClientKey: id,
      Answers: answers,
      ServiceBundleFulfillmentKey: data.agencies?.transunion?.serviceBundleFulfillmentKey || '',
    } as IVerifyAuthenticationQuestionsMsg;
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
      console.log(`no id, attributes, or dob provided: id=${id},  attrs=${attrs}, dob=${dob}`);
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
  /**
   * Genarates the message payload for TU Fulfill request
   * @param { UpdateAppDataInput | AppDataStateModel} data
   * @returns {IFulfillRequest | undefined }
   */
  createFulfillPayload(
    data: UpdateAppDataInput | AppDataStateModel,
    refresh: boolean = true,
  ): IFulfillRequest | undefined {
    const id = data.id?.split(':')?.pop();
    const attrs = data.user?.userAttributes;
    const dob = attrs?.dob;
    const enrollmentKey = refresh
      ? data.agencies?.transunion?.disputeEnrollmentKey
      : data.agencies?.transunion?.enrollmentKey;
    const bundleCode = refresh ? 'CC2BraveCreditTUReport24Hour' : 'CC2BraveCreditTUReportV3Score';
    const version = refresh ? '7.1' : '7.1';

    if (!id || !attrs || !dob) {
      console.log(`no id, attributes, or dob provided: id=${id},  attrs=${attrs}, dob=${dob}`);
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
      EnrollmentKey: enrollmentKey,
      ServiceBundleCode: bundleCode,
    } as IFulfillRequest;
  }

  /**
   * Genarates the message payload for TU Fulfill request
   * @param { UpdateAppDataInput | AppDataStateModel} data
   * @returns {IGetDisputeStatusRequest | undefined }
   */
  createGetDisputeStatusPayload(data: UpdateAppDataInput | AppDataStateModel): IGetDisputeStatusRequest | undefined {
    const id = data.id?.split(':')?.pop();
    const attrs = data.user?.userAttributes;
    const dob = attrs?.dob;

    if (!id || !attrs || !dob) {
      console.log(`no id, attributes, or dob provided: id=${id},  attrs=${attrs}, dob=${dob}`);
      return;
    }
    console.log('id in getDisputeStatus', id);
    return {
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
      EnrollmentKey: data.agencies?.transunion?.disputeEnrollmentKey,
    } as IGetDisputeStatusRequest;
  }

  /**
   * Genarates the message payload for TU Fulfill request
   * TODO: need to incorporate Personal and Public items
   * @param { UpdateAppDataInput | AppDataStateModel} data
   * @returns {IGetDisputeStatusRequest | undefined }
   */
  createStartDisputePayload(
    data: UpdateAppDataInput | AppDataStateModel,
    disputes: IProcessDisputeTradelineResult[],
  ): IGetDisputeStatusRequest | undefined {
    const id = data.id?.split(':')?.pop();
    const attrs = data.user?.userAttributes;
    const dob = attrs?.dob;

    if (!id || !attrs || !dob) {
      console.log(`no id, attributes, or dob provided: id=${id},  attrs=${attrs}, dob=${dob}`);
      return;
    }
    console.log('id in StartDispute', id);
    return {
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
      EnrollmentKey: data.agencies?.transunion?.disputeEnrollmentKey,
      LineItems: this.parseDisputeToLineItem(disputes),
      ServiceBundleFulfillmentKey: data.agencies?.transunion?.serviceBundleFulfillmentKey,
      ServiceProductFulfillmentKey: null,
    } as IGetDisputeStatusRequest;
  }

  /**
   * Helper function to parse the disputes to Line Items
   * @param {IProcessDisputeTradelineResult[]} disputes
   * @returns {ILineItem[] | ILineItem}
   */
  private parseDisputeToLineItem(disputes: IProcessDisputeTradelineResult[]): ILineItem[] | ILineItem {
    if (!disputes.length) return {} as ILineItem;
    return disputes.map((item) => {
      const reasons = item.result.data.reasons;
      return reasons !== undefined
        ? ({
            LineItem: {
              ClaimCodes: this.parseReasonsToClaimCodes(reasons),
              CreditReportItem: item.tradeline?.Tradeline?.handle,
              LineItemComment: 'Account Tradeline',
            },
          } as ILineItem)
        : ({} as ILineItem);
    });
  }

  /**
   * Helper function to parse the reasons to Claim Codes
   * @param {[(IDisputeReason | undefined), (IDisputeReason | undefined)]} reasons
   * @returns {IClaimCode[] | IClaimCode}
   */
  private parseReasonsToClaimCodes(reasons: [IDisputeReason?, IDisputeReason?]): IClaimCode[] | IClaimCode {
    if (!reasons.length) return {} as IClaimCode;
    return reasons.map((code) => {
      return {
        ClaimCode: {
          Code: code?.claimCode || '',
        },
      };
    });
  }

  /**
   * This method parses and enriches the state data
   * @param {AppDataStateModel | UpdateAppDataInput} state
   * @param {IEnrollResponse} enroll
   * @returns
   */
  enrichEnrollmentData(
    state: UpdateAppDataInput | undefined,
    enroll: IEnrollResult,
    dispute: boolean = false,
  ): AppDataStateModel | UpdateAppDataInput | undefined {
    if (!state) return;
    let enrollReport: IEnrollServiceProductResponse | undefined;
    let enrollMergeReport: IEnrollServiceProductResponse | undefined;
    let enrollVantageScore: IEnrollServiceProductResponse | undefined;
    let enrolledOn = new Date().toISOString();
    const enrollmentKey = returnNestedObject(enroll, 'EnrollmentKey');
    const prodResponse = returnNestedObject(enroll, 'ServiceProductResponse');
    if (!prodResponse) return;
    if (prodResponse instanceof Array) {
      enrollReport = prodResponse.find((item: IEnrollServiceProductResponse) => {
        return item['ServiceProduct'] === 'TUCReport';
      });
      enrollMergeReport = prodResponse.find((item: IEnrollServiceProductResponse) => {
        return item['ServiceProduct'] === 'MergeCreditReports';
      });
      enrollVantageScore = prodResponse.find((item: IEnrollServiceProductResponse) => {
        return item['ServiceProduct'] === 'TUCVantageScore3';
      });
    } else {
      switch (prodResponse['ServiceProduct']) {
        case 'TUCReport':
          enrollReport = prodResponse || null;
          break;
        case 'MergeCreditReports':
          enrollMergeReport = prodResponse || null;
          break;
        case 'TUCVantageScore3':
          enrollVantageScore = prodResponse || null;
          break;
        default:
          break;
      }
    }
    return dispute
      ? {
          ...state,
          agencies: {
            ...state.agencies,
            transunion: {
              ...state.agencies?.transunion,
              disputeEnrolled: true,
              disputeEnrolledOn: enrolledOn,
              disputeEnrollmentKey: enrollmentKey,
            },
          },
        }
      : {
          ...state,
          agencies: {
            ...state.agencies,
            transunion: {
              ...state.agencies?.transunion,
              enrolled: true,
              enrolledOn: enrolledOn,
              enrollmentKey: enrollmentKey,
              enrollReport: mapReportResponse(enrollReport),
              enrollMergeReport: mapReportResponse(enrollMergeReport),
              enrollVantageScore: mapReportResponse(enrollVantageScore),
            },
          },
        };
  }

  /**
   * This method parses and enriches the state data
   * @param {AppDataStateModel | UpdateAppDataInput} state
   * @param {IFulfillResult} enroll
   * @returns {AppDataStateModel | UpdateAppDataInput | undefined }
   */
  enrichFulfillData(
    state: UpdateAppDataInput | undefined,
    fulfill: IFulfillResult, // IFulfillResult
    dispute: boolean = false,
  ): AppDataStateModel | UpdateAppDataInput | undefined {
    if (!state) return;
    let fulfillReport;
    let fulfillMergeReport;
    let fulfillVantageScore;
    let fulfilledOn = new Date().toISOString();
    const prodResponse = returnNestedObject(fulfill, 'ServiceProductResponse');
    if (!prodResponse) return;
    if (prodResponse instanceof Array) {
      fulfillReport = prodResponse.find((item: IFulfillServiceProductResponse) => {
        return item['ServiceProduct'] === 'TUCReport';
      });
      fulfillMergeReport = prodResponse.find((item: IFulfillServiceProductResponse) => {
        return item['ServiceProduct'] === 'MergeCreditReports';
      });
      fulfillVantageScore = prodResponse.find((item: IFulfillServiceProductResponse) => {
        return item['ServiceProduct'] === 'TUCVantageScore3';
      });
    } else {
      switch (prodResponse['ServiceProduct']) {
        case 'TUCReport':
          fulfillReport = prodResponse || null;
          break;
        case 'MergeCreditReports':
          fulfillMergeReport = prodResponse || null;
          break;
        case 'TUCVantageScore3':
          fulfillVantageScore = prodResponse || null;
          break;
        default:
          break;
      }
    }
    const mapped = {
      ...state,
      agencies: {
        ...state.agencies,
        transunion: {
          ...state.agencies?.transunion,
          fulfilledOn: fulfilledOn,
          fulfillReport: mapReportResponse(fulfillReport),
          fulfillMergeReport: mapReportResponse(fulfillMergeReport),
          fulfillVantageScore: mapReportResponse(fulfillVantageScore),
        },
      },
    };
    console.log('mapped', mapped);
    return mapped;
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
