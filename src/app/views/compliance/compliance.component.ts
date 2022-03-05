import { Component, OnInit } from '@angular/core';
import { RenderedViews } from '@shared/services/monitor/rendered/rendered.service';

@Component({
  selector: 'brave-compliance',
  templateUrl: './compliance.component.html',
})
export class ComplianceComponent implements OnInit {
  public tag = RenderedViews.Compliance;
  constructor() {}

  ngOnInit(): void {}
}
