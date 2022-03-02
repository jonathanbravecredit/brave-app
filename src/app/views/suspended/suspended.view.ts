import { Component, OnInit } from '@angular/core';
import { RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Component({
  selector: 'brave-suspended',
  templateUrl: './suspended.view.html',
})
export class SuspendedView implements OnInit {
  public tag = RenderedViews.Suspended;
  constructor() {}

  ngOnInit(): void {}
}
