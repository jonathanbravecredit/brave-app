import { Component, Input, ViewChild } from '@angular/core';
import { FilledSpinningButtonComponent } from '@shared/components/buttons/filled-spinning-button/filled-spinning-button.component';
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
})
export class AccountSummaryWithDetailsComponent {
  @Input() showDisputeButton = false;
  @Input() showConfirmButton = false;
  @Input() tradelineDetailsConfig: ITradelineDetailsConfig | null = null;
  @Input() publicDetailsConfig: IPublicItemsDetailsConfig | null = null;
  @Input() personalDetailsConfig: IPersonalItemsDetailsConfig | null = null;

  @ViewChild(FilledSpinningButtonComponent) spinnerBtn: FilledSpinningButtonComponent | undefined;

  detailsOpen: boolean = false;

  publicitempages = [PublicitemsDetailsTableComponent];
  personalitempages = [PersonalitemsDetailsTableComponent];
  tradelinepages = [
    TradelineDetailsTableComponent,
    TradelineDetailsTableComponent,
    TradelinePaymentHistoryComponent,
    TradelineRemarksComponent,
  ];

  constructor() {}

  toggleViewDetails(): void {
    this.detailsOpen = !this.detailsOpen;
  }
}
