import { Injectable, OnDestroy } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";
import { Subscription } from "rxjs";
import { ICreditMixTLSummary } from "../interfaces/credit-mix-calc-obj.interface";

@Injectable({
  providedIn: "root",
})
export class CreditMixService implements OnDestroy {
  tradeLinePartition: ITradeLinePartition[] = [];
  tuReportSub$: Subscription | undefined

  constructor(private dashboard: DashboardService) {
    this.tuReportSub$ = this.dashboard.tuReport$.subscribe((res) => {
      if (res.TrueLinkCreditReportType.TradeLinePartition) {
        this.tradeLinePartition =
          res.TrueLinkCreditReportType.TradeLinePartition instanceof Array
            ? res.TrueLinkCreditReportType.TradeLinePartition
            : [res.TrueLinkCreditReportType.TradeLinePartition];
      }
    });
  }

  ngOnDestroy() {
    this.tuReportSub$?.unsubscribe()
  }

  getTradelines(): ITradeLinePartition[] | undefined {
    if (!this.tradeLinePartition) return;

    return this.tradeLinePartition instanceof Array
      ? this.tradeLinePartition
      : [this.tradeLinePartition];
  }

  getTradelineSummary(): ICreditMixTLSummary {
    let hasCreditCards = false;
    let hasStudentLoans = false;
    let hasAutoLoans = false;
    let hasMortgages = false;
    let hasOpenCreditCards = false;
    let hasOpenStudentLoans = false;
    let hasOpenAutoLoans = false;
    let hasOpenMortgages = false;
    let totalLineAmount = 0;
    let creditCardAmount = 0;
    let studentLoanAmount = 0;
    let autoLoanAmount = 0;
    let mortgageAmount = 0;
    let amountOfClosed = 0;

    this.tradeLinePartition.forEach((tradeline) => {
      if (tradeline.Tradeline?.OpenClosed?.symbol === "C") {
        amountOfClosed += 1;
        totalLineAmount += 1;
      } else if (tradeline.Tradeline?.OpenClosed?.symbol === "O") {
        totalLineAmount += 1;
      }

      if (tradeline.accountTypeSymbol?.toLowerCase() === "r") {
        if (tradeline.Tradeline?.OpenClosed?.symbol === "O") {
          hasOpenCreditCards = true
        }
        hasCreditCards = true;
        creditCardAmount += 1;
        return;
      } else if (tradeline.accountTypeSymbol?.toLowerCase() === "m") {
        if (tradeline.Tradeline?.OpenClosed?.symbol === "O") {
          hasOpenMortgages = true
        }
        hasMortgages = true;
        mortgageAmount += 1;
      } else if (
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "ST" ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "EDUC"
      ) {
        if (tradeline.Tradeline?.OpenClosed?.symbol === "O") {
          hasOpenStudentLoans = true
        }
        hasStudentLoans = true;
        studentLoanAmount += 1;
      } else if (
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "AL" ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "AR" ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "AT" ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "AU"
      ) {
        if (tradeline.Tradeline?.OpenClosed?.symbol === "O") {
          hasOpenAutoLoans = true
        }
        hasAutoLoans = true;
        autoLoanAmount += 1;
      }
    });

    return {
      hasCreditCards,
      hasStudentLoans,
      hasAutoLoans,
      hasMortgages,
      hasOpenCreditCards,
      hasOpenStudentLoans,
      hasOpenAutoLoans,
      hasOpenMortgages,
      totalLineAmount,
      creditCardAmount,
      studentLoanAmount,
      autoLoanAmount,
      mortgageAmount,
      amountOfClosed,
    };
  }

  calculateRating = (
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
}
