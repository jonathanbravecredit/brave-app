import { TestBed } from "@angular/core/testing";
import { StateService } from "../state/state.service";
import { TransunionService } from "../transunion/transunion.service";

import { CreditreportService } from "./creditreport.service";

//private statesvc: StateService, private transunion: TransunionService

describe("CreditreportService", () => {
  let service: CreditreportService;
  let stateMock: any;
  let transunionMock: any;

  beforeEach(() => {
    stateMock = jasmine.createSpyObj(
      "StateService",
      ["updateAgenciesAsync", "updateAgencies"],
      ["state"]
    );
    transunionMock = jasmine.createSpyObj("TransunionService", [
      "refreshCreditReport",
    ]);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useValue: stateMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    });
    service = TestBed.inject(CreditreportService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
