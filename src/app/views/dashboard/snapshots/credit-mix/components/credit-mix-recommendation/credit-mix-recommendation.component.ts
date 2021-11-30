import { Component, Input, OnInit } from "@angular/core";
import { ICreditMixTLSummary } from "../../interfaces/credit-mix-calc-obj.interface";

@Component({
  selector: "brave-credit-mix-recommendation",
  templateUrl: "./credit-mix-recommendation.component.html",
})
export class CreditMixRecommendationComponent implements OnInit {
  show: boolean = true;
  recommendationText: string = "";
  recommendationSubText: string = "";
  recommendationLink: string = "";
  @Input() tradeLineSum: ICreditMixTLSummary | undefined;

  constructor() {}

  ngOnInit(): void {
    this.calculateRecommendationText(this.tradeLineSum);
  }

  closeBox(): void {
    this.show = false;
  }

  calculateRecommendationText = (
    tradeLineSummary: ICreditMixTLSummary | undefined
  ): string => {
    if (tradeLineSummary?.totalLineAmount) {
      if (
        !tradeLineSummary.amountOfClosed &&
        !tradeLineSummary.totalLineAmount
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "It's never too late to start building a diversified credit base to help your score!";
        this.recommendationSubText =
          "Click here to see products from our partners that can help you build your credit or get it back in good shape!";
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed ===
        1
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "You're off to a good start on building a strong credit base!";
        this.recommendationSubText =
          "Make your credit stronger by opening up other credit products. Want to do this without taking on debt? Click here to read our blog on how to do this!";
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <=
        4
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "You're off to a great start on building a strong credit base!";
        this.recommendationSubText =
          "Make your credit stronger by opening up other credit products. Want to do this without taking on debt? Click here to read our blog on how to do this";
      } else if (
        tradeLineSummary.creditCardAmount >= 5 &&
        !tradeLineSummary.autoLoanAmount &&
        !tradeLineSummary.studentLoanAmount &&
        !tradeLineSummary.mortgageAmount
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "You have a great credit base but there's a few easy things that can make it even better!";
        this.recommendationSubText =
          "Having more than credit cards could help you show lenders you can manage a variety of credit types. Click to learn about an easy way to do this while saving for a house or car!";
      } else if (
        tradeLineSummary.totalLineAmount === tradeLineSummary.amountOfClosed
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "You have a good credit base, but keeping some accounts open could help you in the future!";
        this.recommendationSubText =
          "For example, if you have a credit card you won't use any more, keeping it open can help your score, even if you don't use it!";
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <=
          7 &&
        (tradeLineSummary.studentLoanAmount ||
          tradeLineSummary.autoLoanAmount ||
          tradeLineSummary.mortgageAmount)
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "You're doing a fantastic job managing a variety of credit types!";
        this.recommendationSubText =
          "Make sure to keep making on-time payments and keeping your utilization low on any credit cards!";
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed <=
          7 &&
        (tradeLineSummary.studentLoanAmount ||
          tradeLineSummary.autoLoanAmount) &&
        !tradeLineSummary.mortgageAmount
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "Great job managing a variety of credit types!";
        this.recommendationSubText =
          "If your goal is to buy a house, click here for a way to continue to building a stronger credit base and score while helping you save for a down payment!";
      } else if (
        tradeLineSummary.totalLineAmount - tradeLineSummary.amountOfClosed >=
          8 &&
        tradeLineSummary.creditCardAmount &&
        tradeLineSummary.autoLoanAmount &&
        tradeLineSummary.mortgageAmount
      ) {
        this.recommendationLink = ""; //TODO
        this.recommendationText =
          "You're doing an exceptional job managing your credit mix!";
        this.recommendationSubText =
          "To help your score, remember that keeping credit cards you don't use open, even if you don't use it, increases your credit age and mix!";
      }
    }
    return "";
  };
}
