import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

export type ReportCardFieldTypes = 'string' | 'currency' | 'date';

export interface ICreditReportCardInputs {
  type: string;
  creditorName: string;
  isOpen: boolean;
  firstFieldName: string;
  firstFieldValue: string | number;
  firstFieldType: ReportCardFieldTypes;
  secondFieldName: string;
  secondFieldValue: string | number;
  secondFieldType: ReportCardFieldTypes;
  thirdFieldName: string;
  thirdFieldValue: string | number;
  thirdFieldType: ReportCardFieldTypes;
  status: string;
  positive: boolean;
  tradeline?: ITradeLinePartition;
  publicItem?: IPublicPartition;
  personalItem?: IBorrower;
}

@Component({
  selector: 'brave-credit-report-card',
  templateUrl: './credit-report-card.component.html',
})
export class CreditReportCardComponent implements OnInit {
  @Input() creditorName: string = '';
  @Input() isOpen: boolean = false;
  @Input() firstFieldName: string = '';
  @Input() firstFieldValue: string = '';
  @Input() firstFieldType: ReportCardFieldTypes = 'string';
  @Input() secondFieldName: string = '';
  @Input() secondFieldValue: string = '';
  @Input() secondFieldType: ReportCardFieldTypes = 'string';
  @Input() thirdFieldName: string = '';
  @Input() thirdFieldValue: string = '';
  @Input() thirdFieldType: ReportCardFieldTypes = 'string';
  @Input() status: string = '';
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition; // bring the unmapped tradeline foreward
  @Input() payStatusSymbol: string | number | undefined;
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (typeof this.payStatusSymbol === 'number') {
      this.payStatusSymbol = this.payStatusSymbol.toString()
    }
  }
}
