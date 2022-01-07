import { ApplicationRef } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { of } from 'rxjs';

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
    authMock = jasmine.createSpyObj('AuthService', ['socialSignIn', 'userAttributes', 'currentAuthenticatedUser']);
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onboardUser method success', () => {
    beforeEach(() => {
      authMock.currentAuthenticatedUser.and.returnValue(Promise.resolve(true));
      authMock.userAttributes.and.returnValue(Promise.resolve([{ name: 'sub', Value: 1 }]));
      syncMock.isUserBrandNew.and.returnValue(Promise.resolve(true));
    });

    it('should run cleanUp if isNew is truthy', fakeAsync(() => {
      spyOn(component, 'cleanUp');

      component.onboardUser();

      tick();

      expect(component.cleanUp).toHaveBeenCalled();
    }));

    it('should run router.navigate if isNew is truthy', fakeAsync(() => {
      component.onboardUser();

      tick();

      expect(routerMock.navigate).toHaveBeenCalled();
    }));
  });

  describe('onboardUser method fail', () => {
    beforeEach(() => {
      authMock.currentAuthenticatedUser.and.returnValue(() => {
        throw new Error();
      });
    });

    it('', () => {
      spyOn(window.sessionStorage, 'setItem');

      component.onboardUser();

      expect(window.sessionStorage.setItem).toHaveBeenCalled();
    });
  });
});
