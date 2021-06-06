
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

export interface IGetAuthenticationQuestionsResponse {
  's:Envelope': {
    _attributes: {
      'xmlns:s': string;
    };
    's:Body': {
      IndicativeEnrichmentResponse: {
        _attributes: {
          xmlns: string;
        };
        IndicativeEnrichmentResult: {
          _attributes: {
            'xmlns:a': string;
            'xmlns:i': string;
          };
          'a:AccountName': {
            _text: string;
          };
          'a:ErrorResponse': {
            _attributes: {
              'i:nil': string;
            };
          };
          'a:RequestKey': {
            _text: string;
          };
          'a:ResponseType': {
            _text: string;
          };
          'a:ClientKey': {
            _text: string;
          };
          'a:Customer': {
            _text: string;
          };
          'a:SSN': {
            _text: string;
          };
        };
      };
    };
  };
}
