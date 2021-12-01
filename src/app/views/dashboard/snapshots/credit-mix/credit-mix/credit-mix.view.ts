import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ITradeLinePartition } from "@shared/interfaces";
import { CreditMixResolver } from "@shared/resolvers/credit-mix/credit-mix.resolver";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";
import {
  ICreditMixTLSummary,
  IRecommendationText,
  TCreditMixCalcObj,
} from "../interfaces/credit-mix-calc-obj.interface";
import { testSummary } from "../test-summary";

@Component({
  selector: "brave-credit-mix",
  templateUrl: "./credit-mix.view.html",
})
export class CreditMixView {
  tradeLineParition: ITradeLinePartition[] | undefined;
  tradeLineSummary: ICreditMixTLSummary | undefined;
  recommendations: IRecommendationText | undefined;

  constructor(
    private creditMixService: CreditMixService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((resp: any) => {
      this.tradeLineParition = resp.tradeLineParition;
      this.tradeLineSummary = this.creditMixService.getTradelineSummary(
        this.tradeLineParition
      );
      // this.recommendations = this.creditMixService.getRecommendations( // For Testing
      //   testSummary
      // );
      this.recommendations = this.creditMixService.getRecommendations(
        this.tradeLineSummary
      );

      console.log(this.recommendations);
    });
  }
}
