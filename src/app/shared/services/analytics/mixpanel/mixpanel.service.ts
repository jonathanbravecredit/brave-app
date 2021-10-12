import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  AnalyticClickEvents,
  AnalyticPageViewEvents,
  AnalyticErrorEvents,
} from '@shared/services/analytics/analytics/constants';
import mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root',
})
export class MixpanelService {
  disable: boolean = !environment.production;
  previousPage: string | undefined;
  currentPage: string = '/'; // start with the root
  constructor() {
    mixpanel.init('d07193d6548e3fbf533e95038cb36a11', { debug: this.disable });
  }

  fireUserTrackingEvent(userId: string) {
    if (this.disable) {
      return; // don't fire on dev
    }
    mixpanel.identify(userId); // Set the user ID using signed-in user_id.
  }

  fireLoginTrackingEvent(): void {
    if (this.disable) {
      return;
    }
    mixpanel.people.increment('logins');
  }

  fireClickEvent(event: AnalyticClickEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    mixpanel.track('click', { category: event });
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    mixpanel.track('view', { category: event });
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    mixpanel.track('error', { category: event });
  }

  fireTimeTracking(page: string) {
    if (this.previousPage !== undefined) {
      mixpanel.track(this.previousPage);
    }
    this.previousPage = this.currentPage;
    this.currentPage = page;
    mixpanel.time_event(page);
  }

  addToCohort(cohort: string) {
    if (this.disable) {
      return;
    }
    mixpanel.people.set({ cohort });
  }

  incrementUserPageView(page: string) {
    if (this.disable) {
      return;
    }
    mixpanel.people.increment(page);
  }
}
