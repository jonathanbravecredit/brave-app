//Pipes

// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { DisputesModule } from '@views/dashboard/disputes/disputes.module';
import { CreditReportModule } from '@views/dashboard/reports/credit-report/credit-report.module';
import { DashboardRoutingModule } from '@views/dashboard/dashboard.routing';
import { NgxMaskModule } from 'ngx-mask';

// components
import { DashboardComponent } from '@views/dashboard/dashboard.component';

import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { DashboardEnrolledPureComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/dashboard-enrolled-pure.component';

import { SettingsComponent } from '@views/dashboard/settings/settings/settings.component';
import { OptionDeactivateComponent } from '@views/dashboard/settings/components/option-deactivate/option-deactivate.component';
import { OptionPasswordResetComponent } from '@views/dashboard/settings/components/option-password-reset/option-password-reset.component';
import { SettingsOptionListComponent } from '@views/dashboard/settings/components/settings-option-list/settings-option-list.component';
import { SettingsPureComponent } from '@views/dashboard/settings/settings-pure/settings-pure.component';
import { SettingsOptionComponent } from './settings/components/settings-option/settings-option.component';

import { DashboardCarouselComponent } from './dashboard-enrolled/components/dashboard-carousel/dashboard-carousel.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { SettingsWarningComponent } from './settings/components/settings-warning/settings-warning.component';
import { DashboardAdsCarouselComponent } from './dashboard-enrolled/components/dashboard-ads-carousel/dashboard-ads-carousel.component';
import { DashboardCreditScoreErrorComponent } from './dashboard-enrolled/components/dashboard-credit-score-error/dashboard-credit-score-error.component';
import { DashboardReportMissingComponent } from './dashboard-enrolled/components/dashboard-report-missing/dashboard-report-missing.component';
import { CreditMixModule } from '@views/dashboard/credit-mix/credit-mix.module';
import { CreditUtilizationModule } from '@views/dashboard/credit-utilization/credit-utilization.module';
import { DataBreachesModule } from '@views/dashboard/data-breaches/data-breaches.module';
import { ForbearanceModule } from '@views/dashboard/forbearance/forbearance.module';
import { NegativeAccountModule } from '@views/dashboard/negative-account/negative-account.module';
import { ProgressTrackerModule } from '@views/dashboard/progress-tracker/progress-tracker.module';
import { ReferralDashboardModule } from '@views/dashboard/referral-dashboard/referral-dashboard.module';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  NgxMaskModule,
  DisputesModule,
  CreditReportModule,
  DashboardRoutingModule,
  SharedDirectivesModule,
  CreditMixModule,
  CreditUtilizationModule,
  DataBreachesModule,
  DisputesModule,
  ForbearanceModule,
  NegativeAccountModule,
  ProgressTrackerModule,
  ReferralDashboardModule,
];
const components = [
  DashboardComponent,
  DashboardEnrolledComponent,
  DashboardEnrolledPureComponent,
  DashboardCarouselComponent,
  DashboardCarouselComponent,
  DashboardAdsCarouselComponent,
  DashboardCreditScoreErrorComponent,
  DashboardReportMissingComponent,
  SettingsComponent,
  SettingsPureComponent,
  SettingsOptionComponent,
  SettingsOptionListComponent,
  SettingsWarningComponent,
  OptionPasswordResetComponent,
  OptionDeactivateComponent,
];

const pipes: [] = [];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DashboardModule {}
