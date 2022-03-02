import { Directive, ElementRef, Input } from '@angular/core';
import { RenderedService, RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Directive({
  selector: '[braveRendered]',
})
export class RenderedDirective {
  constructor(private el: ElementRef, private rendered: RenderedService) {}

  ngAfterViewInit() {
    const tag = this.el.nativeElement.id;
    const el = this.el;
    console.log('tag: ', tag);
    console.log('el: ', el);
    this.rendered.track({ tag, el });
  }
}
