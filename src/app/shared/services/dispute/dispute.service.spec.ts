import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { SafeListMonitoringService } from '@shared/services/safeListMonitoring/safe-list-monitoring.service';
import { of } from 'rxjs';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';

import { DisputeService } from './dispute.service';

// private analytics: AnalyticsService,

// private safeMonitor: SafeListMonitoringService,

describe('DisputeService', () => {
  let service: DisputeService;
  class StateMock {
    public state$ = of();
  }
  let transunionMock: any;
  let analyticsMock: any;
  let safeMonitorMock: any;

  beforeEach(() => {
    transunionMock = jasmine.createSpyObj('TransunionService', ['subscribe']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['']);
    safeMonitorMock = jasmine.createSpyObj('SafeListMonitoringService', ['']);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useClass: StateMock },
        { provide: TransunionService, useValue: transunionMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: SafeListMonitoringService, useValue: safeMonitorMock },
      ],
    });
    service = TestBed.inject(DisputeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
