import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IMergeReport, ITradeLinePartition, ITrueLinkCreditReportType } from '@shared/interfaces';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { Subscription } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { CreditMixService } from './credit-mix-service.service';

describe('CreditMixService', () => {
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

  it('should run tuReportSub$?.unsubscribe on destroy', () => {
    service.tuReportSub$ = new Subscription();
    spyOn(service.tuReportSub$, 'unsubscribe');
    service.ngOnDestroy();
    expect(service.tuReportSub$?.unsubscribe).toHaveBeenCalled();
  });

  it('should return the expected string when correct status is paeed to mapCreditMixSnapshotStatus', () => {
    let res = service.mapCreditMixSnapshotStatus('good')
    expect(res).toEqual('normal')
  })
});
