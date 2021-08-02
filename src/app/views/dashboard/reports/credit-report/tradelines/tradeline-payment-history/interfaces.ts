/**
 * Payment Status History from Merge Report
 * @property {ITradelinePaymentAttributes} headers - Set to the header values (i.e. month abbreviations) for payment history table
 * @property {ITradelinePaymentAttributes[]} years - Set to the row values (payment details by year/month) for payment history table
 */
export interface ITradelinePaymentHistory {
  headers: ITradelinePaymentAttributes;
  years: ITradelinePaymentAttributes[];
}

/**
 * Payment Status History from Merge Report
 *
 * **Note**: **truncateAt** and **truncateLimit** can only function if the **truncate** flag property its set to **true**
 * @property {string | null} year - Set to the year value (e.g. 2021)
 * @property {string[]} months - Set to monthly payment status values = ['u','u','u'...'c'] (one for each month: 12)
 */
export interface ITradelinePaymentAttributes {
  year: string | null;
  months: string[];
}
