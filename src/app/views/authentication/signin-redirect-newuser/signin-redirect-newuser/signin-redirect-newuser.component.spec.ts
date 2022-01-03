import { ApplicationRef } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { SyncService } from "@shared/services/sync/sync.service";
import { of } from "rxjs";
import { SigninRedirectNewuserComponent } from "./signin-redirect-newuser.component";

describe("SigninRedirectNewuserComponent", () => {
  let component: SigninRedirectNewuserComponent;
  let fixture: ComponentFixture<SigninRedirectNewuserComponent>;
  class appRefMock {
    isStable = of();
  }
  let syncMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    syncMock = jasmine.createSpyObj("SyncService", [""]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [
      "changeMessage",
      "closeInterstitial",
      "openInterstitial",
    ]);
    await TestBed.configureTestingModule({
      declarations: [SigninRedirectNewuserComponent],
      providers: [
        { provide: ApplicationRef, useClass: appRefMock },
        { provide: SyncService, useValue: syncMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninRedirectNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("the appSub$ should be created in the constructor", () => {
    expect(component['appSub$']).toBeTruthy();
  });

  it('Should run the interstitial changeMessage method when onManualRedirectClick is clicked', () => {
    component.onManualRedirectClick()
    expect(interstitialMock.changeMessage).toHaveBeenCalled();
  })

  it('Should run the interstitial openInterstitial method when onManualRedirectClick is clicked', () => {
    component.onManualRedirectClick()
    expect(interstitialMock.openInterstitial).toHaveBeenCalled();
  })

  it('Should run the interstitial closeInterstitial method when onManualRedirectClick is clicked', () => {
    component.onManualRedirectClick()
    expect(interstitialMock.closeInterstitial).toHaveBeenCalled();
  })

  it('Should run the onboardUser method when onManualRedirectClick is called', () => {
    component.onManualRedirectClick()
    expect(component.onboardUser).toHaveBeenCalled();
  })

  it('Should run the initUser method when onboardUser is called', () => {
    component.onboardUser()
    expect(syncMock.initUser).toHaveBeenCalled();
  })

  it('Should run the subscribeToListeners method when onboardUser is called', () => {
    component.onboardUser()
    expect(syncMock.subscribeToListeners).toHaveBeenCalled();
  })

  it('Should run the sync.onboardUser method when onboardUser is called', () => {
    component.onboardUser()
    expect(syncMock.onboardUser).toHaveBeenCalled();
  })


});
