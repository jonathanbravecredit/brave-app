import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditreportService } from '@shared/services/creditreport/creditreport.service';
import { DisputeService } from '@shared/services/dispute/dispute.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { StateService } from '@shared/services/state/state.service';
import { AppDataStateModel } from '@store/app-data';

@Component({
  selector: 'brave-dashboard-init',
  templateUrl: './dashboard-init.component.html',
})
export class DashboardInitComponent {
  initiated: boolean = false;
  isEnrolled: boolean = false;
  constructor(
    private statesvc: StateService,
    private interstitial: InterstitialService,
    private creditService: CreditreportService,
    private disputeService: DisputeService,
  ) {
    this.interstitial.openInterstitial();
    this.statesvc.state$.subscribe((state: { appData: AppDataStateModel }) => {
      this.isEnrolled = !!state.appData.agencies?.transunion?.enrolled;
      this.initiated = true;
      this.interstitial.closeInterstitial();
    });
  }
}
