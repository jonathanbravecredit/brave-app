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
});
