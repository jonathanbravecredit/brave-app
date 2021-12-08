import { TestBed } from '@angular/core/testing';

import { ReferralMetricsResolver } from './referral-metrics.resolver';

describe('ReferralMetricsResolver', () => {
  let resolver: ReferralMetricsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReferralMetricsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
