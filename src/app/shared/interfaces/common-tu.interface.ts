export interface ICodeRef {
  abbreviation?: string;
  description?: string;
  symbol?: number | string;
  rank?: number | string;
}

export interface ISource {
  BorrowerKey?: string;
  Bureau?: ICodeRef;
  InquiryDate?: string;
  Reference?: string;
}

export interface IRemark {
  RemarkCode?: ICodeRef;
  customRemark?: string;
}

export interface IPartitionSet {
  partitionSet?: number | string;
}
export interface IPartitionElements extends IPartitionSet {
  dateReported?: string;
  dateUpdated?: string;
}

export interface ICreditScoreFactor {
  bureauCode?: number;
  FactorType?: string;
  Factor?: ICreditScoreAttributes;
  FactorText?: string[];
}

export interface ICreditScoreAttributes {
  abbreviation?: string;
  description?: string;
  symbol?: number | string;
  rank?: number | string;
}
