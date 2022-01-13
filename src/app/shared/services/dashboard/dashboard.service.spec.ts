import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { APIService } from "../aws/api.service";
import { CreditreportService } from "../creditreport/creditreport.service";
import { StateService } from "../state/state.service";
import { TransunionService } from "../transunion/transunion.service";
import { of } from "rxjs";
import { DashboardService } from "./dashboard.service";

describe("DashboardService", () => {
  let service: DashboardService;
  class StateMock {
    public state$ = of();
  }
  let apiMock: any;
  let storeMock: any;
  let reportServiceMock: any;
  let transunionMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj("APIService", ["UpdateAppData"]);
    storeMock = jasmine.createSpyObj("Store", ["dispatch"]);
    reportServiceMock = jasmine.createSpyObj("CreditreportService", [""]);
    transunionMock = jasmine.createSpyObj("TransunionService", [
      "refreshCreditReports",
    ]);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useClass: StateMock },
        { provide: APIService, useValue: apiMock },
        { provide: Store, useValue: storeMock },
        { provide: CreditreportService, useValue: reportServiceMock },
        { provide: TransunionService, useValue: transunionMock },
        DashboardService,
      ],
    });
    service = TestBed.inject(DashboardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
