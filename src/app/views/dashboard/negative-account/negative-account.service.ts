import { Injectable, OnDestroy } from "@angular/core";
import { EventKeys } from "@shared/services/broadcast/broadcast.model";
import { BroadcastService } from "@shared/services/broadcast/broadcast.service";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { INegativeAccountView } from "@views/dashboard/negative-account/negative-account.model";
import { BehaviorSubject, Subscription } from "rxjs";
import * as _ from "lodash";
// consider adding an api endpoint to just get the negative accounts
// a feature store to manage the data could be relevant but we don't manipulate it
// so a service and model should be sufficient for now

@Injectable()
export class NegativeAccountService implements OnDestroy {
  model: INegativeAccountView = {} as INegativeAccountView;
  model$: BehaviorSubject<INegativeAccountView> =
    new BehaviorSubject<INegativeAccountView>({} as INegativeAccountView);

  creditReportServiceSub$: Subscription;

  constructor(
    private broadcastService: BroadcastService,
    private creditReportService: CreditreportService
  ) {
    _.bindAll(this, "setModel");
    this.creditReportServiceSub$ = this.creditReportService.tuReport$.subscribe(
      this.setModel
    );
  }

  ngOnDestroy(): void {
    this.creditReportServiceSub$.unsubscribe();
  }

  navigate(route: string): void {
    this.broadcastService.broadcast(EventKeys.NAVIGATION, route);
  }

  setModel(): void {
    const negatives = this.creditReportService.getNegativeItems();
    this.model = { ...this.model, negativeAccounts: negatives };
    this.model$.next(this.model);
  }
}
