import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MonitorClickEvents, MonitorViewEvents } from '@shared/services/safeListMonitoring/constants';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SafeListMonitoringService {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/dashboard/report/snapshot/negative':
            this.firePageView(MonitorViewEvents.KeyPageView);
            break;
          case '/dashboard/report/snapshot/creditmix':
            this.firePageView(MonitorViewEvents.KeyPageView);
            break;
          case '/dashboard/report/snapshot/creditutilization':
            this.firePageView(MonitorViewEvents.KeyPageView);
            break;
          case '/dashboard/report':
            this.firePageView(MonitorViewEvents.KeyPageView);
            break;
          case '/dashboard/report/snapshot/forbearance':
            this.firePageView(MonitorViewEvents.KeyPageView);
            break;
          case '/dashboard/report/snapshot/databreach':
            this.firePageView(MonitorViewEvents.KeyPageView);
            break;
        }
      }
    });
  }

  firePageView(event: MonitorViewEvents) {
    const sessionId = sessionStorage.get('bravesessionid');
    if (!sessionId) {
      sessionStorage.set('bravesessionid', uuid.v4());
    }
    if (event === MonitorViewEvents.KeyPageView) {
      //  todo page view api call
    }
  }

  fireClickEvent(event: MonitorClickEvents) {
    const sessionId = sessionStorage.get('bravesessionid');
    if (!sessionId) {
      sessionStorage.set('bravesessionid', uuid.v4());
    }
  }
}
