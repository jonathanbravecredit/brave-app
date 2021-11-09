import { CreditUtilizationOwnership, CreditUtilizationStatus } from "./enums";

export type TCreditUtilizationStatus = 'excellent' | 'good' | 'okay' | 'poor';
export type TCreditUtilizationEntity = IBaseCreditUtilization & Partial<ICreditCard> & Partial<ICreditUtilization> & Partial<ILoan>;

export interface IBaseCreditUtilization {
  accountName: string;
  minimumPayment: number;
  dateOpened: string;
  accountStatus: CreditUtilizationStatus
  ownershipOfAccount: CreditUtilizationOwnership;
  daysLateStr: string;
}

export interface ICreditCard extends IBaseCreditUtilization {
  cardBalance: number
  creditLimit: number;
}

export interface ICreditUtilization {
  accountName: string;
  creditBalance: number;
  creditLimit: number;
  percetangeUtilization: number;
  open: boolean;
  status: string;
}

export interface ILoan extends IBaseCreditUtilization {
  currentBalance: number;
  initialLoanAmount: number;
}
