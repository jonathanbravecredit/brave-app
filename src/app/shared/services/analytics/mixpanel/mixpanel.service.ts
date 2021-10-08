import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import {
  MixpanelClickEvents,
  MixpanelPageViewEvents,
  MixpanelErrorEvents,
} from '@shared/services/analytics/mixpanel/constants';
import mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root',
})
export class MixpanelService {
  enable: boolean = !environment.production;
  constructor() {
    mixpanel.init('d07193d6548e3fbf533e95038cb36a11', { debug: this.enable });
  }

  fireUserTrackingEvent(userId: string) {
    // if (this.enable) {
    //   return; // don't fire on dev
    // }
    // mixpanel.('set', { user_id: userId }); // Set the user ID using signed-in user_id.
  }

  fireLoginEvent() {
    if (this.enable) {
      return; // don't fire on dev
    }
    // mixpanel.track('event', 'login', {
    //   value: 1,
    // });
  }

  fireSignUpEvent() {
    if (this.enable) {
      return; // don't fire on dev
    }
  }

  fireVideoEvent(videoTag: string) {
    if (this.enable) {
      return; // don't fire on dev
    }
  }

  fireClickEvent(event: MixpanelClickEvents) {
    if (this.enable) {
      return; // don't fire on dev
    }
  }

  firePageViewEvent(event: MixpanelPageViewEvents) {
    if (this.enable) {
      return; // don't fire on dev
    }
  }

  fireErrorEvent(event: MixpanelErrorEvents) {
    if (this.enable) {
      return; // don't fire on dev
    }
  }
}
