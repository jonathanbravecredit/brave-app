import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { APIService, CreateAppDataInput } from "../aws/api.service";
import { StateService } from "../state/state.service";

import { SyncService } from "./sync.service";
import { Observable, of, Subscription } from "rxjs";
import { AppDataStateModel } from "@store/app-data";
import { BraveUtil } from '@shared/utils/brave/brave';
import { CreateAppDataMutation } from "@bravecredit/brave-sdk";
import { Auth } from "aws-amplify";
import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';

//private api: APIService, private store: Store, private router: Router, private statesvc: StateService

describe("SyncService", () => {
  let service: SyncService;
  let apiMock: any;
  let storeMock: any;
  let routerMock: any;
  let statesvcMock: any;
  let _currentAuthenticatedUser: any;
  let _userAttributes: any;

  beforeEach(() => {
    _currentAuthenticatedUser = Auth.currentAuthenticatedUser;
    Auth.currentAuthenticatedUser = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({}));

    _userAttributes = Auth.userAttributes;
    Auth.userAttributes = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve([]));
  });

  afterEach(() => {
    Auth.currentAuthenticatedUser = _currentAuthenticatedUser;
    Auth.userAttributes = _userAttributes;
  });

  beforeEach(() => {
    apiMock = jasmine.createSpyObj("APIService", ["GetAppData", 'CreateAppData']);

    storeMock = jasmine.createSpyObj("Store", ["dispatch"]);

    routerMock = jasmine.createSpyObj("Router", ["navigate"]);

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

  it('should run apiUpdateListener$.unsubscribe on destroy', () => {
    service.apiUpdateListener$ = new Subscription()
    spyOn(service.apiUpdateListener$, 'unsubscribe')
    service.ngOnDestroy()
    expect(service.apiUpdateListener$.unsubscribe).toHaveBeenCalled()
  })

  it('should run isUserBrandNew on initUser', () => {
    spyOn(service, 'isUserBrandNew')
    service.initUser('')
    expect(service.isUserBrandNew).toHaveBeenCalled()
  })

  it('should run initAppData and isNew is true on initUser', fakeAsync(() => {
    let spy = spyOn(service, 'isUserBrandNew')
    spy.and.returnValue(Promise.resolve(true))
    spyOn(service, 'initAppData')
    service.initUser('')
    tick()
    expect(service.initAppData).toHaveBeenCalled()
  }))

  it('should run syncDBDownToState and isNew is false on initUser', fakeAsync(() => {
    let spy = spyOn(service, 'isUserBrandNew')
    spy.and.returnValue(Promise.resolve(false))
    spyOn(service, 'syncDBDownToState')
    service.initUser('')
    tick()
    expect(service.syncDBDownToState).toHaveBeenCalled()
  }))

  it('should run isUserOnboarded on onboardUser', fakeAsync(() => {
    let spy = spyOn(service, 'isUserOnboarded')
    spy.and.returnValue(Promise.resolve(true))
    service.onboardUser('', true)
    tick()
    expect(service.isUserOnboarded).toHaveBeenCalled()
  }))

  it('should run goToDashboard if signInEvent is true on onboardUser', fakeAsync(() => {
    let spy = spyOn(service, 'isUserOnboarded')
    spy.and.returnValue(Promise.resolve(true))
    spyOn(service, 'goToDashboard')
    service.onboardUser('', true)
    tick()
    expect(service.goToDashboard).toHaveBeenCalled()
  }))

  it('should run stayPut if signInEvent is false on onboardUser', fakeAsync(() => {
    let spy = spyOn(service, 'isUserOnboarded')
    spy.and.returnValue(Promise.resolve(true))
    spyOn(service, 'stayPut')
    service.onboardUser('', false)
    tick()
    expect(service.stayPut).toHaveBeenCalled()
  }))

  it('should run api.GetAppData on isUserBrandNew', () => {
    service.isUserBrandNew('1')
    expect(apiMock.GetAppData).toHaveBeenCalled()
  })

  it('should run cleanBackendData on isUserBrandNew', fakeAsync(() => {
    apiMock.GetAppData.and.returnValue(Promise.resolve([{}]))
    spyOn(service, 'cleanBackendData')
    service.isUserBrandNew('1')
    tick()
    expect(service.cleanBackendData).toHaveBeenCalled()
  }))
  
  it('should run data$.next on isUserBrandNew', fakeAsync(() => {
    apiMock.GetAppData.and.returnValue(Promise.resolve([{}]))
    spyOn(service.data$, 'next')
    service.isUserBrandNew('1')
    tick()
    expect(service.data$.next).toHaveBeenCalled()
  }))

  it('should run api.GetAppData on isUserOnboarded', () => {
    service.isUserOnboarded('1')
    expect(apiMock.GetAppData).toHaveBeenCalled()
  })

  it('should run cleanBackendData on isUserOnboarded', fakeAsync(() => {
    apiMock.GetAppData.and.returnValue(Promise.resolve([{}]))
    spyOn(service, 'cleanBackendData')
    service.isUserOnboarded('1')
    tick()
    expect(service.cleanBackendData).toHaveBeenCalled()
  }))
  
  it('should run data$.next on isUserOnboarded', fakeAsync(() => {
    apiMock.GetAppData.and.returnValue(Promise.resolve([{}]))
    spyOn(service.data$, 'next')
    service.isUserOnboarded('1')
    tick()
    expect(service.data$.next).toHaveBeenCalled()
  }))

  it('should run router.navigate on goToDashboard', () => {
    service.goToDashboard('1')
    expect(routerMock.navigate).toHaveBeenCalled()
  })

  it('should run syncDBDownToState on goToLastOnboarded', () => {
    spyOn(service, 'syncDBDownToState')
    service.goToLastOnboarded('1')
    expect(service.syncDBDownToState).toHaveBeenCalled()
  })

  it('should run routeUser on goToLastOnboarded', fakeAsync(() => {
    let spy = spyOn(service, 'syncDBDownToState')
    spy.and.returnValue(Promise.resolve({} as AppDataStateModel))
    spyOn(service, 'routeUser')
    service.goToLastOnboarded('1')
    tick()
    expect(service.routeUser).toHaveBeenCalled()
  }))

  it('should run syncDBDownToState on stayPut', () => {
    spyOn(service, 'syncDBDownToState')
    service.stayPut('1')
    expect(service.syncDBDownToState).toHaveBeenCalled()
  })

  it('should run BraveUtil.generators.createNewUserData on initAppData', () => {
    let spy = spyOn(BraveUtil.generators, 'createNewUserData')
    spy.and.returnValue({} as CreateAppDataInput)
    apiMock.CreateAppData.and.returnValue({} as CreateAppDataMutation)
    storeMock.dispatch.and.returnValue(of())
    service.initAppData('1')
    expect(BraveUtil.generators.createNewUserData).toHaveBeenCalled()
  })

  it('should run api.CreateAppData on initAppData', () => {
    let spy = spyOn(BraveUtil.generators, 'createNewUserData')
    spy.and.returnValue({} as CreateAppDataInput)
    apiMock.CreateAppData.and.returnValue({} as CreateAppDataMutation)
    storeMock.dispatch.and.returnValue(of())
    service.initAppData('1')
    expect(apiMock.CreateAppData).toHaveBeenCalled()
  })

  it('should run cleanBackendData on initAppData', fakeAsync(() => {
    let spy = spyOn(BraveUtil.generators, 'createNewUserData')
    spy.and.returnValue({} as CreateAppDataInput)
    apiMock.CreateAppData.and.returnValue({} as CreateAppDataMutation)
    storeMock.dispatch.and.returnValue(of())
    spyOn(service, 'cleanBackendData')
    service.initAppData('1')
    tick()
    expect(service.cleanBackendData).toHaveBeenCalled()
  }))

  it('should run router.navigate on routeUser', () => {
    service.routeUser(1)
    expect(routerMock.navigate).toHaveBeenCalled()
  })

  it('should run Auth.currentAuthenticatedUser on syncDBDownToState if id = ""', fakeAsync(() => {
    storeMock.dispatch.and.returnValue(of())
    service.syncDBDownToState('')
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled()
  }))

  it('should run Auth.userAttributes on syncDBDownToState if id = ""', fakeAsync(() => {
    storeMock.dispatch.and.returnValue(of())
    service.syncDBDownToState('')
    tick()
    expect(Auth.userAttributes).toHaveBeenCalled()
  }))

  
});
