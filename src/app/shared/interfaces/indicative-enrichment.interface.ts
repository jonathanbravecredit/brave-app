import { IErrorResponse, INil } from '@shared/interfaces/errors.interface';
import { AddressInput, DobInput, NameInput, SsnInput } from '@shared/services/aws/api.service';

export interface IIndicativeEnrichmentMsg {
  dob: DobInput;
  ssn: SsnInput;
  name: NameInput;
  address: AddressInput;
}

export interface IIndicativeEnrichmentResponseSuccess {
  Envelope: {
    Body: {
      IndicativeEnrichmentResponse: {
        IndicativeEnrichmentResult: IIndicativeEnrichmentResult;
      };
    };
  };
}

export interface IIndicativeEnrichmentResult {
  AccountName: string;
  ErrorResponse: IErrorResponse | INil;
  RequestKey: string;
  ResponseType: string;
  ClientKey: string;
  Customer: string;
  SSN: number | string;
}
