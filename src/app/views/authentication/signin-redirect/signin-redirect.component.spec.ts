import { ApplicationRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SyncService } from '@shared/services/sync/sync.service';

import { SigninRedirectComponent } from './signin-redirect.component';


describe('SigninRedirectComponent', () => {
  let component: SigninRedirectComponent;
  let fixture: ComponentFixture<SigninRedirectComponent>;
  let routerMock: any;
  let syncMock: any;
  let authMock: any;
  let appRefMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', [''])
    syncMock = jasmine.createSpyObj('SyncService', [''])
    authMock = jasmine.createSpyObj('AuthService', [''])
    appRefMock = jasmine.createSpyObj('ApplicationRef', [''])
    interstitialMock = jasmine.createSpyObj('InterstitialService', [''])
    await TestBed.configureTestingModule({
      declarations: [ SigninRedirectComponent ],providers: [
        {provide: Router, useValue: routerMock},
        {provide: SyncService, useValue: syncMock},
        {provide: AuthService, useValue: authMock},
        {provide: ApplicationRef, useValue: appRefMock},
        {provide: InterstitialService, useValue: interstitialMock},
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
