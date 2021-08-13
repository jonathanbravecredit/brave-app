import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/interfaces';

export interface ITradelineCreditBureauConfig extends ITradelineDetailsConfig {
  accountType?: string;
  dateOpened?: string;
  dateClosed?: string;
  creditLimit?: string | number;
  term?: string;
  name?: [string, string, string];
}
export interface IPublicRecordCreditBureauConfig {
  docketNumber: string;
  name: [string, string, string];
  dateFiled: string;
  datePaid: string;
  dateUpdated: string;
  type: string;
  responsibility: string;
  amount: string;
  courtType: string;
  estMonthToBeRemoved: string;
}

export interface IPersonalInfoCreditBureauConfig {
  ssn: string;
  name: string;
  currentAddress: string;
  previousAddress: string;
  telephone: string;
  employer: string;
  previousEmployer: string;
}
