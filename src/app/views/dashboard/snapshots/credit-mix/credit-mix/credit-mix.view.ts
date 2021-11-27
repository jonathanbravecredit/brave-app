import { Component, OnInit } from "@angular/core";
import { ITradeLinePartition } from "@shared/interfaces";
import { ICreditMixTLSummary } from "@shared/interfaces/credit-mix-tl-summary.interface";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";

@Component({
  selector: "brave-credit-mix",
  templateUrl: "./credit-mix.view.html",
})
export class CreditMixView implements OnInit {
  tradeLineParition: ITradeLinePartition[] | undefined;
  tradeLineSummary: ICreditMixTLSummary | undefined

  constructor(private creditMix: CreditMixService) {}

  ngOnInit(): void {
    this.tradeLineParition = this.creditMix.getTradelines();
    this.tradeLineSummary = this.creditMix.getTradelineSummary();

    console.log(this.tradeLineParition)
  }

}
