import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import { of } from 'rxjs';
import { IMergeReport } from '@shared/interfaces';
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

  class MergeReportClass implements IMergeReport {
    TrueLinkCreditReportType = {};
  }

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['syncDashboardStateToDB']);
    creditMixServiceMock = jasmine.createSpyObj('CreditMixService', [
      'getTradelineSummary',
      'getRecommendations',
      'mapCreditMixSnapshotStatus',
    ]);
    creditUtilizationServiceMock = jasmine.createSpyObj('CreditUtilizationService', [
      'getCreditUtilizationSnapshotStatus',
    ]);

    // return values

    creditUtilizationServiceMock.getCreditUtilizationSnapshotStatus.and.returnValue({ status: 'safe', perc: 0 });

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

  describe('Method calls', () => {
    it('should navigate to the negative items page when OnNegativeItemsClicks runs', () => {
      component.onNegativeItemsClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the forbearance items page when onForbearanceItemsClicked runs', () => {
      component.onForbearanceItemsClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the data breach page when onDatabreachItemsClicked runs', () => {
      component.onDatabreachItemsClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the full credit report page when onFullReportClicked runs', () => {
      component.onFullReportClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the dispute page when onDisputesClicked runs', () => {
      component.onDisputesClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the credit utilization page when onCreditUtilizationClicked runs', () => {
      component.onCreditUtilizationClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the credit mix page when onCreditMixClicked runs', () => {
      component.onCreditMixClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });

    it('should navigate to the referral dashboard page when onReferralsClicked runs', () => {
      component.onReferralsClicked();
      expect(routerMock.navigate).toHaveBeenCalled();
    });
  });

  describe('ActivatedRoute constructor', () => {
    it('Should assign report in constructor', (stop) => {
      let test = (component.report instanceof MergeReportClass)
      expect(test).toBeTrue();
      stop();
    });
  });
});
