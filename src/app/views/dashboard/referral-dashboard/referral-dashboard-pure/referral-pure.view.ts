import { Component, OnDestroy } from "@angular/core";
import { REFERRAL_DASHBOARD_CONTENT } from "../referral-dashboard.content";
import { IReferralDashboardView } from "../referral-dashboard.model";
import { Subscription } from "rxjs";
import { ReferralDashboardViewService } from "../referral-dashboard-view.service";

@Component({
  selector: "brave-referral-pure",
  templateUrl: "./referral-pure.view.html",
})
export class ReferralDashboardPureView implements OnDestroy {
  REFERRAL_DASHBOARD_CONTENT = REFERRAL_DASHBOARD_CONTENT;
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
