import { Component, Input, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { BehaviorSubject } from 'rxjs';

export interface INegativeAccountCardInputs {
  creditorName?: string;
  lastReported?: string;
  accountTypeDescription?: string;
  accountTypeDescriptionValue?: string;
  originalCreditor?: string;
  originalCreditorValue?: string;
  disputeFlag?: string;
  disputeFlagValue?: string;
  accountDetail?: {
    accountNumber?: string;
    typeOfCollection?: string;
    amountPastDue?: number | string;
    dateOpened?: string;
    dateLastPayment?: string;
    remarks?: string;
  };
}

@Component({
  selector: 'brave-negative-account-card',
  templateUrl: './negative-account-card.component.html',
  styleUrls: ['./negative-account-card.component.css'],
})
export class NegativeAccountCardComponent {
  @Input() creditorName: string = '';
  @Input() lastReported: string = '';
  @Input() originalCreditor: string = '';
  @Input() originalCreditorValue: string = '';
  @Input() accountTypeDescription: string = '';
  @Input() accountTypeDescriptionValue: string = '';
  @Input() disputeFlag: string = '';
  @Input() disputeFlagValue: string = '';

  // Detail Information
  @Input() accountNumber = '';
  @Input() typeOfCollection = '';
  @Input() amountPastDue: string | number = 0;
  @Input() dateOpened = '20/02/2021';
  @Input() dateLastPayment = '20/02/2021';
  @Input() remarks = '';
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;

  constructor() {}

}
