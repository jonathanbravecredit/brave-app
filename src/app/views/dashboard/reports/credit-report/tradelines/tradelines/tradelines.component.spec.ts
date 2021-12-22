import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { StateService } from "@shared/services/state/state.service";
import { of } from "rxjs";

import { TradelinesComponent } from "./tradelines.component";

// private router: Router,
// private route: ActivatedRoute,
// private statesvc: StateService,
// private disputeService: DisputeService,
// private interstitial: InterstitialService,
// private creditReportServices: CreditreportService,

describe("TradelinesComponent", () => {
  let component: TradelinesComponent;
  let fixture: ComponentFixture<TradelinesComponent>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let statesvcMock: any;
  let disputeServiceMock: any;
  let creditReportServicesMock: any;
  let interstitialMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    statesvcMock = jasmine.createSpyObj("StateService", [""]);
    disputeServiceMock = jasmine.createSpyObj("DisputeService", [
      "sendDisputePreflightCheck",
    ]);
    creditReportServicesMock = jasmine.createSpyObj("CreditreportService", [
      "",
    ]);
    interstitialMock = jasmine.createSpyObj("InterstitialService", [
      "changeMessage",
      "openInterstitial",
      "closeInterstitial",
    ]);
    await TestBed.configureTestingModule({
      declarations: [TradelinesComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: CreditreportService, useValue: creditReportServicesMock },
        { provide: InterstitialService, useValue: interstitialMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
