import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IDisputeTradelineItem, IDisputePersonalItem, IDisputePublicItem } from '@shared/interfaces/dispute.interfaces';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details-table/personalitems-details-table.component';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details-table/publicitems-details-table.component';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component';

@Component({
  selector: 'brave-account-summary',
  templateUrl: './account-summary.component.html',
})
export class AccountSummaryComponent {
  @Input() showConfirmButton = false;

  @Input() tradelineDetailsConfig: ITradelineDetailsConfig | null = null;
  @Input() publicDetailsConfig: IPublicItemsDetailsConfig | null = null;
  @Input() personalDetailsConfig: IPersonalItemsDetailsConfig | null = null;

  @Output() confirmed: EventEmitter<void> = new EventEmitter();
  @Input() showDisputeButton = false;

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
}
