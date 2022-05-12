import { TestBed } from "@angular/core/testing";

import { ProgressTrackerViewService } from "./progress-tracker-view.service";
import { DashboardService } from "../../../shared/services/dashboard/dashboard.service";
import { ProgressTrackerService } from "../../../shared/services/progress-tracker/progress-tracker-service.service";
import { BehaviorSubject } from "rxjs";
import { ICircleProgressStep } from "../../../shared/components/progressbars/circle-checktext-progressbar/circle-checktext-progressbar";
import { ProgressTrackerStateModel } from "../../../store/progress-tracker/progress-tracker.model";

// private progressTrackerService: ProgressTrackerService,
// private dashboard: DashboardService

describe("ProgressTrackerViewService", () => {
  let service: ProgressTrackerViewService;
  let progressTrackerServiceMock: any;
  let dashboardMock: any;

  beforeEach(() => {
    progressTrackerServiceMock = jasmine.createSpyObj(
      "ProgressTrackerService",
      ["findFutureScore", "updateProgressTrackerData"],
      {
        initiative$: new BehaviorSubject<ProgressTrackerStateModel>(
          {} as ProgressTrackerStateModel
        ),
        initiativeSteps$: new BehaviorSubject<ICircleProgressStep[]>([]),
      }
    );
    dashboardMock = jasmine.createSpyObj("", [""], {
      dashScore$: new BehaviorSubject<number | null>(1),
      dashDelta$: new BehaviorSubject<number | null>(1),
    });
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ProgressTrackerService,
          useValue: progressTrackerServiceMock,
        },
        { provide: DashboardService, useValue: dashboardMock },
      ],
    });
    service = TestBed.inject(ProgressTrackerViewService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
