import { Component, Input, ViewChild } from '@angular/core';
import { AccountSummaryWithDetailsService } from '@shared/components/accounts/account-summary-with-details/account-summary-with-details/account-summary-with-details.service';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { IOnboardingEvent } from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details-table/personalitems-details-table.component';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details-table/publicitems-details-table.component';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component';

@Component({
  selector: 'brave-account-summary-with-details',
  templateUrl: './account-summary-with-details.component.html',
  providers: [AccountSummaryWithDetailsService],
})
export class AccountSummaryWithDetailsComponent {
  @ViewChild(FilledSpinningButtonComponent) spinnerBtn: FilledSpinningButtonComponent | undefined;

  @Input() showDisputeButton = false;
  @Input() showConfirmButton = false;

  acknowledged: boolean = false;

  detailsOpen: boolean = false;

  @Input() tradelineDetailsConfig: ITradelineDetailsConfig | null = null;
  @Input() publicDetailsConfig: IPublicItemsDetailsConfig | null = null;
  @Input() personalDetailsConfig: IPersonalItemsDetailsConfig | null = null;

  showModal = false;

  publicitempages = [PublicitemsDetailsTableComponent];
  personalitempages = [PersonalitemsDetailsTableComponent];
  tradelinepages = [
    TradelineDetailsTableComponent,
    TradelineDetailsTableComponent,
    TradelinePaymentHistoryComponent,
    TradelineRemarksComponent,
  ];

  constructor(public accountSummaryWithDetailsService: AccountSummaryWithDetailsService) {}

  disputeClicked() {
    // when clicked and do not need acknowledgment
    if (this.acknowledged && this.tradelineDetailsConfig) {
      this.accountSummaryWithDetailsService.onConfirmed(this.tradelineDetailsConfig.tradeline);
    }
  }

  actionForDispute(e: IOnboardingEvent) {
    if (e.isConfirmed && this.tradelineDetailsConfig) {
      this.showModal = false;
      this.accountSummaryWithDetailsService.onConfirmed(this.tradelineDetailsConfig.tradeline);
    } else {
      this.spinnerBtn?.toggleSpinner();
    }
  }

  toggleViewDetails(): void {
    this.detailsOpen = !this.detailsOpen;
  }
}
