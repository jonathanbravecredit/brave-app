import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { of } from "rxjs";
import { SyncService } from "../sync/sync.service";

import { InitService } from "./init.service";

//private store: Store, private sync: SyncService, private router: Router

describe("InitService", () => {
  let service: InitService;
  let storeMock: any;
  let syncMock: any;
  let routerMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj("Store", ["select"]);
    syncMock = jasmine.createSpyObj("SyncService", [
      "isUserBrandNew",
      "initAppData",
      "isUserOnboarded",
      "subscribeToListeners",
      "syncDBDownToState",
    ]);
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);

    storeMock.select.and.returnValue(of())

    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: SyncService, useValue: syncMock },
        { provide: Router, useValue: routerMock },
      ],
    });
    service = TestBed.inject(InitService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
