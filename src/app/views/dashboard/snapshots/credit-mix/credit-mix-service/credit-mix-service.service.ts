import { Injectable, OnDestroy } from '@angular/core';
import { ITradeLinePartition } from '@shared/interfaces';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import {
  CreditMixRecommendations as Recs,
  RecommendationConditionalLogic as Logic,
  RecommendationValues as Values,
} from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service-conditions';
import { Subscription } from 'rxjs';
import { ICreditMixTLSummary, IRecommendationText } from '../interfaces/credit-mix-calc-obj.interface';

@Injectable({
  providedIn: 'root',
})
export class CreditMixService implements OnDestroy {
  tradeLinePartition: ITradeLinePartition[] = [];
  tuReportSub$: Subscription | undefined;

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
    this.tuReportSub$?.unsubscribe();
  }

  getTradelines(): ITradeLinePartition[] | undefined {
    if (!this.tradeLinePartition) return;

    return this.tradeLinePartition instanceof Array ? this.tradeLinePartition : [this.tradeLinePartition];
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
      if (tradeline.Tradeline?.OpenClosed?.symbol === 'C') {
        amountOfClosed += 1;
        totalLineAmount += 1;
      } else if (tradeline.Tradeline?.OpenClosed?.symbol === 'O') {
        totalLineAmount += 1;
      }

      if (tradeline.accountTypeSymbol?.toLowerCase() === 'r') {
        if (tradeline.Tradeline?.OpenClosed?.symbol === 'O') {
          hasOpenCreditCards = true;
        }
        hasCreditCards = true;
        creditCardAmount += 1;
        return;
      } else if (tradeline.accountTypeSymbol?.toLowerCase() === 'm') {
        if (tradeline.Tradeline?.OpenClosed?.symbol === 'O') {
          hasOpenMortgages = true;
        }
        hasMortgages = true;
        mortgageAmount += 1;
      } else if (
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'ST' ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'EDUC'
      ) {
        if (tradeline.Tradeline?.OpenClosed?.symbol === 'O') {
          hasOpenStudentLoans = true;
        }
        hasStudentLoans = true;
        studentLoanAmount += 1;
      } else if (
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'AL' ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'AR' ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'AT' ||
        tradeline.Tradeline?.GrantedTrade.AccountType?.symbol?.toString().toLowerCase() === 'AU'
      ) {
        if (tradeline.Tradeline?.OpenClosed?.symbol === 'O') {
          hasOpenAutoLoans = true;
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

  calculateRating = (tradeLineSummary: ICreditMixTLSummary | undefined): { string: string; color: string } => {
    if (tradeLineSummary?.totalLineAmount) {
      if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <= 1 && // Only 1 account of any type open
        !tradeLineSummary.amountOfClosed // No accounts shown, open or closed
      ) {
        return { string: 'Poor', color: '#F56700' };
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <= 4 || // 2-4 accounts of any type open
        (tradeLineSummary.creditCardAmount >= 5 && // 5+ accounts of only credit cards are open
          !tradeLineSummary.autoLoanAmount &&
          !tradeLineSummary.studentLoanAmount &&
          !tradeLineSummary.mortgageAmount) ||
        tradeLineSummary.totalLineAmount === // All acounts are closed
          tradeLineSummary.amountOfClosed
      ) {
        return { string: 'Fair', color: '#F59300' };
      } else if (
        (tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <= 7 && // 5-7 accounts of any type open
          tradeLineSummary.studentLoanAmount) ||
        tradeLineSummary.autoLoanAmount || // not all accounts are just credit cards
        tradeLineSummary.mortgageAmount
      ) {
        return { string: 'Good', color: '#BBD904' };
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed >= 8 && // 8+ accounts of any type open
        tradeLineSummary.creditCardAmount &&
        tradeLineSummary.autoLoanAmount && // includes at least one credit card, mortgages, and auto loan
        tradeLineSummary.mortgageAmount
      ) {
        return { string: 'Excellent', color: '#4BD269' };
      } else {
        // catch incase no checks are satisfied
        return { string: 'Poor', color: '#F56700' };
      }
    }
    return { string: 'Poor', color: '#F56700' };
  };

  getRecommendationText = (summary: ICreditMixTLSummary | undefined): IRecommendationText | undefined => {
    if (summary?.totalLineAmount) {
      if (Logic[Recs.NoClosedAndNoOpen](summary)) {
        return Values[Recs.NoClosedAndNoOpen];
      } else if (Logic[Recs.OnlyOneOpen](summary)) {
        return {
          link: '',
          text: "You're off to a good start on building a strong credit base!",
          subtext:
            'Make your credit stronger by opening up other credit products. Want to do this without taking on debt? Click here to read our blog on how to do this!',
        };
      } else if (Logic[Recs.TwoToFourOpen](summary)) {
        return {
          link: '',
          text: "You're off to a great start on building a strong credit base!",
          subtext:
            'Make your credit stronger by opening up other credit products. Want to do this without taking on debt? Click here to read our blog on how to do this',
        };
      } else if (
        summary.creditCardAmount >= 5 &&
        !summary.autoLoanAmount &&
        !summary.studentLoanAmount &&
        !summary.mortgageAmount
      ) {
        return {
          link: '',
          text: "You have a great credit base but there's a few easy things that can make it even better!",
          subtext:
            'Having more than credit cards could help you show lenders you can manage a variety of credit types. Click to learn about an easy way to do this while saving for a house or car!',
        };
      } else if (summary.totalLineAmount === summary.amountOfClosed) {
        return {
          link: '',
          text: 'You have a good credit base, but keeping some accounts open could help you in the future!',
          subtext:
            "For example, if you have a credit card you won't use any more, keeping it open can help your score, even if you don't use it!",
        };
      } else if (
        summary.totalLineAmount - summary.amountOfClosed <= 7 &&
        (summary.studentLoanAmount || summary.autoLoanAmount || summary.mortgageAmount)
      ) {
        return {
          link: '',
          text: "You're doing a fantastic job managing a variety of credit types!",
          subtext: 'Make sure to keep making on-time payments and keeping your utilization low on any credit cards!',
        };
      } else if (
        summary.totalLineAmount - summary.amountOfClosed <= 7 &&
        (summary.studentLoanAmount || summary.autoLoanAmount) &&
        !summary.mortgageAmount
      ) {
        return {
          link: '',
          text: 'Great job managing a variety of credit types!',
          subtext:
            'If your goal is to buy a house, click here for a way to continue to building a stronger credit base and score while helping you save for a down payment!',
        };
      } else if (
        summary.totalLineAmount - summary.amountOfClosed >= 8 &&
        summary.creditCardAmount &&
        summary.autoLoanAmount &&
        summary.mortgageAmount
      ) {
        return {
          link: '',
          text: "You're doing an exceptional job managing your credit mix!",
          subtext:
            "To help your score, remember that keeping credit cards you don't use open, even if you don't use it, increases your credit age and mix!",
        };
      }
    }
    return;
  };
}
