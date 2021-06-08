//  TODO replace response types with actual types ("Success" | "Error")

export interface IVerifyAuthenticationResponseSuccess {
  VerifyAuthenticationQuestions: {
    's:Envelope': {
      's:Body': {
        VerifyAuthenticationQuestionsResponse: {
          VerifyAuthenticationQuestionsResult: {
            'a:AccountName': string;
            'a:ErrorResponse': string;
            'a:RequestKey': string;
            'a:ResponseType': string;
            'a:ClientKey': string;
            'a:AuthenticationDetails': string;
            'a:AuthenticationStatus': string;
          };
        };
      };
    };
  };
}
