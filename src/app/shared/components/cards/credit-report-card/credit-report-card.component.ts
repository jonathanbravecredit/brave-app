import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewDetailOrientation } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
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
  @Input() payStatusSymbol: string | undefined;
  @Input() viewDetailOrientation: ViewDetailOrientation = 'horizontal-right';
  @Output() viewDetailClick: EventEmitter<void> = new EventEmitter();

  get closed(): boolean {
    return !this.isOpen;
  }

  get safe(): boolean {
    return this.isOpen && this.payStatusSymbol?.toLowerCase() === 'c';
  }

  get danger(): boolean {
    return (
      this.payStatusSymbol === '1' ||
      this.payStatusSymbol === '2' ||
      this.payStatusSymbol === '3' ||
      this.payStatusSymbol === '4' ||
      this.payStatusSymbol === '7' ||
      this.payStatusSymbol === '8R'
    );
  }

  get critical(): boolean {
    return this.payStatusSymbol === '9';
  }

  get default(): boolean {
    if (!this.closed && !this.safe && !this.danger && !this.critical) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
