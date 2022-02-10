import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { APIService } from '../aws/api.service';
import { CreditreportService } from '../creditreport/creditreport.service';
import { StateService } from '../state/state.service';
import { TransunionService } from '../transunion/transunion.service';
import { of } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { AuthService } from '@shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';

// private auth: AuthService,
// private http: HttpClient,

describe('DashboardService', () => {
  let service: DashboardService;
  class StateMock {
    public state$ = of();
  }
  let apiMock: any;
  let storeMock: any;
  let reportServiceMock: any;
  let transunionMock: any;
  let httpMock: any;
  let authMock: any;

  beforeEach(() => {
    apiMock = jasmine.createSpyObj('APIService', ['UpdateAppData']);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    reportServiceMock = jasmine.createSpyObj('CreditreportService', ['']);
    transunionMock = jasmine.createSpyObj('TransunionService', ['refreshCreditReports']);
    httpMock = jasmine.createSpyObj('HttpClient', ['']);
    authMock = jasmine.createSpyObj('AuthService', ['']);
    TestBed.configureTestingModule({
      providers: [
        { provide: StateService, useClass: StateMock },
        { provide: APIService, useValue: apiMock },
        { provide: Store, useValue: storeMock },
        { provide: CreditreportService, useValue: reportServiceMock },
        { provide: TransunionService, useValue: transunionMock },
        { provide: HttpClient, useValue: httpMock },
        { provide: AuthService, useValue: authMock },
        DashboardService,
      ],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
