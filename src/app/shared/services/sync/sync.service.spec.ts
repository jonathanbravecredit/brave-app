import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { APIService } from "../aws/api.service";
import { StateService } from "../state/state.service";

import { SyncService } from "./sync.service";

//private api: APIService, private store: Store, private router: Router, private statesvc: StateService

describe("SyncService", () => {
  let service: SyncService;
  let apiMock: any;
  let storeMock: any;
  let routerMock: any;
  let statesvcMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj("APIService", [""]);

    storeMock = jasmine.createSpyObj("Store", [""]);

    routerMock = jasmine.createSpyObj("Router", [""]);

    statesvcMock = jasmine.createSpyObj("StateService", [""]);

    TestBed.configureTestingModule({
      providers: [
        { provide: APIService, useValue: apiMock },
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock },
        { provide: StateService, useValue: statesvcMock },
      ],
    });
    service = TestBed.inject(SyncService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
