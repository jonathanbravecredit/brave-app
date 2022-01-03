import { TestBed } from "@angular/core/testing";

import { CreditMixResolver } from "./credit-mix.resolver";
import { CreditMixService } from "@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service";

describe("CreditMixResolver", () => {
  let resolver: CreditMixResolver;
  let creditMixServiceMock: any;

  beforeEach(() => {
    creditMixServiceMock = jasmine.createSpyObj("CreditMixService", [
      "getTradeLinePartitions",
    ]);
    TestBed.configureTestingModule({
      providers: [
        { provide: CreditMixService, useValue: creditMixServiceMock },
      ],
    });
    resolver = TestBed.inject(CreditMixResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
