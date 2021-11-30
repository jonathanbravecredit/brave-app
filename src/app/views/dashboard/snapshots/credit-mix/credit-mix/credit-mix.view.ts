import { Component, OnInit } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";
import {
  ICreditMixTLSummary,
  IRecommendationText,
  TCreditMixCalcObj,
} from "../interfaces/credit-mix-calc-obj.interface";

@Component({
  selector: "brave-credit-mix",
  templateUrl: "./credit-mix.view.html",
})
export class CreditMixView implements OnInit {
  tradeLineParition: ITradeLinePartition[] | undefined;
  tradeLineSummary: ICreditMixTLSummary | undefined;
  recommendations: IRecommendationText | undefined;

  constructor(private creditMixService: CreditMixService) {}

  ngOnInit(): void {
    this.tradeLineParition = this.creditMixService.getTradelines();
    this.tradeLineSummary = this.creditMixService.getTradelineSummary();
    this.recommendations = this.creditMixService.getRecommendations(this.tradeLineSummary);
  }
}
