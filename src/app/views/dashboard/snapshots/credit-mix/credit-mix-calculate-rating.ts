import { ICreditMixTLSummary } from "@shared/interfaces/credit-mix-tl-summary.interface";

export const calculateRating = (
  tradeLineSummary: ICreditMixTLSummary | undefined
): { string: string; color: string } => {
  if (tradeLineSummary?.totalLineAmount) {
    if (
      tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <= 1 && // Only 1 account of any type open
      !tradeLineSummary.amountOfClosed // No accounts shown, open or closed
    ) {
      return { string: "Poor", color: "#F56700" };
    } else if (
      tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <= 4 || // 2-4 accounts of any type open
      (tradeLineSummary.creditCardAmount >= 5 && // 5+ accounts of only credit cards are open
        !tradeLineSummary.autoLoanAmount &&
        !tradeLineSummary.studentLoanAmount &&
        !tradeLineSummary.mortgageAmount) ||
      tradeLineSummary.totalLineAmount === // All acounts are closed
        tradeLineSummary.amountOfClosed
    ) {
      return { string: "Fair", color: "#F59300" };
    } else if (
      (tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <=
        7 && // 5-7 accounts of any type open
        tradeLineSummary.studentLoanAmount) ||
      tradeLineSummary.autoLoanAmount || // not all accounts are just credit cards
      tradeLineSummary.mortgageAmount
    ) {
      return { string: "Good", color: "#BBD904" };
    } else if (
      tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed >= 8 && // 8+ accounts of any type open
      tradeLineSummary.creditCardAmount &&
      tradeLineSummary.autoLoanAmount && // includes at least one credit card, mortgages, and auto loan
      tradeLineSummary.mortgageAmount
    ) {
      return { string: "Excellent", color: "#4BD269" };
    } else {
      // catch incase no checks are satisfied
      return { string: "Poor", color: "#F56700" };
    }
  }
  return { string: "Poor", color: "#F56700" };
};
