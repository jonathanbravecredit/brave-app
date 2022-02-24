import { IMergeReport } from '@shared/interfaces';
import { IErrorResponse, INil } from '@shared/interfaces/errors.interface';

export interface IEnroll {
  request: {
    AccountCode: string;
    AccountName: string;
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
      PreviousAddress?: {
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
  };
}

export interface IEnrollMsg {
  AccountCode?: string;
  AccountName?: string;
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
    PreviousAddress?: {
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

export interface IEnrollResponseSuccess {
  Envelope: {
    Body: {
      EnrollResponse: {
        EnrollResult: IEnrollResult;
      };
    };
  };
}

export interface IEnrollResponse {
  EnrollResult: IEnrollResult;
}

export interface IEnrollResult {
  AccountName: string;
  ErrorResponse: string;
  RequestKey: string;
  ResponseType: string;
  ClientKey: string;
  EnrollmentKey: string;
  ServiceBundleFulfillmentKey: string;
  ServiceProductFulfillments: {
    ServiceProductResponse: IEnrollServiceProductResponse[] | IEnrollServiceProductResponse;
  };
}

export interface IEnrollServiceProductResponse {
  Bureau: string;
  ErrorResponse: string;
  ServiceBundleResponse: {
    ServiceBundleCode: string;
    ServiceBundleFulfillmentKey: string;
    ServiceBundleFulfillmentStatus: string;
  };
  ServiceProduct: string;
  ServiceProductFulfillmentKey: string;
  ServiceProductObject: string;
  ServiceProductTypeId: string;
  ServiceProductValue: string;
  Status: string;
}


export interface IEnrollCreditReportResponse {
  report: IMergeReport,
  score: number,
}
