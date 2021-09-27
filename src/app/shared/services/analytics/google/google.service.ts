import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  GoogleClickEvents,
  GoogleErrorEvents,
  GooglePageViewEvents,
} from '@shared/services/analytics/google/constants';

declare let gtag: (arg1: string, arg2: any, arg3?: any) => void;

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  googlePageViewEvents = GooglePageViewEvents;
  googleClickEvents = GoogleClickEvents;
  constructor() {}

  fireUserTrackingEvent(userId: string) {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('set', { user_id: userId }); // Set the user ID using signed-in user_id.
  }

  fireLoginEvent() {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('event', 'login', {
      value: 1,
    });
  }

  fireSignUpEvent() {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('event', 'sign_up', {
      value: 1,
    });
  }

  fireVideoEvent(videoTag: string) {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('event', videoTag, {
      value: 1,
    });
  }

  fireClickEvent(event: GoogleClickEvents) {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('event', 'bc_click', {
      event_category: event,
      event_label: `${event}_view`,
      view: 1,
    });
  }

  firePageViewEvent(event: GooglePageViewEvents) {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('event', 'bc_page_view', {
      event_category: event,
      event_label: `${event}_view`,
      view: 1,
    });
  }

  fireErrorEvent(event: GoogleErrorEvents) {
    if (!environment.production) {
      return; // don't fire on dev
    }
    gtag('event', 'bc_error', {
      event_category: event,
      event_label: `${event}_error`,
      view: 1,
    });
  }
}
