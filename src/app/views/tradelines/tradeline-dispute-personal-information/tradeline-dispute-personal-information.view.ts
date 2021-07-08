import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IDisputeTradelineProcessResult } from '@shared/components/tradelines/tradeline-dispute-process/interfaces';
import { TradelineDisputeProcessComponent } from '@shared/components/tradelines/tradeline-dispute-process/tradeline-dispute-process.component';

@Component({
  selector: 'brave-tradeline-dispute-personal-information',
  templateUrl: './tradeline-dispute-personal-information.view.html',
  styleUrls: ['./tradeline-dispute-personal-information.view.css']
})
export class TradelineDisputePersonalInformationView implements OnInit {
  @ViewChild(TradelineDisputeProcessComponent) tradelineDisputeProcess: TradelineDisputeProcessComponent | undefined;
  isDisputeProcessInProgress = true;
  @Input() isDisputeSent = false;
  @Input() dateReported: string | undefined;
  @Input() dateUpdated: string | undefined;
  @Input() nameTypeAbbreviation: string | undefined;
  @Input() previousValue: string | undefined;
  @Input() valueDescription: string | undefined;

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
