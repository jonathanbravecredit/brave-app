import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBorrower, IPublicPartition, ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

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
  @Input() secondFieldName: string = '';
  @Input() secondFieldValue: string = '';
  @Input() thirdFieldName: string = '';
  @Input() thirdFieldValue: string = '';
  @Input() status: string = '';
  @Input() tradeline: ITradeLinePartition = {} as ITradeLinePartition; // bring the unmapped tradeline foreward
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
