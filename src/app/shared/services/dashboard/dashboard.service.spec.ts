import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { APIService } from '../aws/api.service';
import { CreditreportService } from '../creditreport/creditreport.service';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { DashboardService } from './dashboard.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, of, Subscriber } from 'rxjs';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';
import { IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';
import { IMergeReport } from '@shared/interfaces';
import { UserAttributesInput } from '@bravecredit/brave-sdk';
import { AppDataStateModel } from '@store/app-data';
import { DashboardStateModel } from '@store/dashboard/dashboard.model';

describe('DashboardService', () => {
  let service: DashboardService;
  let apiMock: any;
  let authMock: any;
  let storeMock: any;
  let stateMock: any;
  let reportServiceMock: any;
  let transunionMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj('APIService', ['UpdateAppData']);
    authMock = jasmine.createSpyObj('AuthService', ['getIdTokenJwtTokens']);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    stateMock = jasmine.createSpyObj('StateService', ['dispatch'], { state$: of({}), state: {} });
    Object.defineProperty(stateMock, 'state', { writable: true });
    reportServiceMock = jasmine.createSpyObj('CreditreportService', [''], {
      tuReport$: of({}),
      creditReport$: of({}),
    });
    transunionMock = jasmine.createSpyObj('TransunionService', ['refreshCreditReports', 'getCreditReport']);

    TestBed.configureTestingModule({
      declarations: [ParseRiskScorePipe],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: APIService, useValue: apiMock },
        { provide: AuthService, useValue: authMock },
        { provide: Store, useValue: storeMock },
        { provide: StateService, useValue: stateMock },
        { provide: CreditreportService, useValue: reportServiceMock },
        { provide: TransunionService, useValue: transunionMock },
        DashboardService,
      ],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run stateSub$?.unsubscribe on destroy', () => {
    service.stateSub$ = new Subscriber();
    spyOn(service.stateSub$, 'unsubscribe');
    service.ngOnDestroy();
    expect(service.stateSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should run dashScoresSub$?.unsubscribe on destroy', () => {
    service.dashScoresSub$ = new Subscriber();
    spyOn(service.dashScoresSub$, 'unsubscribe');
    service.ngOnDestroy();
    expect(service.dashScoresSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should run tuReportSub$?.unsubscribe on destroy', () => {
    service.tuReportSub$ = new Subscriber();
    spyOn(service.tuReportSub$, 'unsubscribe');
    service.ngOnDestroy();
    expect(service.tuReportSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should run updatedOnSub$?.unsubscribe on destroy', () => {
    service.updatedOnSub$ = new Subscriber();
    spyOn(service.updatedOnSub$, 'unsubscribe');
    service.ngOnDestroy();
    expect(service.updatedOnSub$.unsubscribe).toHaveBeenCalled();
  });

  it('should run state$.subscribe on subscribeToObservables', () => {
    spyOn(stateMock.state$, 'subscribe');
    service.subscribeToObservables();
    expect(stateMock.state$.subscribe).toHaveBeenCalled();
  });

  it('should run dashScores$.subscribe on subscribeToObservables', () => {
    service.dashScores$ = new BehaviorSubject<IProductTrendingData[] | null>(null);
    spyOn(service.dashScores$, 'subscribe');
    service.subscribeToObservables();
    expect(service.dashScores$.subscribe).toHaveBeenCalled();
  });

  it('should return 0 if !scores.length > 0 or no scores on calculateDelta', () => {
    let res = service.calculateDelta(null);
    expect(res).toEqual(0);
  });

  it('should return 50 if latestScore is 200 and lastMonthsScore is 150 on calculateDelta', () => {
    let res = service.calculateDelta([
      { AttributeValue: 150 } as IProductTrendingData,
      { AttributeValue: 200 } as IProductTrendingData,
    ]);
    expect(res).toEqual(50);
  });

  it('should run parseRiskScoreFromReport if !scores.length > 0 or no scores and tuReport on getCurrentScore', () => {
    service.tuReport = {} as IMergeReport;
    spyOn(service, 'parseRiskScoreFromReport');
    service.getCurrentScore(null);
    expect(service.parseRiskScoreFromReport).toHaveBeenCalled();
  });

  it('should run parseRiskScoreFromReport if scores.length > 0 and scores and tuReport on getCurrentScore', () => {
    service.tuReport = {} as IMergeReport;
    spyOn(service, 'parseRiskScoreFromReport');
    service.getCurrentScore([{ AttributeValue: 'null' } as IProductTrendingData]);
    expect(service.parseRiskScoreFromReport).toHaveBeenCalled();
  });

  it('should return 100 if scores.length > 0 and scores and tuReport on getCurrentScore', () => {
    service.tuReport = {} as IMergeReport;
    let res = service.getCurrentScore([{ AttributeValue: '100' } as IProductTrendingData]);
    expect(res).toEqual(100);
  });

  it('should return "Welcome back, test" if service.name = "test" on getWelcomeMessage', () => {
    service.name = 'test';
    let res = service.getWelcomeMessage();
    expect(res).toEqual('Welcome back, test');
  });

  it('should return "" if service.name = undefined on getWelcomeMessage', () => {
    service.name = undefined;
    let res = service.getWelcomeMessage();
    expect(res).toEqual('');
  });

  it('should return updatedOn on getLastUpdated', () => {
    service.updatedOn = 'test';
    let res = service.getLastUpdated();
    expect(res).toEqual('test');
  });

  it('should set updatedOn to new Date().toLocaleDateString() without value on getLastUpdated', () => {
    service.setLastUpdated(null);
    expect(service.updatedOn).toEqual(new Date().toLocaleDateString());
  });

  it('should set name to state?.user?.userAttributes?.name?.first on setUserName', () => {
    service.state = {
      user: { userAttributes: { name: { first: 'test' } } as UserAttributesInput },
    } as AppDataStateModel;
    service.setUserName();
    expect(service.name).toEqual('test');
  });

  it('should run transunion.getCreditReport on refreshReport if !fulfilledOn', () => {
    stateMock.state = { appData: { agencies: { transunion: { fulfilledOn: '' } } } as AppDataStateModel };
    service.refreshReport();
    expect(transunionMock.getCreditReport).toHaveBeenCalled();
  });

  it('should run tuReport$.pipe on isCreditFreezeEnabled', () => {
    service.tuReport$ = new BehaviorSubject<IMergeReport>({} as IMergeReport);
    spyOn(service.tuReport$, 'pipe');
    service.isCreditFreezeEnabled();
    expect(service.tuReport$.pipe).toHaveBeenCalled();
  });

  it('should run statesvc.dispatch on syncDashboardStateToDB', () => {
    service.syncDashboardStateToDB({} as Partial<DashboardStateModel>);
    expect(stateMock.dispatch).toHaveBeenCalled();
  });

  it('should run auth.getIdTokenJwtTokens on getAdData', () => {
    service.getAdData();
    expect(authMock.getIdTokenJwtTokens).toHaveBeenCalled();
  });
});
