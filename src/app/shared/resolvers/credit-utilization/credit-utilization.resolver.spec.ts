import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CreditUtilizationService } from "@shared/services/credit-utilization/credit-utilization.service";
import { of } from "rxjs";

import { CreditUtilizationResolver } from "./credit-utilization.resolver";

describe("CreditUtilizationResolver", () => {
  let resolver: CreditUtilizationResolver;
  let creditUtilMock: any;

  beforeEach(() => {
    creditUtilMock = jasmine.createSpyObj(
      "CreditUtilizationService",
      ["getTradeLinePartitions", "getRevolvingAccounts"],
      {
        tuReport$: of(),
      }
    );
    TestBed.configureTestingModule({
      providers: [
        { provide: CreditUtilizationService, useValue: creditUtilMock },
      ],
    });
    resolver = TestBed.inject(CreditUtilizationResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run tuReport$.subscribe on resolve", fakeAsync(() => {
    spyOn(creditUtilMock.tuReport$, "subscribe");
    resolver
      .resolve({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
      .then(() => {
        tick();
        expect(creditUtilMock.tuReport$.subscribe).toHaveBeenCalledWith();
      });
  }));

  it("should run getTradeLinePartitions on resolve", fakeAsync(() => {
    resolver
      .resolve({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
      .then(() => {
        tick();
        expect(creditUtilMock.getTradeLinePartitions).toHaveBeenCalledWith();
      });
  }));

  it("should run getRevolvingAccounts on resolve", fakeAsync(() => {
    resolver
      .resolve({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
      .then(() => {
        tick();
        expect(creditUtilMock.getRevolvingAccounts).toHaveBeenCalledWith();
      });
  }));
});
