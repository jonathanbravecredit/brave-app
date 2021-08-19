import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import {
  OnboardingDisputeComponent,
  IOnboardingEvent,
} from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import {
  IDisputeTradelineItem,
  IDisputePersonalItem,
  IDisputePublicItem,
} from '@shared/services/dispute/dispute.interfaces';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details-table/personalitems-details-table.component';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details-table/publicitems-details-table.component';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details-table/tradeline-details-table.component';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-remarks/tradeline-remarks.component';

@Component({
  selector: 'brave-dispute-header',
  templateUrl: './dispute-header.component.html',
})
export class DisputeHeaderComponent {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @Output() confirmed: EventEmitter<void> = new EventEmitter();
  @Input() showDisputeButton = false;
  @Input() publicdispute: IDisputePublicItem | undefined;
  @Input() personaldispute: IDisputePersonalItem | undefined;
  @Input() tradelinedispute: IDisputeTradelineItem | undefined;

  /*============================================*/
  // pass the components to form the carousel
  //  - pass a single page/data array even if not
  //    split
  //  - Personal items does not have pages...one single items
  /*============================================*/
  publicitempages = [PublicitemsDetailsTableComponent];
  personalitempages = [PersonalitemsDetailsTableComponent];
  tradelinepages = [
    TradelineDetailsTableComponent,
    TradelineDetailsTableComponent,
    TradelinePaymentHistoryComponent,
    TradelineRemarksComponent,
  ];

  showModal = false;

  constructor() {}

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      this.confirmed.emit();
    }
  }
}
