export interface ICreditMixTLSummary {
  hasCreditCards: boolean;
  hasStudentLoans: boolean;
  hasAutoLoans: boolean;
  hasMortgages: boolean;
  totalLineAmount: number;
  creditCardAmount: number;
  studentLoanAmount: number;
  autoLoanAmount: number;
  mortgageAmount: number;
}
