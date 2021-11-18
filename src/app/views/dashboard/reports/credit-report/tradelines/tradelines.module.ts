import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details-table/tradeline-details-table.component';
import { TradelineDetailsComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-details/tradeline-details.component';
import { TradelineGenericCardComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-generic-card/tradeline-generic-card.component';
import { TradelineMetricsComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-metrics/tradeline-metrics.component';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-history/tradeline-payment-history.component';
import { TradelinePaymentIconKeyComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-icon-key/tradeline-payment-icon-key.component';
import { TradelinePaymentIconComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payment-icon/tradeline-payment-icon.component';
import { TradelinePaymentsComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-payments/tradeline-payments.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-remarks/tradeline-remarks.component';
import { TradelineSummaryComponent } from '@views/dashboard/reports/credit-report/tradelines/components/tradeline-summary/tradeline-summary.component';
import { TradelinesPureComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines-pure/tradelines-pure.component';
import { TradelinesComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component';
import { NgxMaskModule } from 'ngx-mask';
import { CreditUtilizationFillBarComponent } from '@shared/components/charts/credit-utilization-fill-bar/credit-utilization-fill-bar.component';

const components = [
  TradelinesComponent,
  TradelinesPureComponent,
  TradelineGenericCardComponent,
  TradelineMetricsComponent,
  TradelineSummaryComponent,
  TradelineDetailsTableComponent,
  TradelinePaymentsComponent,
  TradelinePaymentIconComponent,
  TradelinePaymentIconKeyComponent,
  TradelinePaymentHistoryComponent,
  TradelineRemarksComponent,
  TradelineDetailsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, NgxMaskModule],
  exports: [...components],
})
export class TradelinesModule {}
