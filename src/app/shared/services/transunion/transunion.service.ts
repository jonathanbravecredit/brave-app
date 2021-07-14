import { Injectable } from '@angular/core';
import { IDisputeReason } from '@shared/components/disputes/disputes-tradeline/interfaces';
import { IEnrollRequest } from '@shared/interfaces/enroll-rquest.interface';
import { IFulfillRequest } from '@shared/interfaces/fulfill-request.interface';
import { IGetDisputeStatusRequest } from '@shared/interfaces/get-dispute-status-request.interface';
import { ILineItem, IClaimCode } from '@shared/interfaces/start-dispute.interface';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { IVerifyAuthenticationQuestionsMsg } from '@shared/interfaces/verify-authentication-questions.interface';
import { IGetAuthenticationQuestionsMsg } from '@shared/models/get-authorization-questions';
import { IIndicativeEnrichmentMsg } from '@shared/models/indicative-enrichment';
import { APIService, UpdateAppDataInput } from '@shared/services/aws/api.service';
import { MONTH_MAP } from '@shared/services/transunion/constants';
import { AppDataStateModel } from '@store/app-data';
import { IProcessDisputeTradelineResult } from '@views/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';

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
  async sendIndicativeEnrichment(data: UpdateAppDataInput | AppDataStateModel): Promise<any | undefined> {
    if (!data.id || !data.user) throw new Error(`Missing id and user; id:${data.id} and user:${data.user}`);
    try {
      const msg = this.createIndicativeEnrichmentPayload(data);
      const res = await this.api.Transunion('IndicativeEnrichment', JSON.stringify(msg));
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
    data: UpdateAppDataInput | AppDataStateModel,
    ssn: string = '',
  ): Promise<any | undefined> {
    if (!ssn) throw new Error(`Missing ssn; ssn:${ssn}`);
    try {
      const msg = this.createGetAuthenticationQuestionsPayload(data, ssn);
      const res = await this.api.Transunion('GetAuthenticationQuestions', JSON.stringify(msg));
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
  async sendVerifyAuthenticationQuestions(
    data: UpdateAppDataInput | AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[],
  ): Promise<string | undefined> {
    if (!answers.length) throw new Error(`No answers submitted; Answers:${answers}`);
    try {
      const msg = this.createVerifyAuthenticationQuestionsPayload(data, answers);
      const res = await this.api.Transunion('VerifyAuthenticationQuestions', JSON.stringify(msg));
      return res ? res : undefined;
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
  ): Promise<string | undefined> {
    try {
      const msg = this.createEnrollPayload(data);
      const res = await this.api.Transunion('Enroll', JSON.stringify(msg));
      return res ? res : undefined;
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
  ): Promise<string | undefined> {
    try {
      const msg = this.createFulfillPayload(data, refresh);
      const res = await this.api.Transunion('Fulfill', JSON.stringify(msg));
      return res ? res : undefined;
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
  async getDisputeStatus(data: UpdateAppDataInput | AppDataStateModel): Promise<string | undefined> {
    try {
      const msg = this.createGetDisputeStatusPayload(data);
      const res = await this.api.Transunion('GetDisputeStatus', JSON.stringify(msg));
      console.log(res);
      return res ? res : undefined;
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
          Value: '1',
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
          Value: '1',
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

    if (!id || !attrs || !dob) {
      console.log(`no id, attributes, or dob provided: id=${id},  attrs=${attrs}, dob=${dob}`);
      return;
    }

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
    const bundleCode = refresh ? 'CC2BraveCreditTUReport24Hour' : 'CC2BraveCreditTUReportV3Score';

    if (!id || !attrs || !dob) {
      console.log(`no id, attributes, or dob provided: id=${id},  attrs=${attrs}, dob=${dob}`);
      return;
    }

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
      EnrollmentKey: data.agencies?.transunion?.enrollmentKey,
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
      EnrollmentKey: data.agencies?.transunion?.enrollmentKey,
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
      EnrollmentKey: data.agencies?.transunion?.enrollmentKey,
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
}
