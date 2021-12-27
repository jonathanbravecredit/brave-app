import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";

import { SnapshotDatabreachesResolver } from "./snapshot-databreaches.resolver";

describe("SnapshotDatabreachesResolver", () => {
  let resolver: SnapshotDatabreachesResolver;
  let storeMock: any;
  beforeEach(() => {
    storeMock = jasmine.createSpyObj("Store", ["selectOnce"]);

    TestBed.configureTestingModule({
      providers: [{ provide: Store, useValue: storeMock }],
    });
    resolver = TestBed.inject(SnapshotDatabreachesResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
