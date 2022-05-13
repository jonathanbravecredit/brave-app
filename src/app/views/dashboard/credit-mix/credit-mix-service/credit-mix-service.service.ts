import { Injectable, OnDestroy } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import {
  CreditMixRecommendations as Recs,
  RecommendationConditionalLogic as Logic,
  RecommendationValues as Values,
} from "@views/dashboard/credit-mix/credit-mix-service/credit-mix-service-conditions";
import { BehaviorSubject, Subscription } from "rxjs";
import {
  ICreditMixTLSummary,
  IRecommendationText,
} from "../interfaces/credit-mix-calc-obj.interface";
import { ICreditMixView } from "../credit-mix.model";
import * as _ from "lodash";
import { IMergeReport } from "../../../../shared/interfaces/merge-report.interface";

@Injectable({
  providedIn: "root",
})
export class CreditMixService implements OnDestroy {
  // easy access to the Transunion merge report
  model: ICreditMixView = {} as ICreditMixView;
  model$: BehaviorSubject<ICreditMixView> = new BehaviorSubject<ICreditMixView>(
    {} as ICreditMixView
  );

  tuReport$ = new BehaviorSubject({} as IMergeReport);
  tuReportSub$: Subscription;

  constructor(private creditReport: CreditreportService) {
    this.tuReportSub$ = this.creditReport.tuReport$.subscribe((report) => {
      this.tuReport$.next(report);
      this.model.tuReport = report;
    });
  }

  initialModelMerge(tradeLinePartition: ITradeLinePartition[] | undefined) {
    let modelObject: Partial<ICreditMixView> = {} as ICreditMixView;

    modelObject.tradeLineParition = tradeLinePartition;
    modelObject.tradeLineSummary = this.getTradelineSummary(
      modelObject.tradeLineParition
    );
    modelObject.recommendations = this.getRecommendations(
      modelObject.tradeLineSummary
    );
    modelObject.rating = modelObject.recommendations?.rating;
    modelObject.ratingColor = modelObject.recommendations?.color;

    modelObject.hasCreditCards =
      modelObject.tradeLineSummary.hasOpenCreditCards;
    modelObject.hasStudentLoans =
      modelObject.tradeLineSummary.hasOpenStudentLoans;
    modelObject.hasAutoLoans = modelObject.tradeLineSummary.hasOpenAutoLoans;
    modelObject.hasMortgages = modelObject.tradeLineSummary.hasOpenMortgages;

    this.mergeModel(modelObject);
  }

  mergeModel(modelObject: Partial<ICreditMixView>) {
    _.merge(this.model, modelObject);
    this.model$.next(this.model);
  }

  getTradeLinePartitions(): ITradeLinePartition[] {
    return this.model.tuReport.TrueLinkCreditReportType.TradeLinePartition;
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
    let amountOfOpenCreditCards = 0;

    if (tradeLineParition) {
      tradeLineParition.forEach((tradeline) => {
        let openClosedSymbol = tradeline.Tradeline?.OpenClosed?.symbol
          ?.toString()
          .toLowerCase();
        let accountTypeSymbol = tradeline.accountTypeSymbol?.toLowerCase();
        let grantedTradeSymbol =
          tradeline.Tradeline?.GrantedTrade?.AccountType?.symbol
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
            amountOfOpenCreditCards += 1;
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
      amountOfOpenCreditCards,
      studentLoanAmount,
      autoLoanAmount,
      mortgageAmount,
      amountOfClosed,
    };
  }

  getRecommendations = (
    summary: ICreditMixTLSummary | undefined
  ): IRecommendationText | undefined => {
    if (summary) {
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
      } else if (Logic[Recs.EightOrMore](summary)) {
        return Values[Recs.EightOrMore];
      }
    }
    return;
  };

  mapCreditMixSnapshotStatus(status: string) {
    const mapper: Record<string, string> = {
      poor: "semicritical",
      fair: "danger",
      good: "normal",
      excellent: "safe",
    };
    return mapper[status.toLowerCase()];
  }
}
