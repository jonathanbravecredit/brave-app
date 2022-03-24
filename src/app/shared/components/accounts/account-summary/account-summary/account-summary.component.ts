import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
import { ViewdetailButtonComponent } from '@shared/components/buttons/viewdetail-button/viewdetail-button.component';
import {
  OnboardingDisputeComponent,
  IOnboardingEvent,
} from '@shared/components/modals/onboarding-dispute/onboarding-dispute.component';
import { ITradeLinePartition } from '@shared/interfaces';
import { IDisputeTradelineItem, IDisputePersonalItem, IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';
import { TradelineToDetailsPipe } from '@shared/pipes/tradeline-to-details/tradeline-to-details.pipe';
import { AccountService } from '@shared/services/account/account.service';
import { FeatureFlagsService } from '@shared/services/featureflags/feature-flags.service';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details-table/personalitems-details-table.component';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details-table/publicitems-details-table.component';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component';

@Component({
  selector: 'brave-account-summary',
  templateUrl: './account-summary.component.html',
})
export class AccountSummaryComponent {
  @ViewChild(ViewdetailButtonComponent)
  viewDetail: ViewdetailButtonComponent | undefined;
  @ViewChild(OnboardingDisputeComponent)
  disputeTermsModal: OnboardingDisputeComponent | undefined;
  @Input() showConfirmButton = false;

  @Input() publicItem: IDisputePublicItem | undefined;
  @Input() personalItem: IDisputePersonalItem | undefined;
  @Input() tradeline: ITradeLinePartition | undefined;
  tradelineDetails: IDisputeTradelineItem | undefined;

  @ViewChild(FilledSpinningButtonComponent) spinnerBtn: FilledSpinningButtonComponent | undefined;
  @Output() confirmed: EventEmitter<void> = new EventEmitter();
  @Input() showDisputeButton = false;

  /**
   * Flag to indicate they need to still acknowledge dispute terms
   */
  @Input() acknowledged: boolean = false;

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
    public featureFlags: FeatureFlagsService,
    public account: AccountService,
    private tradelineToDetails: TradelineToDetailsPipe,
  ) {
    this.tradelineDetails = this.tradelineToDetails.transform(this.tradeline);
  }
}
