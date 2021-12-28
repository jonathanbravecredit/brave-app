import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "@shared/services/auth/auth.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";

import { SigninForgotComponent } from "./signin-forgot.component";

describe("SigninForgotComponent", () => {
  let component: SigninForgotComponent;
  let fixture: ComponentFixture<SigninForgotComponent>;
  let authMock: any;
  let routerMock: any;
  let routeMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    authMock = jasmine.createSpyObj("", [""]);
    routerMock = jasmine.createSpyObj("", [""]);
    routeMock = jasmine.createSpyObj("", [""]);
    interstitialMock = jasmine.createSpyObj("", [""]);
    await TestBed.configureTestingModule({
      declarations: [SigninForgotComponent],
      providers: [
        { provide: AuthService, useValue: authMock },
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
