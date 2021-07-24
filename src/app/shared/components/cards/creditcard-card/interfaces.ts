import { CreditCardOwnership, CreditCardStatus } from "./enums";

export interface ICreditCard {
  cardBalance: number;
  creditLimit: number;
  minimumPayment: number;
  dateOpened: string;
  accountStatus: CreditCardStatus
  ownershipOfAccount: CreditCardOwnership;
  daysLateStr: string;
}
