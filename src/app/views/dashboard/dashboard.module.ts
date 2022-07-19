//Pipes

// modules
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { SharedPipesModule } from "@shared/pipes/shared-pipes.module";
import { CreditReportModule } from "@views/dashboard/reports/credit-report/credit-report.module";
import { DashboardRoutingModule } from "@views/dashboard/dashboard.routing";
import { NgxMaskModule } from "ngx-mask";

// components
import { DashboardComponent } from "@views/dashboard/dashboard.component";

import { DashboardEnrolledComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component";
import { DashboardEnrolledPureComponent } from "@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/dashboard-enrolled-pure.component";

import { SettingsComponent } from "@views/dashboard/settings/settings/settings.component";
import { OptionDeactivateComponent } from "@views/dashboard/settings/components/option-deactivate/option-deactivate.component";
import { OptionPasswordResetComponent } from "@views/dashboard/settings/components/option-password-reset/option-password-reset.component";
import { SettingsOptionListComponent } from "@views/dashboard/settings/components/settings-option-list/settings-option-list.component";
import { SettingsPureComponent } from "@views/dashboard/settings/settings-pure/settings-pure.component";
import { SettingsOptionComponent } from "./settings/components/settings-option/settings-option.component";

import { DashboardCarouselComponent } from "./dashboard-enrolled/components/dashboard-carousel/dashboard-carousel.component";
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
import { SettingsWarningComponent } from "./settings/components/settings-warning/settings-warning.component";
import { DashboardAdsCarouselComponent } from "./dashboard-enrolled/components/dashboard-ads-carousel/dashboard-ads-carousel.component";
import { DashboardCreditScoreErrorComponent } from "./dashboard-enrolled/components/dashboard-credit-score-error/dashboard-credit-score-error.component";
import { DashboardReportMissingComponent } from "./dashboard-enrolled/components/dashboard-report-missing/dashboard-report-missing.component";
import { NegativeAccountModule } from "@views/dashboard/negative-account/negative-account.module";
import { DashboardReferralGaugeComponent } from "./dashboard-enrolled/components/dashboard-referral-gauge/dashboard-referral-gauge.component";
import { DashboardEnrolledClosedComponent } from "./dashboard-enrolled/dashboard-enrolled-closed/dashboard-enrolled-closed.component";

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  SharedDirectivesModule,
  NgxMaskModule,
  CreditReportModule,
  NegativeAccountModule,
  DashboardRoutingModule,
];
const components = [
  DashboardComponent,
  DashboardEnrolledComponent,
  DashboardEnrolledPureComponent,
  DashboardCarouselComponent,
  DashboardAdsCarouselComponent,
  DashboardCreditScoreErrorComponent,
  DashboardReportMissingComponent,
  DashboardReferralGaugeComponent,
  SettingsComponent,
  SettingsPureComponent,
  SettingsOptionComponent,
  SettingsOptionListComponent,
  SettingsWarningComponent,
  OptionPasswordResetComponent,
  OptionDeactivateComponent,
  DashboardEnrolledClosedComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes, DashboardEnrolledClosedComponent],
  imports: [...modules],
  exports: [...components],
})
export class DashboardModule {}
