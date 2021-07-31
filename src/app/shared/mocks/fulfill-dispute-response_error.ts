const error = {
  FulfillResult: {
    AccountName: 'CC2BraveCredit',
    ErrorResponse: {
      Code: 103022,
      Message:
        'Enrollment key is not valid for request information including (accountID, clientkey, ServiceBundleCode)',
      Name: 'EnrollmentNotValidForRequestInformation',
    },
    RequestKey: 'BC-aaac8c87-faa7-410c-90ae-76ed0666906b',
    ResponseType: 'Failure',
    ClientKey: 'd7a77bba-f5c6-414b-93e3-78afc90bc7b6',
    ServiceBundleFulfillmentKey: '62ee0512-d21e-4a20-b6f0-a9af6e6cd65e',
    ServiceProductFulfillments: {
      ServiceProductResponse: {
        Bureau: 'TransUnion',
        ErrorResponse: {
          Code: 103022,
          Message:
            'Enrollment key is not valid for request information including (accountID, clientkey, ServiceBundleCode)',
          Name: 'EnrollmentNotValidForRequestInformation',
        },
        ServiceBundleResponse: {
          ServiceBundleCode: 'CC2BraveCreditTUReport24Hour',
          ServiceBundleFulfillmentKey: '62ee0512-d21e-4a20-b6f0-a9af6e6cd65e',
          ServiceBundleFulfillmentStatus: 'Failure',
        },
        ServiceProduct: 'TUCReport',
        ServiceProductFulfillmentKey: '693ad3fb-ae32-495a-84dd-c43d410941b9',
        ServiceProductObject: {
          type: 'b:string',
        },
        ServiceProductTypeId: 'CreditReport',
        ServiceProductValue: '',
        Status: 'NotAttempted',
      },
    },
  },
};
