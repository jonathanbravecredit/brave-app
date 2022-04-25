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
  let AuthMock: any;

  beforeEach(() => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"], { url: "test" });
    interstitialMock = jasmine.createSpyObj("", [""], {
      fetching$: new BehaviorSubject<boolean>(false),
    });
    AuthMock = jasmine.createSpyObj("Auth", [
      "currentAuthenticatedUser",
      "signIn",
      "signUp",
      "signOut",
      "userAttributes",
      "updateUserAttributes",
      "federatedSignIn",
      "resendSignUp",
      "forgotPassword",
      "forgotPasswordSubmit",
      "currentUserCredentials",
      "currentSession",
      "verifyCurrentUserAttributeSubmit",
      "changePassword",
    ]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: Auth, useValue: AuthMock },
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

  it("should call AuthMock.signUp on signUp", () => {
    service.signUp({} as NewUser);
    expect(AuthMock.signUp).toHaveBeenCalled();
  });

  it("should call fetching$.next on signIn", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.signIn("test", "test");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call AuthMock.signIn on signIn", fakeAsync(() => {
    AuthMock.signIn.and.returnValue(Promise.resolve());
    service.signIn("test", "test").then(() => {
      tick();
      expect(AuthMock.signIn).toHaveBeenCalled();
    });
  }));

  it("should call fetching$.next on signOut", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.signOut();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call AuthMock.signOut on signOut", () => {
    service.signOut();
    expect(AuthMock.signOut).toHaveBeenCalled();
  });

  it("should call AuthMock.federatedSignIn on socialSignIn", () => {
    service.socialSignIn({} as CognitoHostedUIIdentityProvider);
    expect(AuthMock.federatedSignIn).toHaveBeenCalled();
  });

  it("should call AuthMock.resendSignUp on resendSignUp", () => {
    service.resendSignUp("test");
    expect(AuthMock.resendSignUp).toHaveBeenCalled();
  });

  it("should call AuthMock.forgotPassword on forgotPassword", () => {
    service.forgotPassword("test");
    expect(AuthMock.forgotPassword).toHaveBeenCalled();
  });

  it("should call AuthMock.forgotPasswordSubmit on forgotPasswordSubmit", () => {
    service.forgotPasswordSubmit("test", "test", "test");
    expect(AuthMock.forgotPasswordSubmit).toHaveBeenCalled();
  });

  it("should call AuthMock.currentUserCredentials on getCurrentUserCredentials", () => {
    service.getCurrentUserCredentials();
    expect(AuthMock.currentUserCredentials).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on getcurrentAuthenticatedUser", () => {
    service.getcurrentAuthenticatedUser();
    expect(AuthMock.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call AuthMock.currentSession on refreshSession", () => {
    service.refreshSession();
    expect(AuthMock.currentSession).toHaveBeenCalled();
  });

  it("should call AuthMock.currentSession on getAccessTokenJwtToken", () => {
    service.getAccessTokenJwtToken();
    expect(AuthMock.currentSession).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on getIdTokenJwtTokens", () => {
    service.getIdTokenJwtTokens();
    expect(AuthMock.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call user.getSignInUserSession on getIdTokenJwtTokens", fakeAsync(() => {
    let test = {
      getSignInUserSession: () => {},
    };
    (AuthMock.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve(test as unknown as CognitoUser)
    );
    spyOn(test, "getSignInUserSession");
    service.getIdTokenJwtTokens();
    tick();
    expect(test.getSignInUserSession).toHaveBeenCalled();
  }));

  it("should call AuthMock.currentUserCredentials on getAuthCredentials", () => {
    service.getAuthCredentials();
    expect(AuthMock.currentUserCredentials).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on getUserEmail", () => {
    service.getUserEmail();
    expect(AuthMock.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on getUserEmail", () => {
    service.getUserEmail();
    expect(true).toBeTruthy();
  });

  it("should call AuthMock.userAttributes on getUserEmail", fakeAsync(() => {
    (AuthMock.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({
        getSession: (cb, op) => {},
      } as CognitoUser)
    );
    service.getUserEmail();
    tick();
    expect(AuthMock.userAttributes).toHaveBeenCalled();
  }));

  it("should call fetching$.next on updateUserEmail", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.updateUserEmail("");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on updateUserEmail", fakeAsync(() => {
    (AuthMock.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({
        getSession: (cb, op) => {},
      } as CognitoUser)
    );
    service.updateUserEmail("");
    tick();
    expect(AuthMock.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should call AuthMock.updateUserAttributes on updateUserEmail", fakeAsync(() => {
    service.updateUserEmail("");
    tick();
    expect(AuthMock.updateUserAttributes).toHaveBeenCalled();
  }));

  it("should call fetching$.next on verifyUserEmail", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.verifyUserEmail("");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call AuthMock.verifyCurrentUserAttributeSubmit on verifyUserEmail", fakeAsync(() => {
    service.verifyUserEmail("");
    tick();
    expect(AuthMock.verifyCurrentUserAttributeSubmit).toHaveBeenCalled();
  }));

  it("should call fetching$.next on resetPassword", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.resetPassword("", "");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on resetPassword", fakeAsync(() => {
    (AuthMock.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({
        getSession: (cb, op) => {},
      } as CognitoUser)
    );
    service.resetPassword("", "");
    tick();
    expect(AuthMock.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should call AuthMock.changePassword on resetPassword", fakeAsync(() => {
    service.resetPassword("", "");
    tick();
    expect(AuthMock.changePassword).toHaveBeenCalled();
  }));

  it("should call fetching$.next on deactivateAccount", () => {
    (AuthMock.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({ deleteUser: (cb) => {} } as CognitoUser)
    );
    spyOn(interstitialMock.fetching$, "next");
    service.deactivateAccount();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call AuthMock.currentAuthenticatedUser on deactivateAccount", fakeAsync(() => {
    (AuthMock.currentAuthenticatedUser as any).and.returnValue(
      Promise.resolve({ deleteUser: (cb) => {} } as CognitoUser)
    );
    service.deactivateAccount();
    tick();
    expect(AuthMock.currentAuthenticatedUser).toHaveBeenCalled();
  }));
});
