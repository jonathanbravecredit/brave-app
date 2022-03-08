import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CreditReportResolver } from '@shared/resolvers/credit-report/credit-report.resolver';
import { DashboardProgressTrackerResolver } from '@shared/resolvers/dashboard-progress-tracker/dashboard-progress-tracker.resolver';
import { ReferralResolver } from '@shared/resolvers/referral/referral.resolver';
import { DashboardInitResolver } from '../dashboard-init/dashboard-init.resolver';
import { DashboardScoreTrendsResolver } from '../dashboard-score-trends/dashboard-score-trends.resolver';
import { DashboardSnapshotsResolver } from '../dashboard-snapshots/dashboard-snapshots.resolver';

import { DashboardResolver } from './dashboard.resolver';

//protected progressTrackerResolver: DashboardProgressTrackerResolver,

describe('DashboardResolver', () => {
  let resolver: DashboardResolver;
  let dashboardResolverMock: any;
  let snapshotsResolverMock: any;
  let scoreTrendsResolverMock: any;
  let referralResolverMock: any;
  let creditReportResolverMock: any;
  let progressTrackerResolverMock: any;

  beforeEach(() => {
    dashboardResolverMock = jasmine.createSpyObj('DashboardInitResolver', ['resolve']);
    snapshotsResolverMock = jasmine.createSpyObj('DashboardSnapshotsResolver', ['resolve']);
    scoreTrendsResolverMock = jasmine.createSpyObj('DashboardScoreTrendsResolver', ['resolve']);
    referralResolverMock = jasmine.createSpyObj('ReferralResolver', ['resolve']);
    creditReportResolverMock = jasmine.createSpyObj('CreditReportResolver', ['resolve']);
    progressTrackerResolverMock = jasmine.createSpyObj('DashboardProgressTrackerResolver', ['resolve']);


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: DashboardInitResolver, useValue: dashboardResolverMock },
        {
          provide: DashboardSnapshotsResolver,
          useValue: snapshotsResolverMock,
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
        },{
          provide: DashboardProgressTrackerResolver,
          useValue: progressTrackerResolverMock,
        },
      ],
    });
    resolver = TestBed.inject(DashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
