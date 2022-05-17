import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { IDispute } from "@shared/interfaces/disputes";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { TransunionService } from "@shared/services/transunion/transunion.service";
import { IDisputeHistorical } from "@views/dashboard/disputes/components/cards";
import { BehaviorSubject, of } from "rxjs";

import { DisputesOverviewInitialView } from "./disputes-overview-initial.view";

describe("DisputesOverviewInitialView", () => {
  let component: DisputesOverviewInitialView;
  let fixture: ComponentFixture<DisputesOverviewInitialView>;
  let routerMock: any;

  let interstitialMock: any;
  let disputeServiceMock: any;
  let transunionMock: any;
  let routeMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("", ["navigate"]);
    interstitialMock = jasmine.createSpyObj("", [
      "openInterstitial",
      "closeInterstitial",
      "changeMessage",
    ]);
    disputeServiceMock = jasmine.createSpyObj("", [""], {
      currentDispute$: new BehaviorSubject<IDispute>({} as IDispute),
    });
    transunionMock = jasmine.createSpyObj("", ["getInvestigationResults"]);
    routeMock = jasmine.createSpyObj("", [""], {
      data: of(),
    });
    await TestBed.configureTestingModule({
      declarations: [DisputesOverviewInitialView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
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

  it("should unsubscribe routeSub$ on destroy", () => {
    spyOn(component.routeSub$, "unsubscribe" as never);

    component.ngOnDestroy();

    expect(component.routeSub$?.unsubscribe).toHaveBeenCalled();
  });

  // it('should throw an error if entity.dispute is false when onViewDetailsClick is run', () => {
  //   expect(() => {
  //     component.onViewDetailsClick(undefined);
  //   }).toThrow();
  // }); //todo figure out how to fix this

  it("should run interstitial.openInterstitial if dispute.disputeStatus does not match", () => {
    component.onViewDetailsClick({
      dispute: { disputeId: 1, disputeStatus: "test" },
    } as unknown as IDisputeHistorical);

    expect(interstitialMock.openInterstitial).toHaveBeenCalled();
  });

  it("should run getInvestigationResults if dispute.disputeStatus does not matches", fakeAsync(() => {
    transunionMock.getInvestigationResults.and.returnValue({
      success: true,
      error: "",
      data: "",
    });

    component.onViewDetailsClick({
      dispute: { disputeId: 1, disputeStatus: "completedispute" },
    } as unknown as IDisputeHistorical);

    tick();

    expect(transunionMock.getInvestigationResults).toHaveBeenCalled();
  }));

  it("should run router.navigate if unsucessful resp from getInvestigationResults", fakeAsync(() => {
    transunionMock.getInvestigationResults.and.returnValue({
      success: false,
      error: "",
      data: "",
    });

    component.onViewDetailsClick({
      dispute: { disputeId: 1, disputeStatus: "completedispute" },
    } as unknown as IDisputeHistorical);

    tick();

    expect(routerMock.navigate).toHaveBeenCalled();
  }));
});
