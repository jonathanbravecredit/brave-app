import { CreditCardOwnership, CreditCardStatus } from "./enums";
import { ICreditCard } from "./interfaces";

export const DEFAULT_CREDIT_CARD_STATUS_VALUES = {
  [CreditCardStatus.InGoodStanding]: 'In Good Standing'
};

export const DEFAULT_CREDIT_CARD_OWNERSHIP_VALUES = {
  [CreditCardOwnership.Self]: 'Self'
};


export const MOCK_DEFAULT_CREDIT_CARD: ICreditCard = {
  cardBalance: 800,
  creditLimit: 2000,
  minimumPayment: 50,
  dateOpened: '03/26/2017',
  accountStatus: CreditCardStatus.InGoodStanding,
  ownershipOfAccount: CreditCardOwnership.Self,
  daysLateStr: '1/0/0',
};

export const MOCK_DEFAULT_CREDIT_CARDS: ICreditCard[] = [MOCK_DEFAULT_CREDIT_CARD];
