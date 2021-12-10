import { TestBed } from '@angular/core/testing';

import { ReferralRecordResolver } from './referral-record.resolver';

describe('ReferralRecordResolver', () => {
  let resolver: ReferralRecordResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReferralRecordResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
