import { IPayStatusHistory, ITradeLinePartition } from '@shared/interfaces';

export interface ITradelineDetailsConfig {
  tradeline: ITradeLinePartition;
  accountNumber?: string;
  accountTypeSymbol?: string;
  accountTypeDescription?: string;
  creditorName?: string;
  originalCreditor?: string;
  creditType?: string;
  dateOpened?: string;
  dateClosed?: string;
  dateReported?: string;
  accountDesignator?: string;
  termMonths?: number | string;
  late30Count?: number | string;
  late60Count?: number | string;
  late90Count?: number | string;
  monthlyPayment?: number | string;
  payStatusHistory?: IPayStatusHistory;
  creditLimit?: number | string;
  amountPastDue?: number | string;
  currentBalance?: number | string;
  highestBalance?: number | string;
  disputeFlag?: string;
  customerStatement?: string;
  status?: string;
  openClosed?: string;
  remarks?: string;
}
