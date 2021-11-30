import { TestBed } from '@angular/core/testing';

import { CreditMixServiceService } from './credit-mix-service.service';

describe('CreditMixServiceService', () => {
  let service: CreditMixServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditMixServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
