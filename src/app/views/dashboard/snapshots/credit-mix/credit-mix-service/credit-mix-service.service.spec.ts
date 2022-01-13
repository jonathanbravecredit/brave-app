import { TestBed } from '@angular/core/testing';
import { CreditMixService } from './credit-mix-service.service';

describe('CreditMixServiceService', () => {
  let service: CreditMixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditMixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
