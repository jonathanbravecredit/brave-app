import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { IReferral } from "@shared/interfaces/referrals.interface";
import { REFERRAL_DASHBOARD_CONTENT } from "../../referral-dashboard.content";
import { IReferralDashboardView } from "../../referral-dashboard.model";
import { Subscription } from "rxjs";
import { ReferralDashboardViewService } from "../../referral-dashboard-view.service";
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("America/Los_Angeles");

@Component({
  selector: "brave-referral-earnings",
  templateUrl: "./referral-earnings.component.html",
})
export class ReferralEarningsComponent implements OnDestroy {
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
