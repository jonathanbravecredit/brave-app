const publicItem = {
  version: 2,
  transactionControl: {
    tracking: {
      transactionTimeStamp: '2021-11-04T18:57:54.545-05:00',
      language: 'en',
      identifier: {
        fin: 960028482,
        activityNumber: 4,
        partyId: 800001212473,
      },
      responseCode: 0,
      responseMessage: 'Success',
    },
  },
  productArray: {
    product: {
      code: 7001,
      subject: {
        fileAccessCode: '*** 960028482-004 ***',
        enclosures: {
          codes: [
            {
              code: 29,
              type: 0,
              versionNo: 1,
            },
            {
              code: 32,
              type: 0,
              versionNo: 1,
            },
          ],
          addresseeContact: {
            name: {
              unparsed: 'ROBIN K. WOLPER',
            },
            address: {
              street: {
                unparsed: '2297 170TH ST',
              },
              location: {
                unparsed: 'MANCHESTER, IA 52057-8744',
              },
              order: 1,
            },
          },
          returnMailContact: {
            name: {
              unparsed: 'TransUnion Consumer Relations',
            },
            address: {
              street: {
                unparsed: 'P.O. Box 2000',
              },
              location: {
                unparsed: 'Chester, PA 19016-2000',
              },
              order: 1,
            },
          },
        },
        subjectRecord: {
          fileSummary: {
            inFileSinceDate: '03/01/1993',
            disclosureCoverInfo: {
              coverCode: 35,
              versionNo: 1,
              disputeURL: 'www.transunion.com/disputeonline',
              summarySection: {
                lineItem: {
                  itemKey: '3X0X1X_5001693_7X',
                  handle: 'PR01_1542872692_-1031353276',
                  itemType: 14,
                  credit: {
                    item: {
                      itemName: 'CHAPTER 7 BANKRUPTCY DISCHARGED',
                      subscriber: {
                        name: {
                          unparsed: 'USBK COURT NORTHERN IOWA',
                        },
                        address: {
                          street: {
                            unparsed: ['111 7TH AVE SE', '#15'],
                          },
                          location: {
                            unparsed: 'CEDAR RAPIDS, IA 52401',
                            city: 'CEDAR RAPIDS',
                            state: 'IA',
                            zipCode: 52401,
                          },
                        },
                        phone: {
                          unparsed: '(319) 286-2200',
                          areaCode: 319,
                          exchange: 286,
                          suffix: 2200,
                        },
                      },
                    },
                    description: {
                      descriptionText: 'DOCKET# 3X0X1X',
                    },
                    result: 'DELETED',
                  },
                },
              },
              resellerOperatorId: '',
            },
          },
          indicative: {
            name: [
              {
                person: {
                  unparsed: 'ROBIN K. WOLPER',
                  first: 'ROBIN',
                  middle: 'K',
                  last: 'WOLPER',
                  order: 1,
                },
              },
              {
                person: {
                  alsoReportedAs: true,
                  unparsed: 'ROBIN K. HOBBS',
                  first: 'ROBIN',
                  middle: 'K',
                  last: 'HOBBS',
                  order: 2,
                },
              },
            ],
            address: [
              {
                street: {
                  unparsed: '2297 170TH ST',
                  number: 2297,
                  name: '170TH',
                  type: 'ST',
                },
                location: {
                  unparsed: 'MANCHESTER, IA 52057-8744',
                  city: 'MANCHESTER',
                  state: 'IA',
                  zipCode: 52057,
                  zipExt: 8744,
                },
                dateReported: '06/13/2015',
                order: 1,
              },
              {
                street: {
                  unparsed: '2279 170TH ST',
                  number: 2279,
                  name: '170TH',
                  type: 'ST',
                },
                location: {
                  unparsed: 'MANCHESTER, IA 52057-8744',
                  city: 'MANCHESTER',
                  state: 'IA',
                  zipCode: 52057,
                  zipExt: 8744,
                },
                dateReported: '11/01/2009',
                order: 2,
              },
              {
                street: {
                  unparsed: '2060 275TH ST',
                  number: 2060,
                  name: '275TH',
                  type: 'ST',
                },
                location: {
                  unparsed: 'MANCHESTER, IA 52057-8555',
                  city: 'MANCHESTER',
                  state: 'IA',
                  zipCode: 52057,
                  zipExt: 8555,
                },
                order: 3,
              },
            ],
            socialSecurity: {
              number: '666-72-9560',
              order: 1,
            },
            dateOfBirth: {
              '#text': '06/01/1953',
              estimated: false,
            },
            phone: {
              number: {
                unparsed: '(563) 920-5150',
                areaCode: 563,
                exchange: 920,
                suffix: 5150,
              },
              order: 1,
            },
            employment: [
              {
                employer: {
                  unparsed: 'EMPLOYER X',
                },
                occupation: 'LABORER',
                dateEffective: '05/31/2020',
                dateLabel: 'Date Verified',
              },
              {
                employer: {
                  unparsed: 'EMPLOYER X',
                },
                occupation: 'SUPERVISOR',
                dateEffective: '10/18/2014',
                dateLabel: 'Date Verified',
              },
            ],
          },
          custom: {
            credit: {
              trade: [
                {
                  itemKey: '1X0X2X7X6_3946010_I',
                  subscriber: {
                    industryCode: 'QA',
                    memberCode: 3946010,
                    name: {
                      unparsed: 'AMERICAN HONDA FINANCE',
                    },
                    address: {
                      street: {
                        unparsed: ['1220 OLD ALPHARETTA ROAD', 'SUITE 350'],
                      },
                      location: {
                        unparsed: 'ALPHARETTA, GA 30005',
                        city: 'ALPHARETTA',
                        state: 'GA',
                        zipCode: 30005,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 532-8127',
                        areaCode: 800,
                        exchange: 532,
                        suffix: 8127,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '1X0X2X7X6',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '04/10/2017',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '01/01/2019',
                  dateClosed: '01/01/2019',
                  currentBalance: 0,
                  highCredit: 5918,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 36,
                    scheduledMonthlyPayment: '$174',
                    description: '$174 per month, paid Monthly for 36  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '12/01/2018',
                      text: 11111111111111110000,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 20,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '01/01/2019',
                    description: '01/01/2019 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4264202230347188_1597029_R',
                  subscriber: {
                    industryCode: 'BC',
                    memberCode: 1597029,
                    name: {
                      unparsed: 'BANK OF AMERICA',
                    },
                    address: {
                      street: {
                        unparsed: 'PO BOX 982238',
                      },
                      location: {
                        unparsed: 'EL PASO, TX 79998-2235',
                        city: 'EL PASO',
                        state: 'TX',
                        zipCode: 79998,
                        zipExt: 2235,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 421-2110',
                        areaCode: 800,
                        exchange: 421,
                        suffix: 2110,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 4264202230347188,
                  ECOADesignator: 'authorizedUser',
                  dateOpened: '07/01/2009',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '08/01/2012',
                  dateClosed: '08/01/2012',
                  highCredit: 25187,
                  creditLimit: 23000,
                  accountRating: 'UR',
                  terms: {
                    description: '',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: '',
                  mostRecentPayment: {
                    date: '02/01/2012',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Unrated',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Authorized Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4300285013440674_7452009_R',
                  subscriber: {
                    industryCode: 'BC',
                    memberCode: 7452009,
                    name: {
                      unparsed: 'CAPITAL ONE / CABELAS',
                    },
                    address: {
                      street: {
                        unparsed: 'PO BOX 30281',
                      },
                      location: {
                        unparsed: 'SALT LAKE CITY, UT 84130',
                        city: 'SALT LAKE CITY',
                        state: 'UT',
                        zipCode: 84130,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 552-7963',
                        areaCode: 800,
                        exchange: 552,
                        suffix: 7963,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 4300285013440674,
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '08/08/2017',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/22/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    scheduledMonthlyPayment: '$55',
                    description: '$55 per month, paid Monthly',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2021',
                      text: '11EE1E1E111111111111EE111111111EE1111111111111E111',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 50,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$50',
                    date: '09/30/2021',
                    description: '09/30/2021 ($50)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $3,000 from 05/2019 to 10/2021',
                  histCreditLimitStmt: 'Credit limit of $3,000 from 05/2019 to 10/2021',
                  histPaymentDueList: '55;25;0;0;25;0;0;0;0;25;0;55;53;53;56;41;32;20;20;24;0;0;0;10;10;35;26;22;10;0',
                  histPaymentAmtList:
                    '50;0;0;564;0;0;0;0;201;0;2292;100;60;100;75;100;50;200;500;0;0;0;493;52;1768;100;50;50;0;3000',
                  histBalanceList:
                    '2469;221;0;0;538;0;0;0;0;201;0;2292;2362;2153;2225;2077;1622;583;725;1214;0;0;0;493;52;1768;1217;1027;389;0',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4862378073881786_1DTV001_R',
                  subscriber: {
                    industryCode: 'BC',
                    memberCode: '1DTV001',
                    name: {
                      unparsed: 'CAPITAL ONE BANK USA NA',
                    },
                    address: {
                      street: {
                        unparsed: 'P O Box 30281',
                      },
                      location: {
                        unparsed: 'Salt Lake City, UT 84130-0281',
                        city: 'Salt Lake City',
                        state: 'UT',
                        zipCode: 84130,
                        zipExt: 281,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 955-7070',
                        areaCode: 800,
                        exchange: 955,
                        suffix: 7070,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 4862378073881786,
                  ECOADesignator: 'individual',
                  dateOpened: '03/22/2015',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '09/19/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    scheduledMonthlyPayment: '$25',
                    description: '$25 per month, paid Monthly',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2021',
                      text: '1EEEEE1EEEEEEEEEEEEEEEEE111EEEEEEEEEEEEEEE1111111111111111111111111111111111EE1',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 79,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$912',
                    date: '09/05/2019',
                    description: '09/05/2019 ($912)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Individual Account',
                  histHighCreditStmt: 'High balance of $2,235 from 05/2019 to 09/2021',
                  histCreditLimitStmt: 'Credit limit of $2,500 from 05/2019 to 09/2021',
                  histPaymentDueList: '25;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;7;21;15;0;0;0',
                  histPaymentAmtList:
                    '912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;912;100;71;71;71;71',
                  histBalanceList: '335;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;7;912;1000;0;0;0',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '3X5X7X0X4X1X_494E005_I',
                  subscriber: {
                    industryCode: 'QZ',
                    memberCode: 494,
                    name: {
                      unparsed: 'CITIZENS COMMUNITY CREDIT UNION',
                    },
                    address: {
                      street: {
                        unparsed: ['2012 1st Ave S', 'PO BOX 817'],
                      },
                      location: {
                        unparsed: 'FORT DODGE, IA 50501',
                        city: 'FORT DODGE',
                        state: 'IA',
                        zipCode: 50501,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(515) 955-5524',
                        areaCode: 515,
                        exchange: 955,
                        suffix: 5524,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '3X5X7X0X4X1X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '12/31/2019',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '08/31/2020',
                  dateClosed: '08/31/2020',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 48,
                    scheduledMonthlyPayment: '$254',
                    description: '$254 per month, paid Monthly for 48  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '08/01/2020',
                      text: 11111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 8,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$9,296',
                    date: '08/22/2020',
                    description: '08/22/2020 ($9,296)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $10,379 from 02/2020 to 08/2020',
                  histPaymentDueList: '254;254;254;254;254;254;254',
                  histPaymentAmtList: '9296;254;254;254;254;254;0',
                  histBalanceList: '0;9244;9434;9619;9986;9986;10379',
                  histPastDueList: '0;0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '3X0X9X5_1KZM001_M',
                  subscriber: {
                    industryCode: 'BO',
                    memberCode: '1KZM001',
                    name: {
                      unparsed: 'COMMUNITY SAVINGS BANK',
                    },
                    address: {
                      street: {
                        unparsed: '221 E MAIN ST',
                      },
                      location: {
                        unparsed: 'MANACHESTER, IA 52057',
                        city: 'MANACHESTER',
                        state: 'IA',
                        zipCode: 52057,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 927-4014',
                        areaCode: 563,
                        exchange: 927,
                        suffix: 4014,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '3X0X9X5',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '04/30/2006',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '04/02/2014',
                  dateClosed: '04/02/2014',
                  currentBalance: 0,
                  highCredit: 40000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 120,
                    description: 'Monthly for 120 months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '03/01/2014',
                      text: 'XX11111111111111111X',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 20,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '04/02/2014',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4X0X3X2_1KZM001_M',
                  subscriber: {
                    industryCode: 'BO',
                    memberCode: '1KZM001',
                    name: {
                      unparsed: 'COMMUNITY SAVINGS BANK',
                    },
                    address: {
                      street: {
                        unparsed: '221 E MAIN ST',
                      },
                      location: {
                        unparsed: 'MANACHESTER, IA 52057',
                        city: 'MANACHESTER',
                        state: 'IA',
                        zipCode: 52057,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 927-4014',
                        areaCode: 563,
                        exchange: 927,
                        suffix: 4014,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '4X0X3X2',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '11/27/2012',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '04/02/2014',
                  dateClosed: '04/02/2014',
                  currentBalance: 0,
                  highCredit: 10000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 36,
                    description: 'Monthly for 36 months',
                  },
                  account: {
                    code: 'RL',
                    description: 'REAL ESTATE-JUNIOR LIENS',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '03/01/2014',
                      text: 1111111111111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 16,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '04/02/2014',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4X0X8X4_1KZM001_I',
                  subscriber: {
                    industryCode: 'BO',
                    memberCode: '1KZM001',
                    name: {
                      unparsed: 'COMMUNITY SAVINGS BANK',
                    },
                    address: {
                      street: {
                        unparsed: '221 E MAIN ST',
                      },
                      location: {
                        unparsed: 'MANACHESTER, IA 52057',
                        city: 'MANACHESTER',
                        state: 'IA',
                        zipCode: 52057,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 927-4014',
                        areaCode: 563,
                        exchange: 927,
                        suffix: 4014,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '4X0X8X4',
                  ECOADesignator: 'individual',
                  dateOpened: '09/09/2013',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '04/02/2014',
                  dateClosed: '04/02/2014',
                  currentBalance: 0,
                  highCredit: 1018,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 12,
                    description: 'Monthly for 12 months',
                  },
                  account: {
                    code: 'US',
                    description: 'UNSECURED',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '03/01/2014',
                      text: 111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 6,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '04/02/2014',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Individual Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '3X1X0X5_1KZM001_M',
                  subscriber: {
                    industryCode: 'BO',
                    memberCode: '1KZM001',
                    name: {
                      unparsed: 'COMMUNITY SAVINGS BANK',
                    },
                    address: {
                      street: {
                        unparsed: '221 E MAIN ST',
                      },
                      location: {
                        unparsed: 'MANACHESTER, IA 52057',
                        city: 'MANACHESTER',
                        state: 'IA',
                        zipCode: 52057,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 927-4014',
                        areaCode: 563,
                        exchange: 927,
                        suffix: 4014,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '3X1X0X5',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '09/01/2009',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '11/01/2012',
                  dateClosed: '11/01/2012',
                  currentBalance: 0,
                  highCredit: 112000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 60,
                    description: 'Monthly for 60 months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2012',
                      text: '1X111111X11111111111111111111111111X11',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 38,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '11/01/2012',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4X8X2X7_1KZM001_I',
                  subscriber: {
                    industryCode: 'BO',
                    memberCode: '1KZM001',
                    name: {
                      unparsed: 'COMMUNITY SAVINGS BANK',
                    },
                    address: {
                      street: {
                        unparsed: '221 E MAIN ST',
                      },
                      location: {
                        unparsed: 'MANACHESTER, IA 52057',
                        city: 'MANACHESTER',
                        state: 'IA',
                        zipCode: 52057,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 927-4014',
                        areaCode: 563,
                        exchange: 927,
                        suffix: 4014,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '4X8X2X7',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '03/01/2011',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '01/01/2012',
                  dateClosed: '01/01/2012',
                  currentBalance: 0,
                  highCredit: 1500,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 13,
                    description: 'Monthly for 13 months',
                  },
                  account: {
                    code: 'US',
                    description: 'UNSECURED',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '12/01/2011',
                      text: '1X11111111',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 10,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '01/01/2012',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '6012506832461668_1190005_R',
                  subscriber: {
                    industryCode: 'FZ',
                    memberCode: 1190005,
                    name: {
                      unparsed: 'CONSECO FINANCIAL',
                    },
                    address: {
                      street: {
                        unparsed: 'POB 981206',
                      },
                      location: {
                        unparsed: 'EL PASO, TX 79998-1206',
                        city: 'EL PASO',
                        state: 'TX',
                        zipCode: 79998,
                        zipExt: 1206,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 423-9527',
                        areaCode: 800,
                        exchange: 423,
                        suffix: 9527,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 6012506832461668,
                  ECOADesignator: 'participant',
                  dateOpened: '09/01/2007',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '08/01/2012',
                  dateClosed: '08/01/2012',
                  currentBalance: 0,
                  highCredit: 5024,
                  creditLimit: 6000,
                  accountRating: 1,
                  remark: {
                    code: 'TRL',
                    type: 'generic',
                    description: 'TRANSFERRED TO ANOTHER LENDER',
                  },
                  terms: {
                    description: '',
                  },
                  account: {
                    code: 'CH',
                    description: 'CHARGE ACCOUNT',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '07/01/2012',
                      text: 1.111111111111111e34,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 35,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '06/01/2012',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Participant on Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '6011498041566844_9616003_R',
                  subscriber: {
                    industryCode: 'BC',
                    memberCode: 9616003,
                    name: {
                      unparsed: 'DISCOVER FINCL SVC LLC',
                    },
                    address: {
                      street: {
                        unparsed: 'PO BOX 15316',
                      },
                      location: {
                        unparsed: 'WILMINGTON, DE 19850-5316',
                        city: 'WILMINGTON',
                        state: 'DE',
                        zipCode: 19850,
                        zipExt: 5316,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 347-2683',
                        areaCode: 800,
                        exchange: 347,
                        suffix: 2683,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 6011498041566844,
                  ECOADesignator: 'individual',
                  dateOpened: '12/18/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/03/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    scheduledMonthlyPayment: '$40',
                    description: '$40 per month, paid Monthly',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2021',
                      text: '11111E1EE',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 9,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '09/30/2021',
                    description: '09/30/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Individual Account',
                  histHighCreditStmt: 'High balance of $0 from 03/2021 to 05/2021; $4,000 from 06/2021 to 10/2021',
                  histCreditLimitStmt: 'Credit limit of $4,000 from 03/2021 to 10/2021',
                  histPaymentDueList: '40;40;77;79;80;0;0;0',
                  histPaymentAmtList: '0;0;0;0;0;0;0;0',
                  histBalanceList: '145;197;3840;3920;4000;0;0;0',
                  histPastDueList: '0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4045074642269708_362X005_R',
                  subscriber: {
                    industryCode: 'QC',
                    memberCode: '362X005',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 4045074642269708,
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '03/12/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/06/2021',
                  currentBalance: 4756,
                  highCredit: 5020,
                  creditLimit: 5000,
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    scheduledMonthlyPayment: '$143',
                    description: '$143 per month, paid Monthly',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2021',
                      text: 111111111111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 15,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$355',
                    date: '10/02/2021',
                    description: '10/02/2021 ($355)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '1X0X4X9X0_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '1X0X4X9X0',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '02/03/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '09/30/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 61,
                    scheduledMonthlyPayment: '$775',
                    description: '$775 per month, paid Monthly for 61  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2021',
                      text: 1111111111111111200,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 19,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '09/23/2021',
                    description: '09/23/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $41,654 from 04/2020 to 09/2021',
                  histPaymentDueList: '775;775;775;775;775;775;775;775;775;775;775;775;775;775;775;775;775;775',
                  histPaymentAmtList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;800',
                  histBalanceList:
                    '28049;28753;29454;30153;31198;31891;32582;33270;33956;34981;35662;36340;37016;37690;38361;39030;40030;40698',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '9X0X6X3X3_362X002_M',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '9X0X6X3X3',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '04/04/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '09/30/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 180,
                    scheduledMonthlyPayment: '$557',
                    description: '$557 per month, paid Monthly for 180  months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2021',
                      text: 11111111111111112,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 17,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '09/01/2021',
                    description: '09/01/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $78,000 from 05/2020 to 09/2021',
                  histPaymentDueList: '557;557;557;557;557;557;557;557;557;557;558;558;558;558;558;558;558',
                  histPaymentAmtList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  histBalanceList:
                    '70750;71142;71534;72333;72721;73108;73493;73878;74261;74943;75323;75702;76280;76856;77430;78000;78000',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '9X1X6X6X9X_362X002_M',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '9X1X6X6X9X',
                  ECOADesignator: 'individual',
                  dateOpened: '03/31/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '09/30/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 300,
                    scheduledMonthlyPayment: '$109',
                    description: '$109 per month, paid Monthly for 300  months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2021',
                      text: 11111111111111112,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 17,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '09/27/2021',
                    description: '09/27/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Individual Account',
                  histHighCreditStmt:
                    'High balance of $14,000 from 05/2020 to 05/2020; $14,000 from 08/2020 to 09/2021',
                  histPaymentDueList: '109;109;108;108;108;108;106;106;106;102;101;100;100;100;;;0',
                  histPaymentAmtList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;;;0',
                  histBalanceList:
                    '13865;13920;13671;13723;13777;13825;13376;13429;13475;13025;12870;12418;12466;11307;;;0',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;;;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4X4X0X1X0X4X9X0X_362X005_C',
                  subscriber: {
                    industryCode: 'QC',
                    memberCode: '362X005',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'lineOfCredit',
                  accountNumber: '4X4X0X1X0X4X9X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '03/12/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '09/07/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    scheduledMonthlyPayment: '$146',
                    description: '$146 per month, paid Monthly',
                  },
                  account: {
                    code: 'LC',
                    description: 'LINE OF CREDIT',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2021',
                      text: 11,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 17,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '07/24/2021',
                    description: '07/24/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Line of Credit Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditList: '4851;4263;4263;4263;4263;4263;4263;4263;4263;4263;4132;3998;3898;2778;2572;0;0',
                  histCreditLimitStmt: 'Credit limit of $5,000 from 05/2020 to 09/2021',
                  histPaymentDueList: '146;55;0;112;0;0;25;115;121;124;124;117;117;83;77;0;0',
                  histPaymentAmtList: '0;1000;4282;3978;0;89;3847;200;150;150;120;150;100;100;0;0;0',
                  histBalanceList: '4851;1838;0;5;3800;0;89;3847;4018;4137;4124;3892;3898;2778;2572;0;0',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '1X0X9X2X4_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '1X0X9X2X4',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '07/17/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '02/24/2021',
                  dateClosed: '02/24/2021',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 60,
                    scheduledMonthlyPayment: '$417',
                    description: '$417 per month, paid Monthly for 60  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '02/01/2021',
                      text: 1111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 7,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '02/24/2021',
                    description: '02/24/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $21,348 from 08/2020 to 02/2021',
                  histPaymentDueList: '417;417;417;418;418;418;418',
                  histPaymentAmtList: '0;0;0;0;0;0;0',
                  histBalanceList: '0;19636;20039;20360;20679;21076;21348',
                  histPastDueList: '0;0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '1X0X9X4X4_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '1X0X9X4X4',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '09/02/2019',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '08/17/2020',
                  dateClosed: '08/17/2020',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 61,
                    scheduledMonthlyPayment: '$237',
                    description: '$237 per month, paid Monthly for 61  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '08/01/2020',
                      text: 11111111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 11,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '08/17/2020',
                    description: '08/17/2020 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $12,000 from 10/2019 to 08/2020',
                  histPaymentDueList: '237;237;237;237;237;237;237;237;237;237;237',
                  histPaymentAmtList: '0;0;0;0;240;240;240;300;240;240;0',
                  histBalanceList: '0;10059;10292;10477;10663;11073;11254;11434;11658;11835;12000',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '1X0X7X3X9_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '1X0X7X3X9',
                  ECOADesignator: 'coSigner',
                  dateOpened: '05/23/2019',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '06/30/2020',
                  dateClosed: '06/30/2020',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 12,
                    scheduledMonthlyPayment: '$506',
                    description: '$506 per month, paid Monthly for 12  months',
                  },
                  account: {
                    code: 'US',
                    description: 'UNSECURED',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '06/01/2020',
                      text: 1111111111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 13,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '06/30/2020',
                    description: '06/30/2020 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Co-Signor on Account',
                  histHighCreditStmt: 'High balance of $7,500 from 07/2019 to 06/2020',
                  histPaymentDueList: '506;650;650;650;650;650;650;650;650;650;650;650',
                  histPaymentAmtList: '0;0;650;650;650;650;772;650;650;650;650;464',
                  histBalanceList: '0;970;1201;2434;3031;3622;4206;4890;5452;6000;6547;7072',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '7X0X2X8X4_362X002_M',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '7X0X2X8X4',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '09/30/2017',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '05/04/2020',
                  dateClosed: '05/04/2020',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 216,
                    scheduledMonthlyPayment: '$683',
                    description: '$683 per month, paid Monthly for 216  months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '05/01/2020',
                      text: 1.1111111111111112e31,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 32,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '05/05/2020',
                    description: '05/05/2020 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $85,700 from 05/2019 to 05/2020',
                  histPaymentDueList: '683;683;683;683;683;683;683;683;683;683;683;683;683',
                  histPaymentAmtList: '0;700;700;0;1400;0;700;700;1400;700;1400;0;700',
                  histBalanceList: '0;75412;75789;76163;76163;76908;76908;77278;77646;78378;78378;79104;79104',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: 'LX0X_362X002_M',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: 'LX0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '03/31/2020',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '05/04/2020',
                  dateClosed: '05/04/2020',
                  currentBalance: 0,
                  highCredit: 28000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 360,
                    scheduledMonthlyPayment: '$111',
                    description: '$111 per month, paid Monthly for 360  months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: '',
                  mostRecentPayment: {
                    amount: '$0',
                    description: 'null ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '9X5X0X9X2_362X002_M',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '9X5X0X9X2',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '09/30/2017',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/05/2019',
                  dateClosed: '10/05/2019',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 0,
                    scheduledMonthlyPayment: '$0',
                    description: '$0 per month, paid Monthly',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2019',
                      text: 1.1111111111111111e24,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 25,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '10/02/2019',
                    description: '10/02/2019 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $7,000 from 05/2019 to 09/2019; $5,000 from 10/2019 to 10/2019',
                  histPaymentDueList: '0;100;100;100;100;100',
                  histPaymentAmtList: '0;100;100;100;100;0',
                  histBalanceList: '0;2650;2739;2827;2915;3000',
                  histPastDueList: '0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X6X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X6X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '03/08/2017',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '02/05/2019',
                  dateClosed: '02/05/2019',
                  currentBalance: 0,
                  highCredit: 16000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 60,
                    scheduledMonthlyPayment: '$320',
                    description: '$320 per month, paid Monthly for 60  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '01/01/2019',
                      text: 1.1111111111111111e21,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 22,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '02/05/2019',
                    description: '02/05/2019 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4X8X_362X004_M',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X004',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: '3299 HILLCREST',
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52004',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52004,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-1700 x2296',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 1700,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '4X8X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '05/06/2016',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/31/2017',
                  dateClosed: '10/31/2017',
                  currentBalance: 0,
                  highCredit: 71000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 180,
                    scheduledMonthlyPayment: '$594',
                    description: '$594 per month, paid Monthly for 180  months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '09/01/2017',
                      text: 1111111111111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 16,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '09/30/2017',
                    description: '09/30/2017 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X6X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X6X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '06/02/2017',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '09/03/2017',
                  dateClosed: '09/03/2017',
                  currentBalance: 0,
                  highCredit: 2500,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 29,
                    scheduledMonthlyPayment: '$100',
                    description: '$100 per month, paid Monthly for 29  months',
                  },
                  account: {
                    code: 'US',
                    description: 'UNSECURED',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '08/01/2017',
                      text: 111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 3,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '08/08/2017',
                    description: '08/08/2017 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X6X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X6X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '07/14/2016',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '11/03/2016',
                  highCredit: 5000,
                  accountRating: 1,
                  terms: {
                    paymentScheduleMonthCount: 37,
                    scheduledMonthlyPayment: '$154',
                    description: '$154 per month for 37 months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2016',
                      text: 11,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 2,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '10/27/2016',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X6X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X6X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '07/21/2016',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '11/03/2016',
                  dateClosed: '11/03/2016',
                  currentBalance: 0,
                  highCredit: 500,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentScheduleMonthCount: 6,
                    scheduledMonthlyPayment: '$85',
                    description: '$85 per month for 6 months',
                  },
                  account: {
                    code: 'US',
                    description: 'UNSECURED',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2016',
                      text: 11,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 2,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '10/12/2016',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X5X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X5X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '11/07/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '02/03/2015',
                  dateClosed: '02/03/2015',
                  currentBalance: 0,
                  highCredit: 7792,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 47,
                    scheduledMonthlyPayment: '$200',
                    description: '$200 per month, paid Monthly for 47  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '01/01/2015',
                      text: 1,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 1,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '02/02/2015',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X5X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X5X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '09/25/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '01/05/2015',
                  dateClosed: '01/05/2015',
                  currentBalance: 0,
                  highCredit: 6521,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 38,
                    scheduledMonthlyPayment: '$200',
                    description: '$200 per month, paid Monthly for 38  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '12/01/2014',
                      text: 11,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 2,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '12/07/2014',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5X0X9X5X0X_362X002_I',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: '362X002',
                    name: {
                      unparsed: 'DUPACO COMMUNITY CU',
                    },
                    address: {
                      street: {
                        unparsed: ['HILLCREST AT JFK', 'POB 179'],
                      },
                      location: {
                        unparsed: 'DUBUQUE, IA 52001',
                        city: 'DUBUQUE',
                        state: 'IA',
                        zipCode: 52001,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(563) 557-7600',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 7600,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X0X9X5X0X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '06/24/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '11/02/2014',
                  dateClosed: '11/02/2014',
                  currentBalance: 0,
                  highCredit: 5000,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 28,
                    scheduledMonthlyPayment: '$200',
                    description: '$200 per month, paid Monthly for 28  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2014',
                      text: 111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 3,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '10/25/2014',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '3X0X8X4X_3796761_I',
                  subscriber: {
                    industryCode: 'FA',
                    memberCode: 3796761,
                    name: {
                      unparsed: 'FORD MOTOR CREDIT',
                    },
                    address: {
                      street: {
                        unparsed: 'POB 542000',
                      },
                      location: {
                        unparsed: 'OMAHA, NE 68154',
                        city: 'OMAHA',
                        state: 'NE',
                        zipCode: 68154,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 727-7000',
                        areaCode: 800,
                        exchange: 727,
                        suffix: 7000,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '3X0X8X4X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '03/31/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/06/2019',
                  dateClosed: '10/06/2019',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 72,
                    scheduledMonthlyPayment: '$517',
                    description: '$517 per month, paid Monthly for 72  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2019',
                      text: 1.111111111111111e65,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 66,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$3,392',
                    date: '10/06/2019',
                    description: '10/06/2019 ($3,392)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt:
                    'High balance of $28,338 from 05/2019 to 07/2019; $28,338 from 09/2019 to 10/2019',
                  histPaymentDueList: '517;517;;517;517;517',
                  histPaymentAmtList: '3392;600;;600;600;100',
                  histBalanceList: '0;2784;;3934;4498;5060',
                  histPastDueList: '0;0;;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '3X6X1X4X_3796761_I',
                  subscriber: {
                    industryCode: 'FA',
                    memberCode: 3796761,
                    name: {
                      unparsed: 'FORD MOTOR CREDIT',
                    },
                    address: {
                      street: {
                        unparsed: 'POB 542000',
                      },
                      location: {
                        unparsed: 'OMAHA, NE 68154',
                        city: 'OMAHA',
                        state: 'NE',
                        zipCode: 68154,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 727-7000',
                        areaCode: 800,
                        exchange: 727,
                        suffix: 7000,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '3X6X1X4X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '01/31/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '05/08/2014',
                  dateClosed: '05/08/2014',
                  currentBalance: 0,
                  highCredit: 25976,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 72,
                    scheduledMonthlyPayment: '$495',
                    description: '$495 per month, paid Monthly for 72  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '04/01/2014',
                      text: 111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 3,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '05/08/2014',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '2X2X0X3X_3796761_I',
                  subscriber: {
                    industryCode: 'FA',
                    memberCode: 3796761,
                    name: {
                      unparsed: 'FORD MOTOR CREDIT',
                    },
                    address: {
                      street: {
                        unparsed: 'POB 542000',
                      },
                      location: {
                        unparsed: 'OMAHA, NE 68154',
                        city: 'OMAHA',
                        state: 'NE',
                        zipCode: 68154,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 727-7000',
                        areaCode: 800,
                        exchange: 727,
                        suffix: 7000,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '2X2X0X3X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '09/26/2010',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '04/06/2013',
                  dateClosed: '04/06/2013',
                  currentBalance: 0,
                  highCredit: 19122,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 60,
                    scheduledMonthlyPayment: '$395',
                    description: '$395 per month, paid Monthly for 60  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '03/01/2013',
                      text: '11111111111111111X11111111111',
                    },
                    historicalCounters: {
                      monthsReviewedCount: 29,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '04/01/2013',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '5176682260482450_7991189_R',
                  subscriber: {
                    industryCode: 'BC',
                    memberCode: 7991189,
                    name: {
                      unparsed: 'HOUSEHOLD BANK MC',
                    },
                    address: {
                      street: {
                        unparsed: ['*****MAIL RETURN 3/92****', 'PO BOX 7460'],
                      },
                      location: {
                        unparsed: 'SALINAS, CA 93902',
                        city: 'SALINAS',
                        state: 'CA',
                        zipCode: 93902,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(408) 754-1400',
                        areaCode: 408,
                        exchange: 754,
                        suffix: 1400,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 5176682260482450,
                  ECOADesignator: 'individual',
                  dateOpened: '07/15/2015',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '02/29/2016',
                  dateClosed: '02/09/2016',
                  datePaidOut: '09/10/2015',
                  currentBalance: 0,
                  highCredit: 237,
                  creditLimit: 1500,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    description: '',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '01/01/2016',
                      text: 111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 6,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '09/10/2015',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Individual Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '6004381749203114_235198F_R',
                  subscriber: {
                    industryCode: 'BZ',
                    memberCode: '235198F',
                    name: {
                      unparsed: 'HSBC MENARDS',
                    },
                    address: {
                      street: {
                        unparsed: 'POB 5253',
                      },
                      location: {
                        unparsed: 'CAROL STREAM, IL 60197',
                        city: 'CAROL STREAM',
                        state: 'IL',
                        zipCode: 60197,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 695-6950',
                        areaCode: 800,
                        exchange: 695,
                        suffix: 6950,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 6004381749203114,
                  ECOADesignator: 'individual',
                  dateOpened: '02/11/2016',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '04/25/2021',
                  datePaidOut: '02/26/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    description: 'Paid Monthly',
                  },
                  account: {
                    code: 'CH',
                    description: 'CHARGE ACCOUNT',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '04/01/2021',
                      text: 1.1111111111111111e61,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 62,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '02/26/2021',
                    description: '02/26/2021 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Individual Account',
                  histHighCreditStmt: 'High balance of $2,959 from 05/2020 to 04/2021',
                  histCreditLimitStmt: 'Credit limit of $3,005 from 05/2020 to 04/2021',
                  histPaymentDueList: ';0;25;25;16;25;25;25;25;25;12;10',
                  histPaymentAmtList: '0;1155;25;100;100;50;0;0;0;0;0;0',
                  histBalanceList: '0;0;1154;1179;1279;1377;1423;1469;325;369;411;379',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4301011685303639_4009007_R',
                  subscriber: {
                    industryCode: 'QU',
                    memberCode: 4009007,
                    name: {
                      unparsed: 'NATIONWIDE BANK',
                    },
                    address: {
                      street: {
                        unparsed: '1 NATIONWIDE PLZ',
                      },
                      location: {
                        unparsed: 'COLUMBUS, OH 43215-2220',
                        city: 'COLUMBUS',
                        state: 'OH',
                        zipCode: 43215,
                        zipExt: 2220,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(614) 249-6226',
                        areaCode: 614,
                        exchange: 249,
                        suffix: 6226,
                      },
                    },
                  },
                  portfolioType: 'revolving',
                  accountNumber: 4301011685303639,
                  ECOADesignator: 'authorizedUser',
                  dateOpened: '05/31/2021',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '10/19/2021',
                  accountRating: 1,
                  terms: {
                    paymentFrequency: 'monthly',
                    scheduledMonthlyPayment: '$50',
                    description: '$50 per month, paid Monthly',
                  },
                  account: {
                    code: 'CC',
                    description: 'CREDIT CARD',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '10/01/2021',
                      text: 1111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 4,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$100',
                    date: '10/13/2021',
                    description: '10/13/2021 ($100)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Current; Paid or Paying as Agreed',
                  portfolioTypeDescription: 'Revolving Account',
                  ECOADesignatorDescription: 'Authorized Account',
                  histHighCreditStmt:
                    'High balance of $1,002 from 07/2021 to 07/2021; $1,145 from 08/2021 to 08/2021; $1,730 from 09/2021 to 10/2021',
                  histCreditLimitStmt: 'Credit limit of $1,750 from 07/2021 to 10/2021',
                  histPaymentDueList: '50;50;50;50',
                  histPaymentAmtList: '100;163;100;0',
                  histBalanceList: '1622;1722;1044;1002',
                  histPastDueList: '0;0;0;0',
                  histRemarkList: '',
                  isCollection: false,
                },
                {
                  itemKey: '4X8X0X5X2_1MSZ001_M',
                  subscriber: {
                    industryCode: 'FF',
                    memberCode: '1MSZ001',
                    name: {
                      unparsed: 'OCWEN/GMAC MORTGAGE',
                    },
                    address: {
                      street: {
                        unparsed: 'POB 4622',
                      },
                      location: {
                        unparsed: 'WATERLOO, IA 50704-4622',
                        city: 'WATERLOO',
                        state: 'IA',
                        zipCode: 50704,
                        zipExt: 4622,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 766-4622',
                        areaCode: 800,
                        exchange: 766,
                        suffix: 4622,
                      },
                    },
                  },
                  portfolioType: 'mortgage',
                  accountNumber: '4X8X0X5X2',
                  ECOADesignator: 'participant',
                  dateOpened: '03/25/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '06/30/2016',
                  dateClosed: '06/30/2016',
                  currentBalance: 0,
                  highCredit: 70550,
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 360,
                    scheduledMonthlyPayment: '$638',
                    description: '$638 per month, paid Monthly for 360  months',
                  },
                  account: {
                    code: 'CV',
                    description: 'CONVENTIONAL REAL ESTATE MTG',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '05/01/2016',
                      text: 111111111111111110000,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 21,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    date: '05/06/2016',
                    description: '',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Mortgage Account',
                  ECOADesignatorDescription: 'Participant on Account',
                  histPaymentDueList: '',
                  histPaymentAmtList: '',
                  histBalanceList: '',
                  histPastDueList: '',
                  isCollection: false,
                },
                {
                  itemKey: '2X2X3X5X5X_7421059_I',
                  subscriber: {
                    industryCode: 'BB',
                    memberCode: 7421059,
                    name: {
                      unparsed: 'RBS CITIZENS NA',
                    },
                    address: {
                      street: {
                        unparsed: '480 JEFFERSON BLVD',
                      },
                      location: {
                        unparsed: 'WARWICK, RI 02886-1359',
                        city: 'WARWICK',
                        state: 'RI',
                        zipCode: 2886,
                        zipExt: 1359,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(800) 610-7300',
                        areaCode: 800,
                        exchange: 610,
                        suffix: 7300,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '2X2X3X5X5X',
                  ECOADesignator: 'jointContractLiability',
                  dateOpened: '12/31/2018',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '03/14/2020',
                  dateClosed: '03/14/2020',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 72,
                    scheduledMonthlyPayment: '$799',
                    description: '$799 per month, paid Monthly for 72  months',
                  },
                  account: {
                    code: 'AU',
                    description: 'AUTOMOBILE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '03/01/2020',
                      text: 111111111111111,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 15,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$41,647',
                    date: '03/09/2020',
                    description: '03/09/2020 ($41,647)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Joint Account',
                  histHighCreditStmt: 'High balance of $48,321 from 05/2019 to 03/2020',
                  histPaymentDueList: '799;799;799;799;799;799;799;799;799;799;799',
                  histPaymentAmtList: '41647;800;800;800;800;800;800;800;800;800;800',
                  histBalanceList: '0;41594;42188;42778;43372;43957;44546;45126;45723;46297;46867',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0',
                  isCollection: false,
                },
                {
                  itemKey: '5X1X4X0X0X_864N004_I',
                  subscriber: {
                    industryCode: 'BB',
                    memberCode: '864N004',
                    name: {
                      unparsed: 'tbk bank ssb',
                    },
                    address: {
                      street: {
                        unparsed: '852 MIDDLE ROAD',
                      },
                      location: {
                        unparsed: 'BETTENDORF, IA 52722-0018',
                        city: 'BETTENDORF',
                        state: 'IA',
                        zipCode: 52722,
                        zipExt: 18,
                      },
                    },
                    phone: {
                      number: {
                        unparsed: '(319) 344-3935',
                        areaCode: 319,
                        exchange: 344,
                        suffix: 3935,
                      },
                    },
                  },
                  portfolioType: 'installment',
                  accountNumber: '5X1X4X0X0X',
                  ECOADesignator: 'participant',
                  dateOpened: '10/06/2014',
                  dateEffectiveLabel: 'DateUpdated',
                  dateEffective: '08/18/2020',
                  dateClosed: '08/18/2020',
                  accountRating: 1,
                  remark: {
                    code: 'CLO',
                    type: 'ratingHistory',
                    description: 'CLOSED',
                  },
                  terms: {
                    paymentFrequency: 'monthly',
                    paymentScheduleMonthCount: 144,
                    scheduledMonthlyPayment: '$216',
                    description: '$216 per month, paid Monthly for 144  months',
                  },
                  account: {
                    code: 'RD',
                    description: 'RECREATIONAL MERCHANDISE',
                  },
                  paymentHistory: {
                    paymentPattern: {
                      startDate: '08/01/2020',
                      text: 1.1111111111111112e69,
                    },
                    historicalCounters: {
                      monthsReviewedCount: 70,
                      late30DaysTotal: 0,
                      late60DaysTotal: 0,
                      late90DaysTotal: 0,
                    },
                  },
                  mostRecentPayment: {
                    amount: '$0',
                    date: '08/18/2020',
                    description: '08/18/2020 ($0)',
                  },
                  additionalTradeAccount: {
                    original: '',
                  },
                  suppressionFlag: false,
                  adverseFlag: false,
                  accountRatingDescription: 'Paid, Closed; was Paid as agreed',
                  portfolioTypeDescription: 'Installment Account',
                  ECOADesignatorDescription: 'Participant on Account',
                  histHighCreditStmt: 'High balance of $18,119 from 05/2019 to 08/2020',
                  histPaymentDueList: '216;216;216;216;216;216;216;216;216;216;216;216;216;216;216;216',
                  histPaymentAmtList: '0;220;220;220;220;220;440;0;220;440;0;220;440;220;0;220',
                  histBalanceList:
                    '0;11397;11510;11660;11745;11900;11985;12119;12282;12357;12505;12635;12726;12848;12968;13113',
                  histPastDueList: '0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0',
                  isCollection: false,
                },
              ],
              inquiries: {
                creditFileInquiry: [
                  {
                    order: 1,
                    ECOADesignator: {
                      code: 'I',
                      description: 'Individual',
                    },
                    subscriber: {
                      subscriberType: 'member',
                      memMktSubMktCde: 3314,
                      memSubCode: 'B2699824',
                      industryCode: 'B',
                      name: {
                        organization: 'CAPITAL ONE BANK USA NA',
                      },
                      address: {
                        street: {
                          unparsed: 'PO BOX  30281',
                        },
                        location: {
                          unparsed: 'SALT LAKE CITY, UT 84130',
                          city: 'SALT LAKE CITY',
                          state: 'UT',
                          zipCode: 84130,
                        },
                      },
                      phone: {
                        unparsed: '(800) 955-7070',
                        areaCode: 800,
                        exchange: 955,
                        suffix: 7070,
                        extension: '',
                      },
                    },
                    dates: '05/03/2021',
                  },
                  {
                    order: 2,
                    ECOADesignator: {
                      code: 'I',
                      description: 'Individual',
                    },
                    subscriber: {
                      subscriberType: 'member',
                      memMktSubMktCde: 609,
                      memSubCode: 'F0609018',
                      industryCode: 'F',
                      name: {
                        organization: 'DISCOVER FINANCIAL SVCS',
                      },
                      address: {
                        street: {
                          unparsed: '2500 LAKE COOK RD,',
                        },
                        location: {
                          unparsed: 'RIVERWOODS, IL 60015',
                          city: 'RIVERWOODS',
                          state: 'IL',
                          zipCode: 60015,
                        },
                      },
                      phone: {
                        unparsed: '(800) 347-2683',
                        areaCode: 800,
                        exchange: 347,
                        suffix: 2683,
                        extension: '',
                      },
                    },
                    dates: '12/08/2020',
                  },
                  {
                    order: 3,
                    ECOADesignator: {
                      code: 'P',
                      description: 'Participant',
                    },
                    subscriber: {
                      subscriberType: 'member',
                      memMktSubMktCde: 600,
                      memSubCode: 'Z0008281',
                      industryCode: 'Z',
                      name: {
                        organization: 'EQUIFAX MORTGAGE SERVICE',
                      },
                      address: {
                        street: {
                          unparsed: ['6 E CLEMENTON RD', 'SUITE A-2'],
                        },
                        location: {
                          unparsed: 'GIBBSBORO, NJ 08026',
                          city: 'GIBBSBORO',
                          state: 'NJ',
                          zipCode: 8026,
                        },
                      },
                      phone: {
                        unparsed: '(800) 333-0037',
                        areaCode: 800,
                        exchange: 333,
                        suffix: 37,
                        extension: '',
                      },
                    },
                    requestor: {
                      organization: 'DUPACO COMMUNITY CU',
                    },
                    dates: '01/20/2020',
                    permissiblePurpose: {
                      code: 'CT',
                      description: 'CREDIT TRANSACTION',
                    },
                  },
                  {
                    order: 4,
                    ECOADesignator: {
                      code: 'C',
                      description: 'Joint',
                    },
                    subscriber: {
                      subscriberType: 'member',
                      memMktSubMktCde: 728,
                      memSubCode: 'Q4861913',
                      industryCode: 'Q',
                      name: {
                        organization: 'DUTRAC COMMUNITY CU',
                      },
                      address: {
                        street: {
                          unparsed: '3465 ASBURY RD',
                        },
                        location: {
                          unparsed: 'DUBUQUE, IA 52001',
                          city: 'DUBUQUE',
                          state: 'IA',
                          zipCode: 52001,
                        },
                      },
                      phone: {
                        unparsed: '(563) 557-5001',
                        areaCode: 563,
                        exchange: 557,
                        suffix: 5001,
                        extension: '',
                      },
                    },
                    requestor: {
                      organization: 'BUSINESS',
                    },
                    dates: '12/27/2019',
                    permissiblePurpose: {
                      code: 'CT',
                      description: 'CREDIT TRANSACTION',
                    },
                  },
                ],
              },
              histRemarkLegend: '',
            },
          },
          addOnProduct: {
            scoreModel: {
              score: {
                name: {
                  person: {
                    unparsed: 'ROBIN K. WOLPER',
                    first: 'ROBIN',
                    middle: 'K',
                    last: 'WOLPER',
                    order: 1,
                  },
                },
                productCode: '00W40',
                score: 11,
                scoreGrade: '-',
                scoreDate: '11/04/2021',
                quantitativeGraphNumber: -1,
                populationGraphNumber: 50,
                populationDescription: 'Your credit ranks higher than --% of the nation&#x27;s population.',
                summaryDescription:
                  'You did not order a TransUnion credit score. You can purchase your credit score for $9.95 by calling 1-866-SCORE-TU or 1-866-726-7388.',
              },
            },
            highRiskFraudAlert: {
              message: {
                text: '',
              },
            },
            militaryLendingActSearch: {
              searchStatus: 'noMatch',
            },
          },
          closingInfo: {
            mail: {
              unparsed: 'TransUnion Consumer Relations',
            },
            address: {
              street: {
                unparsed: 'P.O. Box 2000',
              },
              location: {
                unparsed: 'Chester, PA 19016-2000',
              },
              order: 1,
            },
            phone: {
              number: {
                unparsed: '(800) 916-8800',
              },
            },
            contactURL: 'www.transunion.com',
            disputeURL: 'www.transunion.com/disputeonline',
          },
          fileNumber: 960028482,
          consumerID: 800001212473,
          fileDate: '11/04/2021',
          dynamicText: {
            personalInfoDetail: {
              type: 1,
              text: 'Your SSN has been masked for your protection.',
            },
            accountDetail: [
              {
                type: 2,
                text: '',
              },
              {
                text:
                  'The following accounts are reported with no adverse information. For your protection, your account numbers have been partially masked, and in some cases scrambled.',
              },
              {
                text:
                  'Please note: Accounts are reported as &#x26;quot;Current; Paid or paying as agreed&#x26;quot; if paid within 30 days of the due date. Accounts reported as Current may still incur late fees or interest charges if not paid on or before the due date.',
              },
            ],
            regInquiryDetail: {
              type: 2,
              text:
                'Regular Inquiries are posted when someone accesses your credit information from TransUnion. The presence of an inquiry means that the company listed received your credit information on the dates specified. These inquiries will remain on your credit file for up to 2 years.',
            },
          },
        },
        fullDisclFlag: 'N',
      },
    },
  },
};
