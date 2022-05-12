import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { REFERRAL_DASHBOARD_CONTENT } from "../../referral-dashboard.content";
import { ReferralDashboardViewService } from "../../referral-dashboard-view.service";
import { IReferralDashboardView } from "../../referral-dashboard.model";
import { Subscription } from "rxjs";


@Component({
  selector: "brave-referral-body-text",
  templateUrl: "./referral-body-text.component.html",
})
export class ReferralBodyTextComponent implements OnInit, OnDestroy {
  REFERRAL_DASHBOARD_CONTENT = REFERRAL_DASHBOARD_CONTENT;
  model: IReferralDashboardView = {} as IReferralDashboardView;
  modelSub$: Subscription | undefined;
  addOn: number = 0;
  
  constructor(
    private referralDashboardViewService: ReferralDashboardViewService
  ) {
    this.modelSub$ = this.referralDashboardViewService.model$.subscribe(
      (res) => {
        this.model = res;
      }
    );
  }

  ngOnInit(): void {
    this.addOn =
      this.model.campaign?.addOnFlagOne === "enrollment"
        ? 0
        : this.model.campaign?.denomination || 0;
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }
}
