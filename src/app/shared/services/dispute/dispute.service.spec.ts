import { TestBed } from "@angular/core/testing";
import { StateService } from "../state/state.service";
import { TransunionService } from "../transunion/transunion.service";

import { DisputeService } from "./dispute.service";

//(private statesvc: StateService, private transunion: TransunionService

describe("DisputeService", () => {
  let service: DisputeService;
  let stateMock: any;
  let transunionMock: any;

  beforeEach(() => {
    stateMock = jasmine.createSpyObj("StateService", ["subscribe"]);
    transunionMock = jasmine.createSpyObj("TransunionService", ["subscribe"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useValue: stateMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    });
    service = TestBed.inject(DisputeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
