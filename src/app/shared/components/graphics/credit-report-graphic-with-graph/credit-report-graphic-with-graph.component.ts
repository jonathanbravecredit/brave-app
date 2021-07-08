import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic-with-graph',
  templateUrl: './credit-report-graphic-with-graph.component.html',
  styleUrls: ['./credit-report-graphic-with-graph.component.css'],
})
export class CreditReportGraphicWithGraphComponent implements OnInit {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number = 350;
  @Input() ptsChange: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
