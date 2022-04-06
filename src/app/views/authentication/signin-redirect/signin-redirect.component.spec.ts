import { ApplicationRef } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { of } from 'rxjs';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import { SigninRedirectComponent } from './signin-redirect.component';

describe('SigninRedirectComponent', () => {
  let component: SigninRedirectComponent;
  let fixture: ComponentFixture<SigninRedirectComponent>;
  let routerMock: any;
  let syncMock: any;
  let authMock: any;
  class AppRefMock {
    isStable = of();
  }
  let interstitialMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    syncMock = jasmine.createSpyObj('SyncService', [
      'initUser',
      'isUserBrandNew',
      'subscribeToListeners',
      'onboardUser',
    ]);
    authMock = jasmine.createSpyObj('AuthService', ['socialSignIn']);
    interstitialMock = jasmine.createSpyObj('InterstitialService', [
      'changeMessage',
      'openInterstitial',
      'closeInterstitial',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SigninRedirectComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: SyncService, useValue: syncMock },
        { provide: AuthService, useValue: authMock },
        { provide: ApplicationRef, useClass: AppRefMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.resolve(true));
    Auth.userAttributes = jasmine
      .createSpy()
      .and.returnValue(Promise.resolve([{ Name: 'sub', Value: '1' } as CognitoUserAttribute]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run cleanUp if isNew is truthy', fakeAsync(() => {
    syncMock.isUserBrandNew.and.returnValue(Promise.resolve(true));

    spyOn(component, 'cleanUp');

    component.onboardUser();

    tick();

    expect(component.cleanUp).toHaveBeenCalled();
  }));

  it('should run router.navigate if isNew is truthy', fakeAsync(() => {
    syncMock.isUserBrandNew.and.returnValue(Promise.resolve(true));

    component.onboardUser();

    tick();

    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it('should run initUser if isNew is falsy', fakeAsync(() => {
    syncMock.isUserBrandNew.and.returnValue(Promise.resolve(false));

    component.onboardUser();

    tick();

    expect(syncMock.initUser).toHaveBeenCalled();
  }));

  it('should run subscribeToListeners if isNew is falsy', fakeAsync(() => {
    syncMock.isUserBrandNew.and.returnValue(Promise.resolve(false));

    component.onboardUser();

    tick();

    expect(syncMock.subscribeToListeners).toHaveBeenCalled();
  }));

  it('should run onboardUser if isNew is falsy', fakeAsync(() => {
    syncMock.isUserBrandNew.and.returnValue(Promise.resolve(false));

    component.onboardUser();

    tick();

    expect(syncMock.onboardUser).toHaveBeenCalled();
  }));

  it('should run cleanUp if isNew is falsy', fakeAsync(() => {
    syncMock.isUserBrandNew.and.returnValue(Promise.resolve(false));

    spyOn(component, 'cleanUp');

    component.onboardUser();

    tick();

    expect(component.cleanUp).toHaveBeenCalled();
  }));

  it('should run get item if error in try catch', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    spyOn(window.sessionStorage, 'getItem');
    component.onboardUser();

    tick();

    expect(window.sessionStorage.getItem).toHaveBeenCalled();
  }));

  it('should run set item if error in try catch and retries is null', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    spyOn(window.sessionStorage, 'setItem');
    let spy = spyOn(window.sessionStorage, 'getItem');
    spy.and.returnValue(null);
    component.onboardUser();

    tick();

    expect(window.sessionStorage.setItem).toHaveBeenCalled();
  }));

  it('should run set item if error in try catch and retries is truthy', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    spyOn(window.sessionStorage, 'setItem');
    let spy = spyOn(window.sessionStorage, 'getItem');
    spy.and.returnValue('test');
    component.onboardUser();

    tick();

    expect(window.sessionStorage.setItem).toHaveBeenCalled();
  }));

  it('should run get item if error in try catch and retries is > 0', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    let spy = spyOn(window.sessionStorage, 'getItem');
    spy.and.returnValue('10');
    component.onboardUser();

    tick();

    expect(window.sessionStorage.getItem).toHaveBeenCalled();
  }));

  it('should run socialSignIn if error in try catch and retries is > 0 and providers is thruthy', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    let spy = spyOn(window.sessionStorage, 'getItem');
    spy.and.returnValue('10');
    component.onboardUser();

    tick();

    expect(authMock.socialSignIn).toHaveBeenCalled();
  }));

  it('should run cleanUp if error in try catch and retries is not > 0', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    spyOn(component, 'cleanUp')
    let spy = spyOn(window.sessionStorage, 'getItem');
    spy.and.returnValue('0');
    component.onboardUser();

    tick();

    expect(component.cleanUp).toHaveBeenCalled();
  }));

  it('should run cleanUp if error in try catch and retries is not > 0', fakeAsync(() => {
    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.reject(new Error()));
    let spy = spyOn(window.sessionStorage, 'getItem');
    spy.and.returnValue('0');
    component.onboardUser();

    tick();

    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it('should run remove item on cleanUp', () => {
    spyOn(window.sessionStorage, 'removeItem');
    component.cleanUp();
    expect(window.sessionStorage.removeItem).toHaveBeenCalled();
  });

  it('should run closeInterstitial on cleanUp', () => {
    component.cleanUp();
    expect(interstitialMock.closeInterstitial).toHaveBeenCalled();
  });
});
