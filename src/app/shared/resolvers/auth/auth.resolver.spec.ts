import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ActivatedRouteSnapshot } from "@angular/router";
import { CampaignService } from "@shared/services/campaign/campaign.service";
import { ReferralsService } from "@shared/services/referrals/referrals.service";
import { BehaviorSubject, of } from "rxjs";

import { AuthResolver } from "./auth.resolver";

describe("AuthResolver", () => {
  let resolver: AuthResolver;
  let referralsMock: any;
  let campaignMock: any;

  beforeEach(() => {
    referralsMock = jasmine.createSpyObj(
      "ReferralsService",
      ["validateReferralCode"],
      { referredByCode$: new BehaviorSubject<string | null>(null) }
    );
    campaignMock = jasmine.createSpyObj("CampaignService", [
      "setCampaignActive",
    ]);
    TestBed.configureTestingModule({
      providers: [
        { provide: ReferralsService, useValue: referralsMock },
        { provide: CampaignService, useValue: campaignMock },
      ],
    });
    resolver = TestBed.inject(AuthResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run referredByCode$.next on resolve", () => {
    referralsMock.validateReferralCode.and.returnValue(
      Promise.resolve({ valide: true })
    );
    let spy = spyOn(referralsMock.referredByCode$, "next");
    resolver.resolve({
      queryParams: { referralCode: "" },
    } as unknown as ActivatedRouteSnapshot);
    expect(spy).toHaveBeenCalled();
  });

  it("should run referrals.validateReferralCode on resolve", () => {
    referralsMock.validateReferralCode.and.returnValue(
      Promise.resolve({ valide: true })
    );
    resolver.resolve({
      queryParams: { referralCode: "" },
    } as unknown as ActivatedRouteSnapshot);
    expect(referralsMock.validateReferralCode).toHaveBeenCalled();
  });

  it("should run campaign.setCampaignActive on resolve", fakeAsync(() => {
    referralsMock.validateReferralCode.and.returnValue(
      Promise.resolve({ valide: true })
    );
    resolver.resolve({
      queryParams: { referralCode: "" },
    } as unknown as ActivatedRouteSnapshot);
    tick();
    expect(campaignMock.setCampaignActive).toHaveBeenCalled();
  }));
});
