import { TestBed } from "@angular/core/testing";

import { CreditMixResolver } from "./credit-mix.resolver";
import { CreditMixService } from "@views/dashboard/credit-mix/credit-mix-service/credit-mix-service.service";
import { IMergeReport } from "@bravecredit/brave-sdk";
import { BehaviorSubject } from "rxjs";

describe("CreditMixResolver", () => {
  let resolver: CreditMixResolver;
  let creditMixServiceMock: any;

  beforeEach(() => {
    creditMixServiceMock = jasmine.createSpyObj(
      "CreditMixService",
      ["getTradeLinePartitions"],
      {
        tuReport$: new BehaviorSubject<IMergeReport>({} as IMergeReport),
      }
    );
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

  it("should run tuReport$.subscribe on resolve", () => {
    let spy = spyOn(creditMixServiceMock.tuReport$, "subscribe");
    resolver.resolve().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });

  it("should run creditMixService.getTradeLinePartitions on resolve", () => {
    resolver.resolve().then(() => {
      expect(creditMixServiceMock.getTradeLinePartitions).toHaveBeenCalled();
    });
  });
});
