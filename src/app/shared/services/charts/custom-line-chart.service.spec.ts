import { TestBed } from '@angular/core/testing';

import { CustomLineChartService } from './custom-line-chart.service';

describe('CustomLineChartService', () => {
  let service: CustomLineChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLineChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
