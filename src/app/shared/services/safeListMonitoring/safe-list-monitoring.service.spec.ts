import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ISessionDB, SessionService } from '@shared/services/session/session.service';
import { of } from 'rxjs';
import { MonitorViewEvents } from './constants';

import { SafeListMonitoringService } from './safe-list-monitoring.service';

describe('SafeListMonitoringService', () => {
  let service: SafeListMonitoringService;
  let routerMock: any;
  let sessionMock: any;

  beforeEach(() => {
    sessionMock = jasmine.createSpyObj('SessionService', ['updateSessionData'], {sessionData$: of()});
    routerMock = jasmine.createSpyObj('Router', [''], { events: of() });
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: SessionService, useValue: sessionMock },
      ],
    });
    service = TestBed.inject(SafeListMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run updateSessionData on firePageView if event === MonitorViewEvents.KeyPageView && this.sessionData', () => {
    service.sessionData =  {sessionId: ''} as ISessionDB
    service.firePageView(MonitorViewEvents.KeyPageView)
    expect(sessionMock.updateSessionData).toHaveBeenCalled()
  })
});
