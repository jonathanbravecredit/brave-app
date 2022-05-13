import { Component, OnDestroy } from "@angular/core";
import { CREDIT_MIX_CONTENT } from "../../credit-mix.content";
import { ICreditMixView } from "../../credit-mix.model";
import { Subscription } from "rxjs";
import { CreditMixService } from "../../credit-mix-service/credit-mix-service.service";

@Component({
  selector: "brave-credit-mix-rating",
  templateUrl: "./credit-mix-rating.component.html",
})
export class CreditMixRatingComponent implements OnDestroy {
  CREDIT_MIX_CONTENT = CREDIT_MIX_CONTENT;
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
