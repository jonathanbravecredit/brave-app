import { TestBed } from "@angular/core/testing";
import { ReferralsService } from "@shared/services/referrals/referrals.service";

import { ReferralMetricsResolver } from "./referral-metrics.resolver";

describe("ReferralMetricsResolver", () => {
  let resolver: ReferralMetricsResolver;
  let referralsServiceMock: any;

  beforeEach(() => {
    referralsServiceMock = jasmine.createSpyObj("ReferralsService", ["getReferralMonthlyCampaignEarnings"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: ReferralsService, useValue: referralsServiceMock },
      ],
    });
    resolver = TestBed.inject(ReferralMetricsResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
