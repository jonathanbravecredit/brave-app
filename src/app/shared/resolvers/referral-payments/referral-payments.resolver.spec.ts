import { TestBed } from '@angular/core/testing';

import { ReferralPaymentsResolver } from './referral-payments.resolver';

describe('ReferralPaymentsResolver', () => {
  let resolver: ReferralPaymentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReferralPaymentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
