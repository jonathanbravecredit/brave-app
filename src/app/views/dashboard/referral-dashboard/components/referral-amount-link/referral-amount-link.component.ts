import { Component, OnDestroy } from "@angular/core";
import { REFERRAL_DASHBOARD_CONTENT } from "../../referral-dashboard.content";
import { IReferralDashboardView } from "../../referral-dashboard.model";
import { AlertsService } from "../../../../../shared/services/alerts/alerts.service";
import { ReferralDashboardViewService } from "../../referral-dashboard-view.service";
import { Subscription } from "rxjs";

@Component({
  selector: "brave-referral-amount-link",
  templateUrl: "./referral-amount-link.component.html",
})
export class ReferralAmountLinkComponent implements OnDestroy {
  REFERRAL_DASHBOARD_CONTENT = REFERRAL_DASHBOARD_CONTENT;
  model: IReferralDashboardView = {} as IReferralDashboardView;
  modelSub$: Subscription | undefined;

  constructor(
    private alertsService: AlertsService,
    private referralDashboardViewService: ReferralDashboardViewService
  ) {
    this.modelSub$ = this.referralDashboardViewService.model$.subscribe((res) => {
      this.model = res;
    });
  }

  ngOnDestroy(): void {
    this.modelSub$?.unsubscribe();
  }

  copyUrl(el: HTMLInputElement) {
    this.alertsService.onShowAlertEvent(
      JSON.stringify({
        name: 'referral-link-copy',
        position: "bottom-right",
        text: "Copied to Clipboard!",
        timed: true,
        timeout: 2000,
      })
    );

    el.select();
    document.execCommand("copy");
    el.setSelectionRange(0, 0);
  }
}
