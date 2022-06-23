import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthService } from "@shared/services/auth/auth.service";
import { of } from "rxjs";
import { SignupThankyouComponent } from "./signup-thankyou.component";

describe("SignupThankyouComponent", () => {
  let component: SignupThankyouComponent;
  let fixture: ComponentFixture<SignupThankyouComponent>;
  let routerMock: any;
  let authMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    authMock = jasmine.createSpyObj("AuthService", ["resendSignUp", "signOut"], {
      email$: of(),
    });
    await TestBed.configureTestingModule({
      declarations: [SignupThankyouComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should unsubscribe from emailSub$ on destroy", () => {
    spyOn(component.emailSub$, "unsubscribe");
    component.ngOnDestroy();

    expect(component.emailSub$.unsubscribe).toHaveBeenCalled();
  });

  it("should run resendSignUp on onResendClick if email is truthy", () => {
    component.email = "test";
    component.onResendClick();

    expect(authMock.resendSignUp).toHaveBeenCalled();
  });

  it("should run signOut on onResendClick if email is truthy", fakeAsync(() => {
    authMock.resendSignUp.and.returnValue(Promise.resolve());

    component.email = "test";
    component.onResendClick();

    tick(3000);

    expect(authMock.signOut).toHaveBeenCalled();
  }));

  it("should run navigate on onResendClick if email is truthy", fakeAsync(() => {
    authMock.resendSignUp.and.returnValue(Promise.resolve());

    component.email = "test";
    component.onResendClick();

    tick(3000);

    expect(routerMock.navigate).toHaveBeenCalled();
  }));
});
