import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { TransunionService } from "@shared/services/transunion/transunion.service";

import { DisputesResolver } from "./disputes.resolver";

describe("DisputesResolver", () => {
  let resolver: DisputesResolver;
  let transunionMock: any;

  beforeEach(() => {
    transunionMock = jasmine.createSpyObj("TransunionService", [
      "listAllDisputesByUser",
      "getCurrentDisputeByUser",
    ]);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TransunionService,
          useValue: transunionMock,
        },
      ],
    });
    resolver = TestBed.inject(DisputesResolver);
  });

  it("should be created", () => {
    expect(resolver).toBeTruthy();
  });

  it("should run transunion.listAllDisputesByUser on resolve", fakeAsync(() => {
    transunionMock.listAllDisputesByUser.and.returnValue({ data: {} });
    transunionMock.getCurrentDisputeByUser.and.returnValue({ data: {} });
    resolver.resolve();
    tick();
    expect(transunionMock.listAllDisputesByUser).toHaveBeenCalled();
  }));

  it("should run transunion.getCurrentDisputeByUser on resolve", fakeAsync(() => {
    transunionMock.listAllDisputesByUser.and.returnValue({ data: {} });
    transunionMock.getCurrentDisputeByUser.and.returnValue({ data: {} });
    resolver.resolve();
    tick();
    expect(transunionMock.getCurrentDisputeByUser).toHaveBeenCalled();
  }));
});
