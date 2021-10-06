import { TestBed } from '@angular/core/testing';

import { DashboardSnapshotsResolver } from './dashboard-snapshots.resolver';

describe('DashboardSnapshotsResolver', () => {
  let resolver: DashboardSnapshotsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DashboardSnapshotsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
