import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { of } from "rxjs";

import { ForbearanceView } from "./forbearance.view";

// private router: Router,
// private route: ActivatedRoute,
// private creditReportService: CreditreportService,

describe("ForbearanceView", () => {
  let component: ForbearanceView;
  let fixture: ComponentFixture<ForbearanceView>;
  let routerMock: any;
  class RouteMock {
    data = of();
  }
  let creditReportServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj("Router", [""]);
    creditReportServiceMock = jasmine.createSpyObj("APIService", [""]);
    await TestBed.configureTestingModule({
      declarations: [ForbearanceView],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: CreditreportService, useValue: creditReportServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbearanceView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
