import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { CleanUpService } from './clean-up.service';

//private store: Store, private renderer: Renderer2

describe('CleanUpService', () => {
  let service: CleanUpService;
  let storeMock: any;
  let renderMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['storeMock']);
    renderMock = jasmine.createSpyObj('Renderer2', ['renderMock']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: Renderer2, useValue: renderMock },
      ],
    });
    service = TestBed.inject(CleanUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
