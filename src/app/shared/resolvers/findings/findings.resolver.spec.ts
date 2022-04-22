import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ActivatedRouteSnapshot } from "@angular/router";
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
      providers: [{ provide: DisputeService, useValue: disputeMock }],
    });
    resolver = TestBed.inject(FindingsResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run disputes.getInvestigationResultsById on resolve", fakeAsync(() => {
    resolver.resolve({} as ActivatedRouteSnapshot);
    tick();
    expect(disputeMock.getInvestigationResultsById).toHaveBeenCalled();
  }));

  it("should run disputes.getCreditBureauResultsById on resolve", fakeAsync(() => {
    resolver.resolve({} as ActivatedRouteSnapshot);
    tick();
    expect(disputeMock.getCreditBureauResultsById).toHaveBeenCalled();
  }));
});
