import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { RenderedService, RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Directive({
  selector: '[braveRendered]',
})
export class RenderedDirective implements OnInit {
  @Input() tag: RenderedViews | undefined;
  constructor(private el: ElementRef, private rendered: RenderedService) {}

  ngOnInit() {
    const tag = this.tag || null;
    const el = this.el;
    this.rendered.track({ tag, el });
  }
}
