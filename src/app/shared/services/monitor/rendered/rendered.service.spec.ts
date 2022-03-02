import { TestBed } from '@angular/core/testing';

import { RenderedService } from './rendered.service';

describe('RenderedService', () => {
  let service: RenderedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
