import { ISource, ICodeRef, IPartitionElements, IPartitionSet } from '@shared/interfaces/common-tu.interface';

export interface IMergeReport {
  TrueLinkCreditReportType: ITrueLinkCreditReportType;
}
export interface ITrueLinkCreditReportType {
  SB168Frozen?: string;
  Borrower?: IBorrower | IBorrower[];
  TradeLinePartition?: ITradeLinePartition[] | ITradeLinePartition;
  InquiryPartition?: IInquiryPartition;
  Message?: { code?: string; type?: string }[] | { code?: string; type?: string };
  Summary?: ISummary;
  Sources?: { Source?: ISource };
  SafetyCheckPassed?: boolean | string;
}

/*=======================*/
/*    Frozen Elements    */
/*=======================*/
export interface ISB168Frozen {
  equifax?: boolean;
  experian?: boolean;
  transunion?: boolean;
}

/*=======================*/
/*    Borrower Elements  */
/*=======================*/
export interface IBorrower {
  BorrowerAddress?: IBorrowerAddress | IBorrowerAddress[];
  PreviousAddress?: IBorrowerAddress | IBorrowerAddress[];
  Birth?: IBorrowerBirth | IBorrowerBirth[];
  CreditStatement?: ICreditStatement | ICreditStatement[];
  CreditScore?: ICreditScore | ICreditScore[];
  Employer?: IEmployer | IEmployer[];
  BorrowerName?: IBorrowerName | IBorrowerName[];
  BorrowerTelephone?: IBorrowerTelephone | IBorrowerTelephone[];
  SocialPartition?: ISocialPartition | ISocialPartition[];
  BorrowerBureauIdentifier?: IBorrowerBureauIdentifier | IBorrowerBureauIdentifier[];
  borrowerKey?: string;
  SocialSecurityNumber?: string;
}
export interface IBorrowerAddress {
  CreditAddress?: ICreditAddress;
  Dwelling?: ICodeRef;
  Origin?: ICodeRef;
  Ownership?: ICodeRef;
  Source?: ISource;
}
export interface ICreditAddress {
  city?: string;
  country?: string;
  county?: string;
  direction?: string;
  houseNumber?: string;
  postDirection?: string;
  stateCode?: string;
  streetName?: string;
  unit?: string;
  unparsedStreet?: string;
  postalCode?: string;
}
export interface IBorrowerBirth extends IPartitionSet {
  BirthDate?: string;
  Source?: ISource;
  date?: string;
  age?: number;
}
export interface IBorrowerName extends IPartitionElements {
  Name?: IName;
  NameType?: ICodeRef;
  Source?: ISource;
}
export interface IName {
  prefix?: string;
  first?: string;
  middle?: string;
  last?: string;
  suffix?: string;
}
export interface IBorrowerTelephone extends IPartitionElements {
  PhoneNumber?: IPhoneNumber;
  PhoneType?: ICodeRef;
  Source?: ISource;
}
export interface IPhoneNumber {
  AreaCode?: string;
  Number?: string;
  Extension?: string;
}
export interface ICreditStatement {
  StatementType?: ICodeRef;
  Source?: ISource;
  statement?: string;
}
export interface ICreditScore {
  CreditScoreFactor?: ICreditScoreFactor | ICreditScoreFactor[];
  CreditScoreMode?: ICodeRef;
  NoScoreReason?: ICodeRef;
  Source?: ISource;
  qualitativeRank?: number | string;
  inquiriesAffectedScore?: boolean | string;
  new: boolean;
  riskScore: number | string;
  scoreName: string;
  populationRank: number | string;
}
export interface ICreditScoreFactor {
  Factor?: ICodeRef;
  FactorText?: string | string[];
  FactorType?: 'Negative' | 'Positive';
  bureauCode?: number;
}
export interface IEmployer extends IPartitionElements {
  CreditAddress?: ICreditAddress;
  Source?: ISource;
  name?: string;
}
export interface ISocialPartition {
  Social?: ISocial | ISocial[];
}
export interface ISocial {
  SocialSecurityNumber?: string;
  Source?: ISource;
}
export interface IBorrowerBureauIdentifier extends IPartitionSet {
  type?: string;
  identifier?: string;
  Source?: ISource;
}

/*=======================*/
/*   Tradeline Elements  */
/*=======================*/
export interface ITradeLinePartition {
  Tradeline?: ITradeline;
  accountTypeDescription?: string;
  accountTypeSymbol?: string;
  accountTypeAbbreviation?: string;
}
export interface ITradeline {
  AccountCondition?: ICodeRef;
  AccountDesignator?: ICodeRef;
  DisputeFlag?: ICodeRef;
  IndustryCode?: ICodeRef;
  OpenClosed?: ICodeRef;
  PayStatus?: ICodeRef;
  VerificationIndicator?: ICodeRef;
  Remark?: ITradelineRemark | ITradelineRemark[];
  WatchTrade: IWatchTrade | IWatchTrade[];
  GrantedTrade: IGrantedTrade | IGrantedTrade[];
  CollectionTrade?: ICollectionTrade;
  Source?: ISource;
  subscriberCode?: string;
  highBalance?: number | string;
  dateVerified?: string;
  handle?: string;
  dateReported?: string;
  dateOpened?: string;
  dateClosed?: string;
  accountNumber?: string;
  dateAccountStatus?: string;
  currentBalance?: number | string;
  creditorName?: string;
  position?: number | string;
  bureau?: string;
}
export interface ITradelineRemark {
  RemarkCode?: ICodeRef;
  customRemark?: string;
}
export interface IWatchTrade {
  ContactMethod?: ICodeRef;
  CreditType?: ICodeRef;
  PreviousAccountCondition?: ICodeRef;
  previousAmountPastDue?: number | string;
  amountPastDue?: number | string;
}
export interface IGrantedTrade {
  AccountType?: ICodeRef;
  CreditType?: ICodeRef;
  PaymentFrequency?: ICodeRef;
  TermType?: ICodeRef;
  WorstPayStatus?: ICodeRef;
  PayStatusHistory?: IPayStatusHistory;
  CreditLimit?: number | string;
  monthsReviewed?: number | string;
  monthlyPayment?: number | string;
  late90Count?: number | string;
  late60Count?: number | string;
  late30Count?: number | string;
  actualPaymentAmount?: number | string;
  worstPatStatusCount?: number | string;
  termMonths?: number | string;
  dateLastPayment?: string;
  collateral?: string;
  amountPastDue?: number | string;
  dateWorstPayStatus?: string;
  datePastDue?: string;
}
export interface IPayStatusHistory {
  MonthlyPayStatus?: IMonthyPayStatusItem | IMonthyPayStatusItem[];
  startDate?: string;
  status?: string;
}
export interface IMonthyPayStatusItem {
  GenericRemark?: ICodeRef;
  RatingRemark?: ICodeRef;
  ComplianceRemark?: ICodeRef;
  PaymentDue?: number | string;
  CreditLimit?: number | string;
  ActualPayment?: number | string;
  PastDue?: number | string;
  highCredit?: number | string;
  status?: string;
  date?: string;
  currentBalance?: number | string;
  changed?: boolean | string;
}
export interface ICollectionTrade {
  originalCreditor?: string;
  creditType?: ICodeRef;
}
export interface IInquiryPartition {
  Inquiry?: {
    inquiryDate?: string;
    subscriberName?: string;
    subscriberNumber?: number | string;
    bureau?: string;
    inquiryType?: string;
    IndustryCode?: string;
    Source?: ISource;
  };
}
export interface ISummary {
  TradelineSummary?: {
    TransUnion?: string;
  };
  InquirySummary?: {
    TransUnion?: string;
  };
  PublicRecordSummary?: {
    TransUnion?: string;
  };
  Sources?: {
    Source?: {
      Bureau?: string;
      InquiryDate?: string;
      OriginalData?: string;
    };
  };
  SafetyCheckPassed?: string;
}
export interface IUnparsedCreditReport {
  '#text': string;
  type: string;
}
