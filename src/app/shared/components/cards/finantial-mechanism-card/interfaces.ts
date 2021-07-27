import { FinantialMechanismOwnership, FinantialMechanismStatus } from "./enums";

export type TFinantialMechanismStatus = 'excellent' | 'good' | 'okay' | 'poor';
export type TFinantialMechanismEntity = IBaseFinantialMechanism & Partial<ICreditCard> & Partial<ICreditUtilization> & Partial<ILoan>;

export interface IBaseFinantialMechanism {
  accountName: string;
  minimumPayment: number;
  dateOpened: string;
  accountStatus: FinantialMechanismStatus
  ownershipOfAccount: FinantialMechanismOwnership;
  daysLateStr: string;
}

export interface ICreditCard extends IBaseFinantialMechanism {
  cardBalance: number
  creditLimit: number;
}

export interface ICreditUtilization extends IBaseFinantialMechanism {
  creditBalance: number;
  creditLimit: number;
  percetangeUtilization: number;
}

export interface ILoan extends IBaseFinantialMechanism {
  currentBalance: number;
  initialLoanAmount: number;
}
