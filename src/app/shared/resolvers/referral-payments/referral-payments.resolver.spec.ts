import { TestBed } from "@angular/core/testing";
import { PaymentsService } from "@shared/services/payments/payments.service";

import { ReferralPaymentsResolver } from "./referral-payments.resolver";

describe("ReferralPaymentsResolver", () => {
  let resolver: ReferralPaymentsResolver;
  let paymentsServiceMock: any;

  beforeEach(() => {
    paymentsServiceMock = jasmine.createSpyObj("PaymentsService", [
      "getPayments",
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: PaymentsService, useValue: paymentsServiceMock }],
    });
    resolver = TestBed.inject(ReferralPaymentsResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
