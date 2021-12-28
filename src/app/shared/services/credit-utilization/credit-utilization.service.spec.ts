import { TestBed } from "@angular/core/testing";
import { NgxsModule } from "@ngxs/store";

import { CreditUtilizationService } from "./credit-utilization.service";

describe("CreditUtilizationService", () => {
  let service: CreditUtilizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot()]
    });
    service = TestBed.inject(CreditUtilizationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
