import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CleanUpService } from '@shared/services/clean-up/clean-up.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SettingsService } from '@shared/services/settings/settings.service';
import { StateService } from '@shared/services/state/state.service';
import { ISettingsViews, SettingsOptions } from '@views/dashboard/settings/settings-pure/interface';
import { SettingsPureComponent } from '@views/dashboard/settings/settings-pure/settings-pure.component';
import { BehaviorSubject, of } from 'rxjs';

import { SettingsComponent } from './settings.component';

// public route: ActivatedRoute,
// private router: Router,
// private settings: SettingsService,
// private interstitial: InterstitialService,
//    private cleanUp: CleanUpService,

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let routerMock: any;
  let cleanUpMock: any;
  class RouteMock {
    data = of();
  }
  let settingsMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    cleanUpMock = jasmine.createSpyObj('Router', ['clearAllState']);
    settingsMock = jasmine.createSpyObj('SettingsService', [
      'getUserEmail',
      'forgotPassword',
      'deactivateAccount',
      'forgotPasswordSubmit',
      'signOut',
    ]);
    interstitialMock = jasmine.createSpyObj(
      'InterstitialService',
      ['changeMessage', 'openInterstitial', 'closeInterstitial', 'stopSpinner'],
      { fetching$: new BehaviorSubject<boolean>(false) },
    );
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: CleanUpService, useValue: cleanUpMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: SettingsService, useValue: settingsMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set init to SettingsOptions.Init on resetView', () => {
    component.resetView();
    expect(component.init).toEqual(SettingsOptions.Init);
  });

  it('should set init to navigate on onGoToPageClick', () => {
    let testObj = { tab: 1, view: {} as ISettingsViews };
    component.onGoToPageClick(testObj);
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it('shound run getUserEmail on onChangePasswordClick', fakeAsync(() => {
    settingsMock.forgotPassword.and.returnValue(Promise.resolve(''));
    component.onChangePasswordClick();
    tick();
    expect(settingsMock.getUserEmail).toHaveBeenCalled();
  }));

  it('shound run forgotPassword on onChangePasswordClick', fakeAsync(() => {
    settingsMock.forgotPassword.and.returnValue(Promise.resolve(''));
    component.onChangePasswordClick();
    tick();
    expect(settingsMock.forgotPassword).toHaveBeenCalled();
  }));

  it('shound set resetSuccess to true on onChangePasswordClick', fakeAsync(() => {
    settingsMock.forgotPassword.and.returnValue(Promise.resolve(''));
    component.onChangePasswordClick();
    tick();
    expect(component.resetSuccess).toBeTrue();
  }));

  it('shound run fetching$.next on onChangePasswordClick', fakeAsync(() => {
    settingsMock.forgotPassword.and.returnValue(Promise.resolve(''));
    spyOn(interstitialMock.fetching$, 'next');
    component.onChangePasswordClick();
    tick();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  }));

  it('shound run stopSpinner on onChangePasswordClick', fakeAsync(() => {
    settingsMock.forgotPassword.and.returnValue(Promise.resolve(''));
    component.onChangePasswordClick();
    tick();
    expect(interstitialMock.stopSpinner).toHaveBeenCalled();
  }));

  it('shound run deactivateAccount on onDeactivateClick', fakeAsync(() => {
    settingsMock.deactivateAccount.and.returnValue(Promise.resolve(''));
    component.onDeactivateClick();
    tick();
    expect(settingsMock.deactivateAccount).toHaveBeenCalled();
  }));

  it('should set deactiveSuccess to true on onDeactivateClick', fakeAsync(() => {
    settingsMock.deactivateAccount.and.returnValue(Promise.resolve(''));
    component.onDeactivateClick();
    tick();
    expect(component.deactivateSuccess).toBeTrue();
  }));

  it('should run interstitial.stopSpinner on onDeactivateClick', fakeAsync(() => {
    settingsMock.deactivateAccount.and.returnValue(Promise.resolve(''));
    component.onDeactivateClick();
    tick();
    expect(interstitialMock.stopSpinner).toHaveBeenCalled();
  }));

  it('should run navigate on onDeactivateClick', fakeAsync(() => {
    settingsMock.deactivateAccount.and.returnValue(Promise.resolve(''));
    component.onDeactivateClick();
    tick();
    expect(routerMock.navigate).toHaveBeenCalled();
  }));

  it('should run fetching$.next on onDeactivateClick', fakeAsync(() => {
    settingsMock.deactivateAccount.and.returnValue(Promise.resolve(''));
    spyOn(interstitialMock.fetching$, 'next');
    component.onDeactivateClick();
    tick();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  }));

  it('should run fetching$.next on onSubmitCodeClick', fakeAsync(() => {
    spyOn(interstitialMock.fetching$, 'next');
    component.onSubmitCodeClick({} as FormGroup);
    tick();
    expect(interstitialMock.fetching$.next).toHaveBeenCalled();
  }));

  it('should run clearAllState on onLogoutClick', () => {
    component.onLogoutClick();
    expect(cleanUpMock.clearAllState).toHaveBeenCalled();
  });

  it('should run signOut on onLogoutClick', () => {
    component.onLogoutClick();
    expect(settingsMock.signOut).toHaveBeenCalled();
  });

  it('should run resetView on onAlertCloseClick', () => {
    spyOn(component, 'resetView');
    component.onAlertCloseClick();
    expect(component.resetView).toHaveBeenCalled();
  });

  //TODO onDeactivateClick => stop spinner next and then down
});
