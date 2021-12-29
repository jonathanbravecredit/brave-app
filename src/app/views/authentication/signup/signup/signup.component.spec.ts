import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { AuthService } from "@shared/services/auth/auth.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { NeverbounceService } from "@shared/services/neverbounce/neverbounce.service";
import { ReferralsService } from "@shared/services/referrals/referrals.service";

import { SignupComponent } from "./signup.component";

// private router: Router,
// private route: ActivatedRoute,
// private auth: AuthService,
// private analytics: AnalyticsService,
// private interstitial: InterstitialService,
// private referral: ReferralsService,
// private neverBounce: NeverbounceService,

describe("SignupComponent", () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let routerMock: any;
  let routeMock: any;
  let authMock: any;
  let analyticsMock: any;
  let interstitialMock: any;
  let referralMock: any;
  let neverBounceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    routeMock = jasmine.createSpyObj("ActivatedRoute", [""]);
    authMock = jasmine.createSpyObj("AuthService", [""]);
    analyticsMock = jasmine.createSpyObj("AnalyticsService", [""]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [""]);
    referralMock = jasmine.createSpyObj("ReferralsService", [""]);
    neverBounceMock = jasmine.createSpyObj("NeverbounceService", [""]);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: AuthService, useValue: authMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: ReferralsService, useValue: referralMock },
        { provide: NeverbounceService, useValue: neverBounceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should run router.socialSignIn when signUpWithGoogle is called", () => {
    component.signUpWithGoogle()
    expect(routerMock.socialSignIn).toHaveBeenCalled();
  });

  it("should run router.socialSignIn when goToForgot is called", () => {
    component.goToForgot()
    expect(routerMock.socialSignIn).toHaveBeenCalled();
  });

  it("should run router.navigate when goToLogin is called", () => {
    component.goToLogin()
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run router.navigate when goToPrivacy is called", () => {
    component.goToPrivacy()
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run router.navigate when goToTerms is called", () => {
    component.goToTerms()
    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
