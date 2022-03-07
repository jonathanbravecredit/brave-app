import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RenderedService } from './rendered.service';

describe('RenderedService', () => {
  let service: RenderedService;
  let zoneMock: any;

  beforeEach(() => {
    zoneMock = jasmine.createSpyObj('NgZone', { onMicrotaskEmpty: of(null) });

    TestBed.configureTestingModule({
      providers: [{ provide: NgZone, useValue: zoneMock }],
    });
    service = TestBed.inject(RenderedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
