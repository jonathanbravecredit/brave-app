export const PositiveReasonCodes = {
  RPO1: { factor: ``, explain: ``, cando: `` },
  RP02: { factor: ``, explain: ``, cando: `` },
  RP03: { factor: ``, explain: ``, cando: `` },
  RP04: {
    factor: `The balances on your accounts are not too high compared to loan limits`,
    explain: `Your balances are not too high compared to the loan amounts, which causes your score to improve. `,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP05: {
    factor: `There are no or only a few recent delinquencies on your accounts`,
    explain: `A delinquency is a payment that was made 30 or more days late. You have had no or very few delinquencies recently which has caused your score to improve.`,
    cando: `Keep paying bills on time every month since it is important for maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  RP06: {
    factor: `You have few or no accounts that were opened recently `,
    explain: `None or only a few of your accounts were recently opened. As a result, your history of credit management performance is enough to demonstrate responsible behavior.`,
    cando: `Keep using your existing credit responsibly and make your payments on time. Your credit score will benefit as you make payments on time and manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs and avoid applying for more credit than you need.`,
  },
  RP07: {
    factor: `You have either no or few delinquent or derogatory accounts`,
    explain: `Paying your bills on time improves your score. You have paid all or nearly all of your bills on time.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP08: {
    factor: `One or more of your accounts were paid on time in recent months`,
    explain: `Paying your bills on time improves your score. Recently at least one of your accounts was paid on time.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP09: {
    factor: `None of your accounts have a severe delinquency or a derogatory status`,
    explain: `Paying your bills on time improves your score. You have paid all your accounts on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP10: {
    factor: `One or more of your accounts have been paid on time`,
    explain: `Paying your bills on time improves your score. At least one of your accounts has no late payments.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP11: {
    factor: `You have few or no accounts with delinquent or derogatory balances`,
    explain: `Paying your bills on time improves your score. At most, only a small amount of your balances is currently late.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP12: {
    factor: `The date that you opened your oldest account is not too recent`,
    explain: `Your oldest account was not opened too recently. As a result, your history of credit management is enough to demonstrate responsible behavior which has improved your score.`,
    cando: `Don't open more accounts than you actually need. Research shows that new accounts indicate greater risk. Your score will benefit as your accounts get older.`,
  },
  RP13: {
    factor: `Your most recently opened account is not too new`,
    explain: `Your newest account was not opened too recently. As a result, your history of credit management is enough to demonstrate responsible behavior which has improved your score.`,
    cando: `Don't open more accounts than you actually need. Research shows that new accounts indicate greater risk. Your score will benefit as your accounts get older.`,
  },
  RP14: {
    factor: `Your credit file contains enough information about your use of credit`,
    explain: `A credit file with sufficient accounts and credit history reflects more experience in handling credit. More experience can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP15: {
    factor: `None of your accounts have a recent delinquency or a derogatory status`,
    explain: `A delinquency or derogatory is a payment that was made at least 30 or more days late. Recently you have paid all of your accounts on time which has caused your score to improve.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP16: {
    factor: `The total of all balances on your open accounts is not too high`,
    explain: `The total of your balances on your open accounts, compared to the loan amounts, is not too high which has caused your score to improve. `,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP17: {
    factor: `Balances on prior delinquent accounts not too high compared to loan amts`,
    explain: `Keeping low balances and paying your accounts on time can improve your score. The balances on accounts, that were previously paid late, are now low compared to the loan amount or credit limit.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP18: {
    factor: `Total of balances on accts never late not too high compared to loan amts`,
    explain: `Your balances on loans that you have paid on time, compared to the loan amounts, are not too high which has caused your score to improve. `,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP21: {
    factor: `No open accounts in your credit file `,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. Because you have no open accounts, your credit file does not contain enough information about your use of credit. A mix of different types of open and active credit accounts can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP22: {
    factor: `No recently reported account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. Because you have no open accounts, your credit file does not contain enough information about your use of credit. A mix of different types of open and active credit accounts can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP23: {
    factor: `Lack of sufficient relevant account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. Because you have no open accounts, your credit file does not contain enough information about your use of credit. A mix of different types of open and active credit accounts can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP29: {
    factor: `Few or none of your open bankcard or revolving accounts has a balance`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Keeping low balances can improve your score. The balances on your bankcard and revolving accounts are low.`,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP30: {
    factor: `One or more of your bankcard or revolving accounts has a high limit`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Having bankcard or revolving accounts with high credit limits indicates that you have high availability of credit, improving your score.`,
    cando: `Keep using your existing credit responsibly. Your credit score will benefit as you manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs and avoid applying for more credit than you need.`,
  },
  RP31: {
    factor: `Few or none of your bankcard or revolving accounts was opened recently`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. None or only a few of your bankcard or revolving accounts were recently opened. As a result, your history of credit management is enough to demonstrate responsible behavior.`,
    cando: `Keep using your existing credit responsibly and make your payments on time. Your credit score will benefit as you make payments on time and manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs and avoid applying for more credit than you need.`,
  },
  RP32: {
    factor: `Balances on bankcard or revolving accts not too high compared to limits`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Your balances on bankcard or revolving accounts are not too high compared to the credit limit amounts, which causes your score to improve. `,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP33: {
    factor: `No severe delinquency/derogatory status on bankcard or revolving accts`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Paying your bills on time improves your score. You have paid all your bankcard or revolving accounts on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP34: {
    factor: `Total of all balances on bankcard or revolving accounts is not too high`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. The total of your balances on your open bankcard or revolving accounts, compared to the credit limit amounts, is not too high which has caused your score to improve.`,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP35: {
    factor: `Your highest bankcard or revolving account balance is not too high`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. The highest of your balances on your open bankcard or revolving accounts is not too high which has caused your score to improve. `,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP36: {
    factor: `Largest credit limit on open bankcard or revolving accts is not too low`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Having bankcard or revolving accounts with high credit limits indicates that you have high availability of credit, improving your score.`,
    cando: `Keep using your existing credit responsibly. Your credit score will benefit as you manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs and avoid applying for more credit than you need.`,
  },
  RP39: {
    factor: `Available credit on open bankcard or revolving accounts is not too low`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. You have high available credit on bankcard or revolving accounts which has caused your score to improve.`,
    cando: `Keep using your existing credit responsibly. Your credit score will benefit as you manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs and avoid applying for more credit than you need.`,
  },
  RP40: {
    factor: `Date your oldest bankcard or revolving account opened is not too recent`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Your oldest bankcard or revolving account was not opened too recently. As a result, your history of credit management is enough to demonstrate responsible behavior which has improved your score.`,
    cando: `Don't open more accounts than you actually need. Research shows that new accounts indicate greater risk. Your score will benefit as your accounts get older.`,
  },
  RP42: {
    factor: `Date your newest bankcard or revolving account opened is not too recent`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Your newest bankcard or revolving account was not opened too recently. As a result, your history of credit management is enough to demonstrate responsible behavior which has improved your score.`,
    cando: `Don't open more accounts than you actually need. Research shows that new accounts indicate greater risk. Your score will benefit as your accounts get older.`,
  },
  RP43: {
    factor: `Credit file has enough history on your use of bankcard/revolving accts`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. A credit file with sufficient accounts and credit history, including bankcard or revolving accounts, reflects more experience in handling credit. More experience can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP44: {
    factor: `Few or no bankcard or revolving accts with delinquent/derogatory status`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Paying your bills on time improves your score. You have paid all your bankcard or revolving accounts on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP45: {
    factor: `Few or no bankcard/revolving accts with delinquent/derogatory balances`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. Paying your bills on time improves your score. At most, only a small amount of your bankcard or revolving balances are currently late.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP47: {
    factor: `No open bankcard or revolving accounts in your credit file`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. Because you have no open bankcard or revolving accounts, your credit file does not contain enough information about your use of credit. A mix of different types of open and active credit accounts can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP48: {
    factor: `No bankcard or revolving recently reported account information`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. Because you have no open bankcard or revolving accounts, your credit file does not contain enough information about your use of credit. A mix of different types of open and active credit accounts can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP49: {
    factor: `Lack of sufficient relevant bankcard or revolving account information`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts. Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance. The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. Because you have no open bankcard or revolving accounts, your credit file does not contain enough information about your use of credit. A mix of different types of open and active credit accounts can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP50: {
    factor: `No open retail revolving accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including retail revolving accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP52: {
    factor: `No open home equity loans in your credit file `,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including home equity accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP53: {
    factor: `No real estate accounts with severe delinquency or derogatory status`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. Paying your bills on time improves your score. You have paid all your real estate accounts on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP54: {
    factor: `Amount of balance paid down on open real estate accounts is not too low`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. The amount that has been paid down on your open real estate accounts is high. Paying down a high amount of your real estate loans increases your score.`,
    cando: `As monthly real estate payments are made, a portion of the outstanding principal balance is reduced, benefitting your score. Whenever possible, further pay down balances on your real estate accounts. Over time this will also have a positive impact on your score.`,
  },
  RP55: {
    factor: `Open real estate account balances not too high compared to loan amounts`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. Your balances on real estate accounts are not too high compared to the original loan amounts, which causes your score to improve.`,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP57: {
    factor: `Few or no real estate accts with delinquent or derogatory payment status`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. Paying your bills on time improves your score. You have paid all your real estate loans on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP58: {
    factor: `The total of all balances on open real estate accounts is not too high`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. Your balances on real estate loans, compared to the original loan amounts, are not too high which has caused your score to improve. `,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP61: {
    factor: `No open real estate accounts in your credit file`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including real estate accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP62: {
    factor: `No recently reported real estate account information`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including real estate accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP63: {
    factor: `Lack of sufficient relevant real estate account information`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit. The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including real estate accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP64: {
    factor: `No open first mortgage accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including first mortgage accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP65: {
    factor: `Lack of sufficient relevant first mortgage account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including first mortgage accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP66: {
    factor: `Balances on open auto accounts are not too high compared to loan amounts`,
    explain: `Your balances on auto accounts are not too high compared to the original loan amounts, which causes your score to improve.`,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP68: {
    factor: `No open auto accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including auto accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP69: {
    factor: `Lack of sufficient relevant auto account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including auto accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP70: {
    factor: `No open personal installment loans in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including personal installment accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP71: {
    factor: `One or more of your installment accounts has been paid on time`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. Paying your bills on time improves your score. At least one of your installment accounts was paid on time.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP72: {
    factor: `Few or no installment accts with delinquent or derogatory payment status`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. Paying your bills on time improves your score. You have paid all your installment loans on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP73: {
    factor: `No installment accounts with a severe delinquency or derogatory status`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. Paying your bills on time improves your score. You have paid all your installment accounts on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP74: {
    factor: `Amount of balance paid down on open installment accounts is not too low`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. The amount that has been paid down on your open installment accounts is high. Paying down a high amount of your installment loans increases your score.`,
    cando: `As monthly installment account payments are made, a portion of the outstanding principal balance is reduced, benefitting your score. Whenever possible, further pay down balances on your accounts. Over time this will also have a positive impact on your score.`,
  },
  RP75: {
    factor: `Your most recently opened installment account is not too new`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. Your newest installment account was not opened too recently. As a result, your history of credit management is enough to demonstrate responsible behavior which has improved your score.`,
    cando: `Don't open more accounts than you actually need. Research shows that new accounts indicate greater risk. Your score will benefit as your accounts get older.`,
  },
  RP76: {
    factor: `Your credit file has enough history on your use of installment loans`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. A credit file with sufficient accounts and credit history, including installment loans, reflects more experience in handling credit. More experience can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP77: {
    factor: `Newest delinquent/derogatory status on installment accts not too recent`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. You have an installment account that had a late payment or on which a lender has reported a derogatory status. However, your credit file shows that this event did not occur too recently, having some positive impact on your score.`,
    cando: `Keep paying bills on time every month since it is important to maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. `,
  },
  RP78: {
    factor: `Installment account balances not too high compared to loan amounts`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. Your balances on installment accounts are not too high compared to the original loan amounts, which causes your score to improve.`,
    cando: `Keep low balances on your accounts; this will benefit your score. `,
  },
  RP79: {
    factor: `You have few or no recent delinquencies on your installment accounts`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan. Auto loans and student loans are common examples of installment loans. A delinquency is a payment that was made 30 or more days late. You have had no or very few delinquencies recently on your installment accounts, which has caused your score to improve.`,
    cando: `Keep paying bills on time every month since it is important for maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  RP81: {
    factor: `No open installment accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including installment accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP83: {
    factor: `Lack of sufficient relevant installment account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including installment accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP85: {
    factor: `You have few or no inquiries on your credit report`,
    explain: `If a lender runs a credit check when you apply for credit, an inquiry is reported to the credit bureaus. This can lower your score a small amount, typically by 10 to 20 points. The VantageScore credit score model takes rate shopping, e.g., for a mortgage or car loan, into consideration. All inquiries for mortgages, auto loans and major credit cards that appear in your credit file within a 14-day window are counted as a single inquiry. Another time inquiries never count against your score is when you check your own credit or obtain your own score. You have no inquiries or a low number of inquiries on your credit report, which increases your score.`,
    cando: `Apply for credit only when you need it. If you are approved for credit, the small score drop from making an inquiry will disappear within a short time and the score will quickly benefit if you make on-time payments and manage your new account in a responsible fashion.`,
  },
  RP86: {
    factor: `You have few or no derogatory public records on your credit report`,
    explain: `Public records include information filed or recorded by local, state, federal or other government agencies that is available to the general public. The types of public records that can affect your score include legal judgments against you and tax liens levied by a government authority. You have few or no public records on your credit report, which increases your score.`,
    cando: `Pay all bills on-time and satisfy all judgments. The impact that negative items such as public records have on your credit score will diminish over time.`,
  },
  RP87: {
    factor: `You have few or no unsatisfied public records on your credit report`,
    explain: `Public records include information filed or recorded by local, state, federal or other government agencies that is available to the general public. The types of public records that can affect your score include legal judgments against you and tax liens levied by a government authority. You have few or no public records on your credit report, which increases your score.`,
    cando: `Pay all bills on-time and satisfy all judgments. The impact that negative items such as public records have on your credit score will diminish over time.`,
  },
  RP88: {
    factor: `You have no recent derogatory public records on your credit report`,
    explain: `Public records include information filed or recorded by local, state, federal or other government agencies that is available to the general public. The types of public records that can affect your score include legal judgments against you and tax liens levied by a government authority. You have few or no public records on your credit report, which increases your score.`,
    cando: `Pay all bills on-time and satisfy all judgments. The impact that negative items such as public records have on your credit score will diminish over time.`,
  },
  RP90: {
    factor: `You have one or more discharged bankruptcies`,
    explain: `You have one or more bankruptcies on your credit report. However, they have been discharged.`,
    cando: `Make all future payments on time. The impact on your credit score from the bankruptcy will diminish over time.`,
  },
  RP92: {
    factor: `No open student loan accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score. A mix of different types of open and active credit accounts, including student loan accounts, can have a positive impact on your score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  RP93: {
    factor: `No student loan accounts with a severe delinquency or derogatory status`,
    explain: `Paying your bills on time improves your score. You have paid all your student loans on time or no more than 30 days late. `,
    cando: `Keep paying bills on time every month since it is important for maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  RP94: {
    factor: `Amount of balance paid down on open student loan accounts is not too low`,
    explain: `The amount that has been paid down on your open student loan accounts is high. Paying down a high amount of your student loans increases your score.`,
    cando: `As monthly student loan account payments are made, a portion of the outstanding principal balance is reduced, benefitting your score. Whenever possible, further pay down balances on your accounts. Over time this will also have a positive impact on your score.`,
  },
  RP95: {
    factor: `You have few or no unpaid collection agency accounts`,
    explain: `Some collection agencies report account information to credit bureaus just like lenders do. Your credit file has no or few accounts that have been sent to a collection agency and remain unpaid, which increases your score.`,
    cando: `Satisfy all collection accounts and pay all other accounts on time each month. The impact that negative items such as collections accounts have on your credit score will diminish over time.`,
  },
  RP96: {
    factor: `You have few or no collection agency account balances`,
    explain: `Some collection agencies report account information to credit bureaus just like lenders do. Your credit file has no or few accounts that have been sent to a collection agency and remain unpaid, which increases your score.`,
    cando: `Satisfy all collection accounts and pay all other accounts on time each month. The impact that negative items such as collections accounts have on your credit score will diminish over time.`,
  },
  RP98: {
    factor: `There is no bankruptcy on your credit report`,
    explain: `You have no bankruptcy on your credit report, which increases your score.`,
    cando: `Keep paying bills on time every month since it is important for maintaining a good credit score. If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
};
