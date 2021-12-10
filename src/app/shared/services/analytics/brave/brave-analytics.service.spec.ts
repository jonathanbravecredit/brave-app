import { TestBed } from '@angular/core/testing';

import { BraveAnalyticsService } from './brave-analytics.service';

describe('BraveAnalyticsService', () => {
  let service: BraveAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BraveAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
