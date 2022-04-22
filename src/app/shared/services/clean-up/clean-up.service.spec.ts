import { Renderer2, RendererFactory2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngxs/store';

import { CleanUpService } from './clean-up.service';

//private store: Store, private renderer: Renderer2

class Renderer2Mock {
  listen () {
  }
}

describe('CleanUpService', () => {
  let service: CleanUpService;
  let storeMock: any;
  let renderMock: any;

  beforeEach(() => {
    storeMock = jasmine.createSpyObj('Store', ['dispatch']);
    renderMock = jasmine.createSpyObj('RendererFactory2', ['renderMock', 'createRenderer']);
    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: RendererFactory2, useValue: renderMock },
      ],
    });
    service = TestBed.inject(CleanUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run store.dispatch on clearAllState', () => {
    service.clearAllState()
    expect(storeMock.dispatch).toHaveBeenCalled();
  });

  it('should run store.listen on clearAllState', () => {
    service.renderer = new Renderer2Mock() as unknown as Renderer2
    spyOn(service.renderer, 'listen')
    service.runOnAppClose(() => {})
    expect(service.renderer?.listen).toHaveBeenCalled();
  });

  it('should run listener on ngOnDestroy', () => {
    service.listener = () => {}
    let spy = spyOn(service, 'listener')
    service.ngOnDestroy()
    expect(spy).toHaveBeenCalled();
  });

  it('should set listener to null on ngOnDestroy', () => {
    service.listener = () => {}
    service.ngOnDestroy()
    expect(service.listener).toBeNull();
  });
});
