import { TestBed } from '@angular/core/testing';

import { DisputesResolver } from './disputes.resolver';

describe('DisputesResolver', () => {
  let resolver: DisputesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DisputesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
