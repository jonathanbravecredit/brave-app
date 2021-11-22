import { TestBed } from '@angular/core/testing';

import { CreditUtilizationService } from './credit-utilization.service';

describe('CreditUtilizationService', () => {
  let service: CreditUtilizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditUtilizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
