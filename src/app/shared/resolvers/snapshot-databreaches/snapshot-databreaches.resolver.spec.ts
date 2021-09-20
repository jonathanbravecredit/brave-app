import { TestBed } from '@angular/core/testing';

import { SnapshotDatabreachesResolver } from './snapshot-databreaches.resolver';

describe('SnapshotDatabreachesResolver', () => {
  let resolver: SnapshotDatabreachesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SnapshotDatabreachesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
