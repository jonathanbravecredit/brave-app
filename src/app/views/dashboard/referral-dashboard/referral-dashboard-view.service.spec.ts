import { TestBed } from '@angular/core/testing';

import { ReferralDashboardViewService } from './referral-dashboard-view.service';

describe('ReferralDashboardViewService', () => {
  let service: ReferralDashboardViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferralDashboardViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
