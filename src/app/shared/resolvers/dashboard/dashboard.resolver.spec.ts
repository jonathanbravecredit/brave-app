import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReferralResolver } from '@shared/resolvers/referral/referral.resolver';
import { DashboardInitResolver } from '../dashboard-init/dashboard-init.resolver';
import { DashboardReferralsResolver } from '../dashboard-referrals/dashboard-referrals.resolver';
import { DashboardScoreTrendsResolver } from '../dashboard-score-trends/dashboard-score-trends.resolver';
import { DashboardSnapshotsResolver } from '../dashboard-snapshots/dashboard-snapshots.resolver';

import { DashboardResolver } from './dashboard.resolver';

describe('DashboardResolver', () => {
  let resolver: DashboardResolver;
  let dashboardResolverMock: any;
  let snapshotsResolverMock: any;
  let scoreTrendsResolverMock: any;
  let referralResolverMock: any;
  beforeEach(() => {
    dashboardResolverMock = jasmine.createSpyObj('DashboardInitResolver', ['resolve']);
    snapshotsResolverMock = jasmine.createSpyObj('DashboardSnapshotsResolver', ['resolve']);
    scoreTrendsResolverMock = jasmine.createSpyObj('DashboardScoreTrendsResolver', ['resolve']);
    referralResolverMock = jasmine.createSpyObj('ReferralResolver', ['resolve']);

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
      ],
    });
    resolver = TestBed.inject(DashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
