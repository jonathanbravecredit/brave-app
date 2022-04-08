import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';

@Component({
  selector: 'brave-account-detail',
  templateUrl: './account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  @Input() pages: any[] = [];
  @Input() data: any[] = [];

  @Input() tradelineDetailsConfig: ITradelineDetailsConfig | null = null;
  @Input() publicDetailsConfig: IPublicItemsDetailsConfig | null = null;
  @Input() personalDetailsConfig: IPersonalItemsDetailsConfig | null = null;

  @Input() detailsOpen: boolean = false;
  @Input() showDisputeButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
