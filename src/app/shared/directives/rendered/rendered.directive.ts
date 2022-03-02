import { Directive, ElementRef } from '@angular/core';
import { RenderedService } from '@shared/services/monitor/rendered/rendered.service';

@Directive({
  selector: '[braveRendered]',
})
export class RenderedDirective {
  constructor(private el: ElementRef, private rendered: RenderedService) {}

  ngAfterViewInit() {
    const tag = this.el.nativeElement.id || null;
    const el = this.el;
    this.rendered.track({ tag, el });
  }
}
