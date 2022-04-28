import { TestBed } from '@angular/core/testing';

import { ProgressTrackerViewService } from './progress-tracker-view.service';

describe('ProgressTrackerViewService', () => {
  let service: ProgressTrackerViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressTrackerViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
