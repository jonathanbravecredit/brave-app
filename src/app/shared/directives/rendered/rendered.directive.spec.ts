import { ElementRef } from '@angular/core';
import { RenderedDirective } from './rendered.directive';

describe('RenderedDirective', () => {
  let renderedMock: any;
  renderedMock = jasmine.createSpyObj('RenderedService', ['track']);
  it('should create an instance', () => {
    const el = { nativeElement: { id: 'abc' } } as ElementRef;

    const directive = new RenderedDirective(el, renderedMock);
    expect(directive).toBeTruthy();
  });

  it('Should call track on ngAfterViewInit', () => {
    const el = { nativeElement: { id: 'abc' } } as ElementRef;
    const directive = new RenderedDirective(el, renderedMock);
    directive.ngAfterViewInit();
    expect(renderedMock.track).toHaveBeenCalledWith({ tag: 'abc', el });
  });
});
