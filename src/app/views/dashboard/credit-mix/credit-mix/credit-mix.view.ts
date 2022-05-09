import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";

@Component({
  selector: "brave-credit-mix",
  templateUrl: "./credit-mix.view.html",
})
export class CreditMixView {
  constructor(
    private creditMixService: CreditMixService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((resp: any) => {
      this.creditMixService.initialModelMerge(resp.tradeLineParition);
    });
  }
}
