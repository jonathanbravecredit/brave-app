import { Injectable } from "@angular/core";
import { NavigationEnd, Router, RoutesRecognized } from "@angular/router";
import { environment } from "@environments/environment";
import {
  AnalyticPageViewEvents,
  AnalyticClickEvents,
  AnalyticErrorEvents,
} from "@shared/services/analytics/analytics/constants";
import { FacebookService } from "@shared/services/analytics/facebook/facebook.service";
import { GoogleService } from "@shared/services/analytics/google/google.service";
import { MixpanelService } from "@shared/services/analytics/mixpanel/mixpanel.service";
import * as moment from "moment";
import { filter, pairwise } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  disable: boolean = !environment.production;
  constructor(
    protected google: GoogleService,
    private facebook: FacebookService,
    protected mixpanel: MixpanelService,
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        const previousUrl = events[0].urlAfterRedirects;
        const currentUrl = events[1].urlAfterRedirects;
        if (
          previousUrl === "/dashboard/report/snapshot/databreach" &&
          currentUrl === "/dashboard/report"
        ) {
          this.fireClickEvent(
            AnalyticClickEvents.NavigationFraudToCreditReport
          );
        }
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case "/dashboard/init":
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardInit);
            break;
          case "/dashboard/report/snapshot/negative":
            this.firePageViewEvent(
              AnalyticPageViewEvents.DashboardReportSnapshotNegative
            );
            break;
          case "/dashboard/report/snapshot/forbearance":
            this.firePageViewEvent(
              AnalyticPageViewEvents.DashboardReportSnapshotForbearance
            );
            break;
          case "/dashboard/report/snapshot/databreach":
            this.firePageViewEvent(
              AnalyticPageViewEvents.DashboardReportSnapshotDatabreach
            );
            break;
          case "/dashboard/report/snapshot/creditutilization":
            this.firePageViewEvent(
              AnalyticPageViewEvents.DashboardReportSnapshotCreditUtilization
            );
            break;
          case "/dashboard/report/snapshot/creditmix":
            this.firePageViewEvent(
              AnalyticPageViewEvents.DashboardReportSnapshotCreditMix
            );
            break;
          case "/dashboard/report":
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReport);
            break;
          case "/auth/signup":
            this.firePageViewEvent(AnalyticPageViewEvents.AuthSignup);
            break;
          case "/auth/thankyou":
            this.firePageViewEvent(AnalyticPageViewEvents.AuthThankyou);
            break;
          case "/dashboard/disputes/findings":
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardDisputeFinding);
            break;
        }
      }
    });
  }

  fireUserTrackingEvent(userId: string | undefined) {
    if (this.disable || !userId) {
      return; // don't fire on dev
    }
    this.google.fireUserTrackingEvent(userId);
    this.mixpanel.fireUserTrackingEvent(userId);
  }

  fireLoginTrackingEvent(): void {
    if (this.disable) {
      return;
    }
    this.mixpanel.fireLoginTrackingEvent();
  }

  fireClickEvent(event: AnalyticClickEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    this.google.fireClickEvent(event);
    this.mixpanel.fireClickEvent(event);
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    this.google.firePageViewEvent(event);
    this.mixpanel.firePageViewEvent(event);
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    this.google.fireErrorEvent(event);
    this.mixpanel.fireErrorEvent(event);
  }

  fireTimeTracking(page: string) {
    if (this.disable) {
      return; // don't fire on dev
    }
    this.mixpanel.fireTimeTracking(page);
  }

  fireCompleteRegistration(amount: number, currency: string) {
    if (this.disable) {
      return;
    }
    this.facebook.fireCompleteRegistration(amount, currency);
  }

  addToCohort() {
    if (this.disable) {
      return;
    }
    const now = new Date();
    const week = moment().format("ww");
    const year = now.getFullYear();
    const cohort = `${year}${week}`;
    this.mixpanel.addToCohort(cohort);
  }

  incrementUserPageView(page: string) {
    if (this.disable) {
      return;
    }
    this.mixpanel.incrementUserPageView(page);
  }
}
