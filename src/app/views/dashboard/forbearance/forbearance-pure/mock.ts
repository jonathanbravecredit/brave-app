export const MORTGAGE_PARTITIONS = [
  {
    accountTypeAbbreviation: 'Mortgage',
    accountTypeDescription: 'Primary or secondary mortgage',
    accountTypeSymbol: 'M',
    Tradeline: {
      PayStatus: {
        symbol: 'C',
        description: 'Current',
        rank: 110,
        abbreviation: 'Current',
      },
      creditorName: 'BANKAMERICA',
      IndustryCode: {
        symbol: 'B',
        description: 'Bank',
        rank: 199,
        abbreviation: 'Bank',
      },
      GrantedTrade: {
        PayStatusHistory: {
          MonthlyPayStatus: [
            {
              date: '2021-04-30',
              status: 'C',
            },
            {
              date: '2021-03-30',
              status: 'C',
            },
            {
              date: '2021-02-27',
              status: 'C',
            },
            {
              date: '2021-01-27',
              status: 'C',
            },
            {
              date: '2020-12-27',
              status: 'C',
            },
            {
              date: '2020-11-27',
              status: 'C',
            },
            {
              date: '2020-10-28',
              status: 'C',
            },
            {
              date: '2020-09-28',
              status: 'C',
            },
            {
              date: '2020-08-28',
              status: 'C',
            },
            {
              date: '2020-07-28',
              status: 'C',
            },
            {
              date: '2020-06-28',
              status: 'C',
            },
            {
              date: '2020-05-28',
              status: 'C',
            },
            {
              date: '2020-04-28',
              status: 'C',
            },
            {
              date: '2020-03-28',
              status: 'C',
            },
            {
              date: '2020-02-27',
              status: 'C',
            },
            {
              date: '2020-01-27',
              status: 'C',
            },
            {
              date: '2019-12-27',
              status: 'C',
            },
            {
              date: '2019-11-27',
              status: 'C',
            },
            {
              date: '2019-10-28',
              status: 'C',
            },
            {
              date: '2019-09-28',
              status: 'C',
            },
            {
              date: '2019-08-28',
              status: 'C',
            },
            {
              date: '2019-07-28',
              status: 'C',
            },
            {
              date: '2019-06-28',
              status: 'C',
            },
            {
              date: '2019-05-28',
              status: 'C',
            },
            {
              date: '2019-04-28',
              status: 'C',
            },
            {
              date: '2019-03-28',
              status: 'C',
            },
          ],
          startDate: '2021-04-30',
          status: 'CCCCCCCCCCCCCCCCCCCCCCCCCC',
        },
        CreditLimit: 0,
        worstPatStatusCount: 26,
        PaymentFrequency: {
          symbol: 'M',
          description: 'Monthly (every month)',
          rank: 199,
          abbreviation: 'Monthly (every month)',
        },
        late90Count: 0,
        late60Count: 0,
        dateLastPayment: '2021-05-20',
        AccountType: {
          symbol: 'FR',
          description: 'FHA real estate mortgage',
          rank: 50,
          abbreviation: 'FHA real estate mortgage',
        },
        TermType: {
          symbol: 'P',
          description: 'Provided',
          rank: 199,
          abbreviation: 'Provided',
        },
        monthlyPayment: 1055,
        termMonths: 360,
        WorstPayStatus: {
          symbol: 'C',
          description: 'Current',
          rank: 110,
          abbreviation: 'Current',
        },
        monthsReviewed: 26,
        collateral: '',
        amountPastDue: 0,
        CreditType: {
          symbol: 'M',
          description: 'Primary or secondary mortgage',
          rank: 10,
          abbreviation: 'Mortgage',
        },
        late30Count: 0,
      },
      currentBalance: 155140,
      subscriberCode: '0427S002',
      handle: 'TR01_50306467_-1854127160_77',
      dateAccountStatus: '2021-05-31',
      accountNumber: '2X4X9X2X2',
      DisputeFlag: {
        symbol: 'F',
        description: 'Account not disputed',
        rank: 199,
        abbreviation: 'Account not disputed',
      },
      Source: {
        InquiryDate: '2021-07-08',
        Reference: '23852984-f35c-4a91-894',
        BorrowerKey: '',
        Bureau: {
          symbol: 'TUC',
          description: 'TransUnion',
          rank: 1,
          abbreviation: 'TransUnion',
        },
      },
      OpenClosed: {
        symbol: 'O',
        description: 'Open',
        rank: 199,
        abbreviation: 'Open',
      },
      highBalance: 160408,
      dateOpened: '2018-12-19',
      dateReported: '2021-05-31',
      VerificationIndicator: {
        symbol: 'F',
        description: 'Account not disputed',
        rank: 199,
        abbreviation: 'Account not disputed',
      },
      position: 9,
      dateVerified: '2021-05-31',
      bureau: 'TransUnion',
      AccountDesignator: {
        symbol: 'J',
        description: 'Joint',
        rank: 199,
        abbreviation: 'Joint',
      },
      AccountCondition: {
        symbol: 'O',
        description: 'Open',
        rank: 60,
        abbreviation: 'Open',
      },
    },
  },
];
export const INSTALLMENT_PARTITIONS = [
  {
    accountTypeAbbreviation: 'Installment',
    accountTypeDescription: 'Installment Account',
    accountTypeSymbol: 'I',
    Tradeline: {
      PayStatus: {
        symbol: 'C',
        description: 'Current',
        rank: 110,
        abbreviation: 'Current',
      },
      creditorName: 'GREATR IA CU',
      IndustryCode: {
        symbol: 'Q',
        description: 'Credit Union',
        rank: 199,
        abbreviation: 'Credit Union',
      },
      GrantedTrade: {
        PayStatusHistory: {
          MonthlyPayStatus: [
            {
              date: '2021-05-10',
              status: 'C',
            },
            {
              date: '2021-04-10',
              status: 'C',
            },
            {
              date: '2021-03-09',
              status: 'C',
            },
            {
              date: '2021-02-09',
              status: 'C',
            },
            {
              date: '2021-01-09',
              status: 'C',
            },
            {
              date: '2020-12-09',
              status: 'C',
            },
            {
              date: '2020-11-09',
              status: 'C',
            },
            {
              date: '2020-10-10',
              status: 'C',
            },
            {
              date: '2020-09-10',
              status: '',
            },
            {
              date: '2020-08-10',
              status: '',
            },
            {
              date: '2020-07-10',
              status: '',
            },
            {
              date: '2020-06-10',
              status: '',
            },
            {
              date: '2020-05-10',
              status: '',
            },
            {
              date: '2020-04-10',
              status: '',
            },
            {
              date: '2020-03-10',
              status: '',
            },
            {
              date: '2020-02-09',
              status: '',
            },
            {
              date: '2020-01-09',
              status: '',
            },
            {
              date: '2019-12-09',
              status: '',
            },
            {
              date: '2019-11-09',
              status: '',
            },
            {
              date: '2019-10-10',
              status: '',
            },
            {
              date: '2019-09-10',
              status: '',
            },
            {
              date: '2019-08-10',
              status: '',
            },
            {
              date: '2019-07-10',
              status: '',
            },
            {
              date: '2019-06-10',
              status: '',
            },
          ],
          startDate: '2021-05-10',
          status: 'CCCCCCCC',
        },
        CreditLimit: 0,
        worstPatStatusCount: 8,
        PaymentFrequency: {
          symbol: 'M',
          description: 'Monthly (every month)',
          rank: 199,
          abbreviation: 'Monthly (every month)',
        },
        late90Count: 0,
        late60Count: 0,
        dateLastPayment: '2021-06-02',
        AccountType: {
          symbol: 'AU',
          description: 'Auto Loan',
          rank: 50,
          abbreviation: 'Auto Loan',
        },
        TermType: {
          symbol: 'P',
          description: 'Provided',
          rank: 199,
          abbreviation: 'Provided',
        },
        monthlyPayment: 587,
        termMonths: 78,
        WorstPayStatus: {
          symbol: 'C',
          description: 'Current',
          rank: 110,
          abbreviation: 'Current',
        },
        monthsReviewed: 8,
        collateral: '',
        amountPastDue: 0,
        CreditType: {
          symbol: 'I',
          description: 'Installment Account',
          rank: 20,
          abbreviation: 'Installment',
        },
        late30Count: 0,
      },
      currentBalance: 34789,
      subscriberCode: '0322N001',
      handle: 'TR01_1914611683_1548569894_73',
      dateAccountStatus: '2021-06-10',
      accountNumber: '3X2X0X0X0X',
      DisputeFlag: {
        symbol: 'F',
        description: 'Account not disputed',
        rank: 199,
        abbreviation: 'Account not disputed',
      },
      Source: {
        InquiryDate: '2021-07-08',
        Reference: '23852984-f35c-4a91-894',
        BorrowerKey: '',
        Bureau: {
          symbol: 'TUC',
          description: 'TransUnion',
          rank: 1,
          abbreviation: 'TransUnion',
        },
      },
      OpenClosed: {
        symbol: 'O',
        description: 'Open',
        rank: 199,
        abbreviation: 'Open',
      },
      highBalance: 37275,
      dateOpened: '2020-08-21',
      dateReported: '2021-06-10',
      VerificationIndicator: {
        symbol: 'F',
        description: 'Account not disputed',
        rank: 199,
        abbreviation: 'Account not disputed',
      },
      position: 6,
      dateVerified: '2021-06-10',
      bureau: 'TransUnion',
      AccountDesignator: {
        symbol: 'J',
        description: 'Joint',
        rank: 199,
        abbreviation: 'Joint',
      },
      AccountCondition: {
        symbol: 'O',
        description: 'Open',
        rank: 60,
        abbreviation: 'Open',
      },
    },
  },
  {
    accountTypeAbbreviation: 'Installment',
    accountTypeDescription: 'Installment Account',
    accountTypeSymbol: 'I',
    Tradeline: {
      AccountCondition: {
        abbreviation: 'Closed',
        description: 'Closed',
        rank: 50,
        symbol: 'C',
      },
      AccountDesignator: {
        abbreviation: 'Shared',
        description: 'Shared',
        rank: 199,
        symbol: 'S',
      },
      accountNumber: '4X6X6X7X4',
      bureau: 'TransUnion',
      creditorName: 'PRIME ACCEPT',
      currentBalance: 0,
      dateAccountStatus: '2013-12-31',
      dateClosed: '2013-12-31',
      dateOpened: '2010-10-06',
      dateReported: '2013-12-31',
      dateVerified: '2013-12-31',
      DisputeFlag: {
        abbreviation: 'Account not disputed',
        description: 'Account not disputed',
        rank: 199,
        symbol: 'F',
      },
      GrantedTrade: {
        AccountType: {
          abbreviation: 'Installment sales contract',
          description: 'Installment sales contract',
          rank: 50,
          symbol: 'IS',
        },
        amountPastDue: 0,
        collateral: '',
        CreditLimit: 0,
        CreditType: {
          abbreviation: 'Installment',
          description: 'Installment Account',
          rank: 20,
          symbol: 'I',
        },
        dateLastPayment: '2013-12-12',
        late30Count: 0,
        late60Count: 0,
        late90Count: 0,
        monthlyPayment: 54,
        monthsReviewed: 12,
        PaymentFrequency: {
          abbreviation: 'Monthly (every month)',
          description: 'Monthly (every month)',
          rank: 199,
          symbol: 'M',
        },
        PayStatusHistory: {
          MonthlyPayStatus: [
            {
              date: '2013-11-30',
              status: 'C',
            },
            {
              date: '2013-10-30',
              status: 'U',
            },
            {
              date: '2013-09-30',
              status: 'C',
            },
            {
              date: '2013-08-30',
              status: 'U',
            },
            {
              date: '2013-07-30',
              status: 'C',
            },
            {
              date: '2013-06-30',
              status: 'C',
            },
            {
              date: '2013-05-30',
              status: 'C',
            },
            {
              date: '2013-04-30',
              status: 'C',
            },
            {
              date: '2013-03-30',
              status: 'C',
            },
            {
              date: '2013-02-28',
              status: 'C',
            },
            {
              date: '2013-01-28',
              status: 'C',
            },
            {
              date: '2012-12-28',
              status: 'C',
            },
            {
              date: '2012-11-28',
              status: '',
            },
            {
              date: '2012-10-28',
              status: '',
            },
            {
              date: '2012-09-28',
              status: '',
            },
            {
              date: '2012-08-28',
              status: '',
            },
            {
              date: '2012-07-28',
              status: '',
            },
            {
              date: '2012-06-28',
              status: '',
            },
            {
              date: '2012-05-28',
              status: '',
            },
            {
              date: '2012-04-28',
              status: '',
            },
            {
              date: '2012-03-28',
              status: '',
            },
            {
              date: '2012-02-28',
              status: '',
            },
            {
              date: '2012-01-28',
              status: '',
            },
            {
              date: '2011-12-28',
              status: '',
            },
          ],
          startDate: '2013-11-30',
          status: 'CUCUCCCCCCCC',
        },
        termMonths: 36,
        TermType: {
          abbreviation: 'Provided',
          description: 'Provided',
          rank: 199,
          symbol: 'P',
        },
        worstPatStatusCount: 12,
        WorstPayStatus: {
          abbreviation: 'Current',
          description: 'Current',
          rank: 110,
          symbol: 'C',
        },
      },
      handle: 'TR01_-1792360853_-1655032732_73',
      highBalance: 1967,
      IndustryCode: {
        abbreviation: 'Finance/Personal',
        description: 'Finance/Personal',
        rank: 199,
        symbol: 'F',
      },
      OpenClosed: {
        abbreviation: 'Closed',
        description: 'Closed',
        rank: 198,
        symbol: 'C',
      },
      PayStatus: {
        abbreviation: 'Current',
        description: 'Current',
        rank: 110,
        symbol: 'C',
      },
      position: 9,
      Remark: {
        customRemark: '',
        RemarkCode: {
          abbreviation: 'Closed',
          description: 'Closed',
          rank: 199,
          symbol: 'T00CLO',
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
        Reference: '265ffe96-3b66-41a8-bc2',
      },
      subscriberCode: '0946Z003',
      VerificationIndicator: {
        abbreviation: 'Account not disputed',
        description: 'Account not disputed',
        rank: 199,
        symbol: 'F',
      },
    },
  },
];
