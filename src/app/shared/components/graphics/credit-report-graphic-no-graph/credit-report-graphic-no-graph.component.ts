import { Component, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic-no-graph',
  templateUrl: './credit-report-graphic-no-graph.component.html',
})
export class CreditReportGraphicNoGraphComponent {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number | undefined;
  @Input() ptsChange: number = 0;
  constructor() {}
}
