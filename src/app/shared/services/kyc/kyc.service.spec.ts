import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { AnalyticsService } from "../analytics/analytics/analytics.service";
import { AuthService } from "../auth/auth.service";
import { StateService } from "../state/state.service";
import { TransunionService } from "../transunion/transunion.service";

import { KycService } from "./kyc.service";

describe("KycService", () => {
  let service: KycService;
  let storeMock: any;
  let authMock: any;
  let statesvcMock: any;
  let transunionMock: any;
  let analyticsMock: any;
  let routerMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj("Store", [""]);
    authMock = jasmine.createSpyObj("AuthService", [""]);
    statesvcMock = jasmine.createSpyObj("StateService", [""]);
    transunionMock = jasmine.createSpyObj("TransunionService", [""]);
    analyticsMock = jasmine.createSpyObj("AnalyticsService", [""]);
    routerMock = jasmine.createSpyObj("Router", [""]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: AuthService, useValue: authMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: TransunionService, useValue: transunionMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: Router, useValue: routerMock },
        KycService
      ],
    });
    service = TestBed.inject(KycService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
