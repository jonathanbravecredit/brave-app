import { ISource, ICreditScoreFactor, ICreditScoreAttributes } from '@shared/interfaces/common-tu.interface';

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
  Birth?: {
    BirthDate?: string;
    Source?: ISource;
  };
  CreditScore?: {
    riskScore: number | string;
    scoreName: string;
    populationRank: number | string;
    inquiriesAffectedScore: boolean | string;
    CreditScoreFactor?: ICreditScoreFactor[];
    CreditScoreMode?: string;
    NoScoreReason?: string;
    Source?: ISource;
  };
  SocialPartition?: {
    Social?: {
      SocialSecurityNumber?: String;
      Source?: ISource;
    };
  };
}
export interface IBorrowerAddress {
  CreditAddress?: ICreditAddress;
  Dwelling?: string;
  Origin?: string;
  Ownership?: string;
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
export interface ITradeLinePartition {
  accountTypeDescription?: string;
  accountTypeSymbol?: string;
  accountTypeAbbreviation?: string;
  Tradeline?: ITradeline;
}
export interface ITradeline {
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
  AccountCondition?: ICreditScoreAttributes;
  AccountDesignator?: ICreditScoreAttributes;
  DisputeFlag?: ICreditScoreAttributes;
  IndustryCode?: ICreditScoreAttributes;
  OpenClosed?: ICreditScoreAttributes;
  PayStatus?: ICreditScoreAttributes;
  VerificationIndicator?: ICreditScoreAttributes;
  Remark?: ITradelineRemark;
  GrantedTrade: IGrantedTrade;
  CollectionTrade?: ITradelineCollection;
  Source?: ISource;
}
export interface ITradelineRemark {
  customRemark?: string;
  RemarkCode?: ICreditScoreAttributes;
}
export interface IGrantedTrade {
  monthsReviewed: number | string;
  monthlyPayment: number | string;
  late90Count: number | string;
  late60Count: number | string;
  late30Count: number | string;
  dateLastPayment: string;
  termMonths: number | string;
  collateral: string;
  amountPastDue: number | string;
  worstPatStatusCount: number | string;
  AccountType: ICreditScoreAttributes;
  CreditType: ICreditScoreAttributes;
  PaymentFrequency: ICreditScoreAttributes;
  TermType: ICreditScoreAttributes;
  WorstPayStatus: ICreditScoreAttributes;
  PayStatusHistory: IPayStatusHistory;
  CreditLimit: number | string;
}
export interface IPayStatusHistory {
  status: string;
  startDate: string;
  MonthlyPayStatus: IMonthyPayStatusItem[];
}
export interface IMonthyPayStatusItem {
  date: string;
  status: string;
}
export interface ITradelineCollection {
  originalCreditor?: string;
  creditType?: ICreditScoreAttributes;
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
