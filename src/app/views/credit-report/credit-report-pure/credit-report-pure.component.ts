import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report-pure',
  templateUrl: './credit-report-pure.component.html',
  styleUrls: ['./credit-report-pure.component.css']
})
export class CreditReportPureComponent implements OnInit {
  @Input() creditReports: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}