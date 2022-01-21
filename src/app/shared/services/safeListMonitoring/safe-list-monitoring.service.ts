import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MonitorClickEvents, MonitorViewEvents } from '@shared/services/safeListMonitoring/constants';
import { ISessionDB, SessionService } from '@shared/services/session/session.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class SafeListMonitoringService {
  sessionData: ISessionDB | undefined;

  constructor(private router: Router, private sessionService: SessionService) {
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

    sessionService.sessionData$.subscribe((value) => {
      this.sessionData = value;
    });
  }

  firePageView(event: MonitorViewEvents) {
    if (event === MonitorViewEvents.KeyPageView && this.sessionData) {
      const data = {
        sessionId: this.sessionData.sessionId,
        expirationDate: moment(new Date()).add(1, 'day').toISOString(),
      };
      this.sessionService.updateSessionData(data, event);
    }
  }

  fireClickEvent(event: MonitorClickEvents) {
    if (event === MonitorClickEvents.DisputesEnroll && this.sessionData) {
      this.sessionService.updateSessionData(
        {
          sessionId: this.sessionData.sessionId,
          expirationDate: moment(new Date()).add(1, 'day').toISOString(),
        },
        event,
      );
    }
  }
}
