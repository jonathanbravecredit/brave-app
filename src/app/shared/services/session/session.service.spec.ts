import { HttpClient } from "@angular/common/http";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AuthService } from "@shared/services/auth/auth.service";
import { Auth } from "aws-amplify";
import { of } from "rxjs";

import { ISessionData, ISessionDB, SessionService } from "./session.service";

//private http: HttpClient, private auth: AuthService

describe("SessionService", () => {
  let service: SessionService;
  let httpMock: any;
  let authMock: any;

  beforeEach(() => {
    httpMock = jasmine.createSpyObj("HttpClient", ["post", "get", "put"]);
    authMock = jasmine.createSpyObj("AuthService", ["getIdTokenJwtTokens"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpMock },
        { provide: AuthService, useValue: authMock },
      ],
    });
    service = TestBed.inject(SessionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should run Auth.currentAuthenticatedUser on checkIfUserSignedIn", () => {
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(Promise.resolve({}));
    service.checkIfUserSignedIn();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should run getLastestSession on sessionLogic", () => {
    spyOn(service, "getLastestSession");
    service.sessionLogic();
    expect(service.getLastestSession).toHaveBeenCalled();
  });

  it("should run settingHelper on sessionLogic", fakeAsync(() => {
    spyOn(service, "settingHelper");
    service.sessionLogic();
    tick();
    expect(service.settingHelper).toHaveBeenCalled();
  }));

  it("should run createSessionData on settingHelper", () => {
    spyOn(service, "createSessionData");
    service.settingHelper();
    expect(service.createSessionData).toHaveBeenCalled();
  });

  it("should run sessionData$.next on settingHelper", fakeAsync(() => {
    httpMock.post.and.returnValue(of());
    spyOn(service.sessionData$, "next");
    service.settingHelper();
    tick();
    expect(service.sessionData$.next).toHaveBeenCalled();
  }));

  it("should run getIdTokenJwtTokens on getLastestSession", fakeAsync(() => {
    httpMock.get.and.returnValue(of());
    service.getLastestSession();
    tick();
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  }));

  it("should run getIdTokenJwtTokens on getSessionData", fakeAsync(() => {
    httpMock.get.and.returnValue(of());
    service.getSessionData("1");
    tick();
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  }));

  it("should run getIdTokenJwtTokens on createSessionData", fakeAsync(() => {
    httpMock.post.and.returnValue(of());
    service.createSessionData();
    tick();
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  }));

  it("should run getIdTokenJwtTokens on updateSessionData", fakeAsync(() => {
    httpMock.put.and.returnValue(of());
    service.updateSessionData({} as ISessionData, "1");
    tick();
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  }));
});
