import { TestBed } from '@angular/core/testing';

import { Creditreportv2Service } from './creditreportv2.service';

describe('Creditreportv2Service', () => {
  let service: Creditreportv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Creditreportv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
