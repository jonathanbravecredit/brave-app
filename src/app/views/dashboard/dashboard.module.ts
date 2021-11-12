//Pipes
import { AccountStatusPipe } from "./snapshots/credit-utilization/components/credit-utilization-card/account-status.pipe";

// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { SharedPipesModule } from "@shared/pipes/shared-pipes.module";
import { DisputesModule } from "@views/dashboard/disputes/disputes.module";
import { CreditReportModule } from "@views/dashboard/reports/credit-report/credit-report.module";
import { DashboardRoutingModule } from "@views/dashboard/dashboard.routing";
import { NgxMaskModule } from "ngx-mask";

// components
import { DashboardComponent } from "@views/dashboard/dashboard.component";
import { NegativeAccountInitialComponent } from "@views/dashboard/snapshots/negative-account/negative-account-initial/negative-account-initial.component";
import { NegativeAccountInitialPureComponent } from "@views/dashboard/snapshots/negative-account/negative-account-initial-pure/negative-account-initial-pure.component";
import { NegativeAccountCardComponent } from "@views/dashboard/snapshots/negative-account/negative-account-card/negative-account-card.component";
import { NegativeAccountCardDetailTableComponent } from "./snapshots/negative-account/negative-account-card-detail-table/negative-account-card-detail-table.component";
import { NegativeAccountCardHeaderComponent } from "./snapshots/negative-account/negative-account-card-header/negative-account-card-header.component";

import { CreditMixPureView } from "@views/dashboard/snapshots/credit-mix/credit-mix-pure/credit-mix-pure.view";
import { CreditMixView } from "@views/dashboard/snapshots/credit-mix/credit-mix/credit-mix.view";

import { DashboardEnrolledComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component";
import { DashboardEnrolledPureComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/dashboard-enrolled-pure.component";

import { SettingsComponent } from "@views/dashboard/settings/settings/settings.component";
import { OptionDeactivateComponent } from "@views/dashboard/settings/components/option-deactivate/option-deactivate.component";
import { OptionPasswordResetComponent } from "@views/dashboard/settings/components/option-password-reset/option-password-reset.component";
import { SettingsOptionListComponent } from "@views/dashboard/settings/components/settings-option-list/settings-option-list.component";
import { SettingsPureComponent } from "@views/dashboard/settings/settings-pure/settings-pure.component";
import { SettingsOptionComponent } from "./settings/components/settings-option/settings-option.component";

import { BaseExceptionPureView } from "@views/dashboard/exceptions/base-exception/base-exception-pure/base-exception-pure.view";
import { BaseExceptionView } from "@views/dashboard/exceptions/base-exception/base-exception/base-exception.view";

import { ForbearanceView } from "./snapshots/forbearance/forbearance/forbearance.view";
import { ForbearancePureView } from "./snapshots/forbearance/forbearance-pure/forbearance-pure.view";
import { ForbearanceInfoComponent } from "./snapshots/forbearance/components/forbearance-info/forbearance-info.component";
import { ForbearanceHeaderComponent } from "./snapshots/forbearance/components/forbearance-header/forbearance-header.component";
import { ForbearanceTipsComponent } from "./snapshots/forbearance/components/forbearance-tips/forbearance-tips.component";
import { ForbearanceBandComponent } from "./snapshots/forbearance/components/forbearance-band/forbearance-band.component";
import { ForbearanceAccountsComponent } from "./snapshots/forbearance/components/forbearance-accounts/forbearance-accounts.component";

import { DataBreachesComponent } from "./snapshots/data-breaches/data-breaches/data-breaches.component";
import { DataBreachesPureComponent } from "./snapshots/data-breaches/data-breaches-pure/data-breaches-pure.component";
import { DataBreachHeaderComponent } from "./snapshots/data-breaches/components/data-breach-header/data-breach-header.component";
import { DataBreachCardComponent } from "./snapshots/data-breaches/components/data-breach-card/data-breach-card.component";
import { DataBreachListComponent } from "./snapshots/data-breaches/components/data-breach-list/data-breach-list.component";
import { DataBreachNoneComponent } from "./snapshots/data-breaches/components/data-breach-none/data-breach-none.component";
import { DataBreachShareComponent } from "./snapshots/data-breaches/components/data-breach-share/data-breach-share.component";
import { CreditUtilizationPureView } from "./snapshots/credit-utilization/credit-utilization-pure/credit-utilization-pure.view";
import { CreditUtilizationView } from "./snapshots/credit-utilization/credit-utilization/credit-utilization.view";
import { CreditUtilizationCardComponent } from "./snapshots/credit-utilization/components/credit-utilization-card/credit-utilization-card.component";
import { CreditUtilizationHeaderComponent } from "./snapshots/credit-utilization/components/credit-utilization-header/credit-utilization-header.component";
import { CreditUtilizationInfoComponent } from "./snapshots/credit-utilization/components/credit-utilization-info/credit-utilization-info.component";
import { CreditUtilizationTotalComponent } from "./snapshots/credit-utilization/components/credit-utilization-total/credit-utilization-total.component";
import { CreditUtilizationPercentagesComponent } from './snapshots/credit-utilization/components/credit-utilization-percentages/credit-utilization-percentages.component';
import { CreditUtilizationAvailableComponent } from './snapshots/credit-utilization/components/credit-utilization-available/credit-utilization-available.component';
import { CreditUtilizationNoCardsHeaderComponent } from './snapshots/credit-utilization/components/credit-utilization-no-cards-header/credit-utilization-no-cards-header.component';
import { CreditUtilizationNoCardsTextComponent } from './snapshots/credit-utilization/components/credit-utilization-no-cards-text/credit-utilization-no-cards-text.component';
import { CreditUtilizationColorPercentComponent } from "./snapshots/credit-utilization/components/credit-utilization-color-percent/credit-utilization-color-percent.component";



const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  NgxMaskModule,
  DisputesModule,
  CreditReportModule,
  DashboardRoutingModule,
];
const components = [
  DashboardComponent,
  DashboardEnrolledComponent,
  DashboardEnrolledPureComponent,
  NegativeAccountInitialComponent,
  NegativeAccountInitialPureComponent,
  NegativeAccountCardComponent,
  NegativeAccountCardDetailTableComponent,
  NegativeAccountCardHeaderComponent,
  SettingsComponent,
  SettingsPureComponent,
  SettingsOptionComponent,
  SettingsOptionListComponent,
  OptionPasswordResetComponent,
  OptionDeactivateComponent,
  CreditMixPureView,
  CreditMixView,
  BaseExceptionPureView,
  BaseExceptionView,
  ForbearanceView,
  ForbearancePureView,
  ForbearanceInfoComponent,
  ForbearanceHeaderComponent,
  ForbearanceTipsComponent,
  ForbearanceBandComponent,
  ForbearanceAccountsComponent,
  DataBreachesComponent,
  DataBreachesPureComponent,
  DataBreachHeaderComponent,
  DataBreachListComponent,
  DataBreachCardComponent,
  DataBreachNoneComponent,
  DataBreachShareComponent,
  CreditUtilizationPureView,
  CreditUtilizationView,
  CreditUtilizationCardComponent,
  CreditUtilizationHeaderComponent,
  CreditUtilizationInfoComponent,
  CreditUtilizationTotalComponent,
  CreditUtilizationPercentagesComponent,
  CreditUtilizationAvailableComponent,
  CreditUtilizationNoCardsHeaderComponent,
  CreditUtilizationNoCardsTextComponent,
  CreditUtilizationColorPercentComponent
];

const pipes = [
  AccountStatusPipe,
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DashboardModule {}
