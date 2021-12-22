import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { DisputeService } from "@shared/services/dispute/dispute.service";
import { StateService } from "@shared/services/state/state.service";
import { of } from "rxjs";

import { NegativeAccountInitialComponent } from "./negative-account-initial.component";

// private router: Router,
// private statesvc: StateService,
// private creditReportService: CreditreportService,
// private disputeService: DisputeService,
// private route: ActivatedRoute,

describe("NegativeAccountInitialComponent", () => {
  let component: NegativeAccountInitialComponent;
  let fixture: ComponentFixture<NegativeAccountInitialComponent>;
  let routerMock: any;
  let statesvcMock: any;
  let creditReportServiceMock: any;
  let disputeServiceMock: any;
  class RouteMock {
    data = of();
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("", [""]);
    statesvcMock = jasmine.createSpyObj("", [""]);
    creditReportServiceMock = jasmine.createSpyObj("", [""]);
    disputeServiceMock = jasmine.createSpyObj("", [""]);
    await TestBed.configureTestingModule({
      declarations: [NegativeAccountInitialComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: StateService, useValue: statesvcMock },
        { provide: CreditreportService, useValue: creditReportServiceMock },
        { provide: DisputeService, useValue: disputeServiceMock },
        { provide: ActivatedRoute, useClass: RouteMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeAccountInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
