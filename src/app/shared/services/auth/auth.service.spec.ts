import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth } from "aws-amplify";
import { BehaviorSubject } from "rxjs";
import { InterstitialService } from "../interstitial/interstitial.service";
import { AuthService, NewUser } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;
  let routerMock: any;
  let interstitialMock: any;

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
    let spy = spyOn(Auth, "signUp");
    spy.and.returnValue(
      Promise.resolve({
        user: {} as CognitoUser,
        userConfirmed: true,
        userSub: "1234",
        codeDeliveryDetails: {
          AttributeName: "",
          DeliveryMedium: "",
          Destination: "",
        },
      })
    );
    service.signUp({} as NewUser);
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.signUp on signUp", () => {
    let spy = spyOn(Auth, "signUp");
    spy.and.returnValue(
      Promise.resolve({
        user: {} as CognitoUser,
        userConfirmed: true,
        userSub: "1234",
        codeDeliveryDetails: {
          AttributeName: "",
          DeliveryMedium: "",
          Destination: "",
        },
      })
    );
    service.signUp({} as NewUser);
    expect(spy).toHaveBeenCalled();
  });

  it("should call fetching$.next on signIn", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.signIn("test", "test");
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.signIn on signIn", fakeAsync(() => {
    let spy = spyOn(Auth, "signIn");
    spy.and.returnValue(Promise.resolve({} as CognitoUser));
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
    spyOn(Auth, "signOut");
    service.signOut();
    expect(Auth.signOut).toHaveBeenCalled();
  });

  it("should call Auth.federatedSignIn on socialSignIn", () => {
    spyOn(Auth, "federatedSignIn");
    service.socialSignIn({} as CognitoHostedUIIdentityProvider);
    expect(Auth.federatedSignIn).toHaveBeenCalled();
  });

  it("should call Auth.resendSignUp on resendSignUp", () => {
    spyOn(Auth, "resendSignUp");
    service.resendSignUp("test");
    expect(Auth.resendSignUp).toHaveBeenCalled();
  });

  it("should call Auth.forgotPassword on forgotPassword", () => {
    spyOn(Auth, "forgotPassword");
    service.forgotPassword("test");
    expect(Auth.forgotPassword).toHaveBeenCalled();
  });

  it("should call Auth.forgotPasswordSubmit on forgotPasswordSubmit", () => {
    spyOn(Auth, "forgotPasswordSubmit");
    service.forgotPasswordSubmit("test", "test", "test");
    expect(Auth.forgotPasswordSubmit).toHaveBeenCalled();
  });

  it("should call Auth.currentUserCredentials on getCurrentUserCredentials", () => {
    spyOn(Auth, "currentUserCredentials");
    service.getCurrentUserCredentials();
    expect(Auth.currentUserCredentials).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on getcurrentAuthenticatedUser", () => {
    spyOn(Auth, "currentAuthenticatedUser");
    service.getcurrentAuthenticatedUser();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call Auth.currentSession on refreshSession", () => {
    spyOn(Auth, "currentSession");
    service.refreshSession();
    expect(Auth.currentSession).toHaveBeenCalled();
  });

  it("should call Auth.currentSession on getAccessTokenJwtToken", () => {
    spyOn(Auth, "currentSession");
    service.getAccessTokenJwtToken();
    expect(Auth.currentSession).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on getIdTokenJwtTokens", () => {
    spyOn(Auth, "currentAuthenticatedUser");
    service.getIdTokenJwtTokens();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call user.getSignInUserSession on getIdTokenJwtTokens", fakeAsync(() => {
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    let test = {
      getSignInUserSession: () => {},
    };
    spy.and.returnValue(Promise.resolve(test as unknown as CognitoUser));
    spyOn(test, "getSignInUserSession");
    service.getIdTokenJwtTokens();
    tick();
    expect(test.getSignInUserSession).toHaveBeenCalled();
  }));

  it("should call Auth.currentUserCredentials on getAuthCredentials", () => {
    spyOn(Auth, "currentUserCredentials");
    service.getAuthCredentials();
    expect(Auth.currentUserCredentials).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on getUserEmail", () => {
    spyOn(Auth, "currentAuthenticatedUser");
    service.getUserEmail();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  });

  it("should call Auth.userAttributes on getUserEmail", fakeAsync(() => {
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(Promise.resolve({} as CognitoUser));
    spyOn(Auth, "userAttributes");
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
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(Promise.resolve({} as CognitoUser));
    let spy2 = spyOn(Auth, "updateUserAttributes");
    spy2.and.returnValue(Promise.resolve(""));
    service.updateUserEmail("");
    tick();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should call Auth.updateUserAttributes on updateUserEmail", fakeAsync(() => {
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(Promise.resolve({} as CognitoUser));
    let spy2 = spyOn(Auth, "updateUserAttributes");
    spy2.and.returnValue(Promise.resolve(""));
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
    let spy = spyOn(Auth, "verifyCurrentUserAttributeSubmit");
    spy.and.returnValue(Promise.resolve(""));
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
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(Promise.resolve({} as CognitoUser));
    let spy2 = spyOn(Auth, "changePassword");
    spy2.and.returnValue(Promise.resolve("SUCCESS"));
    service.resetPassword("", "");
    tick();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));

  it("should call Auth.changePassword on resetPassword", fakeAsync(() => {
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(Promise.resolve({} as CognitoUser));
    let spy2 = spyOn(Auth, "changePassword");
    spy2.and.returnValue(Promise.resolve("SUCCESS"));
    service.resetPassword("", "");
    tick();
    expect(Auth.changePassword).toHaveBeenCalled();
  }));

  it("should call fetching$.next on deactivateAccount", () => {
    spyOn(interstitialMock.fetching$, "next");
    service.deactivateAccount();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  });

  it("should call Auth.currentAuthenticatedUser on deactivateAccount", fakeAsync(() => {
    let spy = spyOn(Auth, "currentAuthenticatedUser");
    spy.and.returnValue(
      Promise.resolve({ deleteUser: (cb) => {} } as CognitoUser)
    );
    service.deactivateAccount();
    tick();
    expect(Auth.currentAuthenticatedUser).toHaveBeenCalled();
  }));
});
