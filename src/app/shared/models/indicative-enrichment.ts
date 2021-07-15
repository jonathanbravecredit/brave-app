import { IErrorResponse } from '@shared/interfaces/common-tu.interface';
import { INil } from '@shared/interfaces/errors.interface';

export interface IIndicativeEnrichmentMsg {
  AdditionalInputs: {
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
    };
    Ssn: string;
  };
  ServiceBundleCode: string;
}

export interface IIndicativeEnrichmentResponseSuccess {
  IndicativeEnrichmentResults: {
    Envelope: {
      Body: {
        IndicativeEnrichmentResponse: {
          IndicativeEnrichmentResult: {
            AccountName: string;
            ErrorResponse: IErrorResponse | INil;
            RequestKey: string;
            ResponseType: string;
            ClientKey: string;
            Customer: string;
            SSN: number | string;
          };
        };
      };
    };
  };
}
