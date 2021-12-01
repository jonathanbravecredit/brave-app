import { Injectable, OnDestroy } from "@angular/core";
import { Select } from "@ngxs/store";
import { IMergeReport, ITradeLinePartition } from "@shared/interfaces";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";
import { BraveUtil } from "@shared/utils/brave/brave";
import { AgenciesState, AgenciesStateModel } from "@store/agencies";
import {
  CreditMixRecommendations as Recs,
  RecommendationConditionalLogic as Logic,
  RecommendationValues as Values,
} from "@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service-conditions";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from "../interfaces/credit-mix-calc-obj.interface";

@Injectable({
  providedIn: "root",
})
export class CreditMixService implements OnDestroy {
  tradeLinePartition: ITradeLinePartition[] = [];
  tuReportSub$: Subscription | undefined;

  // easy access to the Transunion merge report
  tuReport: IMergeReport = {} as IMergeReport;
  tuReport$: BehaviorSubject<IMergeReport> = new BehaviorSubject(
    {} as IMergeReport
  );

  @Select(AgenciesState) agencies$!: Observable<AgenciesStateModel>;
  agenciesSub$: Subscription;

  constructor() {
    this.agenciesSub$ = this.agencies$
      .pipe()
      .subscribe((agencies: AgenciesStateModel) => {
        const parsedReport = this.getCreditReport(agencies);
        if (Object.keys(parsedReport).length) {
          this.tuReport$.next(parsedReport);
          this.tuReport = parsedReport;
        }
      });
  }

  getCreditReport(agencies: AgenciesStateModel): IMergeReport {
    const transunion = agencies.transunion;
    return BraveUtil.parsers.parseTransunionMergeReport(transunion);
  }

  getTradeLinePartitions(): ITradeLinePartition[] {
    if (!this.tuReport) return [{} as ITradeLinePartition];
    const partitions = this.tuReport?.TrueLinkCreditReportType
      ?.TradeLinePartition;
    if (!partitions) return [{} as ITradeLinePartition];
    return partitions instanceof Array ? partitions : [partitions];
  }

  ngOnDestroy() {
    this.tuReportSub$?.unsubscribe();
  }

  getTradelineSummary(
    tradeLineParition: ITradeLinePartition[] | undefined
  ): ICreditMixTLSummary {
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

    if (tradeLineParition) {
      tradeLineParition.forEach((tradeline) => {
        let openClosedSymbol = tradeline.Tradeline?.OpenClosed?.symbol
          ?.toString()
          .toLowerCase();
        let accountTypeSymbol = tradeline.accountTypeSymbol?.toLowerCase();
        let grantedTradeSymbol = tradeline.Tradeline?.GrantedTrade.AccountType?.symbol
          ?.toString()
          .toLowerCase();

        if (openClosedSymbol === "c") {
          amountOfClosed += 1;
          totalLineAmount += 1;
        } else if (openClosedSymbol === "o") {
          totalLineAmount += 1;
        }

        if (accountTypeSymbol === "r") {
          if (openClosedSymbol === "o") {
            hasOpenCreditCards = true;
          }
          hasCreditCards = true;
          creditCardAmount += 1;
          return;
        } else if (accountTypeSymbol === "m") {
          if (openClosedSymbol === "o") {
            hasOpenMortgages = true;
          }
          hasMortgages = true;
          mortgageAmount += 1;
        } else if (
          grantedTradeSymbol === "st" ||
          grantedTradeSymbol === "educ"
        ) {
          if (openClosedSymbol === "o") {
            hasOpenStudentLoans = true;
          }
          hasStudentLoans = true;
          studentLoanAmount += 1;
        } else if (
          grantedTradeSymbol === "al" ||
          grantedTradeSymbol === "ar" ||
          grantedTradeSymbol === "at" ||
          grantedTradeSymbol === "au"
        ) {
          if (openClosedSymbol === "o") {
            hasOpenAutoLoans = true;
          }
          hasAutoLoans = true;
          autoLoanAmount += 1;
        }
      });
    }

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

  getRecommendations = (
    summary: ICreditMixTLSummary | undefined
  ): IRecommendationText | undefined => {
    if (summary?.totalLineAmount) {
      if (Logic[Recs.NoClosedAndNoOpen](summary)) {
        return Values[Recs.NoClosedAndNoOpen];
      } else if (Logic[Recs.OnlyOneOpen](summary)) {
        return Values[Recs.OnlyOneOpen];
      } else if (Logic[Recs.TwoToFourOpen](summary)) {
        return Values[Recs.TwoToFourOpen];
      } else if (Logic[Recs.FivePlusOnlyCC](summary)) {
        return Values[Recs.FivePlusOnlyCC];
      } else if (Logic[Recs.AllClosed](summary)) {
        return Values[Recs.AllClosed];
      } else if (Logic[Recs.SevenOrLessNoMortgage](summary)) {
        return Values[Recs.SevenOrLessNoMortgage];
      } else if (Logic[Recs.SevenOrLess](summary)) {
        return Values[Recs.SevenOrLess];
      } else if (Logic[Recs.EightOrMoreAtLeastOneOfAll](summary)) {
        return Values[Recs.EightOrMoreAtLeastOneOfAll];
      }
    }
    return;
  };
}