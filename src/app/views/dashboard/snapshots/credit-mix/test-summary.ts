import { ICreditMixTLSummary } from "./interfaces/credit-mix-calc-obj.interface";

export const testSummary: ICreditMixTLSummary = {
    hasCreditCards: false,
    hasStudentLoans: false,
    hasAutoLoans: false,
    hasMortgages: false,
    hasOpenCreditCards: false,
    hasOpenStudentLoans: false,
    hasOpenAutoLoans: false,
    hasOpenMortgages: false,
    totalLineAmount: 8,
    creditCardAmount: 7,
    amountOfOpenCreditCards: 0,
    studentLoanAmount: 0,
    autoLoanAmount: 1,
    mortgageAmount: 0,
    amountOfClosed: 0,
  }
