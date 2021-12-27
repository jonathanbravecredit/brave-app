import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { DisputesToDisputesHistoricalPipe } from "@shared/pipes/disputes-to-disputes-historical/disputes-to-disputes-historical.pipe";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { TransunionService } from "@shared/services/transunion/transunion.service";
import { of } from "rxjs";

import { DisputesHistoricalView } from "./disputes-historical.view";

// private router: Router,
// private route: ActivatedRoute,
// private interstitial: InterstitialService,
// private disputeService: DisputeService,
// private transunion: TransunionService,

describe("DisputesHistoricalView", () => {
  let component: DisputesHistoricalView;
  let fixture: ComponentFixture<DisputesHistoricalView>;
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
      declarations: [DisputesHistoricalView, DisputesToDisputesHistoricalPipe],
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
    fixture = TestBed.createComponent(DisputesHistoricalView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
