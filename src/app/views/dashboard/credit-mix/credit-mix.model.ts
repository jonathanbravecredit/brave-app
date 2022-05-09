import { ICreditMixTLSummary, IRecommendationText } from './interfaces/credit-mix-calc-obj.interface';
import {
  ITradeLinePartition,
  IMergeReport,
} from "../../../shared/interfaces/merge-report.interface";

export interface ICreditMixView {
  tuReport: IMergeReport;
  tradeLineParition: ITradeLinePartition[] | undefined;
  tradeLineSummary: ICreditMixTLSummary | undefined;
  recommendations: IRecommendationText | undefined;
  hasCreditCards: boolean | undefined;
  hasStudentLoans: boolean | undefined;
  hasAutoLoans: boolean | undefined;
  hasMortgages: boolean | undefined;
  rating: string | undefined;
  ratingColor: string | undefined;
}
