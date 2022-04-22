import { RendererFactory2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { InterstitialService } from './interstitial.service';

//rendererFactory: RendererFactory2

describe('InterstitialService', () => {
  let service: InterstitialService;
  let rendererFactoryMock: any

  beforeEach(() => {
    rendererFactoryMock = jasmine.createSpyObj('RendererFactory2', ['createRenderer'])
    TestBed.configureTestingModule({
      providers: [
        {provider: RendererFactory2, useValue: rendererFactoryMock}
      ]
    });
    service = TestBed.inject(InterstitialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run message$.next on changeMessage', () => {
    spyOn(service.message$, 'next')
    service.changeMessage('')
    expect(service.message$.next).toHaveBeenCalled()
  })

  it('should run open$.next on openInterstitial', () => {
    spyOn(service.open$, 'next')
    service.openInterstitial()
    expect(service.open$.next).toHaveBeenCalled()
  })

  it('should run open$.next on closeInterstitial', () => {
    service.open$ = new BehaviorSubject<boolean>(true)
    spyOn(service.open$, 'next')
    service.closeInterstitial()
    expect(service.open$.next).toHaveBeenCalled()
  })

  it('should run renderer.addClass on startSpinner', () => {
    spyOn(service.renderer, 'addClass')
    service.startSpinner()
    expect(service.renderer.addClass).toHaveBeenCalled()
  })

  it('should run renderer.removeClass on stopSpinner', () => {
    spyOn(service.renderer, 'removeClass')
    service.stopSpinner()
    expect(service.renderer.removeClass).toHaveBeenCalled()
  })


});
