import { TestBed } from "@angular/core/testing";
import { DashboardInitResolver } from "../dashboard-init/dashboard-init.resolver";
import { DashboardReferralsResolver } from "../dashboard-referrals/dashboard-referrals.resolver";
import { DashboardScoreTrackingResolver } from "../dashboard-score-tracking/dashboard-score-tracking.resolver";
import { DashboardScoreTrendsResolver } from "../dashboard-score-trends/dashboard-score-trends.resolver";
import { DashboardSnapshotsResolver } from "../dashboard-snapshots/dashboard-snapshots.resolver";

import { DashboardResolver } from "./dashboard.resolver";

describe("DashboardResolver", () => {
  let resolver: DashboardResolver;
  let dashboardResolverMock: any;
  let snapshotsResolverMock: any;
  let scoreTrackingResolverMock: any;
  let scoreTrendsResolverMock: any;
  let referralsResolverMock: any;

  beforeEach(() => {
    dashboardResolverMock = jasmine.createSpyObj("DashboardInitResolver", [
      "resolve",
    ]);
    snapshotsResolverMock = jasmine.createSpyObj("DashboardSnapshotsResolver", [
      "resolve",
    ]);
    scoreTrackingResolverMock = jasmine.createSpyObj(
      "DashboardScoreTrackingResolver",
      ["resolve"]
    );
    scoreTrendsResolverMock = jasmine.createSpyObj(
      "DashboardScoreTrendsResolver",
      ["resolve"]
    );
    referralsResolverMock = jasmine.createSpyObj("DashboardReferralsResolver", [
      "resolve",
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: DashboardInitResolver, useValue: dashboardResolverMock },
        {
          provide: DashboardSnapshotsResolver,
          useValue: snapshotsResolverMock,
        },
        {
          provide: DashboardScoreTrackingResolver,
          useValue: scoreTrackingResolverMock,
        },
        {
          provide: DashboardScoreTrendsResolver,
          useValue: scoreTrendsResolverMock,
        },
        {
          provide: DashboardReferralsResolver,
          useValue: referralsResolverMock,
        },
      ],
    });
    resolver = TestBed.inject(DashboardResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
