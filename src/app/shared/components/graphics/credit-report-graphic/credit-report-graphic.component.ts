import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic',
  templateUrl: './credit-report-graphic.component.html',
})
export class CreditReportGraphicComponent implements OnInit {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number | undefined;
  @Input() ptsChange: number = 0;

  constructor() {}

  ngOnInit(): void {

    console.log('WHAT WE ARE GETTING', this.currentValue)
  }
}
