const GET_INVESTIGATION_RESULTS_PARTIAL_PARSE = {
  GetInvestigationResultsResult: {
    AccountName: 'CCSIntegration',
    ErrorResponse: {
      nil: true,
    },
    RequestKey: 'f214bb46-e1db-47a0-9e12-8aa90e5a922b',
    ResponseType: 'Success',
    ClientKey: 'f8f12125-6686-4431-9f70-991da2b39f40',
    CreditBureau: {
      creditBureau: {
        version: 2,
        transactionControl: {
          tracking: {
            transactionTimeStamp: '2018-03-09T13:38:31.131-06:00',
            language: 'en',
            identifier: {
              fin: 300010987,
              activityNumber: 109,
              partyId: 1078425505,
            },
            responseCode: 0,
            responseMessage: 'Success',
          },
        },
        productArray: {
          product: {
            code: 7001,
            subject: {
              fileAccessCode: '*** 300010987-109 ***',
              enclosures: {
                codes: [
                  {
                    code: 28,
                    type: 0,
                    versionNo: 1,
                  },
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
                    unparsed: 'DORA G. JULIEN',
                  },
                  address: {
                    street: {
                      unparsed: 'PO BOX 384',
                    },
                    location: {
                      unparsed: 'BRAHAM, MN 55006-0384',
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
                  inFileSinceDate: '06/25/2006',
                  disclosureCoverInfo: {
                    coverCode: 15,
                    versionNo: 1,
                    disputeURL: 'www.transunion.com/disputeonline',
                    summarySection: {
                      lineItem: [
                        {
                          itemKey: '9X4X6X3_4871356_7X',
                          itemType: 14,
                          credit: {
                            item: {
                              itemName: 'CHAPTER 7 BANKRUPTCY DISCHARGED',
                              subscriber: {
                                name: {
                                  unparsed: 'MINNESOTA FEDERAL COURT-',
                                },
                                address: {
                                  street: {
                                    unparsed: '300 S 4TH STREET',
                                  },
                                  location: {
                                    unparsed: 'MINNEAPOLIS, MN 55415',
                                    city: 'MINNEAPOLIS',
                                    state: 'MN',
                                    zipCode: 55415,
                                  },
                                },
                                phone: {
                                  unparsed: '(612) 664-5200',
                                  areaCode: 612,
                                  exchange: 664,
                                  suffix: 5200,
                                },
                              },
                            },
                            description: {
                              descriptionText: 'DOCKET# 9X4X6X3',
                            },
                            result: 'VERIFIED AS ACCURATE',
                          },
                        },
                        {
                          itemKey: '5X5X2X1X7X0X0_1972038_R',
                          itemType: 13,
                          credit: {
                            item: {
                              subscriber: {
                                name: {
                                  unparsed: 'JC PENNEY',
                                },
                                address: {
                                  street: {
                                    unparsed: 'PO BOX 981026',
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
                                  unparsed: '(800) 542-0800',
                                  areaCode: 800,
                                  exchange: 542,
                                  suffix: 800,
                                },
                              },
                            },
                            description: {
                              descriptionText: '# 5X5X2X1X7X0X0',
                            },
                            result: 'DELETED',
                          },
                        },
                      ],
                    },
                    resellerOperatorId: '',
                  },
                },
                indicative: {
                  name: {
                    person: {
                      unparsed: 'DORA G. JULIEN',
                      first: 'DORA',
                      middle: 'G',
                      last: 'JULIEN',
                      order: 1,
                    },
                  },
                  address: {
                    street: {
                      unparsed: 'PO BOX 384',
                      number: 384,
                      name: 'PO BOX',
                    },
                    location: {
                      unparsed: 'BRAHAM, MN 55006-0384',
                      city: 'BRAHAM',
                      state: 'MN',
                      zipCode: 55006,
                      zipExt: 384,
                    },
                    dateReported: '09/02/2015',
                    order: 1,
                  },
                  socialSecurity: {
                    number: '471-86-6871',
                    order: 1,
                  },
                },
                custom: {
                  credit: {
                    trade: {
                      itemKey: '4X2X7X1X9X2X5X6X_927P029_R',
                      subscriber: {
                        industryCode: 'BY',
                        memberCode: '927P029',
                        name: {
                          unparsed: 'CARD PRODUCTS',
                        },
                        address: {
                          street: {
                            unparsed: 'PO BOX 563966',
                          },
                          location: {
                            unparsed: 'CHARLOTTE, NC 28256-0001',
                            city: 'CHARLOTTE',
                            state: 'NC',
                            zipCode: 28256,
                            zipExt: 1,
                          },
                        },
                        phone: {
                          number: {
                            unparsed: 'Phone number not available',
                          },
                        },
                      },
                      portfolioType: 'revolving',
                      accountNumber: '4X2X7X1X9X2X5X6X',
                      ECOADesignator: 'individual',
                      dateOpened: '06/16/2013',
                      dateEffectiveLabel: 'DateUpdated',
                      dateEffective: '11/05/2016',
                      dateClosed: '09/26/2015',
                      highCredit: 4930,
                      accountRating: 'BK',
                      remark: {
                        code: 'BKL',
                        type: 'affiliate',
                        description: {
                          '#text': '>INCLUDED IN BANKRUPTCY',
                          description: '',
                          terms: {
                            description: '',
                          },
                          account: {
                            code: 'CC',
                            description: 'CREDIT CARD',
                          },
                          paymentHistory: '',
                          mostRecentPayment: {
                            date: '05/31/2015',
                            description: '',
                          },
                          additionalTradeAccount: {
                            original: '',
                          },
                          suppressionFlag: false,
                          adverseFlag: true,
                          estimatedDeletionDate: '10/2022',
                          accountRatingDescription: {
                            '#text': '>Account Included in Bankruptcy',
                            accountRatingDescription: {
                              portfolioTypeDescription: 'Revolving Account',
                              ECOADesignatorDescription: 'Individual Account',
                              histPaymentDueList: '',
                              histPaymentAmtList: '',
                              histBalanceList: '',
                              histPastDueList: '',
                              histRemarkList: '',
                              isCollection: false,
                            },
                            trade: {
                              itemKey: '4X2X1X0X2X0X5X0X_402D013_R',
                              subscriber: {
                                industryCode: 'BC',
                                memberCode: '402D013',
                                name: {
                                  unparsed: 'CHASE NA',
                                },
                                address: {
                                  street: {
                                    unparsed: '880 BROOKS EDGE BLVD',
                                  },
                                  location: {
                                    unparsed: 'WESTERVILLE, OH 43081',
                                    city: 'WESTERVILLE',
                                    state: 'OH',
                                    zipCode: 43081,
                                  },
                                },
                                phone: {
                                  number: {
                                    unparsed: 'Phone number not available',
                                  },
                                },
                              },
                              portfolioType: 'revolving',
                              accountNumber: '4X2X1X0X2X0X5X0X',
                              ECOADesignator: 'individual',
                              dateOpened: '02/08/2013',
                              dateEffectiveLabel: 'DateUpdated',
                              dateEffective: '11/04/2015',
                              dateClosed: '08/01/2015',
                              datePaidOut: '10/13/2015',
                              currentBalance: 0,
                              highCredit: 4666,
                              creditLimit: 4600,
                              accountRating: 'BK',
                              remark: {
                                code: 'CBL',
                                type: 'affiliate',
                                description: {
                                  '#text': '>CHAPTER 7 BANKRUPTCY',
                                  description: '',
                                  terms: {
                                    description: '',
                                  },
                                  paymentHistory: '',
                                  mostRecentPayment: {
                                    date: '07/19/2015',
                                    description: '',
                                  },
                                  additionalTradeAccount: {
                                    original: '',
                                  },
                                  suppressionFlag: false,
                                  adverseFlag: true,
                                  estimatedDeletionDate: '04/2022',
                                  accountRatingDescription: {
                                    '#text': '>Account Included in Bankruptcy',
                                    accountRatingDescription: {
                                      portfolioTypeDescription: 'Revolving Account',
                                      ECOADesignatorDescription: 'Individual Account',
                                      histPaymentDueList: '',
                                      histPaymentAmtList: '',
                                      histBalanceList: '',
                                      histPastDueList: '',
                                      histRemarkList: '',
                                      isCollection: false,
                                    },
                                    trade: {
                                      itemKey: '5X9X5X9X0X1X1X9X_8194006_R',
                                      subscriber: {
                                        industryCode: 'BC',
                                        memberCode: 8194006,
                                        name: {
                                          unparsed: 'CITIBANK UCS',
                                        },
                                        address: {
                                          street: {
                                            unparsed: '701 E 60TH ST N',
                                          },
                                          location: {
                                            unparsed: 'SIOUX FALLS, SD 57104',
                                            city: 'SIOUX FALLS',
                                            state: 'SD',
                                            zipCode: 57104,
                                          },
                                        },
                                        phone: {
                                          number: {
                                            unparsed: '(904) 954-7500',
                                            areaCode: 904,
                                            exchange: 954,
                                            suffix: 7500,
                                          },
                                        },
                                      },
                                      portfolioType: 'revolving',
                                      accountNumber: '5X9X5X9X0X1X1X9X',
                                      ECOADesignator: 'individual',
                                      dateOpened: '01/25/2010',
                                      dateEffectiveLabel: 'DateUpdated',
                                      dateEffective: '07/27/2017',
                                      dateClosed: '08/05/2015',
                                      highCredit: 6730,
                                      creditLimit: 6500,
                                      accountRating: 'BK',
                                      remark: {
                                        code: 'BKL',
                                        type: 'affiliate',
                                        description: {
                                          '#text': '>INCLUDED IN BANKRUPTCY',
                                          description: '',
                                          terms: {
                                            description: '',
                                          },
                                          account: {
                                            code: 'CC',
                                            description: 'CREDIT CARD',
                                          },
                                          paymentHistory: '',
                                          mostRecentPayment: {
                                            date: '07/23/2015',
                                            description: '',
                                          },
                                          additionalTradeAccount: {
                                            original: '',
                                          },
                                          suppressionFlag: false,
                                          adverseFlag: true,
                                          estimatedDeletionDate: '04/2022',
                                          accountRatingDescription: {
                                            '#text': '>Account Included in Bankruptcy',
                                            accountRatingDescription: {
                                              portfolioTypeDescription: 'Revolving Account',
                                              ECOADesignatorDescription: 'Individual Account',
                                              histPaymentDueList: '',
                                              histPaymentAmtList: '',
                                              histBalanceList: '',
                                              histPastDueList: '',
                                              histRemarkList: '',
                                              isCollection: false,
                                            },
                                            trade: {
                                              itemKey: '6X1X0X7X0X0X5X6X_9616003_R',
                                              subscriber: {
                                                industryCode: 'BC',
                                                memberCode: 9616003,
                                                name: {
                                                  unparsed: 'DISCOVER FINCL SVC LLC',
                                                },
                                                address: {
                                                  street: {
                                                    unparsed: ['1072 SW 101 St', 'Test 68'],
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
                                              accountNumber: '6X1X0X7X0X0X5X6X',
                                              ECOADesignator: 'individual',
                                              dateOpened: '02/18/2011',
                                              dateEffectiveLabel: 'DateUpdated',
                                              dateEffective: '05/21/2017',
                                              dateClosed: '04/04/2015',
                                              currentBalance: 0,
                                              highCredit: 3944,
                                              accountRating: 'BK',
                                              remark: {
                                                code: 'BKL',
                                                type: 'affiliate',
                                                description: {
                                                  '#text': '>INCLUDED IN BANKRUPTCY',
                                                  description: '',
                                                  terms: {
                                                    description: '',
                                                  },
                                                  account: {
                                                    code: 'CC',
                                                    description: 'CREDIT CARD',
                                                  },
                                                  paymentHistory: '',
                                                  mostRecentPayment: {
                                                    date: '03/22/2015',
                                                    description: '',
                                                  },
                                                  additionalTradeAccount: {
                                                    original: '',
                                                  },
                                                  suppressionFlag: false,
                                                  adverseFlag: true,
                                                  estimatedDeletionDate: '02/2020',
                                                  accountRatingDescription: {
                                                    '#text': '>Account Included in Bankruptcy',
                                                    accountRatingDescription: {
                                                      portfolioTypeDescription: 'Revolving Account',
                                                      ECOADesignatorDescription: 'Individual Account',
                                                      histPaymentDueList: '',
                                                      histPaymentAmtList: '',
                                                      histBalanceList: '',
                                                      histPastDueList: '',
                                                      histRemarkList: '',
                                                      isCollection: false,
                                                    },
                                                    trade: {
                                                      itemKey: '4X0X0X9X8X6X7X6X_3429001_R',
                                                      subscriber: {
                                                        industryCode: 'BC',
                                                        memberCode: 3429001,
                                                        name: {
                                                          unparsed: 'FIRST USA BANK',
                                                        },
                                                        address: {
                                                          street: {
                                                            unparsed: '2500 WESTFIELD DR',
                                                          },
                                                          location: {
                                                            unparsed: 'ELGIN, IL 60124',
                                                            city: 'ELGIN',
                                                            state: 'IL',
                                                            zipCode: 60124,
                                                          },
                                                        },
                                                        phone: {
                                                          number: {
                                                            unparsed: '(800) 283-1211',
                                                            areaCode: 800,
                                                            exchange: 283,
                                                            suffix: 1211,
                                                          },
                                                        },
                                                      },
                                                      portfolioType: 'revolving',
                                                      accountNumber: '4X0X0X9X8X6X7X6X',
                                                      ECOADesignator: 'individual',
                                                      dateOpened: '10/11/2013',
                                                      dateEffectiveLabel: 'DateUpdated',
                                                      dateEffective: '07/26/2017',
                                                      dateClosed: '11/18/2013',
                                                      highCredit: 5551,
                                                      creditLimit: 5400,
                                                      accountRating: 'BK',
                                                      remark: {
                                                        code: 'BKL',
                                                        type: 'affiliate',
                                                        description: {
                                                          '#text': '>INCLUDED IN BANKRUPTCY',
                                                          description: '',
                                                          terms: {
                                                            description: '',
                                                          },
                                                          paymentHistory: '',
                                                          mostRecentPayment: {
                                                            description: '',
                                                          },
                                                          additionalTradeAccount: {
                                                            original: '',
                                                          },
                                                          suppressionFlag: false,
                                                          adverseFlag: true,
                                                          estimatedDeletionDate: '07/2020',
                                                          accountRatingDescription: {
                                                            '#text': '>Account Included in Bankruptcy',
                                                            accountRatingDescription: {
                                                              portfolioTypeDescription: 'Revolving Account',
                                                              ECOADesignatorDescription: 'Individual Account',
                                                              histPaymentDueList: '',
                                                              histPaymentAmtList: '',
                                                              histBalanceList: '',
                                                              histPastDueList: '',
                                                              histRemarkList: '',
                                                              isCollection: false,
                                                            },
                                                            trade: [
                                                              {
                                                                itemKey: '5X2X1X0X6X6X5X3X_64DB002_R',
                                                                subscriber: {
                                                                  industryCode: 'BC',
                                                                  memberCode: '64DB002',
                                                                  name: {
                                                                    unparsed: 'ITT FIN',
                                                                  },
                                                                  address: {
                                                                    street: {
                                                                      unparsed: 'PO BOX 6241',
                                                                    },
                                                                    location: {
                                                                      unparsed: 'SOUIX FALLS, SD 57117',
                                                                      city: 'SOUIX FALLS',
                                                                      state: 'SD',
                                                                      zipCode: 57117,
                                                                    },
                                                                  },
                                                                  phone: {
                                                                    number: {
                                                                      unparsed: 'Phone number not available',
                                                                    },
                                                                  },
                                                                },
                                                                portfolioType: 'revolving',
                                                                accountNumber: '5X2X1X0X6X6X5X3X',
                                                                ECOADesignator: 'individual',
                                                                dateOpened: '07/12/2005',
                                                                dateEffectiveLabel: 'DateUpdated',
                                                                dateEffective: '11/07/2011',
                                                                datePaidOut: '06/27/2011',
                                                                currentBalance: 0,
                                                                highCredit: 2100,
                                                                creditLimit: 2100,
                                                                accountRating: 1,
                                                                remark: {
                                                                  code: 'CBC',
                                                                  type: 'compliance',
                                                                  description: 'ACCOUNT CLOSED BY CONSUMER',
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
                                                                    startDate: '10/01/2011',
                                                                    text: 1111111111,
                                                                  },
                                                                  historicalCounters: {
                                                                    monthsReviewedCount: 10,
                                                                    late30DaysTotal: 0,
                                                                    late60DaysTotal: 0,
                                                                    late90DaysTotal: 0,
                                                                  },
                                                                },
                                                                mostRecentPayment: {
                                                                  date: '06/25/2011',
                                                                  description: '',
                                                                },
                                                                additionalTradeAccount: {
                                                                  original: '',
                                                                },
                                                                suppressionFlag: false,
                                                                adverseFlag: false,
                                                                accountRatingDescription:
                                                                  'Current; Paid or Paying as Agreed',
                                                                portfolioTypeDescription: 'Revolving Account',
                                                                ECOADesignatorDescription: 'Individual Account',
                                                                histPaymentDueList: '',
                                                                histPaymentAmtList: '',
                                                                histBalanceList: '',
                                                                histPastDueList: '',
                                                                isCollection: false,
                                                              },
                                                              {
                                                                itemKey: '0X5X1X0X0X8_235007R_R',
                                                                subscriber: {
                                                                  industryCode: 'DZ',
                                                                  memberCode: '235007R',
                                                                  name: {
                                                                    unparsed: 'M.WARD/MBGA',
                                                                  },
                                                                  address: {
                                                                    street: {
                                                                      unparsed: 'PO BOX 29114',
                                                                    },
                                                                    location: {
                                                                      unparsed: 'LENEXA, KS 66215',
                                                                      city: 'LENEXA',
                                                                      state: 'KS',
                                                                      zipCode: 66215,
                                                                    },
                                                                  },
                                                                  phone: {
                                                                    number: {
                                                                      unparsed: 'Phone number not available',
                                                                    },
                                                                  },
                                                                },
                                                                portfolioType: 'revolving',
                                                                accountNumber: '0X5X1X0X0X8',
                                                                ECOADesignator: 'individual',
                                                                dateOpened: '05/10/2012',
                                                                dateEffectiveLabel: 'DateUpdated',
                                                                dateEffective: '11/06/2014',
                                                                currentBalance: 0,
                                                                highCredit: 0,
                                                                creditLimit: 1700,
                                                                accountRating: 1,
                                                                terms: {
                                                                  description: '',
                                                                },
                                                                paymentHistory: {
                                                                  paymentPattern: {
                                                                    startDate: '10/01/2014',
                                                                    text: '111111111111XXXXXXXXXXXXXX1',
                                                                  },
                                                                  historicalCounters: {
                                                                    monthsReviewedCount: 27,
                                                                    late30DaysTotal: 0,
                                                                    late60DaysTotal: 0,
                                                                    late90DaysTotal: 0,
                                                                  },
                                                                },
                                                                mostRecentPayment: {
                                                                  description: '',
                                                                },
                                                                additionalTradeAccount: {
                                                                  original: '',
                                                                },
                                                                suppressionFlag: false,
                                                                adverseFlag: false,
                                                                accountRatingDescription:
                                                                  'Current; Paid or Paying as Agreed',
                                                                portfolioTypeDescription: 'Revolving Account',
                                                                ECOADesignatorDescription: 'Individual Account',
                                                                histPaymentDueList: '',
                                                                histPaymentAmtList: '',
                                                                histBalanceList: '',
                                                                histPastDueList: '',
                                                                histRemarkList: '',
                                                                isCollection: false,
                                                              },
                                                              {
                                                                itemKey: '1X2X1X5X0X0X_6256385_R',
                                                                subscriber: {
                                                                  industryCode: 'DC',
                                                                  memberCode: 6256385,
                                                                  name: {
                                                                    unparsed: 'SEARS ROEBUCK &amp; CO',
                                                                  },
                                                                  address: {
                                                                    street: {
                                                                      unparsed: '13200 SMITH ROAD',
                                                                    },
                                                                    location: {
                                                                      unparsed: 'CLEVELAND, OH 44130-6282',
                                                                      city: 'CLEVELAND',
                                                                      state: 'OH',
                                                                      zipCode: 44130,
                                                                      zipExt: 6282,
                                                                    },
                                                                  },
                                                                  phone: {
                                                                    number: {
                                                                      unparsed: '(800) 326-0115',
                                                                      areaCode: 800,
                                                                      exchange: 326,
                                                                      suffix: 115,
                                                                    },
                                                                  },
                                                                },
                                                                portfolioType: 'revolving',
                                                                accountNumber: '1X2X1X5X0X0X',
                                                                ECOADesignator: 'individual',
                                                                dateOpened: '06/17/2011',
                                                                dateEffectiveLabel: 'DateUpdated',
                                                                dateEffective: '01/14/2012',
                                                                datePaidOut: '10/15/2011',
                                                                currentBalance: 0,
                                                                highCredit: 10,
                                                                creditLimit: 2200,
                                                                accountRating: 1,
                                                                terms: {
                                                                  description: '',
                                                                },
                                                                paymentHistory: {
                                                                  paymentPattern: {
                                                                    startDate: '12/01/2011',
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
                                                                  description: '',
                                                                },
                                                                additionalTradeAccount: {
                                                                  original: '',
                                                                },
                                                                suppressionFlag: false,
                                                                adverseFlag: false,
                                                                accountRatingDescription:
                                                                  'Current; Paid or Paying as Agreed',
                                                                portfolioTypeDescription: 'Revolving Account',
                                                                ECOADesignatorDescription: 'Individual Account',
                                                                histPaymentDueList: '',
                                                                histPaymentAmtList: '',
                                                                histBalanceList: '',
                                                                histPastDueList: '',
                                                                histRemarkList: '',
                                                                isCollection: false,
                                                              },
                                                              {
                                                                itemKey: '5X7X6X2X6X0X_930N133_R',
                                                                subscriber: {
                                                                  industryCode: 'FF',
                                                                  memberCode: '930N133',
                                                                  name: {
                                                                    unparsed: 'TRANSAMERICA BANK',
                                                                  },
                                                                  address: {
                                                                    street: {
                                                                      unparsed: 'POB 130',
                                                                    },
                                                                    location: {
                                                                      unparsed: 'CRYSTAL LAKE, IL 60139',
                                                                      city: 'CRYSTAL LAKE',
                                                                      state: 'IL',
                                                                      zipCode: 60139,
                                                                    },
                                                                  },
                                                                  phone: {
                                                                    number: {
                                                                      unparsed: 'Phone number not available',
                                                                    },
                                                                  },
                                                                },
                                                                portfolioType: 'revolving',
                                                                accountNumber: '5X7X6X2X6X0X',
                                                                ECOADesignator: 'individual',
                                                                dateOpened: '03/03/2012',
                                                                dateEffectiveLabel: 'DateUpdated',
                                                                dateEffective: '01/13/2017',
                                                                dateClosed: '08/03/2015',
                                                                highCredit: 1056,
                                                                creditLimit: 3500,
                                                                accountRating: 'BK',
                                                                remark: {
                                                                  code: 'BKL',
                                                                  type: 'affiliate',
                                                                  description: {
                                                                    '#text': '>INCLUDED IN BANKRUPTCY',
                                                                    description: '',
                                                                    terms: {
                                                                      description: '',
                                                                    },
                                                                    account: {
                                                                      code: 'CH',
                                                                      description: 'CHARGE ACCOUNT',
                                                                    },
                                                                    paymentHistory: '',
                                                                    mostRecentPayment: {
                                                                      date: '12/11/2016',
                                                                      description: '',
                                                                    },
                                                                    additionalTradeAccount: {
                                                                      original: '',
                                                                    },
                                                                    suppressionFlag: false,
                                                                    adverseFlag: true,
                                                                    estimatedDeletionDate: '06/2022',
                                                                    accountRatingDescription: {
                                                                      '#text': '>Account Included in Bankruptcy',
                                                                      accountRatingDescription: {
                                                                        portfolioTypeDescription: 'Revolving Account',
                                                                        ECOADesignatorDescription: 'Individual Account',
                                                                        histPaymentDueList: '',
                                                                        histPaymentAmtList: '',
                                                                        histBalanceList: '',
                                                                        histPastDueList: '',
                                                                        histRemarkList: '',
                                                                        isCollection: false,
                                                                      },
                                                                      trade: {
                                                                        itemKey: '4X1X1X0X1X2X2X7X_3763001_R',
                                                                        subscriber: {
                                                                          industryCode: 'BC',
                                                                          memberCode: 3763001,
                                                                          name: {
                                                                            unparsed: 'WACHOVIA-BANKCARD',
                                                                          },
                                                                          address: {
                                                                            street: {
                                                                              unparsed: 'PO BOX 3117',
                                                                            },
                                                                            location: {
                                                                              unparsed: 'WINSTON-SALEM, NC 27102',
                                                                              city: 'WINSTON-SALEM',
                                                                              state: 'NC',
                                                                              zipCode: 27102,
                                                                            },
                                                                          },
                                                                          phone: {
                                                                            number: {
                                                                              unparsed: 'Phone number not available',
                                                                            },
                                                                          },
                                                                        },
                                                                        portfolioType: 'revolving',
                                                                        accountNumber: '4X1X1X0X1X2X2X7X',
                                                                        ECOADesignator: 'individual',
                                                                        dateOpened: '10/10/2013',
                                                                        dateEffectiveLabel: 'DateUpdated',
                                                                        dateEffective: '09/19/2017',
                                                                        dateClosed: '08/02/2015',
                                                                        highCredit: 0,
                                                                        accountRating: 'BK',
                                                                        remark: {
                                                                          code: 'CBL',
                                                                          type: 'affiliate',
                                                                          description: {
                                                                            '#text': '>CHAPTER 7 BANKRUPTCY',
                                                                            description: '',
                                                                            terms: {
                                                                              description: '',
                                                                            },
                                                                            account: {
                                                                              code: 'CC',
                                                                              description: 'CREDIT CARD',
                                                                            },
                                                                            paymentHistory: '',
                                                                            mostRecentPayment: {
                                                                              date: '07/20/2015',
                                                                              description: '',
                                                                            },
                                                                            additionalTradeAccount: {
                                                                              original: '',
                                                                            },
                                                                            suppressionFlag: false,
                                                                            adverseFlag: true,
                                                                            estimatedDeletionDate: '10/2022',
                                                                            accountRatingDescription: {
                                                                              '#text':
                                                                                '>Account Included in Bankruptcy',
                                                                              accountRatingDescription: {
                                                                                portfolioTypeDescription:
                                                                                  'Revolving Account',
                                                                                ECOADesignatorDescription:
                                                                                  'Individual Account',
                                                                                histPaymentDueList: '',
                                                                                histPaymentAmtList: '',
                                                                                histBalanceList: '',
                                                                                histPastDueList: '',
                                                                                histRemarkList: '',
                                                                                isCollection: false,
                                                                              },
                                                                              publicRecord: {
                                                                                itemKey: '9X4X6X3_4871356_7X',
                                                                                type: '7X',
                                                                                subscriber: {
                                                                                  industryCode: 'ZP',
                                                                                  memberCode: 4871356,
                                                                                  subscriberType: 'reporting',
                                                                                  name: {
                                                                                    unparsed:
                                                                                      'MINNESOTA FEDERAL COURT-',
                                                                                  },
                                                                                  address: {
                                                                                    street: {
                                                                                      unparsed: '300 S 4TH STREET',
                                                                                    },
                                                                                    location: {
                                                                                      unparsed: 'MINNEAPOLIS, MN 55415',
                                                                                      city: 'MINNEAPOLIS',
                                                                                      state: 'MN',
                                                                                      zipCode: 55415,
                                                                                    },
                                                                                  },
                                                                                  phone: {
                                                                                    number: {
                                                                                      unparsed: '(612) 664-5200',
                                                                                      areaCode: 612,
                                                                                      exchange: 664,
                                                                                      suffix: 5200,
                                                                                    },
                                                                                  },
                                                                                },
                                                                                docketNumber: '9X4X6X3',
                                                                                attorney: 'JACK L PRESCOTT',
                                                                                plaintiff: '',
                                                                                dateEffective: '10/13/2015',
                                                                                dateFiled: '10/13/2015',
                                                                                datePaid: '01/25/2016',
                                                                                ECOADesignator: 'individual',
                                                                                source: {
                                                                                  code: 'FE',
                                                                                  description: 'Federal District',
                                                                                },
                                                                                estimatedDateOfDeletion: '09/2025',
                                                                                suppressionIndicator: false,
                                                                                publicRecordTypeDescription:
                                                                                  'CHAPTER 7 BANKRUPTCY DISCHARGED',
                                                                                ECOADescription: 'Individual Debt',
                                                                                dateEffectiveLabel: 'DateUpdated',
                                                                                order: 1,
                                                                              },
                                                                              histRemarkLegend: '',
                                                                            },
                                                                          },
                                                                          addOnProduct: {
                                                                            scoreModel: {
                                                                              score: {
                                                                                name: {
                                                                                  person: {
                                                                                    unparsed: 'DORA G. JULIEN',
                                                                                    first: 'DORA',
                                                                                    middle: 'G',
                                                                                    last: 'JULIEN',
                                                                                    order: 1,
                                                                                  },
                                                                                },
                                                                                productCode: '00W40',
                                                                                score: 11,
                                                                                scoreGrade: '-',
                                                                                scoreDate: '03/09/2018',
                                                                                quantitativeGraphNumber: -1,
                                                                                populationGraphNumber: 50,
                                                                                populationDescription:
                                                                                  "Your credit ranks higher than --% of the nation's population.",
                                                                                summaryDescription:
                                                                                  'You did not order a TransUnion credit score. You can purchase your credit score for $9.95 by calling 1-866-SCORE-TU or 1-866-726-7388.',
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
                                                                            disputeURL:
                                                                              'www.transunion.com/disputeonline',
                                                                          },
                                                                          fileNumber: 300010987,
                                                                          consumerID: 1078425505,
                                                                          fileDate: '03/09/2018',
                                                                          dynamicText: {
                                                                            personalInfoDetail: {
                                                                              type: 1,
                                                                              text:
                                                                                'Your SSN has been masked for your protection.',
                                                                            },
                                                                            publicRecordDetail: [
                                                                              {
                                                                                type: 2,
                                                                                text:
                                                                                  'You may be required to explain these items to potential creditors. Generally, this information was collected from public record sources by TransUnion or a company we hired to collect such information. If you submit a dispute of the accuracy of a public record item, TransUnion may update the item based on the information you provide, or we may investigate your dispute by checking with the public record source or by asking our vendor to verify that the current status of the public record is reported accurately.',
                                                                              },
                                                                              {
                                                                                type: 2,
                                                                                text:
                                                                                  'Discharged Chapter 7 bankruptcy remains on your file for up to 10 years.',
                                                                              },
                                                                            ],
                                                                            adverseAcctDetail: {
                                                                              type: 2,
                                                                              text: {
                                                                                '#text':
                                                                                  'Adverse information typically remains on your credit file for up to 7 years from the date of the delinquency. To help you understand what is generally considered adverse, we have added >brackets',
                                                                                '': '',
                                                                                adverseAcctDetail: {
                                                                                  type: 1,
                                                                                  text:
                                                                                    'For your protection, your account numbers have been partially masked, and in some cases scrambled.',
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
                                                                                      'Please note: Accounts are reported as &quot;Current; Paid or paying as agreed&quot; if paid within 30 days of the due date. Accounts reported as Current may still incur late fees or interest charges if not paid on or before the due date.',
                                                                                  },
                                                                                ],
                                                                              },
                                                                            },
                                                                            fullDisclFlag: 'N',
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    InvestigationResults: {
      trueLinkCreditReportType: {
        FraudIndicator: false,
        DeceasedIndicator: false,
        SB168Frozen: {
          equifax: false,
          experian: false,
          transunion: false,
        },
        Borrower: {
          SocialSecurityNumber: '471-86-6871',
          BorrowerAddress: {
            dateReported: '2015-09-02-07:00',
            addressOrder: 0,
            partitionSet: 0,
            CreditAddress: {
              city: 'BRAHAM',
              stateCode: 'MN',
              unparsedStreet: 'PO BOX 384',
              postalCode: 550060384,
            },
            Dwelling: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Origin: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Ownership: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          CreditScore: {
            riskScore: 11,
            scoreName: 'VantageScore3',
            CreditScoreModel: {
              abbreviation: '',
              description: '',
              symbol: '00W40',
              rank: 100000,
            },
            NoScoreReason: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          BorrowerName: {
            partitionSet: 0,
            Name: {
              first: 'DORA',
              middle: 'G',
              last: 'JULIEN',
            },
            NameType: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          SocialPartition: {
            Social: {
              SocialSecurityNumber: '471-86-6871',
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
        },
        TradeLinePartition: [
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '4X2X7X1X9X2X5X6X',
              creditorName: 'CARD PRODUCTS',
              currentBalance: 0,
              dateAccountStatus: '2015-09-26-07:00',
              dateClosed: '2015-09-26-07:00',
              dateOpened: '2013-06-16-07:00',
              highBalance: 4930,
              subscriberCode: '927P029',
              position: 0,
              bureau: 'TransUnion',
              handle: 'TR01_156313180_532784485_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Collection',
                description: 'Bank Collection',
                symbol: 'BY',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Included in bankruptcy',
                  description: 'Included in bankruptcy',
                  symbol: 'T00BKL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2015-05-31-07:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Credit Card',
                  description: 'Credit Card',
                  symbol: 'CC',
                  rank: 50,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 0,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '4X2X1X0X2X0X5X0X',
              creditorName: 'CHASE NA',
              currentBalance: 0,
              dateAccountStatus: '2015-10-13-07:00',
              dateClosed: '2015-08-01-07:00',
              dateOpened: '2013-02-08-08:00',
              highBalance: 4666,
              subscriberCode: '402D013',
              position: 1,
              bureau: 'TransUnion',
              handle: 'TR01_206301426_327999940_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Credit Cards',
                description: 'Bank Credit Cards',
                symbol: 'BC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Chapter 7 bankruptcy',
                  description: 'Chapter 7 bankruptcy',
                  symbol: 'T00CBL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2015-07-19-07:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Unknown',
                  description: 'Unknown',
                  symbol: '',
                  rank: 199,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 4600,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '5X9X5X9X0X1X1X9X',
              creditorName: 'CITIBANK UCS',
              currentBalance: 0,
              dateAccountStatus: '2015-08-05-07:00',
              dateClosed: '2015-08-05-07:00',
              dateOpened: '2010-01-25-08:00',
              highBalance: 6730,
              subscriberCode: 8194006,
              position: 2,
              bureau: 'TransUnion',
              handle: 'TR01_37390393_-382335518_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Credit Cards',
                description: 'Bank Credit Cards',
                symbol: 'BC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Included in bankruptcy',
                  description: 'Included in bankruptcy',
                  symbol: 'T00BKL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2015-07-23-07:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Credit Card',
                  description: 'Credit Card',
                  symbol: 'CC',
                  rank: 50,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 6500,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '6X1X0X7X0X0X5X6X',
              creditorName: 'DISCOVER FINCL SVC LLC',
              currentBalance: 0,
              dateAccountStatus: '2015-04-04-07:00',
              dateClosed: '2015-04-04-07:00',
              dateOpened: '2011-02-18-08:00',
              highBalance: 3944,
              subscriberCode: 9616003,
              position: 3,
              bureau: 'TransUnion',
              handle: 'TR01_-1004538745_640985329_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Credit Cards',
                description: 'Bank Credit Cards',
                symbol: 'BC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Included in bankruptcy',
                  description: 'Included in bankruptcy',
                  symbol: 'T00BKL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2015-03-22-07:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Credit Card',
                  description: 'Credit Card',
                  symbol: 'CC',
                  rank: 50,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 0,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '4X0X0X9X8X6X7X6X',
              creditorName: 'FIRST USA BANK',
              currentBalance: 0,
              dateAccountStatus: '2013-11-18-08:00',
              dateClosed: '2013-11-18-08:00',
              dateOpened: '2013-10-11-07:00',
              highBalance: 5551,
              subscriberCode: 3429001,
              position: 4,
              bureau: 'TransUnion',
              handle: 'TR01_1358476504_-445314871_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Credit Cards',
                description: 'Bank Credit Cards',
                symbol: 'BC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Included in bankruptcy',
                  description: 'Included in bankruptcy',
                  symbol: 'T00BKL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Unknown',
                  description: 'Unknown',
                  symbol: '',
                  rank: 199,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 5400,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '5X2X1X0X6X6X5X3X',
              creditorName: 'ITT FIN',
              currentBalance: 0,
              dateAccountStatus: '2011-06-27-07:00',
              dateOpened: '2005-07-12-07:00',
              highBalance: 2100,
              subscriberCode: '64DB002',
              position: 5,
              bureau: 'TransUnion',
              handle: 'TR01_-1751151004_-2060879626_82',
              AccountCondition: {
                abbreviation: 'Closed',
                description: 'Closed',
                symbol: 'C',
                rank: 50,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Credit Cards',
                description: 'Bank Credit Cards',
                symbol: 'BC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Closed',
                description: 'Closed',
                symbol: 'C',
                rank: 198,
              },
              PayStatus: {
                abbreviation: 'Current',
                description: 'Current',
                symbol: 'C',
                rank: 110,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Account closed by consumer',
                  description: 'Account closed by consumer',
                  symbol: 'T00CBC',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2011-06-25-07:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 10,
                termMonths: 0,
                worstPatStatusCount: 10,
                AccountType: {
                  abbreviation: 'Credit Card',
                  description: 'Credit Card',
                  symbol: 'CC',
                  rank: 50,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: {
                  status: '',
                  startDate: '2011-10-01-07:00',
                  MonthlyPayStatus: [
                    {
                      date: '2011-10-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-09-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-08-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-07-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-06-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-05-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-04-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-03-01-08:00',
                      status: '',
                    },
                    {
                      date: '2011-02-01-08:00',
                      status: '',
                    },
                    {
                      date: '2011-01-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-12-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-11-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-10-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-09-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-08-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-07-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-06-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-05-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-04-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-03-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-02-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-01-01-08:00',
                      status: '',
                    },
                    {
                      date: '2009-12-01-08:00',
                      status: '',
                    },
                    {
                      date: '2009-11-01-07:00',
                      status: '',
                    },
                  ],
                },
                CreditLimit: 2100,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '0X5X1X0X0X8',
              creditorName: 'M.WARD/MBGA',
              currentBalance: 0,
              dateOpened: '2012-05-10-07:00',
              highBalance: 0,
              subscriberCode: '235007R',
              position: 6,
              bureau: 'TransUnion',
              handle: 'TR01_79414454_-1358945009_82',
              AccountCondition: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 60,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Miscellaneous Department &amp; Variety Stores',
                description: 'Miscellaneous Department &amp; Variety Stores',
                symbol: 'DZ',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Current',
                description: 'Current',
                symbol: 'C',
                rank: 110,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 27,
                termMonths: 0,
                worstPatStatusCount: 27,
                AccountType: {
                  abbreviation: 'Unknown',
                  description: 'Unknown',
                  symbol: '',
                  rank: 199,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: {
                  status: '',
                  startDate: '2014-10-01-07:00',
                  MonthlyPayStatus: [
                    {
                      date: '2014-10-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-09-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-08-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-07-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-06-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-05-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-04-01-07:00',
                      status: '',
                    },
                    {
                      date: '2014-03-01-08:00',
                      status: '',
                    },
                    {
                      date: '2014-02-01-08:00',
                      status: '',
                    },
                    {
                      date: '2014-01-01-08:00',
                      status: '',
                    },
                    {
                      date: '2013-12-01-08:00',
                      status: '',
                    },
                    {
                      date: '2013-11-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-10-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-09-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-08-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-07-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-06-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-05-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-04-01-07:00',
                      status: '',
                    },
                    {
                      date: '2013-03-01-08:00',
                      status: '',
                    },
                    {
                      date: '2013-02-01-08:00',
                      status: '',
                    },
                    {
                      date: '2013-01-01-08:00',
                      status: '',
                    },
                    {
                      date: '2012-12-01-08:00',
                      status: '',
                    },
                    {
                      date: '2012-11-01-07:00',
                      status: '',
                    },
                  ],
                },
                CreditLimit: 1700,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '1X2X1X5X0X0X',
              creditorName: 'SEARS ROEBUCK &amp; CO',
              currentBalance: 0,
              dateAccountStatus: '2011-10-15-07:00',
              dateOpened: '2011-06-17-07:00',
              highBalance: 10,
              subscriberCode: 6256385,
              position: 7,
              bureau: 'TransUnion',
              handle: 'TR01_-971350393_-2132345101_82',
              AccountCondition: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 60,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Complete Department Stores',
                description: 'Complete Department Stores',
                symbol: 'DC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Current',
                description: 'Current',
                symbol: 'C',
                rank: 110,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 1,
                termMonths: 0,
                worstPatStatusCount: 1,
                AccountType: {
                  abbreviation: 'Unknown',
                  description: 'Unknown',
                  symbol: '',
                  rank: 199,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: {
                  status: '',
                  startDate: '2011-12-01-08:00',
                  MonthlyPayStatus: [
                    {
                      date: '2011-12-01-08:00',
                      status: '',
                    },
                    {
                      date: '2011-11-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-10-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-09-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-08-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-07-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-06-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-05-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-04-01-07:00',
                      status: '',
                    },
                    {
                      date: '2011-03-01-08:00',
                      status: '',
                    },
                    {
                      date: '2011-02-01-08:00',
                      status: '',
                    },
                    {
                      date: '2011-01-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-12-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-11-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-10-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-09-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-08-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-07-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-06-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-05-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-04-01-07:00',
                      status: '',
                    },
                    {
                      date: '2010-03-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-02-01-08:00',
                      status: '',
                    },
                    {
                      date: '2010-01-01-08:00',
                      status: '',
                    },
                  ],
                },
                CreditLimit: 2200,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '5X7X6X2X6X0X',
              creditorName: 'TRANSAMERICA BANK',
              currentBalance: 0,
              dateAccountStatus: '2015-08-03-07:00',
              dateClosed: '2015-08-03-07:00',
              dateOpened: '2012-03-03-08:00',
              highBalance: 1056,
              subscriberCode: '930N133',
              position: 8,
              bureau: 'TransUnion',
              handle: 'TR01_-1399178666_554890393_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Sales Financing Company',
                description: 'Sales Financing Company',
                symbol: 'FF',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Included in bankruptcy',
                  description: 'Included in bankruptcy',
                  symbol: 'T00BKL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2016-12-11-08:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Charge account',
                  description: 'Charge account',
                  symbol: 'CH',
                  rank: 50,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 3500,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
          {
            accountTypeDescription: 'Revolving Account',
            accountTypeSymbol: 'R',
            accountTypeAbbreviation: 'Revolving',
            Tradeline: {
              accountNumber: '4X1X1X0X1X2X2X7X',
              creditorName: 'WACHOVIA-BANKCARD',
              currentBalance: 0,
              dateAccountStatus: '2015-08-02-07:00',
              dateClosed: '2015-08-02-07:00',
              dateOpened: '2013-10-10-07:00',
              highBalance: 0,
              subscriberCode: 3763001,
              position: 9,
              bureau: 'TransUnion',
              handle: 'TR01_-973781138_-355912080_82',
              AccountCondition: {
                abbreviation: 'Derog',
                description: 'Derogatory',
                symbol: 'F',
                rank: 20,
              },
              AccountDesignator: {
                abbreviation: 'Individual',
                description: 'Individual',
                symbol: 'I',
                rank: 199,
              },
              DisputeFlag: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              IndustryCode: {
                abbreviation: 'Bank Credit Cards',
                description: 'Bank Credit Cards',
                symbol: 'BC',
                rank: 199,
              },
              OpenClosed: {
                abbreviation: 'Open',
                description: 'Open',
                symbol: 'O',
                rank: 199,
              },
              PayStatus: {
                abbreviation: 'Unk',
                description: 'Unknown',
                symbol: 'U',
                rank: 10000,
              },
              VerificationIndicator: {
                abbreviation: '',
                description: '',
                symbol: '',
                rank: 100000,
              },
              Remark: {
                customRemark: '',
                RemarkCode: {
                  abbreviation: 'Chapter 7 bankruptcy',
                  description: 'Chapter 7 bankruptcy',
                  symbol: 'T00CBL',
                  rank: 199,
                },
              },
              GrantedTrade: {
                amountPastDue: 0,
                collateral: '',
                dateLastPayment: '2015-07-20-07:00',
                late30Count: 0,
                late60Count: 0,
                late90Count: 0,
                monthlyPayment: 0,
                monthsReviewed: 0,
                termMonths: 0,
                worstPatStatusCount: 0,
                AccountType: {
                  abbreviation: 'Credit Card',
                  description: 'Credit Card',
                  symbol: 'CC',
                  rank: 50,
                },
                CreditType: {
                  abbreviation: 'Revolving',
                  description: 'Revolving Account',
                  symbol: 'R',
                  rank: 50,
                },
                PaymentFrequency: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                TermType: {
                  abbreviation: 'Provided',
                  description: 'Provided',
                  symbol: 'P',
                  rank: 199,
                },
                WorstPayStatus: {
                  abbreviation: '',
                  description: '',
                  symbol: '',
                  rank: 100000,
                },
                PayStatusHistory: '',
                CreditLimit: 0,
              },
              Source: {
                BorrowerKey: '',
                Bureau: {
                  abbreviation: 'TransUnion',
                  description: 'TransUnion',
                  symbol: 'TUC',
                  rank: 1,
                },
                Reference: '',
              },
            },
          },
        ],
        PulblicRecordPartition: {
          PublicRecord: {
            courtName: '',
            referenceNumber: '9X4X6X3',
            subscriberCode: 4871356,
            bureau: 'TransUnion',
            handle: 'PR01_1618166926_561087734',
            AccountDesignator: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Classification: {
              abbreviation: 'Bankruptcy',
              description: 'Bankruptcy',
              symbol: 'B',
              rank: 199,
            },
            IndustryCode: {
              abbreviation: 'Personal Service Reseller',
              description: 'Personal Service Reseller',
              symbol: 'ZP',
              rank: 199,
            },
            Status: {
              abbreviation: 'Discharged',
              description: 'Discharged',
              symbol: 1,
              rank: 199,
            },
            Type: {
              abbreviation: 'Chapter 7 Bankruptcy',
              description: 'Chapter 7 Bankruptcy',
              symbol: 1,
              rank: 199,
            },
            Bankruptcy: {
              courtNumber: '',
              division: '',
              assetAmount: 0,
              dateResolved: '2016-01-25-08:00',
              exemptAmount: 0,
              liabilityAmount: 0,
              trustee: '',
              company: '',
              thirdParty: '',
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
        },
        Subscriber: [
          {
            name: 'CARD PRODUCTS',
            telephone: 'Phone number not available',
            subscriberCode: '927P029',
            CreditAddress: {
              city: 'CHARLOTTE',
              stateCode: 'NC',
              unparsedStreet: 'PO BOX 563966',
              postalCode: 282560001,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'CHASE NA',
            telephone: 'Phone number not available',
            subscriberCode: '402D013',
            CreditAddress: {
              city: 'WESTERVILLE',
              stateCode: 'OH',
              unparsedStreet: '880 BROOKS EDGE BLVD',
              postalCode: 43081,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'CITIBANK UCS',
            telephone: '(904) 954-7500',
            subscriberCode: 8194006,
            CreditAddress: {
              city: 'SIOUX FALLS',
              stateCode: 'SD',
              unparsedStreet: '701 E 60TH ST N',
              postalCode: 57104,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'DISCOVER FINCL SVC LLC',
            telephone: '(800) 347-2683',
            subscriberCode: 9616003,
            CreditAddress: {
              city: 'WILMINGTON',
              stateCode: 'DE',
              unparsedStreet: '1072 SW 101 St,Test 68',
              postalCode: 198505316,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'FIRST USA BANK',
            telephone: '(800) 283-1211',
            subscriberCode: 3429001,
            CreditAddress: {
              city: 'ELGIN',
              stateCode: 'IL',
              unparsedStreet: '2500 WESTFIELD DR',
              postalCode: 60124,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'ITT FIN',
            telephone: 'Phone number not available',
            subscriberCode: '64DB002',
            CreditAddress: {
              city: 'SOUIX FALLS',
              stateCode: 'SD',
              unparsedStreet: 'PO BOX 6241',
              postalCode: 57117,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'M.WARD/MBGA',
            telephone: 'Phone number not available',
            subscriberCode: '235007R',
            CreditAddress: {
              city: 'LENEXA',
              stateCode: 'KS',
              unparsedStreet: 'PO BOX 29114',
              postalCode: 66215,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'SEARS ROEBUCK &amp; CO',
            telephone: '(800) 326-0115',
            subscriberCode: 6256385,
            CreditAddress: {
              city: 'CLEVELAND',
              stateCode: 'OH',
              unparsedStreet: '13200 SMITH ROAD',
              postalCode: 441306282,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'TRANSAMERICA BANK',
            telephone: 'Phone number not available',
            subscriberCode: '930N133',
            CreditAddress: {
              city: 'CRYSTAL LAKE',
              stateCode: 'IL',
              unparsedStreet: 'POB 130',
              postalCode: 60139,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
          {
            name: 'WACHOVIA-BANKCARD',
            telephone: 'Phone number not available',
            subscriberCode: 3763001,
            CreditAddress: {
              city: 'WINSTON-SALEM',
              stateCode: 'NC',
              unparsedStreet: 'PO BOX 3117',
              postalCode: 27102,
            },
            IndustryCode: {
              abbreviation: '',
              description: '',
              symbol: '',
              rank: 100000,
            },
            Source: {
              BorrowerKey: '',
              Bureau: {
                abbreviation: 'TransUnion',
                description: 'TransUnion',
                symbol: 'TUC',
                rank: 1,
              },
              Reference: '',
            },
          },
        ],
        Summary: {
          TradelineSummary: {
            TransUnion: {
              TotalAccounts: 10,
              OpenAccounts: 9,
              CloseAccounts: 1,
              DelinquentAccounts: 0,
              DerogatoryAccounts: 7,
              TotalBalances: 0,
              TotalMonthlyPayments: 0,
            },
          },
          InquirySummary: {
            TransUnion: {
              NumberInLast2Years: 0,
            },
          },
          PublicRecordSummary: {
            TransUnion: {
              NumberOfRecords: 1,
            },
          },
        },
        Sources: {
          Source: {
            Bureau: {
              abbreviation: 'TransUnion',
              description: 'TransUnion',
              symbol: 'TUC',
              rank: 1,
            },
          },
        },
        SafetyCheckPassed: true,
      },
    },
  },
};
