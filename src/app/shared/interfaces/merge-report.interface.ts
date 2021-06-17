import {
  ISource,
  ICreditScoreFactor,
} from '@shared/interfaces/common-tu.interface';

export interface IMergeReport {
  TrueLinkCreditReportType: ITrueLinkCreditReportType;
}

export interface ITrueLinkCreditReportType {
  SB168Frozen: string;
  Borrower: IBorrower;
  TradeLinePartition: ITradeLinePartition[];
  InquiryPartition: IInquiryPartition;
  Message: { code: string; type: string }[];
  Summary: ISummary;
}

export interface IBorrower {
  BorrowerAddress?: {
    CreditAddress?: string;
    Dwelling?: string;
    Origin?: string;
    Ownership?: string;
    Source?: ISource;
  };
  Birth?: {
    BirthDate?: string;
    Source?: ISource;
  };
  CreditScore?: {
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

export interface ITradeLinePartition {
  Tradeline?: {
    AccountCondition?: string;
    AccountDesignator?: string;
    DisputeFlag?: string;
    IndustryCode?: string;
    OpenClosed?: string;
    PayStatus?: string;
    VerificationIndicator?: string;
    Remark?: {
      RemarkCode?: string;
    };
    GrantedTrade?: {
      AccountType?: string;
      CreditType?: string;
      PaymentFrequency?: string;
      TermType?: string;
      WorstPayStatus?: string;
      PayStatusHistory?: {
        MonthlyPayStatus?: any[];
      };
      CreditLimit?: string;
    };
    Source?: ISource;
  };
}

export interface IInquiryPartition {
  Inquiry?: {
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
