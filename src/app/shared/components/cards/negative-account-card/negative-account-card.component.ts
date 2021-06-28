import { Component, Input, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { IOnboardingEvent, OnboardingDisputeComponent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';

export interface INegativeAccountCardInputs {
  creditorName?: string;
  lastReported?: string;
  accountTypeDescription?: string;
  accountTypeDescriptionValue?: string;
  originalCreditor?: string;
  originalCreditorValue?: string;
  disputeFlag?: string;
  disputeFlagValue?: string;
  accountDetail: {
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
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @Input() showDisputeButton = true;
  @Input() data: INegativeAccountCardInputs = {
    creditorName: '',
    lastReported: '',
    originalCreditor: '',
    originalCreditorValue: '',
    accountTypeDescription: '',
    accountTypeDescriptionValue: '',
    disputeFlag: '',
    disputeFlagValue: '',
    accountDetail: {
      accountNumber: '',
      typeOfCollection: '',
      amountPastDue: 0,
      dateOpened: '20/02/2021',
      dateLastPayment: '20/02/2021',
      remarks: ''
    }
  }


  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  showModal = false;
  constructor() {}

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      console.log('confirmed');
    }
  }
}
