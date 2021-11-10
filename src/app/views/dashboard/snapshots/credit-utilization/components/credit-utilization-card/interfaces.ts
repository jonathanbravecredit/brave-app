import { ITradelineDetailsConfig } from "@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces";
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
  config: ITradelineDetailsConfig;
  creditorName: string;
  accountName?: string;
  currentBalance: number;
  creditLimit: number;
  percetangeUtilization?: number;
  openClosed: string;
  status?: string;
}

export interface ILoan extends IBaseCreditUtilization {
  currentBalance: number;
  initialLoanAmount: number;
}
