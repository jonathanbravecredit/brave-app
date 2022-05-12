import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReferralDashboardViewService } from "../referral-dashboard-view.service";
import { IReferralDashboardView } from "../referral-dashboard.model";
import { Subscription } from "rxjs";

@Component({
  selector: "brave-referral-dashboard",
  templateUrl: "./referral-dashboard.view.html",
})
export class ReferralDashboardView implements OnDestroy {
  model: IReferralDashboardView = {} as IReferralDashboardView;
  modelSub$: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private referralDashboardViewService: ReferralDashboardViewService
  ) {
    this.modelSub$ = this.referralDashboardViewService.model$.subscribe(
      (res) => {
        this.model = res;
      }
    );
    this.route.data.subscribe((resp: any) => {
      this.referralDashboardViewService.mergeModel(
        resp.referral.referral,
        resp.referral.campaign
      );
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
