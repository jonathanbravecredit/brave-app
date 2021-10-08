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
  enable: boolean = true; //!environment.production; TODO...remove after testing
  constructor() {
    mixpanel.init('d07193d6548e3fbf533e95038cb36a11', { debug: this.enable });
  }

  fireUserTrackingEvent(userId: string) {
    if (this.enable) {
      return; // don't fire on dev
    }
    mixpanel.identify(userId); // Set the user ID using signed-in user_id.
  }

  fireClickEvent(event: AnalyticClickEvents) {
    if (this.enable) {
      return; // don't fire on dev
    }
    mixpanel.track('click', { category: event });
  }

  firePageViewEvent(event: AnalyticPageViewEvents) {
    if (this.enable) {
      return; // don't fire on dev
    }
    mixpanel.track('view', { category: event });
  }

  fireErrorEvent(event: AnalyticErrorEvents) {
    if (this.enable) {
      return; // don't fire on dev
    }
    mixpanel.track('error', { category: event });
  }
}
