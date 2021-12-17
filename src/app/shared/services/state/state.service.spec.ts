import { state } from "@angular/animations";
import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { of } from "rxjs";
import { APIService } from "../aws/api.service";

import { StateService } from "./state.service";

describe("StateService", () => {
  let service: StateService;
  let apiMock: any;
  let storeMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj("ApiService", ["UpdateAppData"]);
    storeMock = of();
    TestBed.configureTestingModule({
      providers: [
        { provide: APIService, useValue: apiMock },
        { provide: Store, useValue: storeMock },
      ],
    });
    service = TestBed.inject(StateService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
