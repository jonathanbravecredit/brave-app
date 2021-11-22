import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { environment } from '@environments/environment';
import {
  AnalyticPageViewEvents,
  AnalyticClickEvents,
  AnalyticErrorEvents,
} from '@shared/services/analytics/analytics/constants';
import { FacebookService } from '@shared/services/analytics/facebook/facebook.service';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { MixpanelService } from '@shared/services/analytics/mixpanel/mixpanel.service';
import { filter, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  disable: boolean = !environment.production;
  constructor(
    protected google: GoogleService,
    private facebook: FacebookService,
    protected mixpanel: MixpanelService,
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
    const month = `0${now.getMonth() + 1}`.slice(-2);
    const year = now.getFullYear();
    const cohort = `${year}${month}`;
    this.mixpanel.addToCohort(cohort);
  }

  incrementUserPageView(page: string) {
    if (this.disable) {
      return;
    }
    this.mixpanel.incrementUserPageView(page);
  }
}
