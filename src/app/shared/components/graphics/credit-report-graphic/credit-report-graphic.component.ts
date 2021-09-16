import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic',
  templateUrl: './credit-report-graphic.component.html',
})
export class CreditReportGraphicComponent implements OnInit {
  @Input() currentValue: number | undefined;
  @Input() ptsChange: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
