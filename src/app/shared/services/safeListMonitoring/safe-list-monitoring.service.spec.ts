import { TestBed } from '@angular/core/testing';

import { SafeListMonitoringService } from './safe-list-monitoring.service';

describe('SafeListMonitoringService', () => {
  let service: SafeListMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeListMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
