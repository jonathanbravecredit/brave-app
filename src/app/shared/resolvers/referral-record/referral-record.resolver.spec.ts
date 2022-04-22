import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ReferralsService } from "@shared/services/referrals/referrals.service";

import { ReferralRecordResolver } from "./referral-record.resolver";

describe("ReferralRecordResolver", () => {
  let resolver: ReferralRecordResolver;
  let referralsServiceMock: any;

  beforeEach(() => {
    referralsServiceMock = jasmine.createSpyObj("ReferralsService", [
      "getReferral",
    ]);
    TestBed.configureTestingModule({
      providers: [
        { provide: ReferralsService, useValue: referralsServiceMock },
      ],
    });
    resolver = TestBed.inject(ReferralRecordResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run referralService.getReferral on resolve", fakeAsync(() => {
    resolver.resolve();
    tick();
    expect(referralsServiceMock.getReferral).toHaveBeenCalled();
  }));
});
