import { CreditUtilizationOwnership, CreditUtilizationStatus } from "./enums";
import { IBaseCreditUtilization, ICreditCard, ICreditUtilization, ILoan } from "./interfaces";

export const DEFAULT_CREDIT_CARD_STATUS_VALUES = {
  [CreditUtilizationStatus.InGoodStanding]: 'In Good Standing'
};

export const DEFAULT_CREDIT_CARD_OWNERSHIP_VALUES = {
  [CreditUtilizationOwnership.Self]: 'Self'
};

export const MOCK_DEFAULT_FINANTIAL_MECHANISM: IBaseCreditUtilization = {
  accountName: 'CITI',
  minimumPayment: 50,
  dateOpened: '03/26/2017',
  accountStatus: CreditUtilizationStatus.InGoodStanding,
  ownershipOfAccount: CreditUtilizationOwnership.Self,
  daysLateStr: '1/0/0',
};

export const MOCK_DEFAULT_CREDIT_CARD: ICreditCard = {
  ...MOCK_DEFAULT_FINANTIAL_MECHANISM,
  cardBalance: 800,
  creditLimit: 2000
}

export const MOCK_DEFAULT_CREDIT_UTILIZATION: ICreditUtilization = {
  ...MOCK_DEFAULT_FINANTIAL_MECHANISM,
  percetangeUtilization: 80,
  creditBalance: 800,
  creditLimit: 1500
};

export const MOCK_DEFAULT_LOAN: ILoan = {
  ...MOCK_DEFAULT_FINANTIAL_MECHANISM,
  accountName: 'FANNIE MAY',
  currentBalance: 1000,
  initialLoanAmount: 5000,
};

export const MOCK_DEFAULT_CREDIT_CARDS: ICreditCard[] = [
  MOCK_DEFAULT_CREDIT_CARD,
  {
    ...MOCK_DEFAULT_CREDIT_CARD,
    accountName: 'DISCOVER',
    creditLimit: 2000,
    cardBalance: 400
  }
];

export const MOCK_DEFAULT_LOANS: ILoan[] = [MOCK_DEFAULT_LOAN];

export const MOCK_COLLECTION_DEFAULT_CREDIT_UTILIZATION = {
  creditUtilization: MOCK_DEFAULT_CREDIT_UTILIZATION,
  creditCard: MOCK_DEFAULT_CREDIT_CARD,
  creditCards: MOCK_DEFAULT_CREDIT_CARDS,
  loan: MOCK_DEFAULT_LOAN,
  loans: MOCK_DEFAULT_LOANS
};
