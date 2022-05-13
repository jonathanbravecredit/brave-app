import { Component, OnDestroy } from '@angular/core';
import { ROUTE_NAMES } from '@shared/routes/routes.names';
import { NEGATIVE_ACCOUNT_CONTENT } from '@views/dashboard/negative-account/negative-account.content';
import { INegativeAccountView } from '@views/dashboard/negative-account/negative-account.model';
import { NegativeAccountService } from '@views/dashboard/negative-account/negative-account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'brave-negative-account-initial-pure',
  templateUrl: './negative-account-initial-pure.component.html',
})
export class NegativeAccountInitialPureComponent implements OnDestroy {
  public routes = ROUTE_NAMES;
  public content = NEGATIVE_ACCOUNT_CONTENT.negativeAccountInitial;
  public model: INegativeAccountView = {} as INegativeAccountView;

  private negativeAccountServiceSub$: Subscription;

  constructor(private negativeAccountService: NegativeAccountService) {
    this.negativeAccountServiceSub$ = this.negativeAccountService.model$.subscribe((model) => {
      this.model = model;
    });
  }

  ngOnDestroy(): void {
    this.negativeAccountServiceSub$.unsubscribe();
  }

  navigate(route: string): void {
    this.negativeAccountService.navigate(route);
  }
}
