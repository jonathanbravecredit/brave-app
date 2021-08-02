import { Component, Input, OnInit } from '@angular/core';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details-table/tradeline-details-table.component';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-history/tradeline-payment-history.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-remarks/tradeline-remarks.component';

@Component({
  selector: 'brave-disputes-detail',
  templateUrl: './disputes-detail.component.html',
})
export class DisputesDetailComponent implements OnInit {
  pages = [
    TradelineDetailsTableComponent,
    TradelineDetailsTableComponent,
    TradelinePaymentHistoryComponent,
    TradelineRemarksComponent,
  ];
  @Input() data: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
