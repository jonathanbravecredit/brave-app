import { HttpClientTestingModule } from "@angular/common/http/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { CreditReportResolver } from "@shared/resolvers/credit-report/credit-report.resolver";
import { DashboardProgressTrackerResolver } from "@shared/resolvers/dashboard-progress-tracker/dashboard-progress-tracker.resolver";
import { ReferralResolver } from "@shared/resolvers/referral/referral.resolver";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { DashboardInitResolver } from "../dashboard-init/dashboard-init.resolver";
import { DashboardScoreTrendsResolver } from "../dashboard-score-trends/dashboard-score-trends.resolver";
import { DashboardSnapshotsResolver } from "../dashboard-snapshots/dashboard-snapshots.resolver";

import { DashboardResolver } from "./dashboard.resolver";

//protected progressTrackerResolver: DashboardProgressTrackerResolver,

describe("DashboardResolver", () => {
  let resolver: DashboardResolver;
  let interstitialMock: any;
  let initResolverMock: any;
  let snapshotsResolverMock: any;
  let scoreTrendsResolverMock: any;
  let referralResolverMock: any;
  let creditReportResolverMock: any;
  let progressTrackerResolverMock: any;

  beforeEach(() => {
    interstitialMock = jasmine.createSpyObj("DashboardInitResolver", [
      "changeMessage",
      "openInterstitial",
      "closeInterstitial",
    ]);
    initResolverMock = jasmine.createSpyObj("DashboardInitResolver", [
      "resolve",
    ]);
    snapshotsResolverMock = jasmine.createSpyObj("DashboardSnapshotsResolver", [
      "resolve",
    ]);
    scoreTrendsResolverMock = jasmine.createSpyObj(
      "DashboardScoreTrendsResolver",
      ["resolve"]
    );
    referralResolverMock = jasmine.createSpyObj("ReferralResolver", [
      "resolve",
    ]);
    creditReportResolverMock = jasmine.createSpyObj("CreditReportResolver", [
      "resolve",
    ]);
    progressTrackerResolverMock = jasmine.createSpyObj(
      "DashboardProgressTrackerResolver",
      ["resolve"]
    );

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: InterstitialService, useValue: interstitialMock },
        {
          provide: DashboardSnapshotsResolver,
          useValue: snapshotsResolverMock,
        },
        {
          provide: DashboardInitResolver,
          useValue: initResolverMock,
        },
        {
          provide: DashboardScoreTrendsResolver,
          useValue: scoreTrendsResolverMock,
        },
        {
          provide: ReferralResolver,
          useValue: referralResolverMock,
        },
        {
          provide: CreditReportResolver,
          useValue: creditReportResolverMock,
        },
        {
          provide: DashboardProgressTrackerResolver,
          useValue: progressTrackerResolverMock,
        },
      ],
    });
    resolver = TestBed.inject(DashboardResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should call changeMessage on resolve", () => {
    resolver.resolve();
    expect(interstitialMock.changeMessage).toHaveBeenCalled();
  });

  it("should call openInterstitial on resolve", () => {
    resolver.resolve();
    expect(interstitialMock.openInterstitial).toHaveBeenCalled();
  });

  it("should call creditReportResolver.resolve on resolve", () => {
    resolver.resolve();
    expect(creditReportResolverMock.resolve).toHaveBeenCalled();
  });

  it("should call initResolver.resolve on resolve", fakeAsync(() => {
    resolver.resolve();
    tick();
    expect(initResolverMock.resolve).toHaveBeenCalled();
  }));

  // it("should call snapshotsResolver.resolve on resolve", fakeAsync(() => {
  //   resolver.resolve();
  //   tick();
  //   expect(snapshotsResolverMock.resolve).toHaveBeenCalled();
  // }));

  // it("should call scoreTrendsResolver.resolve on resolve", fakeAsync(() => {
  //   resolver.resolve();
  //   tick();
  //   expect(scoreTrendsResolverMock.resolve).toHaveBeenCalled();
  // }));

  // it("should call referralResolver.resolve on resolve", fakeAsync(() => {
  //   resolver.resolve();
  //   tick();
  //   expect(referralResolverMock.resolve).toHaveBeenCalled();
  // }));

  // it("should call progressTrackerResolver.resolve on resolve", fakeAsync(() => {
  //   resolver.resolve();
  //   tick();
  //   expect(progressTrackerResolverMock.resolve).toHaveBeenCalled();
  // }));
});
