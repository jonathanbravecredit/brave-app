import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { CognitoUser } from "amazon-cognito-identity-js";
import { BehaviorSubject } from "rxjs";
import { InterstitialService } from "../interstitial/interstitial.service";
import { AuthService, NewUser } from "./auth.service";
import { Auth } from "aws-amplify";

describe("AuthService", () => {
  let service: AuthService;
  let routerMock: any;
  let interstitialMock: any;
  let _currentAuthenticatedUser: any;

  let _signIn: any;

  let _signUp: any;

  let _signOut: any;

  let _userAttributes: any;

  let _updateUserAttributes: any;

  let _federatedSignIn: any;

  let _resendSignUp: any;

  let _forgotPassword: any;

  let _forgotPasswordSubmit: any;

  let _currentUserCredentials: any;

  let _currentSession: any;

  let _verifyCurrentUserAttributeSubmit: any;

  let _changePassword: any;

  beforeEach(() => {
    _currentAuthenticatedUser = Auth.currentAuthenticatedUser;
    Auth.currentAuthenticatedUser = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({}));

    _signIn = Auth.signIn;
    Auth.signIn = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _signUp = Auth.signUp;
    Auth.signUp = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _signOut = Auth.signOut;
    Auth.signOut = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _userAttributes = Auth.userAttributes;
    Auth.userAttributes = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _updateUserAttributes = Auth.updateUserAttributes;
    Auth.updateUserAttributes = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _federatedSignIn = Auth.federatedSignIn;
    Auth.federatedSignIn = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _resendSignUp = Auth.resendSignUp;
    Auth.resendSignUp = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _forgotPassword = Auth.forgotPassword;
    Auth.forgotPassword = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _forgotPasswordSubmit = Auth.forgotPasswordSubmit;
    Auth.forgotPasswordSubmit = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _currentUserCredentials = Auth.currentUserCredentials;
    Auth.currentUserCredentials = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _currentSession = Auth.currentSession;
    Auth.currentSession = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve({} as any));

    _verifyCurrentUserAttributeSubmit = Auth.verifyCurrentUserAttributeSubmit;
    Auth.verifyCurrentUserAttributeSubmit = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve("test"));

    _changePassword = Auth.changePassword;
    Auth.changePassword = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve("SUCCESS"));
  });

  afterEach(() => {
    Auth.currentAuthenticatedUser = _currentAuthenticatedUser;

    Auth.signIn = _signIn;

    Auth.signUp = _signUp;

    Auth.signOut = _signOut;

    Auth.userAttributes = _userAttributes;

    Auth.updateUserAttributes = _updateUserAttributes;

    Auth.federatedSignIn = _federatedSignIn;

    Auth.resendSignUp = _resendSignUp;

    Auth.forgotPassword = _forgotPassword;

    Auth.forgotPasswordSubmit = _forgotPasswordSubmit;

    Auth.currentUserCredentials = _currentUserCredentials;

    Auth.currentSession = _currentSession;

    Auth.verifyCurrentUserAttributeSubmit = _verifyCurrentUserAttributeSubmit;

    Auth.changePassword = _changePassword;
  });

  beforeEach(() => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"], { url: "test" });
    interstitialMock = jasmine.createSpyObj("", [""], {
      fetching$: new BehaviorSubject<boolean>(false),
    });
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call email$.next on signUp", () => {
    spyOn(service.email$, "next");
    service.signUp({} as NewUser);
    expect(service.email$.next).toHaveBeenCalled();
  });

  it("should call fetching$.next on signUp", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.signUp({} as NewUser);
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.signUp on signUp", () => {
    service.signUp({} as NewUser);
    expect(Auth.signUp).toHaveBeenCalled();
  });

  it("should call fetching$.next on signIn", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.signIn("test", "test");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.signIn on signIn", fakeAsync(() => {
    service.signIn("test", "test").then(() => {
      tick();
      expect(Auth.signIn).toHaveBeenCalled();
    });
  }));

  it("should call fetching$.next on signOut", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.signOut();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.signOut on signOut", () => {
    service.signOut();
    expect(Auth.signOut).toHaveBeenCalled();
  });

  it("should call Auth.federatedSignIn on socialSignIn", () => {
    service.socialSignIn({} as CognitoHostedUIIdentityProvider);
    expect(Auth.federatedSignIn).toHaveBeenCalled();
  });

  it("should call Auth.resendSignUp on resendSignUp", () => {
    service.resendSignUp("test");
    expect(Auth.resendSignUp).toHaveBeenCalled();
  });

  it("should call Auth.forgotPassword on forgotPassword", () => {
    service.forgotPassword("test");
    expect(Auth.forgotPassword).toHaveBeenCalled();
  });

  it("should call Auth.forgotPasswordSubmit on forgotPasswordSubmit", () => {
    service.forgotPasswordSubmit("test", "test", "test");
    expect(Auth.forgotPasswordSubmit).toHaveBeenCalled();
  });

  it("should call Auth.currentUserCredentials on getCurrentUserCredentials", () => {
    service.getCurrentUserCredentials();
    expect(Auth.currentUserCredentials).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on getcurrentAuthenticatedUser", () => {
    service.getcurrentAuthenticatedUser();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call Auth.currentSession on refreshSession", () => {
    service.refreshSession();
    expect(Auth.currentSession).toHaveBeenCalled();
  });

  it("should call Auth.currentSession on getAccessTokenJwtToken", () => {
    service.getAccessTokenJwtToken();
    expect(Auth.currentSession).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on getIdTokenJwtTokens", () => {
    service.getIdTokenJwtTokens();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call user.getSignInUserSession on getIdTokenJwtTokens", fakeAsync(() => {
    let test = {
      getSignInUserSession: () => {},
    };
    (Auth.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve(test as unknown as CognitoUser)
    );
    spyOn(test, "getSignInUserSession");
    service.getIdTokenJwtTokens();
    tick();
    expect(test.getSignInUserSession).toHaveBeenCalled();
  }));

  it("should call Auth.currentUserCredentials on getAuthCredentials", () => {
    service.getAuthCredentials();
    expect(Auth.currentUserCredentials).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on getUserEmail", () => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({
        getSession: (cb, op) => {},
      } as CognitoUser)
    );
    service.getUserEmail();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call Auth.userAttributes on getUserEmail", fakeAsync(() => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({
        getSession: (cb, op) => {},
      } as CognitoUser)
    );
    service.getUserEmail();
    tick();
    expect(Auth.userAttributes).toHaveBeenCalled();
  }));

  it("should call fetching$.next on updateUserEmail", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.updateUserEmail("");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on updateUserEmail", fakeAsync(() => {
    service.updateUserEmail("");
    tick();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should call Auth.updateUserAttributes on updateUserEmail", fakeAsync(() => {
    service.updateUserEmail("");
    tick();
    expect(Auth.updateUserAttributes).toHaveBeenCalled();
  }));

  it("should call fetching$.next on verifyUserEmail", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.verifyUserEmail("");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.verifyCurrentUserAttributeSubmit on verifyUserEmail", fakeAsync(() => {
    service.verifyUserEmail("");
    tick();
    expect(Auth.verifyCurrentUserAttributeSubmit).toHaveBeenCalled();
  }));

  it("should call fetching$.next on resetPassword", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.resetPassword("", "");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on resetPassword", fakeAsync(() => {
    service.resetPassword("", "");
    tick();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should call Auth.changePassword on resetPassword", fakeAsync(() => {
    service.resetPassword("", "");
    tick();
    expect(Auth.changePassword).toHaveBeenCalled();
  }));

  it("should call fetching$.next on deactivateAccount", () => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({ deleteUser: (cb) => {} } as CognitoUser)
    );
    spyOn(interstitialMock.fetching$, "next");
    service.deactivateAccount();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on deactivateAccount", fakeAsync(() => {
    (Auth.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({ deleteUser: (cb) => {} } as CognitoUser)
    );
    service.deactivateAccount();
    tick();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));
});
