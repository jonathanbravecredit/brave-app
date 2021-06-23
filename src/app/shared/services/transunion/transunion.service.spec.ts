import { TestBed } from '@angular/core/testing';

import { TransunionService } from './transunion.service';

describe('TransunionService', () => {
  let service: TransunionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransunionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
