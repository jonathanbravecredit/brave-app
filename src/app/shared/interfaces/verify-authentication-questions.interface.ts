import { IVerifyAuthenticationAnswer } from '@shared/interfaces/verify-authentication-answers.interface';

export interface IVerifyAuthenticationQuestionsMsg {
  answers: IVerifyAuthenticationAnswer[];
  key: string;
}
export interface IVerifyAuthenticationQuestions {
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
    Answers: IVerifyAuthenticationAnswer[];
    ServiceBundleFulfillmentKey: string;
    TrustSessionId?: string;
  };
}
