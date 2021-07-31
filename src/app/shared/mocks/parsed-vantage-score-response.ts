const mockParseVantageScore = {
  CreditScoreType: {
    riskScore: 527,
    scoreName: 'VantageScore3',
    populationRank: 16,
    CreditScoreFactor: [
      {
        bureauCode: 34,
        FactorType: 'Negative',
        Factor: { abbreviation: '', description: '', symbol: 34, rank: 100000 },
        FactorText: [
          'explain: Bankcard accounts include credit cards and\ncharge cards from a bank and are frequently revolving accounts.\nRevolving accounts allow you to carry a balance and your monthly payment\nwill vary, based on the amount of your balance. The total combined\namount you owe on all of your bankcards and revolving accounts is high,\na sign of increased risk. People who carry balances on multiple\nbankcards or other revolving accounts have reduced available credit to\nuse if needed, creating a greater chance of becoming\noverextended.',
          'factor: Total of\nall balances on bankcard or revolving accounts is too\nhigh',
          'cando: Pay down the\nbalances on your accounts. Ideally, the balance on any revolving account\nshould be 30% or less of the total credit limit on that\naccount.',
        ],
      },
      {
        bureauCode: 65,
        FactorType: 'Negative',
        Factor: { abbreviation: '', description: '', symbol: 65, rank: 100000 },
        FactorText: [
          'explain: The VantageScore credit score model relies on\ninformation in your credit files at the three national credit reporting\ncompanies (Equifax, Experian and TransUnion) to generate your score.\nYour credit file does not contain enough credit behavior information\nabout your first mortgage accounts. A mix of different types of open and\nactive credit accounts, including first mortgage loans, can have a\npositive impact on your credit score.',
          'factor: Lack of sufficient relevant first mortgage\naccount information',
          'cando:\nMaintaining open and active credit accounts in good standing can help\nimprove your credit score.',
        ],
      },
      {
        bureauCode: 44,
        FactorType: 'Negative',
        Factor: { abbreviation: '', description: '', symbol: 44, rank: 100000 },
        FactorText: [
          'explain: Bankcard accounts include credit cards and\ncharge cards from a bank and are frequently revolving accounts.\nRevolving accounts allow you to carry a balance and your monthly payment\nwill vary, based on the amount of your balance. You have had too many\nbankcard or revolving accounts with payments that are at least 30 days\nlate and/or on which a lender has reported a derogatory status. People\nwith late payments are at risk of being overextended, putting existing\ncredit with lenders at risk.',
          'factor: Too many bankcard or revolving accounts with\ndelinquent or derogatory status',
          'cando: Paying bills on time every month is important\nto maintaining a good credit score. If you remain behind with any\npayments, bring them current as soon as possible, and then make future\npayments on time. Over time this will have a positive impact on your\nscore.',
        ],
      },
      {
        bureauCode: 7,
        FactorType: 'Negative',
        Factor: { abbreviation: '', description: '', symbol: 7, rank: 100000 },
        FactorText: [
          'explain: You have had too many accounts with payments\nthat are at least 30 days late and/or on which a lender has reported a\nderogatory status. Late payments are a proven indicator of increased\nrisk. People with late payments are at risk of being overextended,\nputting existing credit with lenders at risk.',
          'factor: You have too many delinquent or derogatory\naccounts',
          'cando: Paying bills\non time every month is important to maintaining a good credit score. If\nyou remain behind with any payments, bring them current as soon as\npossible, and then make future payments on time. Over time, this will\nhave a positive impact on your score.',
        ],
      },
      {
        bureauCode: 'P32',
        FactorType: 'Positive',
        Factor: {
          abbreviation: '',
          description: '',
          symbol: 'P32',
          rank: 100000,
        },
        FactorText: [
          'explain: Bankcard accounts include credit cards and\ncharge cards from a bank and are frequently revolving accounts.\nRevolving accounts allow you to carry a balance and your monthly payment\nwill vary, based on the amount of your balance. Your balances on\nbankcard or revolving accounts are not too high compared to the credit\nlimit amounts, which causes your score to\nimprove.',
          'factor: Balances on\nbankcard or revolving accts not too high compared to\nlimits',
          'cando: Keep low\nbalances on your accounts; this will benefit your\nscore.',
        ],
      },
      {
        bureauCode: 'P05',
        FactorType: 'Positive',
        Factor: {
          abbreviation: '',
          description: '',
          symbol: 'P05',
          rank: 100000,
        },
        FactorText: [
          'explain: A delinquency is a payment that was made 30\nor more days late. You have had no or very few delinquencies recently\nwhich has caused your score to improve.',
          'factor: There are no or only a few recent\ndelinquencies on your accounts',
          'cando: Keep paying bills on time every month since it\nis important for maintaining a good credit score. If you remain behind\nwith any payments, bring them current as soon as possible, and then make\nfuture payments on time. Over time, this will have a positive impact on\nyour score.',
        ],
      },
      {
        bureauCode: 'P40',
        FactorType: 'Positive',
        Factor: {
          abbreviation: '',
          description: '',
          symbol: 'P40',
          rank: 100000,
        },
        FactorText: [
          'explain: Bankcard accounts include credit cards and\ncharge cards from a bank and are frequently revolving accounts.\nRevolving accounts allow you to carry a balance and your monthly payment\nwill vary, based on the amount of your balance. Your oldest bankcard or\nrevolving account was not opened too recently. As a result, your history\nof credit management is enough to demonstrate responsible behavior which\nhas improved your score.',
          'factor: Date your oldest bankcard or revolving account\nopened is not too recent',
          "cando: Don't open more accounts than you actually\nneed. Research shows that new accounts indicate greater risk. Your score\nwill benefit as your accounts get older.",
        ],
      },
      {
        bureauCode: 'P63',
        FactorType: 'Positive',
        Factor: {
          abbreviation: '',
          description: '',
          symbol: 'P63',
          rank: 100000,
        },
        FactorText: [
          'explain: A real estate loan can be a first mortgage, a\nhome equity loan, or home equity line of credit. The VantageScore credit\nscore model relies on information in your credit files at the three\nnational credit reporting companies (Equifax, Experian and TransUnion)\nto generate your score. A mix of different types of open and active\ncredit accounts, including real estate accounts, can have a positive\nimpact on your score.',
          'factor:\nLack of sufficient relevant real estate account\ninformation',
          'cando: Maintaining\nopen and active credit accounts in good standing can help improve your\ncredit score.',
        ],
      },
    ],
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
      InquiryDate: '2015-06-09',
      Reference: 'ND0711_v7SOreport',
    },
  },
};
