import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { IReferralDashboardView } from "../../referral-dashboard.model";
import { ReferralDashboardViewService } from "../../referral-dashboard-view.service";
const dayjs = require("dayjs");

@Component({
  selector: "brave-referral-banner",
  templateUrl: "./referral-banner.component.html",
})
export class ReferralBannerComponent implements OnDestroy {
  model: IReferralDashboardView = {} as IReferralDashboardView;
  modelSub$: Subscription | undefined;

  constructor(
    private referralDashboardViewService: ReferralDashboardViewService
  ) {
    this.modelSub$ = this.referralDashboardViewService.model$.subscribe(
      (res) => {
        this.model = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
