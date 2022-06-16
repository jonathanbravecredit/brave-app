import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { CognitoUser } from "@aws-amplify/auth";
import { Store } from "@ngxs/store";
import { AppStatus } from "@shared/utils/brave/constants";
import { OnboardingStateModel } from "@store/onboarding";
import { Auth } from "aws-amplify";
import { of, Subscription } from "rxjs";
import { SyncService } from "../sync/sync.service";
import { InitService } from "./init.service";

//private store: Store, private sync: SyncService, private router: Router

describe("InitService", () => {
  let service: InitService;
  let storeMock: any;
  let syncMock: any;
  let routerMock: any;
  let _currentAuthenticatedUser: any;
  let _signUp: any;

  beforeEach(() => {
    _currentAuthenticatedUser = Auth.currentAuthenticatedUser;
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.resolve({}));
    _signUp = Auth.signUp;
    Auth.signUp = jasmine.createSpy().and.returnValue(Promise.resolve({} as any));
  });

  afterEach(() => {
    Auth.currentAuthenticatedUser = _currentAuthenticatedUser;
    Auth.signUp = _signUp;
  });

  class CogUser {
    getSession() {}
  }

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

    storeMock.select.and.returnValue(of());

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

  it("should run onboardingSub$.unsubscribe on destroy", () => {
    service.onboardingSub$ = new Subscription();
    spyOn(service.onboardingSub$, "unsubscribe");
    service.ngOnDestroy();
    expect(service.onboardingSub$.unsubscribe).toHaveBeenCalled();
  });

  it("should run agenciesSub$.unsubscribe on destroy", () => {
    service.agenciesSub$ = new Subscription();
    spyOn(service.agenciesSub$, "unsubscribe");
    service.ngOnDestroy();
    expect(service.agenciesSub$.unsubscribe).toHaveBeenCalled();
  });

  it("should run getUserId on resolver", () => {
    spyOn(service, "getUserId");
    service.resolver();
    expect(service.getUserId).toHaveBeenCalled();
  });

  it("should run router.navigate on resolver if no id", fakeAsync(() => {
    let spy = spyOn(service, "getUserId");
    spy.and.returnValue(Promise.resolve(""));
    service.resolver();
    tick();
    expect(service.getUserId).toHaveBeenCalled();
  }));

  it("should run isUserNew on resolver if id", fakeAsync(() => {
    let spy = spyOn(service, "getUserId");
    spy.and.returnValue(Promise.resolve("test"));
    spyOn(service, "isUserNew");
    service.resolver();
    tick();
    expect(service.isUserNew).toHaveBeenCalled();
  }));

  it("should run isUserOnboarded on resolver if id", fakeAsync(() => {
    let spy = spyOn(service, "getUserId");
    spy.and.returnValue(Promise.resolve("test"));
    spyOn(service, "isUserOnboarded");
    service.resolver();
    tick();
    expect(service.isUserOnboarded).toHaveBeenCalled();
  }));

  it("should run handleUser on resolver if id", fakeAsync(() => {
    let spy = spyOn(service, "getUserId");
    spy.and.returnValue(Promise.resolve("test"));
    spyOn(service, "handleUser");
    service.resolver();
    tick();
    expect(service.handleUser).toHaveBeenCalled();
  }));

  it("should run handleListeners on resolver if id", fakeAsync(() => {
    let spy = spyOn(service, "getUserId");
    spy.and.returnValue(Promise.resolve("test"));
    spyOn(service, "handleListeners");
    service.resolver();
    tick();
    expect(service.handleListeners).toHaveBeenCalled();
  }));

  it("should run handleRouting on resolver if id", fakeAsync(() => {
    let spy = spyOn(service, "getUserId");
    spy.and.returnValue(Promise.resolve("test"));
    routerMock.url = "test";
    spyOn(service, "handleRouting");
    service.resolver();
    tick();
    expect(service.handleRouting).toHaveBeenCalled();
  }));

  it("should run initUser on handleUser if isUserNew", fakeAsync(() => {
    spyOn(service, "initUser");
    service.handleUser(true, "");
    tick();
    expect(service.initUser).toHaveBeenCalled();
  }));

  it("should run syncDbToState on handleUser if !isUserNew", fakeAsync(() => {
    spyOn(service, "syncDbToState");
    service.handleUser(false, "");
    tick();
    expect(service.syncDbToState).toHaveBeenCalled();
  }));

  it("should return true on handleUser", fakeAsync(() => {
    service.handleUser(false, "").then((res) => {
      tick();
      expect(res).toBeTrue();
    });
  }));

  it("should run subscribeToListeners on handleUser", fakeAsync(() => {
    spyOn(service, "subscribeToListeners");
    service.handleListeners("");
    tick();
    expect(service.subscribeToListeners).toHaveBeenCalled();
  }));

  it("should run navigate on handleRouting", fakeAsync(() => {
    service.handleRouting(false, AppStatus.Suspended);
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it("should return false on handleRouting", fakeAsync(() => {
    service.handleRouting(false, AppStatus.Suspended).then((res) => {
      tick();
      expect(res).toBeFalse();
    });
  }));

  it("should run goToLastOnboarded on handleRouting if !isOnboarded", fakeAsync(() => {
    spyOn(service, "goToLastOnboarded");
    service.handleRouting(false, {} as AppStatus);
    tick();
    expect(service.goToLastOnboarded).toHaveBeenCalled();
  }));

  it("should return false on handleRouting if !isOnboarded", fakeAsync(() => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(Promise.resolve(new CogUser() as unknown as CognitoUser));
    spyOn(service, "goToLastOnboarded");
    service.handleRouting(false, {} as AppStatus).then((res) => {
      expect(res).toBeFalse();
      tick();
    });
  }));

  it("should run router.navigate on handleRouting if isOnboarded", () => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(Promise.resolve(new CogUser() as unknown as CognitoUser));
    service.handleRouting(true, {} as AppStatus);
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run currentAuthenticatedUser on getUserId", fakeAsync(() => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(Promise.resolve(new CogUser() as unknown as CognitoUser));
    service.getUserId();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should run userAttributes on getUserId", fakeAsync(() => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(Promise.resolve(new CogUser() as unknown as CognitoUser));
    spyOn(Auth, "userAttributes");
    service.getUserId();
    tick();
    expect(Auth.userAttributes).toHaveBeenCalled();
  }));

  it("should run sync.isUserBrandNew on isUserNew", fakeAsync(() => {
    service.isUserNew("");
    tick();
    expect(syncMock.isUserBrandNew).toHaveBeenCalled();
  }));

  it("should run sync.initAppData on initUser", fakeAsync(() => {
    service.initUser("");
    tick();
    expect(syncMock.initAppData).toHaveBeenCalled();
  }));

  it("should run sync.isUserOnboarded on isUserOnboarded", fakeAsync(() => {
    service.isUserOnboarded("");
    tick();
    expect(syncMock.isUserOnboarded).toHaveBeenCalled();
  }));

  it("should run sync.subscribeToListeners on subscribeToListeners", fakeAsync(() => {
    service.subscribeToListeners("");
    tick();
    expect(syncMock.subscribeToListeners).toHaveBeenCalled();
  }));

  it("should run sync.syncDBDownToState on syncDbToState", fakeAsync(() => {
    service.syncDbToState("");
    tick();
    expect(syncMock.syncDBDownToState).toHaveBeenCalled();
  }));

  it("should run router.navigate on goToLastOnboarded if lastComplete is -1", () => {
    service.onboarding = { lastComplete: -1 } as OnboardingStateModel;
    service.goToLastOnboarded();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run router.navigate on goToLastOnboarded if lastComplete is 0", () => {
    service.onboarding = { lastComplete: 0 } as OnboardingStateModel;
    service.goToLastOnboarded();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run router.navigate on goToLastOnboarded if lastComplete is 1", () => {
    service.onboarding = { lastComplete: 1 } as OnboardingStateModel;
    service.goToLastOnboarded();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run router.navigate on goToLastOnboarded if lastComplete is 2", () => {
    service.onboarding = { lastComplete: 2 } as OnboardingStateModel;
    service.goToLastOnboarded();
    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
