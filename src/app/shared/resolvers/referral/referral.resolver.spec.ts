import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { CampaignResolver } from "@shared/resolvers/campaign/campaign.resolver";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { ReferralRecordResolver } from "../referral-record/referral-record.resolver";

import { ReferralResolver } from "./referral.resolver";

//campaignResolver: CampaignResolver

describe("ReferralResolver", () => {
  let resolver: ReferralResolver;
  let interstitialmock: any;
  let referralRecordmock: any;
  let campaignResolvermock: any;

  beforeEach(() => {
    interstitialmock = jasmine.createSpyObj("InterstitialService", [
      "changeMessage",
      "openInterstitial",
    ]);
    referralRecordmock = jasmine.createSpyObj("ReferralRecordResolver", [
      "resolve",
    ]);
    campaignResolvermock = jasmine.createSpyObj("CampaignResolver", [
      "resolve",
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: InterstitialService, useValue: interstitialmock },
        { provide: ReferralRecordResolver, useValue: referralRecordmock },
        { provide: CampaignResolver, useValue: campaignResolvermock },
      ],
    });
    resolver = TestBed.inject(ReferralResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run interstitial.changeMessage on resolve", () => {
    resolver.resolve();
    expect(interstitialmock.changeMessage).toHaveBeenCalled();
  });

  it("should run interstitial.openInterstitial on resolve", () => {
    resolver.resolve();
    expect(interstitialmock.openInterstitial).toHaveBeenCalled();
  });

  it("should run referralRecord.resolve on resolve", fakeAsync(() => {
    resolver.resolve();
    tick();
    expect(referralRecordmock.resolve).toHaveBeenCalled();
  }));

  it("should run campaignResolver.resolve on resolve", fakeAsync(() => {
    resolver.resolve();
    tick();
    expect(campaignResolvermock.resolve).toHaveBeenCalled();
  }));
});
