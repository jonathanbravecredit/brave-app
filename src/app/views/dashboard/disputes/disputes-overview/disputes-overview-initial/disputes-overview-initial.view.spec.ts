import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { DisputesToDisputesOverviewPipe } from "@shared/pipes/disputes-to-disputes-overview/disputes-to-disputes-overview.pipe";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { TransunionService } from "@shared/services/transunion/transunion.service";
import { of } from "rxjs";

import { DisputesOverviewInitialView } from "./disputes-overview-initial.view";

describe("DisputesOverviewInitialView", () => {
  let component: DisputesOverviewInitialView;
  let fixture: ComponentFixture<DisputesOverviewInitialView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let interstitialMock: any;
  let disputeServiceMock: any;
  let transunionMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("", [""]);
    interstitialMock = jasmine.createSpyObj("", [""]);
    disputeServiceMock = jasmine.createSpyObj("", [""]);
    transunionMock = jasmine.createSpyObj("", [""]);
    await TestBed.configureTestingModule({
      declarations: [DisputesOverviewInitialView, DisputesToDisputesOverviewPipe],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: InterstitialService, useValue: interstitialMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputesOverviewInitialView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
