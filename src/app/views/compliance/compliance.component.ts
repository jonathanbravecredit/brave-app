import { Component, AfterViewInit } from '@angular/core';
import { RenderedService, RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Component({
  selector: 'brave-compliance',
  templateUrl: './compliance.component.html',
})
export class ComplianceComponent implements AfterViewInit {
  public tag = RenderedViews.Compliance;
  constructor(private rendered: RenderedService) {}

  ngAfterViewInit(): void {
    this.rendered.checkStatus();
  }
}
