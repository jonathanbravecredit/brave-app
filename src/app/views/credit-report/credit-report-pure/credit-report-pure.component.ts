import { Component, OnInit, Input } from '@angular/core';
import { ICreditReportCardInputs } from '@shared/components/cards/credit-report-card/credit-report-card.component';

export interface ICreditReportCardGroup {
  title: string;
  cards: ICreditReportCardInputs[];
}

@Component({
  selector: 'brave-credit-report-pure',
  templateUrl: './credit-report-pure.component.html',
  styleUrls: ['./credit-report-pure.component.css'],
})
export class CreditReportPureComponent implements OnInit {
  @Input() creditReports: ICreditReportCardGroup[] = [];

  constructor() {}

  ngOnInit(): void {}
}
