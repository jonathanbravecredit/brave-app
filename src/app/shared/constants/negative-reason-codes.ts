export const NEGATIVE_REASON_CODES: Record<string, any> = {
  R1: { factor: ``, explain: ``, cando: `` },
  R2: { factor: ``, explain: ``, cando: `` },
  R3: { factor: ``, explain: ``, cando: `` },
  R4: {
    factor: `The balances on your accounts are too high compared to loan amounts`,
    explain: `The balances on your accounts are high compared to the original loan amounts, lowering your score.`,
    cando: `Paying down the balances on your accounts will benefit your score.  `,
  },
  R5: {
    factor: `Too many of the delinquencies on your accounts are recent`,
    explain: `A delinquency is a payment that was made 30 or more days late.  Too many late payments occurred recently on some of your accounts.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  R6: {
    factor: `You have too many accounts that were opened recently`,
    explain: `Because too many of your accounts were opened recently, the history on those new accounts is not long enough to provide sufficient payment and account history to demonstrate responsible behavior on those accounts.  In addition, having multiple accounts that are relatively new is seen as a higher risk because of the possibility of becoming overextended, which can then lead to late payments or defaulting on the account.`,
    cando: `Use your existing credit responsibly and make your payments on time. Your credit score will benefit as you make payments on time and manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs and avoid applying for more credit than you need.`,
  },
  R7: {
    factor: `You have too many delinquent or derogatory accounts`,
    explain: `You have had too many accounts with payments that are at least 30 days late and/or on which a lender has reported a derogatory status.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  R8: {
    factor: `You have either very few loans or too many loans with recent delinquencies`,
    explain: `You have had too many accounts with late payments or do not have enough loans to provide sufficient information about your credit behaviors. Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  R9: {
    factor: `The worst payment status on your accounts is delinquent or derogatory`,
    explain: `Your credit file is showing an account with a payment that was at least 30 days late and/or on which a lender has reported a derogatory status.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  R10: {
    factor: `You have either very few loans or too many loans with delinquencies`,
    explain: `You have had too many accounts with late payments or do not have enough loans to provide sufficient information about your credit behaviors. Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  R11: {
    factor: `The total of your delinquent or derogatory account balances is too high`,
    explain: `The total of the balances is high on your accounts with late payments or on which a lender has reported the account derogatory. Late payments are a proven indicator of risk.  When credit line balances approach credit limits, risk is further increased because you don't have much credit available should it be needed, creating a greater chance of becoming overextended.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  Whenever possible, pay down balances on your accounts.  Over time these actions will benefit your score.`,
  },
  R12: {
    factor: `The date that you opened your oldest account is too recent`,
    explain: `Your oldest account is still too recent.  A credit file containing older accounts will have a positive impact on your credit score because it demonstrates that you are experienced managing credit.  `,
    cando: `Don't open more accounts than you actually need.  Research shows that new accounts indicate greater risk.  Your score will benefit as your accounts get older.`,
  },
  R13: {
    factor: `Your most recently opened account is too new`,
    explain: `The account that you opened most recently is still too new.  A credit file containing older accounts will have a positive impact on your credit score because it demonstrates that you are experienced managing credit.  `,
    cando: `Don't open more accounts than you actually need.  Research shows that new accounts indicate greater risk, especially if overall account history isn't long.  Your score will benefit as your accounts get older.`,
  },
  R14: {
    factor: `Lack of sufficient credit history`,
    explain: `Your credit file does not contain enough information about your use of credit.  A credit file with older accounts and/or more accounts reflects more experience with handling credit and can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  R15: {
    factor: `Newest delinquent or derogatory payment status on your accounts is too recent`,
    explain: `You have an account that had a late payment or on which a lender has reported a derogatory status.  Your credit file shows that this event occurred too recently.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  `,
  },
  R16: {
    factor: `The total of all balances on your open accounts is too high`,
    explain: `The total that you owe on all your accounts is high.  Maintaining high balances has proven to be risky behavior because you don't have much credit available should it be needed, creating a greater chance of becoming overextended.  People with the highest credit scores keep their account balances low.`,
    cando: `Whenever possible, pay down balances on your accounts.  Over time, this will have a positive impact on your score.`,
  },
  R17: {
    factor: `Balances on previously delinquent accounts are too high compared to loan amts`,
    explain: `You've been late on at least one payment in the past, and the balances on the accounts that had late payments are high compared to the original loan amount or the credit limit on a revolving account.  Late payments are a proven indicator of risk.  When balances are close to the original loan amount or approach credit limits, risk is further increased because you don't have much credit available should it be needed, creating a greater chance of becoming overextended.  People with the best scores have no late payments and keep their balances low.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  Whenever possible, pay down balances on your accounts.  Over time these actions will have a positive impact on your score.`,
  },
  R18: {
    factor: `Total of balances on accounts never late is too high compared to loan amounts`,
    explain: `You have some accounts in your credit file with balances that are high compared to the original loan amount or the limit on a revolving account.  The good news is that you've never been late on these accounts.  Maintaining high balances has proven to be risky behavior because you don't have much credit available should it be needed, creating a greater chance of becoming overextended.  People with the highest credit scores keep their account balances low.`,
    cando: `Whenever possible, pay down balances on your accounts.  Over time, this will have a positive impact on your score.`,
  },
  R21: {
    factor: `No open accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Because you have no open accounts, your credit file does not contain enough information about your use of credit.  A mix of different types of open and active credit accounts can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  R22: {
    factor: `No recently reported account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Because you have no accounts where a lender has reported recent activity, your credit file does not contain enough information about your use of credit.  A mix of different types of open and active credit accounts with can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  R23: {
    factor: `Lack of sufficient relevant account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not have enough credit behavior information about your loans.  A mix of different types of open and active credit accounts can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score. `,
  },
  R29: {
    factor: `Too many of your open bankcard or revolving accounts have a balance`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  Carrying a balance on too many bankcards and revolving accounts is an indicator of increased risk.  People who carry balances on multiple bankcards or revolving accounts have reduced available credit to use if needed, creating a greater chance of becoming overextended.`,
    cando: `Pay down your existing balances, and then pay your balance in full each month as often as possible.`,
  },
  R30: {
    factor: `Too few of your bankcard or other revolving accounts have high limits`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  Having too few accounts with high credit limits is an indicator that you lack available credit.  Having higher limits gives you access to credit without seeking new loans or becoming overextended _ which are triggers for higher risk.`,
    cando: `Use credit responsibly and always make payments on time with your existing accounts.  After a period of successfully managing your accounts, you can seek increases to your credit limit.  `,
  },
  R31: {
    factor: `Too many bankcard or other revolving accounts were opened recently`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  Opening multiple bankcards or other revolving accounts in a relatively short period of time is a proven indicator of increased risk because the history on those new accounts is not long enough to provide sufficient payment and account information to demonstrate responsible behavior on those accounts.  In addition, having multiple accounts that are relatively new is seen as a higher risk because of the possibility of becoming overextended, which can then lead to late payments or defaulting on the account.`,
    cando: `Use your existing credit responsibly and make your payments on time. Your credit score will benefit as you make payments on time and manage the accounts in a responsible fashion. Manage your credit wisely by planning ahead for your credit needs so you can avoid applying for more credit than you need.`,
  },
  R32: {
    factor: `Balances on bankcard or revolving accounts too high compared to credit limits`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  You have bankcard or revolving accounts in your credit file with balances that are high compared to the credit limit on the account, which is a proven indicator of increased risk.`,
    cando: `Pay down balances on your accounts and keep them below 30% of the total credit limit on that account.  Over time this will have a positive impact on your score.`,
  },
  R33: {
    factor: `Your worst bankcard or revolving account status is delinquent or derogatory`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  Your credit file is showing a bankcard or revolving account with a payment that was at least 30 days late and/or an account on which a lender has reported a derogatory status.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  Over time, this will have a positive impact on your score.`,
  },
  R34: {
    factor: `Total of all balances on bankcard or revolving accounts is too high`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The total combined amount you owe on all of your bankcards and revolving accounts is high, a sign of increased risk. People who carry balances on multiple bankcards or other revolving accounts have reduced available credit to use if needed, creating a greater chance of becoming overextended.`,
    cando: `Pay down the balances on your accounts. Ideally, the balance on any revolving account should be 30% or less of the total credit limit on that account.`,
  },
  R35: {
    factor: `Your highest bankcard or revolving account balance is too high`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  You have a bankcard or revolving account in your credit file with a high balance, a sign of increased risk. People who carry balances on bankcards or other revolving accounts have reduced available credit to use if needed, creating a greater chance of becoming overextended.`,
    cando: `Pay down the balances on your accounts. Ideally, the balance on any revolving account should be 30% or less of the total credit limit on that account.`,
  },
  R36: {
    factor: `Your largest credit limit on open bankcard or revolving accounts is too low`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The largest credit limit among all the open bankcard or revolving accounts in your credit file is low.  Having higher limits gives you access to credit without seeking new loans or becoming overextended _ which are triggers for higher risk.`,
    cando: `Use credit responsibly and always make payments on time with your existing accounts.  After a period of successfully managing your accounts, you can seek increases to your credit limit.  `,
  },
  R39: {
    factor: `Available credit on your open bankcard or revolving accounts is too low`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The amount of credit you have available to use on your open bankcards or revolving accounts is low.  Having higher limits gives you access to credit without seeking new loans or becoming overextended _ which are triggers for higher risk.`,
    cando: `Use credit responsibly and always make payments on time with your existing accounts.  After a period of successfully managing your accounts, you can seek increases to your credit limit.  `,
  },
  R40: {
    factor: `The date you opened your oldest bankcard or revolving account is too recent`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  Your oldest bankcard or revolving account is still too new.  A credit file containing older accounts will have a positive impact on your credit score because it demonstrates that you are experienced managing credit.`,
    cando: `Don't open more accounts than you actually need.  Research shows that new accounts indicate greater risk.  Your score will benefit as your accounts get older.`,
  },
  R42: {
    factor: `The date you opened your newest bankcard or revolving account is too recent`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The bankcard or revolving account that you opened most recently is still too new.  A credit file containing older accounts will have a positive impact on your credit score because it demonstrates that you are experienced managing credit.`,
    cando: `Don't open more accounts than you actually need.  Research shows that new accounts indicate greater risk, especially if overall account history isn't long.  Your score will benefit as your accounts get older.`,
  },
  R43: {
    factor: `Lack of sufficient credit history on bankcard or revolving accounts`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  Your credit file does not contain enough information about your use of bankcards or revolving accounts.  A credit file with older accounts and/or more accounts reflects more experience with handling credit and can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R44: {
    factor: `Too many bankcard or revolving accounts with delinquent or derogatory status`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  You have had too many bankcard or revolving accounts with payments that are at least 30 days late and/or on which a lender has reported a derogatory status.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time this will have a positive impact on your score.`,
  },
  R45: {
    factor: `Total balances too high on delinquent/derogatory bankcard or revolving accts `,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The total of the balances is high on your bankcard or revolving accounts with late payments or on which a lender has reported a derogatory.  Late payments are a proven indicator of risk.  When credit line balances approach credit limits, risk is further increased because you don't have much credit available should it be needed, creating a greater chance of becoming overextended.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  Whenever possible, pay down balances on your accounts.  Over time these actions will benefit your score.`,
  },
  R47: {
    factor: `No open bankcard or revolving accounts in your credit file`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.   The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Because you have no open bankcards or revolving accounts, your credit file does not contain enough information about your use of credit.  A mix of different types of open and active credit accounts, including bankcards and other revolving accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R48: {
    factor: `No bankcard or revolving recently reported account information`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Because you have no bankcard or revolving accounts where a lender has reported recent activity, your credit file does not contain enough information about your use of this kind of credit.  A mix of different types of open and active credit accounts, including bankcards and other revolving accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R49: {
    factor: `Lack of sufficient relevant bankcard or revolving account information`,
    explain: `Bankcard accounts include credit cards and charge cards from a bank and are frequently revolving accounts.  Revolving accounts allow you to carry a balance and your monthly payment will vary, based on the amount of your balance.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not have enough credit behavior information about your bankcard or revolving accounts. A mix of different types of open and active credit accounts, including bankcard and other revolving accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R53: {
    factor: `The worst status on your real estate accounts is delinquent or derogatory`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  Your credit file is showing a real estate account with a payment that was at least 30 days late and/or on which a lender has reported a derogatory status.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time this will have a positive impact on your score.`,
  },
  R54: {
    factor: `The amount of balance paid down on your open real estate accounts is too low`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  The amount that has been paid down on your open real estate accounts is low.  People who haven't paid down much of their mortgage or other real estate loans are higher credit risks than people who have.`,
    cando: `As monthly real estate payments are made, a portion of the outstanding principal balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your real estate accounts.  Over time this will also have a positive impact on your score.`,
  },
  R55: {
    factor: `Open real estate account balances are too high compared to their loan amounts`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  The outstanding balances on open real estate accounts remain high compared to the original loan amounts.  People who haven't paid down much of their mortgage or other real estate loans are higher credit risks than people who have.`,
    cando: `As monthly real estate payments are made, a portion of the outstanding principal balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your real estate accounts.  Over time this will also have a positive impact on your score.`,
  },
  R57: {
    factor: `Too many real estate accounts with delinquent or derogatory payment status`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  You have had too many real estate accounts with payments that are at least 30 days late and/or on which a lender has reported a derogatory status. Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying all bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time this will have a positive impact on your score.`,
  },
  R58: {
    factor: `The total of all balances on your open real estate accounts is too high`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  The total that you owe on all of your open real estate accounts is high.  Maintaining high balances has proven to be risky behavior because you don't have much credit available should it be needed, creating a greater chance of becoming overextended.  People with the highest credit scores keep their account balances low.`,
    cando: `As monthly real estate payments are made, a portion of the outstanding principal balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your real estate accounts.  Over time this will also have a positive impact on your score.`,
  },
  R61: {
    factor: `No open real estate accounts in your credit file`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  A mix of different types of open and active credit accounts, including real estate accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R62: {
    factor: `No recently reported real estate account information`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Because you have no real estate accounts where a lender has reported recent activity, your credit file does not contain enough information about your use of credit.  A mix of different types of open and active credit accounts with can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R63: {
    factor: `Lack of sufficient relevant real estate account information`,
    explain: `A real estate loan can be a first mortgage, a home equity loan, or home equity line of credit.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not contain enough credit behavior information about your real estate accounts.  A mix of different types of open and active credit accounts, including real estate loans, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R64: {
    factor: `No open first mortgage accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  A mix of different types of open and active credit accounts, including first mortgage accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R65: {
    factor: `Lack of sufficient relevant first mortgage account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not contain enough credit behavior information about your first mortgage accounts.  A mix of different types of open and active credit accounts, including first mortgage loans, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R66: {
    factor: `Your open auto account balances are too high compared to their loan amounts`,
    explain: `You have auto loans in your credit file with balances that are high compared to the original loan amounts on the account, which is a proven indicator of increased risk.`,
    cando: `As monthly car payments are made, a portion of the outstanding principal balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your auto loan accounts.  Over time this will also have a positive impact on your score.`,
  },
  R68: {
    factor: `No open auto accounts in your credit file`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  A mix of different types of open and active credit accounts, including auto loans, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R69: {
    factor: `Lack of sufficient relevant auto  account information`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not contain enough credit behavior information about your auto loans.  A mix of different types of open and active credit accounts, including auto loans, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R71: {
    factor: `You have either very few installment loans or too many with delinquencies`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  You have had too many installment accounts with late payments or do not have enough installment loans to provide sufficient information about your credit behaviors.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time this will have a positive impact on your score.`,
  },
  R72: {
    factor: `Too many installment accounts with a delinquent or derogatory payment status`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  You have had too many installment accounts that are at least 30 days late and/or on which a lender has reported a derogatory status.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying all bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time this will have a positive impact on your score.`,
  },
  R73: {
    factor: `The worst status on your installment accounts is delinquent or derogatory`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  Your credit file is showing an installment account with a payment that was at least 30 days late and/or on which a lender has reported a derogatory status.    Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  Over time, this will have a positive impact on your score.`,
  },
  R74: {
    factor: `The balance amount paid down on your open installment accounts is too low`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  The amount that has been paid down on your open installment accounts is low.  People who haven't paid down much of their installment account loan balances are higher credit risks than people who have.`,
    cando: `As monthly installment account payments are made, a portion of the outstanding principal balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your accounts.  Over time this will also have a positive impact on your score.`,
  },
  R75: {
    factor: `The installment account that you opened most recently is too new`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  The installment account that you opened most recently is still too new.  A credit file containing older accounts will have a positive impact on your credit score because it demonstrates that you are experienced managing credit.`,
    cando: `Don't open more accounts than you actually need.  Research shows that new accounts indicate greater risk, especially if overall account history isn't long.  Your score will benefit as your accounts get older.`,
  },
  R76: {
    factor: `You have insufficient credit history on installment loans`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  Your credit file does not contain enough information about your use of installment loans.  A credit file with older accounts and/or more accounts reflects more experience with handling credit and can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R77: {
    factor: `Newest delinquent or derogatory status on installment accounts is too recent`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  You have an installment account that had a late payment or on which a lender has reported a derogatory status.  Your credit file shows that this event occurred too recently.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  `,
  },
  R78: {
    factor: `Balances on installment accounts are too high compared to their loan amounts`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  The outstanding balances on open installment accounts remain high compared to the original loan amounts.  People who haven't paid down much of the original amount on installment loans are higher credit risks than people who have.`,
    cando: `As monthly payments are made, a portion of the outstanding principal balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your installment loan accounts.  Over time this will also have a positive impact on your score.`,
  },
  R79: {
    factor: `Too many of the delinquencies on your installment accounts are recent`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  A delinquency is a payment that was made 30 or more days late. Too many late payments occurred recently on your installment accounts.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time. Over time, this will have a positive impact on your score.`,
  },
  R81: {
    factor: `No open installment accounts in your credit file`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  A mix of different types of open and active credit accounts, including installment accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R83: {
    factor: `Lack of sufficient relevant installment account information`,
    explain: `An installment account is one with a fixed monthly payment for the life of the loan.  Auto loans and student loans are common examples of installment loans.  The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not contain enough information about your installment accounts.  A mix of different types of open and active credit accounts, including installment accounts, can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R84: {
    factor: `The number of inquiries was also a factor, but effect was not significant`,
    explain: `If a lender runs a credit check when you apply for credit, an inquiry is reported to the credit bureaus.  This can lower your score a small amount, in this case the drop was not significant.  The VantageScore credit score model takes rate shopping, e.g., for a mortgage or car loan, into consideration.  All inquiries for mortgages, auto loans and major credit cards that appear in your credit file within a 14-day window are interpreted as a single inquiry.  Another time inquiries never count against your score is when you check your own credit or obtain your own credit score.`,
    cando: `Apply for credit only when you need it. If you are approved for credit, the small score drop from making an inquiry will disappear within a short time and the score will quickly benefit if you make on-time payments and manage your new account in a responsible fashion.`,
  },
  R85: {
    factor: `You have too many inquiries on your credit report.`,
    explain: `If a lender runs a credit check when you apply for credit, an inquiry is reported to the credit bureaus.  This can lower your score a small amount, typically by 10 to 20 points.  The VantageScore credit score model takes rate shopping, e.g., for a mortgage or car loan, into consideration.  All inquiries for mortgages, auto loans and major credit cards that appear in your credit file within a 14-day window are interpreted as a single inquiry.  Another time inquiries never count against your score is when you check your own credit or obtain your own credit score.`,
    cando: `Apply for credit only when you need it. If you are approved for credit, the small score drop from making an inquiry will disappear within a short time and the score will quickly benefit if you make on-time payments and manage your new account in a responsible fashion.`,
  },
  R86: {
    factor: `Your credit report contains too many derogatory public records`,
    explain: `Public records include information filed or recorded by local, state, federal or other government agencies that is available to the general public. The types of public records that can affect your credit score include legal judgments against you, or tax liens levied by a government authority.  Public records can have a significant negative impact on your credit score.`,
    cando: `Pay all bills on-time and satisfy all judgments.  The impact that negative items such as public records have on your credit score will diminish over time.`,
  },
  R87: {
    factor: `Your credit report contains too many unsatisfied public records`,
    explain: `Public records include information filed or recorded by local, state, federal or other government agencies that is available to the general public. The types of public records that can affect your credit score include legal judgments against you, or tax liens levied by a government authority.  Your credit file contains public records that remain unpaid.  All public records can have a significant negative impact on your credit score.`,
    cando: `Pay all bills on-time and satisfy all judgments.  The impact that negative items such as public records have on your credit score will diminish over time.`,
  },
  R88: {
    factor: `One or more derogatory public records in your credit file is too recent`,
    explain: `Public records include information filed or recorded by local, state, federal or other government agencies that is available to the general public. The types of public records that can affect your credit score include legal judgments against you, or tax liens levied by a government authority.  Your credit file contains public records that are too recent.  All public records can have a significant negative impact on your credit score.`,
    cando: `Pay all bills on-time and satisfy all judgments.  The impact that negative items such as public records have on your credit score will diminish over time.`,
  },
  R90: {
    factor: `Too few discharged bankruptcies`,
    explain: `You have a bankruptcy on your credit report that has not been discharged.`,
    cando: `Complete your bankruptcy plan to have your debts discharged.¾ The impact on your credit score from the bankruptcy will diminish over time.`,
  },
  R93: {
    factor: `The worst status on your student loan accounts is delinquent or derogatory`,
    explain: `Your credit file is showing a student loan with a payment that was at least 30 days late and/or on which a lender has reported a derogatory status.  Late payments are a proven indicator of increased risk.  People with late payments are at risk of being overextended, putting existing credit with lenders at risk.`,
    cando: `Paying bills on time every month is important to maintaining a good credit score.  If you remain behind with any payments, bring them current as soon as possible, and then make future payments on time.  Over time, this will have a positive impact on your score.`,
  },
  R94: {
    factor: `The balance amount paid down on your open student loan accounts is too low`,
    explain: `The amount that has been paid down on your open student loan accounts is low.  People who haven't paid down much of their student loan account balances are higher credit risks than people who have.`,
    cando: `As monthly student loan account payments are made, a portion of the outstanding balance is reduced, benefitting your score.  Whenever possible, further pay down balances on your accounts.  Over time, this will also have a positive impact on your score.`,
  },
  R95: {
    factor: `You have too many collection agency accounts that are unpaid`,
    explain: `Some collection agencies report account information to credit bureaus just like lenders do.  Your credit file has too many accounts that have been sent to a collection agency and remain unpaid.  Unpaid collection accounts in your file can have a significant negative impact on your credit score.  `,
    cando: `Satisfy all collection accounts and pay all other accounts on time each month.  The impact that negative items such as collections accounts have on your credit score will diminish over time.`,
  },
  R96: {
    factor: `The total you owe on collection agency accounts is high`,
    explain: `Some collection agencies report account information to credit bureaus just like lenders do.  Your credit file indicates the amount of money you owe to collection agencies is high.  Unpaid collection accounts in your file can have a significant negative impact on your credit score.  `,
    cando: `Satisfy all collection accounts and pay all other accounts on time each month.  The impact that negative items such as collections accounts have on your credit score will diminish over time.`,
  },
  R97: {
    factor: `You have too few credit accounts`,
    explain: `The VantageScore credit score model relies on information in your credit files at the three national credit reporting companies (Equifax, Experian and TransUnion) to generate your score.  Your credit file does not have enough credit behavior information about your loans.  A mix of different types of open and active credit accounts can have a positive impact on your credit score.`,
    cando: `Maintaining open and active credit accounts in good standing can help improve your credit score.`,
  },
  R98: {
    factor: `There is a bankruptcy on your credit report`,
    explain: `Bankruptcy is a proven indicator of risk with future payments and causes a significant drop to your credit score over an extended period of time.`,
    cando: `Make all future payments on time.  The impact on your credit score from the bankruptcy will diminish over time.`,
  },
};
