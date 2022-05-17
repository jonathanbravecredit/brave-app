import { Injectable } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { environment } from '@environments/environment';
import { IAnalyticsConfig } from '@shared/services/analytics/analytics/analytics.interfaces';
import {
  AnalyticPageViewEvents,
  AnalyticClickEvents,
  AnalyticErrorEvents,
} from '@shared/services/analytics/analytics/constants';
import { BraveAnalyticsService } from '@shared/services/analytics/brave/brave-analytics.service';
import { FacebookService } from '@shared/services/analytics/facebook/facebook.service';
import { GoogleService } from '@shared/services/analytics/google/google.service';
const dayjs = require('dayjs');
const weekOfYear = require('dayjs/plugin/weekOfYear');
dayjs.extend(weekOfYear);
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  disable: boolean = !environment.production;
  constructor(
    protected google: GoogleService,
    private facebook: FacebookService,
    private brave: BraveAnalyticsService,
    private router: Router,
  ) {
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise(),
      )
      .subscribe((events: RoutesRecognized[]) => {
        const previousUrl = events[0].urlAfterRedirects;
        const currentUrl = events[1].urlAfterRedirects;
        if (previousUrl === '/dashboard/report/snapshot/databreach' && currentUrl === '/dashboard/report') {
          this.fireClickEvent(AnalyticClickEvents.NavigationFraudToCreditReport);
        }
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/dashboard/init':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardInit);
            break;
          case '/dashboard/report/snapshot/negative':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReportSnapshotNegative);
            break;
          case '/dashboard/report/snapshot/forbearance':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReportSnapshotForbearance);
            break;
          case '/dashboard/report/snapshot/databreach':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReportSnapshotDatabreach);
            break;
          case '/dashboard/report/snapshot/creditutilization':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReportSnapshotCreditUtilization);
            break;
          case '/dashboard/report/snapshot/creditmix':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReportSnapshotCreditMix);
            break;
          case '/dashboard/report/snapshot/progresstracker':
            this.firePageViewEvent(AnalyticPageViewEvents.ProgressTracker);
            break;
          case '/dashboard/report':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardReport);
            break;
          case '/auth/signup':
            this.firePageViewEvent(AnalyticPageViewEvents.AuthSignup);
            break;
          case '/auth/thankyou':
            this.firePageViewEvent(AnalyticPageViewEvents.AuthThankyou);
            break;
          case '/dashboard/disputes/findings':
            this.firePageViewEvent(AnalyticPageViewEvents.DashboardDisputeFinding);
            break;
          case '/onboarding/congratulations':
            this.firePageViewEvent(AnalyticPageViewEvents.OnboardingCongratulations);
            break;
          case '/onboarding/goalchoice':
            this.firePageViewEvent(AnalyticPageViewEvents.OnboardingGoalChoice);
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
  }

  fireLoginTrackingEvent(): void {
    if (this.disable) {
      return;
    }
  }

  fireClickEvent(event: AnalyticClickEvents, config: IAnalyticsConfig = { google: true, brave: false }) {
    if (this.disable) {
      return; // don't fire on dev
    }
    if (config.google) this.google.fireClickEvent(event);
    if (config.brave) this.brave.fireClickEvent(event);
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    this.google.firePageViewEvent(event);
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    this.google.fireErrorEvent(event);
  }

  fireTimeTracking(page: string) {
    if (this.disable) {
      return; // don't fire on dev
    }
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
  }

  incrementUserPageView(page: string) {
    if (this.disable) {
      return;
    }
  }
}
