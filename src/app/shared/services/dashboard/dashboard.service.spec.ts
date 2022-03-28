import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { APIService } from '../aws/api.service';
import { CreditreportService } from '../creditreport/creditreport.service';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { DashboardService } from './dashboard.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ParseRiskScorePipe } from '@shared/pipes/parse-risk-score/parse-risk-score.pipe';

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
});
