import { IErrorResponse } from '@shared/interfaces/common-tu.interface';
import { INil } from '@shared/interfaces/errors.interface';

export interface IGetAuthenticationQuestionsMsg {
  AdditionalInputs?: {
    Data: {
      Name: string;
      Value: string;
    };
  };
  RequestKey: string;
  ClientKey: string;
  Customer: {
    CurrentAddress: {
      AddressLine1: string;
      AddressLine2?: string;
      City: string;
      State: string;
      Zipcode: string;
    };
    PreviousAddress: {
      AddressLine1?: string;
      AddressLine2?: string;
      City?: string;
      State?: string;
      Zipcode?: string;
    };
    DateOfBirth: string;
    FullName: {
      FirstName: string;
      LastName: string;
      MiddleName?: string;
      Prefix?: string;
      Suffix?: string;
    };
    PhoneNumber?: string;
    Ssn: string;
  };
  Email?: string;
  Language?: string;
  ServiceBundleCode: string;
  TrustSessionId?: string;
}

export interface IGetAuthenticationQuestionsResponseSuccess {
  GetAuthenticationQuestions: {
    Envelope: {
      Body: {
        GetAuthenticationQuestionsResponse: {
          GetAuthenticationQuestionsResult: {
            AccountName: string;
            ErrorResponse: IErrorResponse | INil;
            RequestKey: string;
            ResponseType: string;
            ClientKey: string;
            Questions: string;
            ServiceBundleFulfillmentKey: string;
          };
        };
      };
    };
  };
}
