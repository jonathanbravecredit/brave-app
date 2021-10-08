import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  AnalyticClickEvents,
  AnalyticPageViewEvents,
  AnalyticErrorEvents,
} from '@shared/services/analytics/analytics/constants';

declare let gtag: (arg1: string, arg2: any, arg3?: any) => void;

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  enable = !environment.production;
  constructor() {}

  fireUserTrackingEvent(userId: string) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('set', { user_id: userId }); // Set the user ID using signed-in user_id.
  }

  fireLoginEvent() {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('event', 'login', {
      value: 1,
    });
  }

  fireSignUpEvent() {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('event', 'sign_up', {
      value: 1,
    });
  }

  fireVideoEvent(videoTag: string) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('event', videoTag, {
      value: 1,
    });
  }

  fireClickEvent(event: AnalyticClickEvents) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('event', 'bc_click', {
      event_category: event,
      event_label: `${event}_view`,
      view: 1,
    });
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('event', 'bc_page_view', {
      event_category: event,
      event_label: `${event}_view`,
      view: 1,
    });
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (!this.enable) {
      return; // don't fire on dev
    }
    gtag('event', 'bc_error', {
      event_category: event,
      event_label: `${event}_error`,
      view: 1,
    });
  }
}
