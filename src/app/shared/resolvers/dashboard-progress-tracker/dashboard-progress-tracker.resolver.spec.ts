import { TestBed } from '@angular/core/testing';

import { DashboardProgressTrackerResolver } from './dashboard-progress-tracker.resolver';

describe('DashboardProgressTrackerResolver', () => {
  let resolver: DashboardProgressTrackerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardProgressTrackerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
