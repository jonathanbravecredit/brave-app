import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { DashboardRoutingModule } from '@views/dashboard/dashboard.routing';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { NegativeAccountInitialComponent } from '@views/dashboard/snapshots/negative-account/negative-account-initial/negative-account-initial.component';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/snapshots/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { CreditReportPureComponent } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
import { CreditReportComponent } from '@views/dashboard/reports/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines/tradelines.component';
import { TradelinesPureComponent } from '@views/dashboard/reports/credit-report/tradelines/tradelines-pure/tradelines-pure.component';
import { DisputesErrorComponent } from '@views/dashboard/disputes/disputes-error/disputes-error/disputes-error.component';
import { DisputesErrorPureComponent } from '@views/dashboard/disputes/disputes-error/disputes-error-pure/disputes-error-pure.component';
import { DisputeFindingsView } from '@views/dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view';
import { DisputeFindingsPureView } from '@views/dashboard/disputes/disputes-findings/dispute-findings-pure/dispute-findings-pure.view';
import { CreditMixPureView } from '@views/dashboard/snapshots/credit-mix/credit-mix-pure/credit-mix-pure.view';
import { CreditMixView } from '@views/dashboard/snapshots/credit-mix/credit-mix/credit-mix.view';
import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { DashboardEnrolledPureComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/dashboard-enrolled-pure.component';
import {
  DisputesOverviewHistoryPureView,
  DisputesOverviewInitialPureView,
  DisputesOverviewInitialView,
  DisputesOverviewHistoryView,
} from '@views/dashboard/disputes/disputes-overview';
import { PublicitemsView } from '@views/dashboard/reports/credit-report/publicitems/publicitems/publicitems.view';
import { PublicitemsPureView } from '@views/dashboard/reports/credit-report/publicitems/publicitems-pure/publicitems-pure.view';
import { PersonalitemsView } from '@views/dashboard/reports/credit-report/personalitems/personalitems/personalitems.view';
import { PersonalitemsPureView } from '@views/dashboard/reports/credit-report/personalitems/personalitems-pure/personalitems-pure.view';
import { DisputesPersonalPureView } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { DisputesPersonalView } from '@views/dashboard/disputes/disputes-personal/disputes-personal/disputes-personal.view';
import { DisputesPublicPureView } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { DisputesPublicView } from '@views/dashboard/disputes/disputes-public/disputes-public/disputes-public.view';
import { DisputesTradelinePureView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { DisputesTradelineView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { DisputesReconfirmView } from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm/disputes-reconfirm.view';
import { DisputesReconfirmPureView } from '@views/dashboard/disputes/disputes-reconfirm/disputes-reconfirm-pure/disputes-reconfirm-pure.view';
import { TradelineDetailsTableComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details-table/tradeline-details-table.component';
import { TradelineMetricsComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-metrics/tradeline-metrics.component';
import { TradelinePaymentHistoryComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-history/tradeline-payment-history.component';
import { TradelinePaymentIconComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payment-icon/tradeline-payment-icon.component';
import { TradelinePaymentsComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-payments/tradeline-payments.component';
import { TradelineRemarksComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-remarks/tradeline-remarks.component';
import { TradelineSummaryComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-summary/tradeline-summary.component';
import { TradelineDetailsComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-details/tradeline-details.component';
import { TradelineDisputeCardComponent } from '@views/dashboard/reports/credit-report/tradelines/tradeline-dispute-card/tradeline-dispute-card.component';
import { PersonalitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details-table/personalitems-details-table.component';
import { PersonalitemsDetailsComponent } from '@views/dashboard/reports/credit-report/personalitems/personalitems-details/personalitems-details.component';
import { PublicitemsDetailsTableComponent } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details-table/publicitems-details-table.component';
import { PublicitemsDetailsComponent } from '@views/dashboard/reports/credit-report/publicitems/publicitems-details/publicitems-details.component';
import { PersonalitemDisputeCardComponent } from '@views/dashboard/reports/credit-report/personalitems/personalitem-dispute-card/personalitem-dispute-card.component';
import { PublicitemCardComponent } from '@views/dashboard/reports/credit-report/publicitems/publicitem-card/publicitem-card.component';
import { PublicitemDisputeCardComponent } from '@views/dashboard/reports/credit-report/publicitems/publicitem-dispute-card/publicitem-dispute-card.component';
import { SettingsComponent } from '@views/dashboard/settings/settings/settings.component';
import { OptionDeactivateComponent } from '@views/dashboard/settings/option-deactivate/option-deactivate.component';
import { OptionPasswordResetComponent } from '@views/dashboard/settings/option-password-reset/option-password-reset.component';
import { SettingsOptionListComponent } from '@views/dashboard/settings/settings-option-list/settings-option-list.component';

import { ParseRiskScorePipe } from '@views/dashboard/reports/credit-report/credit-report/parse-risk-score.pipe';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { SettingsPureComponent } from '@views/dashboard/settings/settings-pure/settings-pure.component';
import { SettingsOptionComponent } from './settings/settings-option/settings-option.component';
import { NgxMaskModule } from 'ngx-mask';
const components = [
  DashboardComponent,
  DashboardEnrolledComponent,
  DashboardEnrolledPureComponent,
  NegativeAccountInitialComponent,
  NegativeAccountInitialPureComponent,
  CreditReportPureComponent,
  CreditReportComponent,
  TradelinesComponent,
  TradelinesPureComponent,
  DisputesPersonalView,
  DisputesPersonalPureView,
  DisputesPublicPureView,
  DisputesPublicView,
  DisputesTradelinePureView,
  DisputesTradelineView,
  DisputesErrorComponent,
  DisputesErrorPureComponent,
  DisputeFindingsView,
  DisputeFindingsPureView,
  DisputesOverviewInitialPureView,
  DisputesOverviewInitialView,
  DisputesOverviewHistoryPureView,
  DisputesOverviewHistoryView,
  SettingsComponent,
  SettingsPureComponent,
  SettingsOptionComponent,
  SettingsOptionListComponent,
  OptionPasswordResetComponent,
  OptionDeactivateComponent,
  CreditMixPureView,
  CreditMixView,
  PublicitemsView,
  PublicitemsPureView,
  PublicitemsDetailsComponent,
  PublicitemsDetailsTableComponent,
  PublicitemCardComponent,
  PublicitemDisputeCardComponent,
  PersonalitemsView,
  PersonalitemsPureView,
  PersonalitemsDetailsComponent,
  PersonalitemsDetailsTableComponent,
  PersonalitemDisputeCardComponent,
  DisputesReconfirmView,
  DisputesReconfirmPureView,
  TradelineMetricsComponent,
  TradelineSummaryComponent,
  TradelineDetailsTableComponent,
  TradelinePaymentsComponent,
  TradelinePaymentIconComponent,
  TradelinePaymentHistoryComponent,
  TradelineRemarksComponent,
  TradelineDetailsComponent,
  TradelineDisputeCardComponent,
];

const pipes = [ParseRiskScorePipe];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, NgxMaskModule, DashboardRoutingModule],
  exports: [...components, ...pipes],
})
export class DashboardModule {}
