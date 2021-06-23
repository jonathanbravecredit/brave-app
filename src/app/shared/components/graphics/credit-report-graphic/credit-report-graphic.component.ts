import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-graphic',
  templateUrl: './credit-report-graphic.component.html',
  styleUrls: ['./credit-report-graphic.component.css']
})
export class CreditReportGraphicComponent implements OnInit {
  @Input() base: number = 0;
  @Input() limit: number = 0;
  @Input() currentValue: number = 0;
  percentage = this.currentValue / this.limit;
  
  constructor() { }

  ngOnInit(): void {
  }

}
