import { Component, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic-with-graph',
  templateUrl: './credit-report-graphic-with-graph.component.html',
})
export class CreditReportGraphicWithGraphComponent {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number | undefined;
  @Input() ptsChange: number = 0;
  constructor() {}
}
