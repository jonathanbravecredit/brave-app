import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { CreditreportService } from "@shared/services/creditreport/creditreport.service";
import { DashboardService } from "@shared/services/dashboard/dashboard.service";
import { of } from "rxjs";

import { DashboardComponent } from "./dashboard.component";

// private dashboardService: DashboardService,
// private creditReportService: CreditreportService,
// private router: Router,
// private route: ActivatedRoute,

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardServiceMock: any;
  let routeMock: any;
  class RouterMock {
    events = of();
  }

  beforeEach(async () => {
    dashboardServiceMock = jasmine.createSpyObj("DashboardService", ["isCreditFreezeEnabled"]);
    routeMock = jasmine.createSpyObj("ActivatedRoute", ["navigate"]);
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: DashboardService, useValue: dashboardServiceMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useClass: RouterMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
