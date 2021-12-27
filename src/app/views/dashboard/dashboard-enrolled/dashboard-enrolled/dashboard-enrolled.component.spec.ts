import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import { of } from 'rxjs';

import { DashboardEnrolledComponent } from './dashboard-enrolled.component';

describe('DashboardEnrolledComponent', () => {
  let component: DashboardEnrolledComponent;
  let fixture: ComponentFixture<DashboardEnrolledComponent>;
  let routerMock: any;
  class RouteMock {
    data = of({
      dashboard: {
        report: {},
        snapshots: {},
        scores: {},
        trends: {},
        metrics: {},
      },
    });
  }
  let dashboardServiceMock: any;
  let creditMixServiceMock: any;
  let creditUtilizationServiceMock: any;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['']);
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['syncDashboardStateToDB']);
    creditMixServiceMock = jasmine.createSpyObj('CreditMixService', [
      'getTradelineSummary',
      'getRecommendations',
      'mapCreditMixSnapshotStatus',
    ]);
    creditUtilizationServiceMock = jasmine.createSpyObj('CreditUtilizationService', [
      'getCreditUtilizationSnapshotStatus',
    ]);
    await TestBed.configureTestingModule({
      declarations: [DashboardEnrolledComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useClass: RouteMock },
        { provide: DashboardService, useValue: dashboardServiceMock },
        { provide: CreditMixService, useValue: creditMixServiceMock },
        { provide: CreditUtilizationService, useValue: creditUtilizationServiceMock },
      ],
    }).compileComponents();
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
