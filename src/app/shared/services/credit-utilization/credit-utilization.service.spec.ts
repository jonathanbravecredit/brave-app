import { TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { IMergeReport } from '@shared/interfaces';
import { of } from 'rxjs';

import { CreditUtilizationService } from './credit-utilization.service';

const setup = () => {
  const creditReportMock = jasmine.createSpyObj('CreditreportService', [''], { tuReport$: of({} as IMergeReport) });
  const creditUtilService = new CreditUtilizationService(creditReportMock);
  return { creditReportMock, creditUtilService };
};

describe('CreditUtilizationService', () => {
  const { creditUtilService } = setup();

  it('should be created', () => {
    expect(creditUtilService).toBeTruthy();
  });
});
