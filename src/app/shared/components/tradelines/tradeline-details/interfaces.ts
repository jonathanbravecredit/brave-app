/**
 * Configuration for the tradeline details display.
 * Mapped directly from Merge Report
 *
 * @property {string} accountNumber
 * @property {string} accountTypeSymbol
 * @property {string} creditorName
 * @property {string} originalCreditor
 * @property {string} creditType
 * @property {string} dateOpened
 * @property {string} dateClosed
 * @property {string} dateReported
 * @property {string} accountDesignator
 * @property {number | string} termMonths
 * @property {number | string} late30Count
 * @property {number | string} late60Count
 * @property {number | string} late90Count
 * @property {number | string} monthlyPayment
 * @property {number | string} creditLimit
 * @property {number | string} amountPastDue
 * @property {number | string} currentBalance
 * @property {number | string} highestBalance
 * @property {string} disputeFlag
 * @property {string} status
 * @property {string} openClosed
 */
export interface ITradelineDetailsConfig {
  accountNumber?: string;
  accountTypeSymbol?: string;
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
  creditLimit?: number | string;
  amountPastDue?: number | string;
  currentBalance?: number | string;
  highestBalance?: number | string;
  disputeFlag?: string;
  status?: string;
  openClosed?: string;
}
