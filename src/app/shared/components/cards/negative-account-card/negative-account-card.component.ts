import { Component, Input, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import {
  IOnboardingEvent,
  OnboardingDisputeComponent,
} from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradeLinePartition } from '@shared/interfaces/merge-report.interface';

@Component({
  selector: 'brave-negative-account-card',
  templateUrl: './negative-account-card.component.html',
})
export class NegativeAccountCardComponent {
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @Input() showDisputeButton = true;
  @Input() data: INegativeAccountCardInputs = {
    tradeline: {} as ITradeLinePartition,
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
      remarks: '',
    },
  };

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
