import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic',
  templateUrl: './credit-report-graphic.component.html',
  styleUrls: ['./credit-report-graphic.component.css'],
})
export class CreditReportGraphicComponent implements OnInit {
  @Input() base: number = 300;
  @Input() limit: number = 850;
  @Input() currentValue: number = 350;
  @Input() ptsChange: number = 0;
  percentage: number = 0;
  percentageStr: string = '0%';

  constructor() {}

  ngOnInit(): void {
    this.percentage = Math.round(((this.currentValue - 300) / 550) * 100);
    this.percentageStr = `${this.percentage}%`;
  }
}
