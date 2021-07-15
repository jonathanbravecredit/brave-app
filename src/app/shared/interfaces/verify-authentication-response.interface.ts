//  TODO replace response types with actual types ("Success" | "Error")
import { IErrorResponse, INil } from '@shared/interfaces/errors.interface';

export interface IVerifyAuthenticationResponseSuccess {
  VerifyAuthenticationQuestions: {
    Envelope: {
      Body: {
        VerifyAuthenticationQuestionsResponse: {
          VerifyAuthenticationQuestionsResult: {
            AccountName: string;
            ErrorResponse: IErrorResponse | INil;
            RequestKey: string;
            ResponseType: string;
            ClientKey: string;
            AuthenticationDetails: string;
            AuthenticationStatus: string;
          };
        };
      };
    };
  };
}
