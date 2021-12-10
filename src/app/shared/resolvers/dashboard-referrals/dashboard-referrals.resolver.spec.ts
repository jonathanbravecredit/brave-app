import { TestBed } from '@angular/core/testing';

import { DashboardReferralsResolver } from './dashboard-referrals.resolver';

describe('DashboardReferralsResolver', () => {
  let resolver: DashboardReferralsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardReferralsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
