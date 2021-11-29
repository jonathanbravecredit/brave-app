import { Component, OnInit, Input } from '@angular/core';
import { ICreditReportGraphic } from '@shared/components/graphics/credit-report-graphic';

@Component({
  selector: 'brave-credit-report-graphic',
  templateUrl: './credit-report-graphic.component.html',
})
export class CreditReportGraphicComponent implements OnInit, ICreditReportGraphic {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number | undefined;
  @Input() ptsChange: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
