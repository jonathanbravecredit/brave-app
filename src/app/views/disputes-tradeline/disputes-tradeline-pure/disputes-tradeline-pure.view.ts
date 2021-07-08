import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/interfaces';
import { DisputesTradelineComponent } from '@shared/components/disputes/disputes-tradeline/disputes-tradeline.component';
import { IDisputeTradelineProcessResult } from '@shared/components/disputes/disputes-tradeline/interfaces';

@Component({
  selector: 'brave-disputes-tradeline-pure-view',
  templateUrl: './disputes-tradeline-pure.view.html',
})
export class DisputesTradelinePureView implements OnInit {
  @ViewChild(DisputesTradelineComponent) disputeProcess: DisputesTradelineComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() initialDisputeType: string | undefined = undefined;

  negativeAccountCardData = {
    creditorName: 'H.J National Collections',
    lastReported: '05/15/21',
    originalCreditor: 'Original Creditor',
    originalCreditorValue: 'Wells Fargo Bank, N.A.',
    accountDetail: {
      accountNumber: '066611222',
      typeOfCollection: 'Collections',
      amountPastDue: 700,
      dateOpened: '04/12/2018',
      dateLastPayment: '04/21/2018',
    },
  } as INegativeAccountCardInputs;
  constructor() {}

  ngOnInit(): void {}

  requestGoBack() {
    const currentInnerProcessNavigationIndex = this.disputeProcess?.getCurrentNavigationIndex();
    if (currentInnerProcessNavigationIndex) {
      if (currentInnerProcessNavigationIndex > 0) {
        this.disputeProcess?.goBack();
      }
    }
  }

  onDisputeProcessResult(result: IDisputeTradelineProcessResult): void {
    // result event has a data property where the reason ids can be pull out and find them in the constants of the tradeline component
    if (result.isFinished) {
      this.isDisputeSent = true;
      this.isDisputeProcessInProgress = false;
    }
  }
}
