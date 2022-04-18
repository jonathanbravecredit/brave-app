import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { APIService } from '../aws/api.service';
import { CreditreportService } from '../creditreport/creditreport.service';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { DashboardService } from './dashboard.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorSubject, of, Subscriber, Subscription } from 'rxjs';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';
import { IProductTrendingData } from '@shared/interfaces/get-trending-data.interface';

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
    authMock = jasmine.createSpyObj('AuthService', ['']);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    stateMock = jasmine.createSpyObj('StateService', [''], { state$: of({}) });
    reportServiceMock = jasmine.createSpyObj('CreditreportService', [''], {
      tuReport$: of({}),
      creditReport$: of({}),
    });
    transunionMock = jasmine.createSpyObj('TransunionService', ['refreshCreditReports']);

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
    service.stateSub$ = new Subscriber()
    spyOn(service.stateSub$, 'unsubscribe')
    service.ngOnDestroy();
    expect(service.stateSub$.unsubscribe).toHaveBeenCalled()
  })

  it('should run dashScoresSub$?.unsubscribe on destroy', () => {
    service.dashScoresSub$ = new Subscriber()
    spyOn(service.dashScoresSub$, 'unsubscribe')
    service.ngOnDestroy();
    expect(service.dashScoresSub$.unsubscribe).toHaveBeenCalled()
  })

  it('should run tuReportSub$?.unsubscribe on destroy', () => {
    service.tuReportSub$ = new Subscriber()
    spyOn(service.tuReportSub$, 'unsubscribe')
    service.ngOnDestroy();
    expect(service.tuReportSub$.unsubscribe).toHaveBeenCalled()
  })

  it('should run updatedOnSub$?.unsubscribe on destroy', () => {
    service.updatedOnSub$ = new Subscriber()
    spyOn(service.updatedOnSub$, 'unsubscribe')
    service.ngOnDestroy();
    expect(service.updatedOnSub$.unsubscribe).toHaveBeenCalled()
  })

  it('should run state$.subscribe on subscribeToObservables', () => {
    spyOn(stateMock.state$, 'subscribe')
    service.subscribeToObservables();
    expect(stateMock.state$.subscribe).toHaveBeenCalled()
  })

  it('should run dashScores$.subscribe on subscribeToObservables', () => {
    service.dashScores$ = new BehaviorSubject<IProductTrendingData[] | null>(null)
    spyOn(service.dashScores$, 'subscribe')
    service.subscribeToObservables();
    expect(service.dashScores$.subscribe).toHaveBeenCalled()
  })

  //CONTINUE WITH OTHER LOGIC IN subscribeToObservables? OR calculateDelta / 4/18 NCH
  //DISPUTES AND BELOW FINISH BESIDES KYC
});
