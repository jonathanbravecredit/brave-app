import { Component, OnInit, Input } from '@angular/core';

export interface ICreditReportCardInputs {
  type: string;
  creditorName: string;
  isOpen: boolean;
  firstFieldName: string;
  firstFieldValue: string | number;
  secondFieldName: string;
  secondFieldValue: string | number;
  thirdFieldName: string;
  thirdFieldValue: string | number;
  status: string;
}

@Component({
  selector: 'brave-credit-report-card',
  templateUrl: './credit-report-card.component.html',
  styleUrls: ['./credit-report-card.component.css'],
})
export class CreditReportCardComponent implements OnInit {
  @Input() creditorName: string = '';
  @Input() isOpen: boolean = false;
  @Input() firstFieldName: string = '';
  @Input() firstFieldValue: string = '';
  @Input() secondFieldName: string = '';
  @Input() secondFieldValue: string = '';
  @Input() thirdFieldName: string = '';
  @Input() thirdFieldValue: string = '';
  @Input() status: string = '';
  constructor() {}

  ngOnInit(): void {}
}
