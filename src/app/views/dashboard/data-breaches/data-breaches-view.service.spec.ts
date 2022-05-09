import { TestBed } from "@angular/core/testing";

import { DataBreachesViewService } from "./data-breaches-view.service";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { APIService } from "../../../shared/services/aws/api.service";
import { of } from "rxjs/internal/observable/of";

//    private router: Router,
// private store: Store,
// private api: APIService

describe("DataBreachesViewService", () => {
  let service: DataBreachesViewService;
  let routerMock: any;
  let storeMock: any;
  let apiMock: any;

  beforeEach(() => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    storeMock = jasmine.createSpyObj("Store", ["dispatch"]);
    storeMock.dispatch.and.returnValue(of({}));
    apiMock = jasmine.createSpyObj("APIService", ["UpdateAppData"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: storeMock },
        { provide: APIService, useValue: apiMock },
      ],
    });
    service = TestBed.inject(DataBreachesViewService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
