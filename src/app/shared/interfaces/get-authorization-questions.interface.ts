import { IErrorResponse, INil } from '@shared/interfaces/errors.interface';
import { DobInput, SsnInput, NameInput, AddressInput, PhoneInput } from '@shared/services/aws/api.service';

export interface IGetAuthenticationQuestionsMsg {
  name: NameInput;
  dob: DobInput;
  address: AddressInput;
  phone: PhoneInput;
  ssn: SsnInput;
}
// export interface IGetAuthenticationQuestionsMsg {
//   AdditionalInputs?: {
//     Data: {
//       Name: string;
//       Value: string;
//     };
//   };
//   RequestKey: string;
//   ClientKey: string;
//   Customer: {
//     CurrentAddress: {
//       AddressLine1: string;
//       AddressLine2?: string;
//       City: string;
//       State: string;
//       Zipcode: string;
//     };
//     PreviousAddress: {
//       AddressLine1?: string;
//       AddressLine2?: string;
//       City?: string;
//       State?: string;
//       Zipcode?: string;
//     };
//     DateOfBirth: string;
//     FullName: {
//       FirstName: string;
//       LastName: string;
//       MiddleName?: string;
//       Prefix?: string;
//       Suffix?: string;
//     };
//     PhoneNumber?: string;
//     Ssn: string;
//   };
//   Email?: string;
//   Language?: string;
//   ServiceBundleCode: string;
//   TrustSessionId?: string;
// }

export interface IGetAuthenticationQuestionsResponseSuccess {
  Envelope: {
    Body: {
      GetAuthenticationQuestionsResponse: {
        GetAuthenticationQuestionsResult: IGetAuthenticationQuestionsResult;
      };
    };
  };
}

export interface IGetAuthenticationQuestionsResult {
  AccountName: string;
  ErrorResponse: IErrorResponse | INil;
  RequestKey: string;
  ResponseType: string;
  ClientKey: string;
  Questions: string;
  ServiceBundleFulfillmentKey: string;
}
