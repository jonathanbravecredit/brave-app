import { TestBed } from '@angular/core/testing';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { of } from 'rxjs/internal/observable/of';
import { CreditMixService } from './credit-mix-service.service';

describe('CreditMixServiceService', () => {
  let service: CreditMixService;
  let creditReportMock: any;

  beforeEach(() => {
    creditReportMock = jasmine.createSpyObj('CreditreportService', [''], {
      tuReport$: of({}),
    });

    TestBed.configureTestingModule({
      providers: [{ provide: CreditreportService, useValue: creditReportMock }],
    });
    service = TestBed.inject(CreditMixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
