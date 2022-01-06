import { ApplicationRef } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';
import { Auth } from 'aws-amplify';
import { of } from 'rxjs';
import { SigninRedirectNewuserComponent } from './signin-redirect-newuser.component';

describe('SigninRedirectNewuserComponent', () => {
  let component: SigninRedirectNewuserComponent;
  let fixture: ComponentFixture<SigninRedirectNewuserComponent>;
  class appRefMock {
    isStable = of();
  }
  let syncMock: any;
  let interstitialMock: any;
  let authMock: any;

  let currentAuthenticatedUser: any;
  let userAttributes: any;

  beforeEach(async () => {
    currentAuthenticatedUser = Auth.currentAuthenticatedUser;
    userAttributes = Auth.userAttributes;

    Auth.currentAuthenticatedUser = jasmine.createSpy().and.returnValue(Promise.resolve({}));
    Auth.userAttributes = jasmine.createSpy().and.returnValue(Promise.resolve([]));

    syncMock = jasmine.createSpyObj('SyncService', ['initUser', 'subscribeToListeners', 'onboardUser']);
    // authMock = jasmine.createSpyObj('Auth', ['currentAuthenticatedUser', 'userAttributes']);
    interstitialMock = jasmine.createSpyObj('InterstitialService', [
      'changeMessage',
      'closeInterstitial',
      'openInterstitial',
    ]);
    await TestBed.configureTestingModule({
      declarations: [SigninRedirectNewuserComponent],
      providers: [
        { provide: ApplicationRef, useClass: appRefMock },
        { provide: SyncService, useValue: syncMock },
        // { provide: Auth, useValue: authMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRedirectNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the appSub$ should be created in the constructor', () => {
    expect(component['appSub$']).toBeTruthy();
  });

  it('Should run the interstitial changeMessage method when onManualRedirectClick is clicked', () => {
    component.onManualRedirectClick();
    expect(interstitialMock.changeMessage).toHaveBeenCalled();
  });

  it('Should run the interstitial openInterstitial method when onManualRedirectClick is clicked', fakeAsync(() => {
    component.onManualRedirectClick();
    tick(1);
    expect(interstitialMock.openInterstitial).toHaveBeenCalled();
  }));

  it('Should run the interstitial closeInterstitial method when onManualRedirectClick is clicked', fakeAsync(() => {
    component.onManualRedirectClick();
    tick(1);
    expect(interstitialMock.closeInterstitial).toHaveBeenCalled();
  }));

  it('Should run the onboardUser method when onManualRedirectClick is called', fakeAsync(() => {
    const spy = spyOn(component, 'onboardUser');
    component.onManualRedirectClick();
    tick(1);
    expect(spy).toHaveBeenCalled();
  }));

  it('Should run the initUser method when onboardUser is called', fakeAsync(() => {
    component.onboardUser();
    tick(1);
    expect(syncMock.initUser).toHaveBeenCalled();
  }));

  it('Should run the subscribeToListeners method when onboardUser is called', fakeAsync(() => {
    component.onboardUser();
    tick(1);
    expect(syncMock.subscribeToListeners).toHaveBeenCalled();
  }));

  it('Should run the sync.onboardUser method when onboardUser is called', fakeAsync(() => {
    component.onboardUser();
    tick(1);
    expect(syncMock.onboardUser).toHaveBeenCalled();
  }));
});
