import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { of } from "rxjs";
import { StateService } from "../state/state.service";
import { TransunionService } from "../transunion/transunion.service";

import { DisputeService } from "./dispute.service";

//(private statesvc: StateService, private transunion: TransunionService

describe("DisputeService", () => {
  let service: DisputeService;
  class StateMock {
    public state$ = of();
  }
  let transunionMock: any;

  beforeEach(() => {
    transunionMock = jasmine.createSpyObj("TransunionService", ["subscribe"]);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useClass: StateMock },
        { provide: TransunionService, useValue: transunionMock },
      ],
    });
    service = TestBed.inject(DisputeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
