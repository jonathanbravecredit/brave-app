import { TestBed } from '@angular/core/testing';

import { CreditMixResolver } from './credit-mix.resolver';

describe('CreditMixResolver', () => {
  let resolver: CreditMixResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CreditMixResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
