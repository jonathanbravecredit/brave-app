import { TestBed } from "@angular/core/testing";
import { InterstitialService } from "@shared/services/interstitial/interstitial.service";
import { ReferralMetricsResolver } from "../referral-metrics/referral-metrics.resolver";
import { ReferralPaymentsResolver } from "../referral-payments/referral-payments.resolver";
import { ReferralRecordResolver } from "../referral-record/referral-record.resolver";

import { ReferralResolver } from "./referral.resolver";

describe("ReferralResolver", () => {
  let resolver: ReferralResolver;
  let interstitialmock: any;
  let referralMetricsmock: any;
  let referralRecordmock: any;
  let referralPaymentsmock: any;

  beforeEach(() => {
    interstitialmock = jasmine.createSpyObj("InterstitialService", [""]);
    referralMetricsmock = jasmine.createSpyObj("ReferralMetricsResolver", [""]);
    referralRecordmock = jasmine.createSpyObj("ReferralRecordResolver", [""]);
    referralPaymentsmock = jasmine.createSpyObj("ReferralPaymentsResolver", [
      "",
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: InterstitialService, useValue: interstitialmock },
        { provide: ReferralMetricsResolver, useValue: referralMetricsmock },
        { provide: ReferralRecordResolver, useValue: referralRecordmock },
        { provide: ReferralPaymentsResolver, useValue: referralPaymentsmock },
      ],
    });
    resolver = TestBed.inject(ReferralResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
