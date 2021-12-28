import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { CreditUtilizationService } from '@shared/services/credit-utilization/credit-utilization.service';
import { DashboardService } from '@shared/services/dashboard/dashboard.service';
import { CreditMixService } from '@views/dashboard/snapshots/credit-mix/credit-mix-service/credit-mix-service.service';
import { of } from 'rxjs';
import { IMergeReport } from '@shared/interfaces';
import { DashboardEnrolledComponent } from './dashboard-enrolled.component';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';
import { ICreditScoreTracking } from '@shared/interfaces/credit-score-tracking.interface';
import { IGetTrendingData, IProductAttributes } from '@shared/interfaces/get-trending-data.interface';
import { IGroupedYearMonthReferral } from '@shared/interfaces/referrals.interface';
import { ICreditMixTLSummary } from '@views/dashboard/snapshots/credit-mix/interfaces/credit-mix-calc-obj.interface';

describe('DashboardEnrolledComponent', () => {
  let component: DashboardEnrolledComponent;
  let fixture: ComponentFixture<DashboardEnrolledComponent>;
  let routerMock: any;
  let routeMock: any;
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

  class ScoresClass implements ICreditScoreTracking {
    userId = '0';
    bureauId = '0';
    priorScore = null;
    currentScore = null;
    delta = null;
    createdOn = null;
    modifiedOn = null;
  }

  class TrendsClass implements IGetTrendingData {
    ProductAttributes = {} as IProductAttributes;
  }

  class MetricsClass implements IGroupedYearMonthReferral {
    yearMonth = 0;
    referrals = 0;
    earnings = 0;
    currency = 'USD';
  }

  class TradelineSummaryClass implements ICreditMixTLSummary {
    hasCreditCards = true;
    hasStudentLoans = true;
    hasAutoLoans = true;
    hasMortgages = true;
    hasOpenCreditCards = true;
    hasOpenStudentLoans = true;
    hasOpenAutoLoans = true;
    hasOpenMortgages = true;
    totalLineAmount = 0;
    creditCardAmount = 0;
    amountOfOpenCreditCards = 0;
    studentLoanAmount = 0;
    autoLoanAmount = 0;
    mortgageAmount = 0;
    amountOfClosed = 0;
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
    creditUtilizationServiceMock.getCreditUtilizationSnapshotStatus.and.returnValue({ status: 'safe', perc: 0 });
    routeMock = {
      data: {
        subscribe: (fn: (value: Data) => void) =>
          fn({
            dashboard: {
              report: new MergeReportClass(),
              snapshots: new DashboardStateModel(),
              scores: new ScoresClass(),
              trends: {},
              metrics: {},
            },
          }),
      },
    };

    await TestBed.configureTestingModule({
      declarations: [DashboardEnrolledComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: ActivatedRoute, useValue: routeMock },
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
    it('Should assign report in constructor', () => {
      const test = component.report instanceof MergeReportClass;
      expect(test).toBeTrue();
    });

    it('Should assign snapshots in constructor', () => {
      let test = component.snapshots instanceof DashboardStateModel;
      expect(test).toBeTrue();
    });

    it('Should assign scores in constructor', (stop) => {
      let test = component.scores instanceof ScoresClass;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign trends in constructor', (stop) => {
      let test = component.trends instanceof TrendsClass;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign metrics in constructor', (stop) => {
      let test = component.metrics && component.metrics[0] instanceof MetricsClass;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign tradelineSummary in constructor', (stop) => {
      let test = component.tradelineSummary instanceof TradelineSummaryClass;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign creditMix in constructor', (stop) => {
      let test = component.creditMix instanceof TradelineSummaryClass;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign creditMixStatus in constructor', (stop) => {
      let test = component.creditMixStatus;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign rating in constructor', (stop) => {
      let test = component.rating;
      expect(test).toBeTrue();
      stop();
    });

    it('Should assign userName in constructor', (stop) => {
      let test = component.userName;
      expect(test).toBeTrue();
      stop();
    });
  });
});
