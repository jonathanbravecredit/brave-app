import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { AuthService } from "@shared/services/auth/auth.service";
import { APIService } from "@shared/services/aws/api.service";
import { StateService } from "@shared/services/state/state.service";
import { AppDataStateModel } from "@store/app-data";
import { of } from "rxjs";

import { DashboardInitResolver } from "./dashboard-init.resolver";

describe("DashboardInitResolver", () => {
  let resolver: DashboardInitResolver;
  let authMock: any;
  let storeMock: any;
  let apiMock: any;
  let stateMock: any;

  beforeEach(() => {
    authMock = jasmine.createSpyObj("AuthService", ["getUserSub"]);
    storeMock = jasmine.createSpyObj("Store", ["selectOnce"]);
    apiMock = jasmine.createSpyObj("APIService", ["GetAppData"]);
    stateMock = jasmine.createSpyObj("StateService", [""]);
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authMock },
        { provide: Store, useValue: storeMock },
        { provide: APIService, useValue: apiMock },
        { provide: StateService, useValue: stateMock },
      ],
    });
    resolver = TestBed.inject(DashboardInitResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run auth.getUserSub on resolve", () => {
    resolver.resolve();
    expect(authMock.getUserSub).toHaveBeenCalled();
  });

  it("should run store.selectOnce on resolve", fakeAsync(() => {
    storeMock.selectOnce.and.returnValue(of({} as AppDataStateModel));
    resolver.resolve();
    tick();
    expect(storeMock.selectOnce).toHaveBeenCalled();
  }));
});
