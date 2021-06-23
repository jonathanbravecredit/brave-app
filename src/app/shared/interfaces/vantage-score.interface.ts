import {
  ICreditScoreFactor,
  ICreditScoreAttributes,
  ISource,
} from '@shared/interfaces/common-tu.interface';

export interface IVantageScore {
  CreditScoreType: ICreditScoreType;
}

export interface ICreditScoreType {
  riskScore?: number;
  scoreName?: string;
  populationRank?: number;
  CreditScoreFactor?: ICreditScoreFactor[];
  CreditScoreModel?: ICreditScoreAttributes;
  NoScoreReason?: ICreditScoreAttributes;
  Source?: ISource;
}
