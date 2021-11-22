import { TestBed } from '@angular/core/testing';

import { DashboardScoreTrackingResolver } from './dashboard-score-tracking.resolver';

describe('DashboardScoreTrackingResolver', () => {
  let resolver: DashboardScoreTrackingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardScoreTrackingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
