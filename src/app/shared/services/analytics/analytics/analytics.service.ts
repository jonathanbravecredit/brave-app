import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  AnalyticPageViewEvents,
  AnalyticClickEvents,
  AnalyticErrorEvents,
} from '@shared/services/analytics/analytics/constants';
import { GoogleService } from '@shared/services/analytics/google/google.service';
import { MixpanelService } from '@shared/services/analytics/mixpanel/mixpanel.service';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  enable: boolean = true; //!environment.production; TODO...remove after testing
  constructor(protected google: GoogleService, protected mixpanel: MixpanelService) {}

  fireUserTrackingEvent(userId: string) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    this.google.fireUserTrackingEvent(userId);
    this.mixpanel.fireUserTrackingEvent(userId);
  }

  fireClickEvent(event: AnalyticClickEvents) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    this.google.fireClickEvent(event);
    this.mixpanel.fireClickEvent(event);
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    this.google.firePageViewEvent(event);
    this.mixpanel.firePageViewEvent(event);
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (!this.enable) {
      return; // don't fire on dev
    }

    this.google.fireErrorEvent(event);
    this.mixpanel.fireErrorEvent(event);
  }
}
