export const DISPUTES_MOCK = [
  {
    agencyName: 'TU',
    appDataId: 'us-east-2:f8f12125-6686-4431-9f70-991da2b39f40',
    closedOn: null,
    disputeId: '6796',
    disputeItems: [
      {
        result: {
          data: {
            customInput: '',
            hasCustomInput: false,
            reasons: [
              {
                claimCode: 'A4',
                id: '5',
                text: 'I am not reponsible for this account (e.g. belongs to ex-pouse or business account)',
              },
            ],
            reasonsId: ['5'],
          },
          isFinished: true,
        },
        tradeline: {
          accountTypeAbbreviation: 'Collection',
          accountTypeDescription: 'Collection Account',
          accountTypeSymbol: 'Y',
          Tradeline: {
            AccountCondition: {
              abbreviation: 'Paid',
              description: 'Paid',
              rank: 10,
              symbol: 'P',
            },
            AccountDesignator: {
              abbreviation: 'Joint',
              description: 'Joint',
              rank: 199,
              symbol: 'J',
            },
            accountNumber: '6X5X5X',
            bureau: 'TransUnion',
            CollectionTrade: {
              actualPaymentAmount: 0,
              creditType: {
                abbreviation: 'Collection',
                description: 'Collection Account',
                rank: 5,
                symbol: 'Y',
              },
              originalCreditor: 'MEDICAL PAYMENT DATA',
            },
            creditorName: 'NOLL COLLECT',
            currentBalance: 0,
            dateAccountStatus: '2017-12-24',
            dateOpened: '2017-02-11',
            dateReported: '2020-07-11',
            dateVerified: '2020-07-11',
            DisputeFlag: {
              abbreviation: 'Account not disputed',
              description: 'Account not disputed',
              rank: 199,
              symbol: 'F',
            },
            handle: 'TR01_1628909224_-1594169721_89',
            highBalance: 259,
            IndustryCode: {
              abbreviation: 'Collection Services',
              description: 'Collection Services',
              rank: 199,
              symbol: 'Y',
            },
            OpenClosed: {
              abbreviation: 'Closed',
              description: 'Closed',
              rank: 198,
              symbol: 'C',
            },
            PayStatus: {
              abbreviation: 'Coll/Chargeoff',
              description: 'Collection/Chargeoff',
              rank: 2,
              symbol: 9,
            },
            position: 3,
            Remark: {
              customRemark: '',
              RemarkCode: {
                abbreviation: 'Paid collection',
                description: 'Paid collection',
                rank: 199,
                symbol: 'T00PCL',
              },
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                rank: 1,
                symbol: 'TUC',
              },
              InquiryDate: '2021-07-08',
              Reference: 'f8f12125-6686-4431-9f7',
            },
            subscriberCode: '095YW001',
            VerificationIndicator: {
              abbreviation: 'Account not disputed',
              description: 'Account not disputed',
              rank: 199,
              symbol: 'F',
            },
          },
        },
      },
    ],
    disputeLetterCode: 'FIN 000960026692 - Dispute Status ADRIENNE BURTON',
    disputeLetterContent:
      'Thank you for contacting TransUnion. Our goal is to maintain\ncomplete and accurate information on consumer credit reports.\n\nRe: Dispute Status\n\nWe received  your request on 07/22/2021 and are currently\nprocessing it. When the investigation is completed, you will\nreceive a response and/or a copy of your updated credit report to\nnotify you of the results.\n\nIf you have any additional questions or concerns, please contact\nTransUnion at the address shown below, or visit us on the web at\nthe following web site to check the status of your dispute. We\nupdate the status page once each business day. When contacting\nour office, please provide your current file number 960026692.\n\n  Web Site: https://dispute.transunion.com?src=email\n\nTransUnion Consumer Relations\nP.O. Box 2000\nChester, PA 19016-2000\n\nPlease do not reply to this email as this is a system generated\nemail.',
    disputeResults: null,
    disputeStatus: 'completeDispute',
    id: '87b9c2b8-197b-4fe5-b45a-b4df37e15d34',
    notificationMessage: null,
    notificationSentOn: null,
    notificationStatus: null,
    openDisputes: null,
    openedOn: '2021-07-22T18:44:42.622Z',
  },
];
