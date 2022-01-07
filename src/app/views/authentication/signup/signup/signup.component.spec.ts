import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { NeverbounceService } from '@shared/services/neverbounce/neverbounce.service';
import { SignupState } from '@views/authentication/signup/signup/signup.component';
import { BehaviorSubject } from 'rxjs';
import { SignupComponent } from './signup.component';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// private router: Router,
// private route: ActivatedRoute,
// private auth: AuthService,
// private analytics: AnalyticsService,
// private interstitial: InterstitialService,
// private referral: ReferralsService,
// private neverBounce: NeverbounceService,

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let routerMock: any;
  let authMock: any;
  let analyticsMock: any;
  let interstitialMock: any;
  let neverBounceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    authMock = jasmine.createSpyObj('AuthService', ['socialSignIn', '']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', [
      'fireCompleteRegistration',
      'fireUserTrckingEvent',
      'addToCohort',
    ]);
    interstitialMock = jasmine.createSpyObj(
      'InterstitialService',
      [''],
      [{ fetching$: new BehaviorSubject<boolean>(false) }],
    );
    neverBounceMock = jasmine.createSpyObj('NeverbounceService', ['validateEmail']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    it('should run auth.socialSignIn when signUpWithGoogle is called', () => {
      component.signUpWithGoogle();
      expect(authMock.socialSignIn).toHaveBeenCalled();
    });

    it('should run auth.socialSignIn when signUpWithFacebook is called', () => {
      component.signUpWithFacebook();
      expect(authMock.socialSignIn).toHaveBeenCalled();
    });

    it('should run router.navigate when goToForgot is called', () => {
      const route = [routes.root.auth.forgot.full];
      component.goToForgot();
      expect(routerMock.navigate).toHaveBeenCalledWith(route);
    });

    it('should run router.navigate when goToLogin is called', () => {
      const route = [routes.root.auth.signin.full];
      component.goToLogin();
      expect(routerMock.navigate).toHaveBeenCalledWith(route);
    });

    it('should run router.navigate when goToPrivacy is called', () => {
      const route = [routes.root.compliance.privacy.full];
      component.goToPrivacy();
      expect(routerMock.navigate).toHaveBeenCalledWith(route);
    });

    it('should run router.navigate when goToTerms is called', () => {
      const route = [routes.root.compliance.tos.full];
      component.goToTerms();
      expect(routerMock.navigate).toHaveBeenCalledWith(route);
    });

    it('the message should show the invalid text is an empty string is passed', () => {
      component.handleSignupError('init', '');
      expect(component.message).toEqual('Invalid sign up credentials');
    });

    it('the message should show the message text if a valid string is passed', () => {
      let testString = 'test';
      component.handleSignupError('init', testString);
      expect(component.message).toEqual(testString);
    });

    it('the viewState property should be set to the viewState passed into handleSignupError', () => {
      let testViewState: SignupState = 'init';
      component.handleSignupError(testViewState, '');
      expect(component.viewState).toEqual(testViewState);
    });
  });

  describe('signUpWithCognito Method', () => {});
});
