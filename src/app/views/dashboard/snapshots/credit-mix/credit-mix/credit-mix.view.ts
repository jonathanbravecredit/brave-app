import { Component, OnInit } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";
import { ICreditMixTLSummary, TCreditMixCalcObj } from "../interfaces/credit-mix-calc-obj.interface";

@Component({
  selector: "brave-credit-mix",
  templateUrl: "./credit-mix.view.html",
})
export class CreditMixView implements OnInit {
  tradeLineParition: ITradeLinePartition[] | undefined;
  tradeLineSummary: ICreditMixTLSummary | undefined;
  creditMixCalculationObj: TCreditMixCalcObj | undefined

  constructor(private creditMix: CreditMixService) {}

  ngOnInit(): void {
    this.tradeLineParition = this.creditMix.getTradelines();
    this.tradeLineSummary = this.creditMix.getTradelineSummary();
    this.creditMixCalculationObj = this.creditMix.calculateRating(this.tradeLineSummary)

    console.log(this.tradeLineSummary)
  }

}
