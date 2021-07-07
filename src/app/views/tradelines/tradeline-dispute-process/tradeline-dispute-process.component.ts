import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { INegativeAccountCardInputs } from '@shared/components/cards/negative-account-card/negative-account-card.component';
import { IDisputeTradelineProcessResult } from '@shared/components/tradelines/tradeline-dispute-process/interfaces';
import { TradelineDisputeProcessComponent } from '@shared/components/tradelines/tradeline-dispute-process/tradeline-dispute-process.component';


@Component({
  selector: 'brave-tradeline-dispute-process-view',
  templateUrl: './tradeline-dispute-process.component.html',
  styleUrls: ['./tradeline-dispute-process.component.css']
})
export class TradelineDisputeProcessView implements OnInit {
  @ViewChild(TradelineDisputeProcessComponent) tradelineDisputeProcess: TradelineDisputeProcessComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() initialStepId = 'select';
  @Input() forceNavigation = false;
  @Input() initialDisputeType: string | undefined = undefined;
  
  negativeAccountCardData: INegativeAccountCardInputs = {
    creditorName: 'H.J National Collections',
    lastReported: '05/15/21',
    originalCreditor: 'Original Creditor',
    originalCreditorValue: 'Wells Fargo Bank, N.A.',
    accountDetail: {
      accountNumber: '066611222',
      typeOfCollection: 'Collections',
      amountPastDue: 700,
      dateOpened: '04/12/2018',
      dateLastPayment: '04/21/2018'
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  requestGoBack() {
    const currentInnerProcessNavigationIndex = this.tradelineDisputeProcess?.getCurrentNavigationIndex();
    if (currentInnerProcessNavigationIndex) {
      if (currentInnerProcessNavigationIndex > 0) {
        this.tradelineDisputeProcess?.goBack();
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
