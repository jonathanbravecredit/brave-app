import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { ICreditReport } from '@shared/models/CreditReports.model';
import { AuthService } from '@shared/services/auth/auth.service';

import { Creditreportv2Service } from './creditreportv2.service';

describe('Creditreportv2Service', () => {
  let service: Creditreportv2Service;
  let authMock: any;
  let storeMock: any;
  let httpClientSpy: any;

  beforeEach(() => {
    authMock = jasmine.createSpyObj('AuthService', ['getIdTokenJwtTokens']);
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: AuthService, useValue: authMock },
        { provide: Store, useValue: storeMock },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    service = TestBed.inject(Creditreportv2Service);

    httpClientSpy.get.and.returnValue({ toPromise: () => Promise.resolve({ status: 200, data: {} }) });

    storeMock.dispatch.and.returnValue({ toPromise: () => Promise.resolve({ status: 200, data: {} }) })
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run http.get when getCurrentCreditReport is run', fakeAsync(() => {
    service.getCurrentCreditReport();

    tick();

    expect(httpClientSpy.get).toHaveBeenCalled();
  }));

  it('should run store.dispatch when updateCreditReportState is called', () => {
    service.updateCreditReportState({ report: {} as IMergeReport, modifiedOn: '' } as ICreditReport);

    expect(storeMock.dispatch).toHaveBeenCalled();
  });

  it('should run store.dispatch when updateCreditReportStateAsync is called', () => {
    service.updateCreditReportStateAsync({ report: {} as IMergeReport, modifiedOn: '' } as ICreditReport);

    expect(storeMock.dispatch).toHaveBeenCalled();
  });
});
