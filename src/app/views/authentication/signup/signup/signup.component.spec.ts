import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { AuthService } from "@shared/services/auth/auth.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { NeverbounceService } from "@shared/services/neverbounce/neverbounce.service";
import { SignupState } from "@views/authentication/signup/signup/signup.component";
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
  let authMock: any;
  let analyticsMock: any;
  let interstitialMock: any;
  let neverBounceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    authMock = jasmine.createSpyObj("AuthService", [""]);
    analyticsMock = jasmine.createSpyObj("AnalyticsService", [""]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [""]);
    neverBounceMock = jasmine.createSpyObj("NeverbounceService", [""]);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: InterstitialService, useValue: interstitialMock },
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

  describe('methods', () => {

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

      it("the message should show the invalid text is an empty string is passed", () => {
        component.handleSignupError('init', '')
        expect(component.message).toEqual('Invalid sign up credentials');
      });

      it("the message should show the message text if a valid string is passed", () => {
        let testString = 'test'
        component.handleSignupError('init', testString)
        expect(component.message).toEqual(testString);
      });

    it('the viewState property should be set to the viewState passed into handleSignupError', () => {
      let testViewState: SignupState = 'init'
      component.handleSignupError(testViewState, '')
      expect(component.message).toEqual(testViewState);
      })

  })

  describe('signUpWithCognito Method', () => {

  })


});
