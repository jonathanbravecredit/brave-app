// private store: Store,
// private router: Router,
// private creditMixService: CreditMixService,
// private creditUtilizationService: CreditUtilizationService,
// public dashboardService: DashboardService,
// public progressTracker: ProgressTrackerService,

import { IMergeReport } from '@bravecredit/brave-sdk';
import { Initiative } from '@shared/interfaces/progress-tracker.interface';
import { CreditReportStateModel } from '@store/credit-report';
import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';

const setup = () => {
  const storeMock = jasmine.createSpyObj('Store', ['select', 'selectSnapshot']);
  const routerMock = jasmine.createSpyObj('Router', ['navigate']);
  const creditMixServiceMock = jasmine.createSpyObj('CreditMixService', [
    'getTradelineSummary',
    'getRecommendations',
    'mapCreditMixSnapshotStatus',
    'getRecommendations',
  ]);
  const creditUtilizationServiceMock = jasmine.createSpyObj('CreditUtilizationService', [
    'getCreditUtilizationSnapshotStatus',
  ]);
  const dashboardServiceMock = jasmine.createSpyObj('DashboardService', ['getAdData', 'syncDashboardStateToDB'], {
    updatedOn$: new BehaviorSubject<string | null>(null),
    dashReport$: new BehaviorSubject<IMergeReport | null>(null),
    dashScoreSuppressed$: new BehaviorSubject<boolean>(false),
    progressTrackerData$: new BehaviorSubject<Initiative | null>(null),
  });
  const progressTrackerMock = jasmine.createSpyObj('ProgressTrackerService', ['findFutureScore']);

  const component = new DashboardEnrolledComponent(
    storeMock,
    routerMock,
    creditMixServiceMock,
    creditUtilizationServiceMock,
    dashboardServiceMock,
    progressTrackerMock,
  );

  return {
    component,
    storeMock,
    routerMock,
    creditMixServiceMock,
    creditUtilizationServiceMock,
    dashboardServiceMock,
    progressTrackerMock,
  };
};

describe('DashboardEnrolledComponent', () => {
  const {
    component,
    storeMock,
    routerMock,
    creditMixServiceMock,
    creditUtilizationServiceMock,
    dashboardServiceMock,
    progressTrackerMock,
  } = setup();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe from routeSub$ on destroy', () => {
    component.routeSub$ = new Subscription();
    spyOn(component.routeSub$, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.routeSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should unsubscribe from reportSub$ on destroy', () => {
    component.reportSub$ = new Subscription();
    spyOn(component.reportSub$, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.reportSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should unsubscribe from initiative$ on destroy', () => {
    component.initiative$ = new Subscription();
    spyOn(component.initiative$, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.initiative$.unsubscribe).toHaveBeenCalled();
  });

  it('should set futureScore to 0 when refreshFutureScore is run and findFutureScore returns falsky and enrolledScore is falsy', () => {
    progressTrackerMock.findFutureScore.and.returnValue(undefined);
    component.enrolledScore = undefined;
    component.refreshFutureScore();
    expect(component.futureScore).toEqual(0);
  });

  it('should set futureScore to 50 when refreshFutureScore is run and findFutureScore returns 25 and enrolledScore is 25', () => {
    progressTrackerMock.findFutureScore.and.returnValue(25);
    component.enrolledScore = '25';
    component.refreshFutureScore();
    expect(component.futureScore).toEqual(50);
  });

  // ----------------------------------------------------------------------------------

  it('should run subscribe on reportSub$ in subscribeToReportData', () => {
    component.report$ = new Observable<CreditReportStateModel>();
    spyOn(component.report$, 'subscribe');
    component.subscribeToReportData();
    expect(component.report$.subscribe).toHaveBeenCalled();
  });

  // ----------------------------------------------------------------------------------

  it('should run progressTrackerData$.next on setProgressTrackerDataInDashboardService if intiative', () => {
    component.initiative = {} as Initiative;
    spyOn(dashboardServiceMock.progressTrackerData$, 'next');
    component.setProgressTrackerDataInDashboardService();
    expect(dashboardServiceMock.progressTrackerData$.next).toHaveBeenCalled();
  });

  //TODO START AT SET AD DATA
});
