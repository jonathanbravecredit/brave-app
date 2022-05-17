import { Component, Input, OnInit } from "@angular/core";
import { CreditMixService } from '../../credit-mix-service/credit-mix-service.service';
import { ICreditMixView } from '../../credit-mix.model';
import { Subscription } from 'rxjs';

@Component({
  selector: "brave-credit-mix-badges",
  templateUrl: "./credit-mix-badges.component.html",
})
export class CreditMixBadgesComponent implements OnInit {
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

  ngOnInit(): void {}
}
