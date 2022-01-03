import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { SettingsService } from "@shared/services/settings/settings.service";
import { StateService } from "@shared/services/state/state.service";
import { of } from "rxjs";

import { SettingsComponent } from "./settings.component";

// public route: ActivatedRoute,
// private router: Router,
// private settings: SettingsService,
// private interstitial: InterstitialService,

describe("SettingsComponent", () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let settingsMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    settingsMock = jasmine.createSpyObj("SettingsService", [""]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [
      "changeMessage",
      "openInterstitial",
      "closeInterstitial",
    ]);
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      providers: [
        { provide: Router, useValue: routerMock },
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

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
