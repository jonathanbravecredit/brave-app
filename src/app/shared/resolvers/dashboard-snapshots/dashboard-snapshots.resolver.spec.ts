import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { StateService } from "@shared/services/state/state.service";

import { DashboardSnapshotsResolver } from "./dashboard-snapshots.resolver";

describe("DashboardSnapshotsResolver", () => {
  let resolver: DashboardSnapshotsResolver;
  let storeMock: any;
  let stateMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj("Store", ["selectOnce"]);
    stateMock = jasmine.createSpyObj("StateService", [""]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: StateService, useValue: stateMock },
      ],
    });
    resolver = TestBed.inject(DashboardSnapshotsResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
