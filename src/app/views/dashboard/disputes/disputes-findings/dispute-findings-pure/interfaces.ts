export interface IPublicRecord {
  docketNumber: string;
  name: string
  dateFiled: string;
  datePaid: string;
  dateUpdated: string;
  type: string;
  responsability: string;
  amount: string;
  courtType: string;
  estMonthToBeRemoved: string;
}

export interface IPersonalInfo {
  ssn: string;
  name: string;
  currentAddress: string;
  previousAddress: string;
  telephone: string;
  employer: string;
  previousEmployer: string;
}
