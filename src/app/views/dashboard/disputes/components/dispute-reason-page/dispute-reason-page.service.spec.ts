import { TestBed } from '@angular/core/testing';

import { DisputeReasonPageService } from './dispute-reason-page.service';

describe('DisputeReasonPageService', () => {
  let service: DisputeReasonPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisputeReasonPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
