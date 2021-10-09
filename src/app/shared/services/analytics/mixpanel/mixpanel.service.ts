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
    console.log('firing mx user tracking ==> ', userId);
    mixpanel.identify(userId); // Set the user ID using signed-in user_id.
  }

  fireClickEvent(event: AnalyticClickEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    console.log('firing mx click event ==> ', event);
    mixpanel.track('click', { category: event });
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    console.log('firing mx page view event ==> ', event);
    mixpanel.track('view', { category: event });
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (this.disable) {
      return; // don't fire on dev
    }
    console.log('firing mx error event ==> ', event);
    mixpanel.track('error', { category: event });
  }

  fireTimeTracking(page: string) {
    console.log('firing mx time tracking 1 ==> ', page, this.previousPage, this.currentPage);
    if (this.previousPage !== undefined) {
      mixpanel.track(this.previousPage);
    }
    this.previousPage = this.currentPage;
    this.currentPage = page;
    console.log('firing mx time tracking 2 ==> ', page, this.previousPage, this.currentPage);
    mixpanel.time_event(page);
  }
}
