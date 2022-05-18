// private store: Store,
// private router: Router,
// private creditMixService: CreditMixService,
// private creditUtilizationService: CreditUtilizationService,
// public dashboardService: DashboardService,
// public progressTracker: ProgressTrackerService,

import { IMergeReport } from "@bravecredit/brave-sdk";
import { Initiative } from "@shared/interfaces/progress-tracker.interface";
import { CreditReportStateModel } from "@store/credit-report";
import { DashboardEnrolledComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component";
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { ProgressTrackerService } from "../../../../shared/services/progress-tracker/progress-tracker-service.service";
import { DashboardService } from "../../../../shared/services/dashboard/dashboard.service";
import { CreditUtilizationService } from "../../../../shared/services/credit-utilization/credit-utilization.service";
import { CreditMixService } from "../../credit-mix/credit-mix-service/credit-mix-service.service";
import { Store } from "@ngxs/store";
import { RouterEvent, Router } from "@angular/router";

describe("DashboardEnrolledComponent", () => {
  let component: DashboardEnrolledComponent;
  let routerMock: any;
  let storeMock: any;
  let creditMixServiceMock: any;
  let creditUtilizationServiceMock: any;
  let dashboardServiceMock: any;
  let progressTrackerMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj("Store", ["select", "selectSnapshot"]);
    routerMock = jasmine.createSpyObj("Router", ["navigate"]);
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [
      "getTradelineSummary",
      "getRecommendations",
      "mapCreditMixSnapshotStatus",
      "getRecommendations",
    ]);
    creditUtilizationServiceMock = jasmine.createSpyObj(
      "CreditUtilizationService",
      ["getCreditUtilizationSnapshotStatus"]
    );
    dashboardServiceMock = jasmine.createSpyObj(
      "DashboardService",
      ["getAdData", "syncDashboardStateToDB", "getUpdateMetrics"],
      {
        updatedOn$: new BehaviorSubject<string | null>(null),
        dashReport$: new BehaviorSubject<IMergeReport | null>(null),
        dashScoreSuppressed$: new BehaviorSubject<boolean>(false),
        progressTrackerData$: new BehaviorSubject<Initiative | null>(null),
      }
    );
    progressTrackerMock = jasmine.createSpyObj("ProgressTrackerService", [
      "findFutureScore",
    ]);

    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: Store, useValue: storeMock },
        { provide: CreditMixService, useValue: creditMixServiceMock },
        {
          provide: CreditUtilizationService,
          useValue: creditUtilizationServiceMock,
        },
        { provide: DashboardService, useValue: dashboardServiceMock },
        { provide: ProgressTrackerService, useValue: progressTrackerMock },
        DashboardEnrolledComponent,
      ],
    });
    component = TestBed.inject(DashboardEnrolledComponent);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should unsubscribe from routeSub$ on destroy", () => {
    component.routeSub$ = new Subscription();
    spyOn(component.routeSub$, "unsubscribe");
    component.ngOnDestroy();
    expect(component.routeSub$.unsubscribe).toHaveBeenCalled();
  });

  it("should unsubscribe from reportSub$ on destroy", () => {
    component.reportSub$ = new Subscription();
    spyOn(component.reportSub$, "unsubscribe");
    component.ngOnDestroy();
    expect(component.reportSub$.unsubscribe).toHaveBeenCalled();
  });

  it("should unsubscribe from initiative$ on destroy", () => {
    component.initiative$ = new Subscription();
    spyOn(component.initiative$, "unsubscribe");
    component.ngOnDestroy();
    expect(component.initiative$.unsubscribe).toHaveBeenCalled();
  });

  it("should set futureScore to 0 when refreshFutureScore is run and findFutureScore returns falsky and enrolledScore is falsy", () => {
    progressTrackerMock.findFutureScore.and.returnValue(undefined);
    component.enrolledScore = undefined;
    component.refreshFutureScore();
    expect(component.futureScore).toEqual(0);
  });

  it("should set futureScore to 50 when refreshFutureScore is run and findFutureScore returns 25 and enrolledScore is 25", () => {
    progressTrackerMock.findFutureScore.and.returnValue(25);
    component.enrolledScore = "25";
    component.refreshFutureScore();
    expect(component.futureScore).toEqual(50);
  });

  // ----------------------------------------------------------------------------------

  it("should run subscribe on reportSub$ in subscribeToReportData", () => {
    component.report$ = new Observable<CreditReportStateModel>();
    spyOn(component.report$, "subscribe");
    component.subscribeToReportData();
    expect(component.report$.subscribe).toHaveBeenCalled();
  });

  // ----------------------------------------------------------------------------------

  it("should run progressTrackerData$.next on setProgressTrackerDataInDashboardService if intiative", () => {
    component.initiative = {} as Initiative;
    spyOn(dashboardServiceMock.progressTrackerData$, "next");
    component.setProgressTrackerDataInDashboardService();
    expect(dashboardServiceMock.progressTrackerData$.next).toHaveBeenCalled();
  });

  it("should run getAdData on setAdData", () => {
    component.setAdData();
    expect(dashboardServiceMock.getAdData).toHaveBeenCalled();
  });

  it("should run syncDashboardStateToDB on onNegativeItemsClicked", () => {
    component.onNegativeItemsClicked();
    expect(dashboardServiceMock.syncDashboardStateToDB).toHaveBeenCalled();
  });

  it("should run navigate on onNegativeItemsClicked", () => {
    component.onNegativeItemsClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run syncDashboardStateToDB on onDatabreachItemsClicked", () => {
    component.onDatabreachItemsClicked();
    expect(dashboardServiceMock.syncDashboardStateToDB).toHaveBeenCalled();
  });

  it("should run navigate on onDatabreachItemsClicked", () => {
    component.onDatabreachItemsClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run navigate on onFullReportClicked", () => {
    component.onFullReportClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run navigate on onDisputesClicked", () => {
    component.onDisputesClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run navigate on onCreditUtilizationClicked", () => {
    component.onCreditUtilizationClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run navigate on onCreditMixClicked", () => {
    component.onCreditMixClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run navigate on onReferralsClicked", () => {
    component.onReferralsClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });

  it("should run navigate on onProgressTrackerClicked", () => {
    component.onProgressTrackerClicked();
    expect(routerMock.navigate).toHaveBeenCalled();
  });
});
