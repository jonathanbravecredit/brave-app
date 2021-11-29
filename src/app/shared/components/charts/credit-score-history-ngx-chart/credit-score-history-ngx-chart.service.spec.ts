import { TestBed } from '@angular/core/testing';

import { CreditScoreHistoryNgxChartService } from './credit-score-history-ngx-chart.service';

describe('CreditScoreHistoryNgxChartService', () => {
  let service: CreditScoreHistoryNgxChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditScoreHistoryNgxChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
