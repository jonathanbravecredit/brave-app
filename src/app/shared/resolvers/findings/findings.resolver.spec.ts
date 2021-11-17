import { TestBed } from '@angular/core/testing';

import { FindingsResolver } from './findings.resolver';

describe('FindingsResolver', () => {
  let resolver: FindingsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FindingsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
