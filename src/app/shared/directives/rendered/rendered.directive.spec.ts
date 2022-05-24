import { ElementRef } from '@angular/core';
import { RenderedViews } from '@shared/services/monitor/rendered/rendered.service';
import { RenderedDirective } from './rendered.directive';

describe('RenderedDirective', () => {
  let renderedMock: any;
  renderedMock = jasmine.createSpyObj('RenderedService', ['track']);
  it('should create an instance', () => {
    const el = { nativeElement: { id: 'abc' } } as ElementRef;

    const directive = new RenderedDirective(el, renderedMock);
    expect(directive).toBeTruthy();
  });

  it('Should call track on ngOnInit', () => {
    const el = { nativeElement: {} } as ElementRef;
    const directive = new RenderedDirective(el, renderedMock);
    directive.tag = RenderedViews.App;
    directive.ngOnInit();
    expect(renderedMock.track).toHaveBeenCalledWith({ tag: RenderedViews.App, el });
  });
});
