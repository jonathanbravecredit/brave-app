//  TODO replace response types with actual types ("Success" | "Error")
import { IErrorResponse, INil } from '@shared/interfaces/errors.interface';

export interface IVerifyAuthenticationResponseSuccess {
  Envelope: {
    Body: {
      VerifyAuthenticationQuestionsResponse: {
        VerifyAuthenticationQuestionsResult: IVerifyAuthenticationQuestionsResult;
      };
    };
  };
}

export interface IVerifyAuthenticationQuestionsResult {
  AccountName: string;
  ErrorResponse: IErrorResponse | INil;
  RequestKey: string;
  ResponseType: string;
  ClientKey: string;
  AuthenticationDetails: string;
  AuthenticationStatus: string;
}
