import { Component, AfterViewInit } from '@angular/core';
import { RenderedService, RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Component({
  selector: 'brave-suspended',
  templateUrl: './suspended.view.html',
})
export class SuspendedView implements AfterViewInit {
  public tag = RenderedViews.Suspended;
  constructor(private rendered: RenderedService) {}

  ngAfterViewInit(): void {
    this.rendered.checkStatus();
  }
}
