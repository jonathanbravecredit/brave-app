import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { AnalyticsService } from "@shared/services/analytics/analytics/analytics.service";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { of } from "rxjs";

import { DisputesTradelineView } from "./disputes-tradeline.view";

describe("DisputesTradelineView", () => {
  let component: DisputesTradelineView;
  let fixture: ComponentFixture<DisputesTradelineView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let interstitialMock: any;
  let disputeServiceMock: any;
  let analyticsMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [""]);
    disputeServiceMock = jasmine.createSpyObj("DisputeService", [""]);
    analyticsMock = jasmine.createSpyObj("AnalyticsService", [""]);
    await TestBed.configureTestingModule({
      declarations: [DisputesTradelineView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: AnalyticsService, useValue: analyticsMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesTradelineView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
