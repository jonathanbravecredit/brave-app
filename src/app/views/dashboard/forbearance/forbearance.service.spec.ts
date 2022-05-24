import { TestBed } from '@angular/core/testing';

import { ForbearanceService } from './forbearance.service';

describe('ForbearanceService', () => {
  let service: ForbearanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForbearanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
