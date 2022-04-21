import { TestBed } from "@angular/core/testing";
import { ReferralsService } from "@shared/services/referrals/referrals.service";

import { DashboardReferralsResolver } from "./dashboard-referrals.resolver";

describe("DashboardReferralsResolver", () => {
  let resolver: DashboardReferralsResolver;
  let referralServiceMock: any;

  beforeEach(() => {
    referralServiceMock = jasmine.createSpyObj("ReferralsService", [
      "getReferral",
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: ReferralsService, useValue: referralServiceMock }],
    });
    resolver = TestBed.inject(DashboardReferralsResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run referralService.getReferral on resolve", () => {
    resolver.resolve();
    expect(referralServiceMock.getReferral).toHaveBeenCalled();
  });
});
