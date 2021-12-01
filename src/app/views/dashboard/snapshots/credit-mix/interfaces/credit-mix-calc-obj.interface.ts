export interface TCreditMixCalcObj {
  string?: string;
  color?: string;
}

export interface ICreditMixTLSummary {
  hasCreditCards: boolean;
  hasStudentLoans: boolean;
  hasAutoLoans: boolean;
  hasMortgages: boolean;
  hasOpenCreditCards: boolean;
  hasOpenStudentLoans: boolean;
  hasOpenAutoLoans: boolean;
  hasOpenMortgages: boolean;
  totalLineAmount: number;
  creditCardAmount: number;
  studentLoanAmount: number;
  autoLoanAmount: number;
  mortgageAmount: number;
  amountOfClosed: number;
}

export interface IRecommendationText {
  link?: string;
  text?: string;
  subtext?: string;
  rating?: string;
  color?: string;
}
