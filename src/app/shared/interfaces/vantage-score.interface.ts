import {
  ICreditScoreFactor,
  ISource,
} from '@shared/interfaces/common-tu.interface';

export interface IVantageScore {
  CreditScoreType: ICreditScoreType;
}

export interface ICreditScoreType {
  CreditScoreFactor: ICreditScoreFactor[];
  CreditScoreModel: string;
  NoScoreReason: string;
  Source: ISource;
}
