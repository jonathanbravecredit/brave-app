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

export interface ISource {
  BorrowerKey?: string;
  Bureau?: ICreditScoreAttributes;
  InquiryDate?: string;
  Reference?: string;
}
