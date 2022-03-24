import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import {
  IOnboardingEvent,
  OnboardingDisputeComponent,
} from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradeLinePartition } from '@shared/interfaces';
import { AccountService } from '@shared/services/account/account.service';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details-table/personalitems-details-table.component';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details-table/publicitems-details-table.component';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component';

@Component({
  selector: 'brave-account-summary-with-details',
  templateUrl: './account-summary-with-details.component.html',
})
export class AccountSummaryWithDetailsComponent {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @ViewChild(FilledSpinningButtonComponent) spinnerBtn: FilledSpinningButtonComponent | undefined;

  @Input() showDisputeButton = false;
  @Input() showConfirmButton = false;

  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;
  @Input() tradeline: ITradeLinePartition | undefined;

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

  constructor(
    public account: AccountService
  ) {
  }

  disputeClicked() {
    // when clicked and do not need acknowledgment
    if (this.acknowledged) {
      // this.account.onConfirmed();
    }
  }

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed) {
      this.showModal = false;
      // this.account.onConfirmed();
    } else {
      this.spinnerBtn?.toggleSpinner();
    }
  }
}
