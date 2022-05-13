import { Component, OnInit, OnDestroy } from "@angular/core";
import { AnalyticClickEvents } from "@shared/services/analytics/analytics/constants";
import { CreditMixService } from "../credit-mix-service/credit-mix-service.service";
import { Subscription } from "rxjs";
import { ICreditMixView } from "../credit-mix.model";

@Component({
  selector: "brave-credit-mix-pure",
  templateUrl: "./credit-mix-pure.view.html",
  styleUrls: ["./credit-mix-pure.view.css"],
})
export class CreditMixPureView implements OnDestroy {
  event = AnalyticClickEvents;
  model: ICreditMixView = {} as ICreditMixView;
  modelSub$: Subscription | undefined;

  constructor(public creditMixService: CreditMixService) {
    this.modelSub$ = this.creditMixService.model$.subscribe((res) => {
      this.model = res;
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
