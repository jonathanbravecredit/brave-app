import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';

import { DashboardEnrolledComponent } from './dashboard-enrolled.component';

// private router: Router,
// private route: ActivatedRoute,
// private dashboardService: DashboardService,
// private creditMixService: CreditMixService,
// private creditUtilizationService: CreditUtilizationService,

describe('DashboardEnrolledComponent', () => {
  let component: DashboardEnrolledComponent;
  let fixture: ComponentFixture<DashboardEnrolledComponent>;
  let routerMock: any;
  let routeMock: any;
  let dashboardServiceMock: any;
  let creditMixServiceMock: any;
  let creditUtilizationServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', [''])
    routeMock = jasmine.createSpyObj('ActivatedRoute', [''])
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', [''])
    creditMixServiceMock = jasmine.createSpyObj('CreditMixService', [''])
    creditUtilizationServiceMock = jasmine.createSpyObj('CreditUtilizationService', [''])
    await TestBed.configureTestingModule({
      declarations: [ DashboardEnrolledComponent ],providers: [
        {provide: Router, useValue: routerMock},
        {provide: ActivatedRoute, useValue: routeMock},
        {provide: DashboardService, useValue: dashboardServiceMock},
        {provide: CreditMixService, useValue: creditMixServiceMock},
        {provide: CreditUtilizationService, useValue: creditUtilizationServiceMock},
      ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
