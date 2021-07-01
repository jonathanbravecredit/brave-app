/**
 * Configuration for the tradeline details display.
 * Mapped directly from Merge Report
 *
 * @property {string} accountTypeSymbol
 * @property {string} creditorName
 * @property {string} originalCreditor
 * @property {string} creditType
 * @property {string} dateOpened
 * @property {string} dateReported
 * @property {string} accountDesignator
 * @property {number | string} termMonths
 * @property {number | string} late30Count
 * @property {number | string} late60Count
 * @property {number | string} late90Count
 * @property {number | string} amountPastDue
 * @property {number | string} currentBalance
 * @property {string} disputeFlag
 * @property {string} status
 * @property {string} openClosed
 */
export interface ITradelineDetailsConfig {
  accountTypeSymbol?: string;
  creditorName?: string;
  originalCreditor?: string;
  creditType?: string;
  dateOpened?: string;
  dateReported?: string;
  accountDesignator?: string;
  termMonths?: number | string;
  late30Count?: number | string;
  late60Count?: number | string;
  late90Count?: number | string;
  amountPastDue?: number | string;
  currentBalance?: number | string;
  disputeFlag?: string;
  status?: string;
  openClosed?: string;
}
