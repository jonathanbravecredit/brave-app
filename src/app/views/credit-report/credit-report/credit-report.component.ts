import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brave-credit-report',
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.css']
})
export class CreditReportComponent implements OnInit {
  @Input() creditReports: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
