import { Injectable } from '@angular/core';
import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';
import { IVerifyAuthenticationQuestionsMsg } from '@shared/interfaces/verify-authentication-questions.interface';
import { IGetAuthenticationQuestionsMsg } from '@shared/models/get-authorization-questions';
import { IIndicativeEnrichmentMsg } from '@shared/models/indicative-enrichment';
import { AppDataStateModel } from '@store/app-data';
import { domainToASCII } from 'url';

@Injectable({
  providedIn: 'root',
})
export class TransunionService {
  constructor() {}

  createIndicativeEnrichmentPayload(
    data: AppDataStateModel
  ): IIndicativeEnrichmentMsg | undefined {
    const id = data.id.split(':').pop();
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
          `${attrs.dob?.year}-${
            monthMap[dob.month.toLowerCase()]
          }-${`0${dob.day}`.slice(-2)}` || '',
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

  createGetAuthenticationQuestionsPayload(
    data: AppDataStateModel,
    ssn: string
  ) {
    const id = data.id.split(':').pop();
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
          `${attrs.dob?.year}-${
            monthMap[dob.month.toLowerCase()]
          }-${`0${dob.day}`.slice(-2)}` || '',
        FullName: {
          FirstName: attrs.name?.first || '',
          LastName: attrs.name?.last || '',
          MiddleName: attrs.name?.middle || '',
        },
        Ssn: ssn || '',
      },
      ServiceBundleCode: 'CC2BraveCreditAuthentication',
    } as IGetAuthenticationQuestionsMsg;
  }

  createVerifyAuthenticationQuestionsPayload(
    data: AppDataStateModel,
    answers: IVerifyAuthenticationAnswer[]
  ) {
    const id = data.id.split(':').pop();

    if (!id || !answers.length) {
      console.log(
        `no id or answers provided: id=${id}; answers=${answers.length}`
      );
      return;
    }

    return {
      RequestKey: '',
      ClientKey: id,
      Answers: answers,
      ServiceBundleFulfillmentKey:
        data.agencies?.transunion?.serviceBundleFulfillmentKey || '',
    } as IVerifyAuthenticationQuestionsMsg;
  }
}

const monthMap: Record<string, any> = {
  jan: '01',
  feb: '02',
  mar: '03',
  apr: '04',
  may: '05',
  jun: '06',
  jul: '07',
  aug: '08',
  sep: '09',
  oct: '10',
  nov: '11',
  dec: '12',
};
