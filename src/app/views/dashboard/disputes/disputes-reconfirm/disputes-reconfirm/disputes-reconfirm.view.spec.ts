import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { StateService } from "@shared/services/state/state.service";
import { of } from "rxjs";

import { DisputesReconfirmView } from "./disputes-reconfirm.view";

// private router: Router,
// private route: ActivatedRoute,
// private disputeService: DisputeService,
// private statesvc: StateService,
// private creditReportService: CreditreportService,

describe("DisputesReconfirmView", () => {
  let component: DisputesReconfirmView;
  let fixture: ComponentFixture<DisputesReconfirmView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let interstitialMock: any;
  let statesvcMock: any;
  class CreditReportServiceMock {
    tuReport$ = of();
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("", [""]);
    interstitialMock = jasmine.createSpyObj("", [""]);
    statesvcMock = jasmine.createSpyObj("", [""]);
    await TestBed.configureTestingModule({
      declarations: [DisputesReconfirmView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: CreditreportService, useClass: CreditReportServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesReconfirmView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
