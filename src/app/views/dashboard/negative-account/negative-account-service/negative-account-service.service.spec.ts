import { TestBed } from '@angular/core/testing';

import { NegativeAccountServiceService } from './negative-account-service.service';

describe('NegativeAccountServiceService', () => {
  let service: NegativeAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegativeAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
