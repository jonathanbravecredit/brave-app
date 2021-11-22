import { TestBed } from '@angular/core/testing';

import { DashboardScoreTrendsResolver } from './dashboard-score-trends.resolver';

describe('DashboardScoreTrendsResolver', () => {
  let resolver: DashboardScoreTrendsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardScoreTrendsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
