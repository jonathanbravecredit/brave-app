import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { BehaviorSubject } from 'rxjs';

import { SigninForgotComponent } from './signin-forgot.component';

describe('SigninForgotComponent', () => {
  let component: SigninForgotComponent;
  let fixture: ComponentFixture<SigninForgotComponent>;
  let authMock: any;
  let routerMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    authMock = jasmine.createSpyObj('AuthService', ['forgotPassword', 'forgotPasswordSubmit']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    interstitialMock = { fetching$: new BehaviorSubject<boolean>(false) };

    await TestBed.configureTestingModule({
      declarations: [SigninForgotComponent],
      providers: [
        { provide: AuthService, useValue: authMock },
        { provide: Router, useValue: routerMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Method Calls', () => {
    it('should run interstitial.fetching$.next when onSubmitEmailClick', () => {
      const formGroup = { value: { email: { input: 'testEmail' } } } as FormGroup;

      const spy = spyOn(interstitialMock.fetching$, 'next');

      component.onSubmitEmailClick(formGroup);

      expect(spy).toHaveBeenCalledWith(true);
    });

    it('should change viewState to "submitted" with proper email', fakeAsync(() => {
      authMock.forgotPassword.and.returnValue(Promise.resolve(true));

      const formGroup = { value: { email: { input: 'testEmail' } } } as FormGroup;

      component.onSubmitEmailClick(formGroup);

      tick(1);

      fixture.detectChanges();

      expect(component.viewState).toEqual('submitted');
    }));

    it('should run interstitial.fetching$.next(false) when onSubmitEmailClick works', fakeAsync(() => {
      authMock.forgotPassword.and.returnValue(Promise.resolve(true));

      const formGroup = { value: { email: { input: 'testEmail' } } } as FormGroup;

      const spy = spyOn(interstitialMock.fetching$, 'next');

      component.onSubmitEmailClick(formGroup);

      tick(1);

      expect(spy).toHaveBeenCalledWith(false);
    }));

    it('should run interstitial.fetching$.next(false) when onSubmitEmailClick fails', fakeAsync(() => {
      authMock.forgotPassword.and.returnValue(Promise.reject({ message: 'error message' }));

      const formGroup = { value: { email: { input: 'testEmail' } } } as FormGroup;

      const spy = spyOn(interstitialMock.fetching$, 'next');

      component.onSubmitEmailClick(formGroup);

      tick(1);

      expect(spy).toHaveBeenCalledWith(false);
    }));

    it('onSubmitCodeClick should always call this.interstitial.fetching$.next(true)', () => {
      const formGroup = {
        value: {
          email: { input: 'testEmail' },
          password: { input: 'testPassword' },
          code: { input: 'testCode' },
        },
      } as FormGroup;

      const spy = spyOn(interstitialMock.fetching$, 'next');

      component.onSubmitCodeClick(formGroup);

      expect(spy).toHaveBeenCalledWith(true);
    });

    it('should run this.interstitial.fetching$.next(false) when forgotPasswordSubmit works', fakeAsync(() => {
      authMock.forgotPasswordSubmit.and.returnValue(Promise.resolve(true));

      const formGroup = {
        value: {
          email: { input: 'testEmail' },
          password: { input: 'testPassword' },
          code: { input: 'testCode' },
        },
      } as FormGroup;

      const spy = spyOn(interstitialMock.fetching$, 'next');

      component.onSubmitCodeClick(formGroup);

      tick(1);

      expect(spy).toHaveBeenCalledWith(false);

      flush();
    }));

    it('should run this.interstitial.fetching$.next(false) when forgotPasswordSubmit fails', fakeAsync(() => {
      authMock.forgotPasswordSubmit.and.returnValue(Promise.reject({ message: 'error message' }));

      const formGroup = {
        value: {
          email: { input: 'testEmail' },
          password: { input: 'testPassword' },
          code: { input: 'testCode' },
        },
      } as FormGroup;

      const spy = spyOn(interstitialMock.fetching$, 'next');

      component.onSubmitCodeClick(formGroup);

      tick(1);

      expect(spy).toHaveBeenCalledWith(false);

      flush();
    }));
  });
});
