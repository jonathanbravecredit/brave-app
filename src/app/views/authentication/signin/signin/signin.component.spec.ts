import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DOMHelper, Helper } from '@testing/index';
import { SigninComponent } from './signin.component';
import { ISignInCognitoUser } from './interfaces';
import { AuthService, NewUser } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServicesModule } from '@shared/services/shared-services.module';
import { AnalyticsService } from '@shared/services/analytics/analytics/analytics.service';

//    private route: ActivatedRoute,
// private analytics: AnalyticsService,

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let dh: DOMHelper<SigninComponent>;
  let h: Helper<SigninComponent>;
  let authServiceMock: any;
  let interstitialServiceMock: any;
  let routerMock: any;
  let analyticsMock: any;
  class RouteMock {}

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['signIn', 'socialSignIn']);
    interstitialServiceMock = jasmine.createSpyObj('InterstitialService', ['fetching$']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    analyticsMock = jasmine.createSpyObj('AnalyticsService', ['']);

    authServiceMock.signIn.and.returnValue({} as ISignInCognitoUser);
    authServiceMock.socialSignIn.and.returnValue(null);
    interstitialServiceMock.fetching$.and.returnValue(new BehaviorSubject<boolean>(false));
    routerMock.navigate.and.returnValue(null);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [SigninComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: InterstitialService, useValue: interstitialServiceMock },
        { provide: Router, useValue: routerMock },
        { provide: AnalyticsService, useValue: analyticsMock },
        { provide: ActivatedRoute, useClass: RouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dh = new DOMHelper(fixture);
    h = new Helper(component);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component attributes', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should have an property called "viewState" and is set to a default', () => {
      expect(h.hasProperty(component, 'viewState')).toBeTrue();
    });

    it('should have an property called "message" and is set to a default', () => {
      expect(h.hasProperty(component, 'message')).toBeTrue();
    });
  });

  describe('Method calls', () => {
    beforeEach(() => {
      fixture.detectChanges(); // need 2 calls bc renders after oninit
    });
    it('should NOT call handleSigninError when user is valid', () => {
      const mockUser: NewUser = { username: 'dummy', password: 'dummy' };
      const spy = jasmine.createSpy('handleSigninError');
      component.signInWithCognito(mockUser);
      expect(spy).not.toHaveBeenCalled();
    });

    xit('should call handleSigninError when user is NOT valid', () => {
      const mockUser: NewUser = {} as NewUser;
      const spy = jasmine.createSpy('handleSigninError');
      component.signInWithCognito(mockUser);
      expect(spy).toHaveBeenCalled();
    });

    it('should call Auth Service signIn when user is valid', () => {
      const mockUser: NewUser = { username: 'dummy', password: 'dummy' };
      component.signInWithCognito(mockUser);
      expect(authServiceMock.signIn).toHaveBeenCalled();
    });

    it('should call Auth Service socialSignin when calling signInWithFacebook or signInWithGoogle', () => {
      component.signInWithFacebook();
      component.signInWithGoogle();
      expect(authServiceMock.socialSignIn).toHaveBeenCalledTimes(2);
    });

    it("should call Router Navigate with '../forgot' route when calling goToForget", () => {
      component.goToForgot();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/auth/forgot']);
    });

    it("should call Router Navigate with '/legal/privacy' route when calling goToPrivacy", () => {
      component.goToPrivacy();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/legal/privacy']);
    });
    it("should call Router Navigate with '/legal/tos' route when calling goToTerms", () => {
      component.goToTerms();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/legal/tos']);
    });
    it("should call Router Navigate with '/auth/signup' route when calling goToSignup", () => {
      component.goToSignup();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/auth/signup']);
    });
  });
});
