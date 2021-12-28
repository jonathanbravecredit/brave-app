import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { BraveAnalyticsService } from "../brave/brave-analytics.service";
import { FacebookService } from "../facebook/facebook.service";
import { GoogleService } from "../google/google.service";
import { MixpanelService } from "../mixpanel/mixpanel.service";

import { AnalyticsService } from "./analytics.service";

// protected google: GoogleService,
// private facebook: FacebookService,
// protected mixpanel: MixpanelService,
// private brave: BraveAnalyticsService,
// private router: Router,

describe("AnalyticsService", () => {
  let service: AnalyticsService;
  let googleMock: any;
  let facebookMock: any;
  let mixpanelMock: any;
  let braveMock: any;
  class RouterMock {
    public events = of()
  }

  beforeEach(() => {
    googleMock = jasmine.createSpyObj("GoogleService", [
      "fireUserTrackingEvent",
      "fireClickEvent",
      "firePageViewEvent",
      "fireErrorEvent",
    ]);
    facebookMock = jasmine.createSpyObj("FacebookService", [
      "fireCompleteRegistration",
    ]);
    mixpanelMock = jasmine.createSpyObj("MixpanelService", [
      "fireUserTrackingEvent",
      "fireLoginTrackingEvent",
      "fireClickEvent",
      "firePageViewEvent",
    ]);
    braveMock = jasmine.createSpyObj("BraveAnalyticsService", [
      "fireClickEvent",
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: GoogleService, useValue: googleMock },
        { provide: FacebookService, useValue: facebookMock },
        { provide: MixpanelService, useValue: mixpanelMock },
        { provide: BraveAnalyticsService, useValue: braveMock },
        { provide: Router, useClass: RouterMock },
      ],
    });
    service = TestBed.inject(AnalyticsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
