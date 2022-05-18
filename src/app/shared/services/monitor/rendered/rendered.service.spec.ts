import { ApplicationRef, EventEmitter, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { RenderedService, RenderedViews } from './rendered.service';

describe('RenderedService', () => {
  let service: RenderedService;
  let appRefMock: any;

  beforeEach(() => {
    appRefMock = jasmine.createSpyObj('ApplicationRef', [''], { isStable: of(true) });

    TestBed.configureTestingModule({
      providers: [{ provide: ApplicationRef, useValue: appRefMock }],
    });
    service = TestBed.inject(RenderedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run tracker.add on track', () => {
    spyOn(service.tracker, 'add');
    service.track({ tag: {} as RenderedViews, el: '' });
    expect(service.tracker.add).toHaveBeenCalled();
  });

  it('should return undefined on track if no tag', () => {
    let res = service.track({ tag: null, el: '' });
    expect(res).toBeUndefined();
  });

  it('should set checked to true on checkStatus', () => {
    service.tracker = { size: 1 } as Set<string>;
    service.checkStatus();
    expect(service.checked).toBeTrue();
  });
});
