import { TestBed } from "@angular/core/testing";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngxs/store";
import { DashboardStateModel } from "@store/dashboard/dashboard.model";
import { of } from "rxjs";

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

  it("should run store.selectOnce on resolve", () => {
    storeMock.selectOnce.and.returnValue(of({} as DashboardStateModel));
    resolver.resolve({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
    expect(storeMock.selectOnce).toHaveBeenCalled();
  });
});
