import { TestBed } from "@angular/core/testing";
import { DisputeService } from "@shared/services/dispute/dispute.service";

import { FindingsResolver } from "./findings.resolver";

describe("FindingsResolver", () => {
  let resolver: FindingsResolver;
  let disputeMock: any;

  beforeEach(() => {
    disputeMock = jasmine.createSpyObj("DisputeService", [
      "getInvestigationResultsById",
      "getCreditBureauResultsById",
    ]);
    TestBed.configureTestingModule({
      providers: [{ provide: DisputeService, useVale: disputeMock }],
    });
    resolver = TestBed.inject(FindingsResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });
});
