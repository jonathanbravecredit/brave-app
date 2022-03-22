import { TestBed } from '@angular/core/testing';

import { NegativeAccountService } from './negative-account-service.service';

describe('NegativeAccountService', () => {
  let service: NegativeAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegativeAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
