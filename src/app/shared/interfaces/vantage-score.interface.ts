import { ICreditScoreFactor, ICodeRef, ISource } from '@shared/interfaces/common-tu.interface';

export interface IVantageScore {
  CreditScoreType: ICreditScoreType;
}

export interface ICreditScoreType {
  riskScore?: number;
  scoreName?: string;
  populationRank?: number;
  CreditScoreFactor?: ICreditScoreFactor[];
  CreditScoreModel?: ICodeRef;
  NoScoreReason?: ICodeRef;
  Source?: ISource;
}
