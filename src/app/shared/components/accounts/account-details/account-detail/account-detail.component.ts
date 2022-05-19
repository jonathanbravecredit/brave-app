import { Component, Input, OnInit } from '@angular/core';
import { IPersonalItemsDetailsConfig } from '@views/dashboard/reports/credit-report/personalitems/components/personalitems-details/interfaces';
import { IPublicItemsDetailsConfig } from '@views/dashboard/reports/credit-report/publicitems/components/publicitems-details/interfaces';
import { ITradelineDetailsConfig } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/interfaces';
import { state, style, trigger, animate, transition } from '@angular/animations';

@Component({
  selector: 'brave-account-detail',
  templateUrl: './account-detail.component.html',
  animations: [
    trigger("openClose", [
      state("closed", style({ height: "0" })),
      state("open", style({ height: "*" })),
      transition("closed => open", [animate("0.2s linear")]),
      transition("open => closed", [animate("0.2s linear")]),
    ]),
  ],
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
