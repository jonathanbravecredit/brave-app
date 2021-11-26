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
    let totalLineAmount = 0;
    let creditCardAmount = 0;
    let studentLoanAmount = 0;
    let autoLoanAmount = 0;
    let mortgageAmount = 0;

    this.tradeLinePartition.forEach((tradeline) => {
      if (tradeline.accountTypeSymbol?.toLowerCase() === "r") {
        hasCreditCards = true;
        creditCardAmount += 1;
        totalLineAmount += 1;
        return;
      } else if (tradeline.accountTypeSymbol?.toLowerCase() === "m") {
        hasMortgages = true;
        mortgageAmount += 1;
        totalLineAmount += 1;
      } else if (
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "ST" ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase() === "EDUC"
      ) {
        hasStudentLoans = true;
        studentLoanAmount += 1;
        totalLineAmount += 1;
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
        hasAutoLoans = true;
        autoLoanAmount += 1;
        totalLineAmount += 1;
      }
    });

    return {
      hasCreditCards,
      hasStudentLoans,
      hasAutoLoans,
      hasMortgages,
      totalLineAmount,
      creditCardAmount,
      studentLoanAmount,
      autoLoanAmount,
      mortgageAmount,
    };
  }
}
