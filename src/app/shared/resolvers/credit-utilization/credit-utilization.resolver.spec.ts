import { TestBed } from '@angular/core/testing';

import { CreditUtilizationResolver } from './credit-utilization.resolver';

describe('CreditUtilizationResolver', () => {
  let resolver: CreditUtilizationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CreditUtilizationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
