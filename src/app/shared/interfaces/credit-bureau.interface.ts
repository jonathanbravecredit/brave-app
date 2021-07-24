/*====================================*/
/* !!Important!!                      */
/* - Keep all spelling mistakes as is */
/* - this is the investigation results*/
/* - field name 'disputeCreditBureau' */
/*====================================*/

import { ITUText, ITUUnparsed } from '@shared/interfaces/common-tu.interface';

export interface IDisputeCreditBureau {
  creditBureau: ICreditBureau;
}

export interface ICreditBureau {
  version: number | string;
  transactionControl: ITransactionControl;
  productArray: IProduct | IProduct[];
}

interface ITransactionControl {
  tracking: ITracking;
}

interface ITracking {
  transactionTimeStamp: string;
  language: string;
  identifier: IIdentifier;
  responseCode: number;
  responseMessage: string;
}

interface IIdentifier {
  fin: string;
  activityNumber: number | string;
  partyId: number | string;
}

interface IProduct {
  code: number;
  subject: ISubject | ISubject[];
}

interface ISubject {
  fileAccessCode: string;
  enclosures: IEnclosures;
  subjectRecord: ISubjectRecord;
  fullDisclFlag: string;
}

interface IEnclosures {
  codes: ICodes | ICodes[];
  addresseeContact: IContact;
  returnMailContact: IContact;
}

interface ICodes {
  code: string | number;
  type: string | number;
  versionNo: string | number;
}

interface IContact {
  name: ITUUnparsed;
  address: IAddress;
}

interface IAddress {
  street: IStreet;
  location: ILocation;
  dateReported?: string;
  order?: string | number;
}

interface IStreet extends ITUUnparsed {
  number: number | string;
  name: string;
}

interface ILocation extends ITUUnparsed {
  city?: string;
  state?: string;
  zipCode?: number | string;
  zipExt?: number | string;
}

interface ISubjectRecord {
  fileSummary: IFileSummary;
  indicative: IIndicative;
  custom: ICustom;
  addOnProduct: IAddOnProduct;
  closingInfo: IClosingInfo;
  fileNumber: number | string;
  consumerID: number | string;
  fileDate: string;
  dynamicText: IDynamicText;
}

interface IFileSummary {
  inFileSinceDate: string;
  disclosureCoverInfo: IDisclosureCoverInfo;
}

interface IDisclosureCoverInfo {
  coverCode: number | string;
  versionNo: number | string;
  disputeURL: string;
  summarySection: ISummarySection;
  resellterOperatorId: string;
}

interface ISummarySection {
  lineItem: ILineItem | ILineItem[];
}

interface ILineItem {
  itemKey: string;
  itemType: number | string;
  credit: ICredit;
}

interface ICredit {
  item: IItem;
  description: IDescription;
  result: string;
}

interface IItem {
  itemName?: string;
  subscriber: ISubscriber;
}

interface ISubscriber {
  industryCode?: string;
  memberCode?: string;
  name: IName;
  address: IAddress;
  phone: IPhone;
}

interface IPhone extends ITUUnparsed {
  areaCode: number | string;
  exchange: number | string;
  suffix: number | string;
}

interface IDescription {
  descriptionText: string;
}

interface IIndicative {
  name: IName;
  address: IAddress;
  socialSecurity: ISocialSecurity;
}

interface IName {
  person: IPerson;
}

interface IPerson extends ITUUnparsed {
  first?: string;
  middle?: string;
  last?: string;
  order?: number | string;
}

interface ISocialSecurity {
  number: string;
  order: number | string;
}

interface ICustom {
  credit: ICustomCredit;
}

interface ICustomCredit {
  trade: ITrade;
  publicRecord: IPublicRecord;
  histRemarkLegend: unknown;
}

interface IRecordBase {
  itemKey: string;
  type?: string;
  subscriber: ISubscriber;
  dateEffective: string;
  dateEffectiveLabel: string;
}
interface ITrade extends IRecordBase {
  portfolioType: string;
  accountNumber: string;
  dateOpened: string;
  dateClosed?: string;
  datePaidOut?: string;
  currentBalance?: number | string;
  highCredit: number | string;
  creditLimit?: number | string;
  accountRating: string;
  remark?: ICBRemark;
  terms: ITerms;
  account?: IAccount;
  paymentHistory?: IPaymentHistory;
  mostRecentPayments: IMostRecentPayments;
  additionalTradeAccount: IAdditionalTradeAccount;
  suppressionFlag: boolean;
  adverseFlag: boolean;
  estimatedDeletionDate: string;
  accountRatingDescription: string;
  portfolioTypeDescription: string;
  ECOADesignator: string;
  ECOADesignatorDescription: string;
  histPaymentDueList: unknown;
  histPaymentAmtList: unknown;
  histBalanceList: unknown;
  histPastDueList: unknown;
  histRemarkList?: unknown;
  isCollection: boolean;
}

interface ICBRemark {
  code?: string;
  type?: string;
  description?: string;
}

interface ITerms {
  description: string;
}

interface IAccount extends ICBRemark {}

interface IPaymentHistory {
  paymentPattern: IPaymentPattern;
  historicalCounters: IHistoricalCounters;
}

interface IPaymentPattern {
  startDate: string;
  text: string;
}

interface IHistoricalCounters {
  monthsReviewedCount: number | string;
  late30DaysTotal: number | string;
  late60DaysTotal: number | string;
  late90DaysTotal: number | string;
}

interface IMostRecentPayments {
  date?: string;
  description: string;
}

interface IAdditionalTradeAccount {
  original: string;
}

interface IPublicRecord extends IRecordBase {
  docketNumber: string;
  attorney: string;
  plaintiff: unknown;
  dateFiled: string;
  datePaid: string;
  ECOADesignator: string;
  ECOADescription: string;
  source: ICBRemark;
  estimatedDateOfDeletion: string;
  suppressionIndicator: boolean;
  publicRecordTypeDescription: string;
  order: number | string;
}

interface IAddOnProduct {
  scoreModel: IScoreModel;
  militaryLendingActSearch: IMilitaryLendingActSearch;
}

interface IScoreModel {
  score: IScore;
}

interface IScore {
  name: IName;
  productCode: string;
  score: number | string;
  scoreGrade: string;
  scoreDate: string;
  quantitativeGraphNumber: number | string;
  populationGraphNumber: number | string;
  populationDescription: string;
  summaryDescription: string;
}

interface IMilitaryLendingActSearch {
  searchStatus: string;
}

interface IClosingInfo {
  mail: ITUUnparsed;
  address: IAddress;
  phone: IPhone;
  contactURL: string;
  disputeURL: string;
}

interface IDynamicText {
  personalInfoDetail: ITUText;
  publicRecordDetail: ITUText | ITUText[];
  adverseAcctDetail: ITUText | ITUText[];
  accountDetail: ITUText | ITUText[];
}
