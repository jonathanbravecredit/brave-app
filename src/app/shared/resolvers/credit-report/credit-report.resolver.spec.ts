import { TestBed } from '@angular/core/testing';

import { CreditReportResolver } from './credit-report.resolver';

describe('CreditReportResolver', () => {
  let resolver: CreditReportResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CreditReportResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
