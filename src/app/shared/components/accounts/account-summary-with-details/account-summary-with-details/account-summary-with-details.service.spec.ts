import { TestBed } from '@angular/core/testing';

import { AccountSummaryWithDetailsService } from './account-summary-with-details.service';

describe('AccountSummaryWithDetailsService', () => {
  let service: AccountSummaryWithDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountSummaryWithDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
