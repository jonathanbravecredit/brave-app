import { Injectable } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { ICreditMixTLSummary } from "@shared/interfaces/credit-mix-tl-summary.interface";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";

@Injectable({
  providedIn: "root",
})
export class CreditMixService {
  tradeLinePartition: ITradeLinePartition[] = [];

  constructor(private dashboard: DashboardService) {
    this.dashboard.tuReport$.subscribe((res) => {
      if (res.TrueLinkCreditReportType.TradeLinePartition) {
        this.tradeLinePartition =
          res.TrueLinkCreditReportType.TradeLinePartition instanceof Array
            ? res.TrueLinkCreditReportType.TradeLinePartition
            : [res.TrueLinkCreditReportType.TradeLinePartition];
      }
    });
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
}
