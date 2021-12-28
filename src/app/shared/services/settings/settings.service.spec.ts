import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { InterstitialService } from "../interstitial/interstitial.service";

import { SettingsService } from "./settings.service";

// private router: Router, private auth: AuthService, private interstitial: InterstitialService

describe("SettingsService", () => {
  let service: SettingsService;
  let routerMock: any;
  let authMock: any;
  let interstitialMock: any;
  beforeEach(() => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    authMock = jasmine.createSpyObj("AuthService", [""]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [""]);
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    });
    service = TestBed.inject(SettingsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
