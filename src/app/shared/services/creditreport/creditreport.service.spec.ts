import { TestBed } from '@angular/core/testing';

import { CreditreportService } from './creditreport.service';

describe('CreditreportService', () => {
  let service: CreditreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
