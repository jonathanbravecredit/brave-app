import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic',
  templateUrl: './credit-report-graphic.component.html',
  styleUrls: ['./credit-report-graphic.component.css']
})
export class CreditReportGraphicComponent implements OnInit {
  @Input() base = 0;
  @Input() limit = 800;
  @Input() currentValue = 0;
  percentage = 0;

  constructor() { }

  ngOnInit(): void {
    this.percentage = this.currentValue / this.limit;
  }

}
