import { TestBed } from '@angular/core/testing';

import { DashboardInitResolver } from './dashboard-init.resolver';

describe('DashboardInitResolver', () => {
  let resolver: DashboardInitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardInitResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
