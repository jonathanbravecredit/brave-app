import { TestBed } from '@angular/core/testing';

import { ReferralResolver } from './referral.resolver';

describe('ReferralResolver', () => {
  let resolver: ReferralResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReferralResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
