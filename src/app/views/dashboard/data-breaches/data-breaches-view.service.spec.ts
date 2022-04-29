import { TestBed } from '@angular/core/testing';

import { DataBreachesViewService } from './data-breaches-view.service';

describe('DataBreachesViewService', () => {
  let service: DataBreachesViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBreachesViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
