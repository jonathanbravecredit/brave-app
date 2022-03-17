//Pipes
import { AccountStatusPipe } from './credit-utilization/components/credit-utilization-card/account-status.pipe';

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
import { NegativeAccountInitialComponent } from '@views/dashboard/negative-account/negative-account-initial/negative-account-initial.component';
import { NegativeAccountInitialPureComponent } from '@views/dashboard/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { NegativeAccountCardComponent } from '@views/dashboard/negative-account/negative-account-card/negative-account-card.component';
import { NegativeAccountCardDetailTableComponent } from './negative-account/negative-account-card-detail-table/negative-account-card-detail-table.component';
import { NegativeAccountCardHeaderComponent } from './negative-account/negative-account-card-header/negative-account-card-header.component';

import { CreditMixPureView } from '@views/dashboard/credit-mix/credit-mix-pure/credit-mix-pure.view';
import { CreditMixView } from '@views/dashboard/credit-mix/credit-mix/credit-mix.view';

import { DashboardEnrolledComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { DashboardEnrolledPureComponent } from '@views/dashboard/dashboard-enrolled/dashboard-enrolled-pure/dashboard-enrolled-pure.component';

import { SettingsComponent } from '@views/dashboard/settings/settings/settings.component';
import { OptionDeactivateComponent } from '@views/dashboard/settings/components/option-deactivate/option-deactivate.component';
import { OptionPasswordResetComponent } from '@views/dashboard/settings/components/option-password-reset/option-password-reset.component';
import { SettingsOptionListComponent } from '@views/dashboard/settings/components/settings-option-list/settings-option-list.component';
import { SettingsPureComponent } from '@views/dashboard/settings/settings-pure/settings-pure.component';
import { SettingsOptionComponent } from './settings/components/settings-option/settings-option.component';

import { BaseExceptionPureView } from '@views/dashboard/exceptions/base-exception/base-exception-pure/base-exception-pure.view';
import { BaseExceptionView } from '@views/dashboard/exceptions/base-exception/base-exception/base-exception.view';

import { ForbearanceView } from './forbearance/forbearance/forbearance.view';
import { ForbearancePureView } from './forbearance/forbearance-pure/forbearance-pure.view';
import { ForbearanceInfoComponent } from './forbearance/components/forbearance-info/forbearance-info.component';
import { ForbearanceHeaderComponent } from './forbearance/components/forbearance-header/forbearance-header.component';
import { ForbearanceTipsComponent } from './forbearance/components/forbearance-tips/forbearance-tips.component';
import { ForbearanceBandComponent } from './forbearance/components/forbearance-band/forbearance-band.component';
import { ForbearanceAccountsComponent } from './forbearance/components/forbearance-accounts/forbearance-accounts.component';

import { DataBreachesComponent } from './data-breaches/data-breaches/data-breaches.component';
import { DataBreachesPureComponent } from './data-breaches/data-breaches-pure/data-breaches-pure.component';
import { DataBreachHeaderComponent } from './data-breaches/components/data-breach-header/data-breach-header.component';
import { DataBreachCardComponent } from './data-breaches/components/data-breach-card/data-breach-card.component';
import { DataBreachListComponent } from './data-breaches/components/data-breach-list/data-breach-list.component';
import { DataBreachNoneComponent } from './data-breaches/components/data-breach-none/data-breach-none.component';
import { DataBreachShareComponent } from './data-breaches/components/data-breach-share/data-breach-share.component';
import { CreditUtilizationPureView } from './credit-utilization/credit-utilization-pure/credit-utilization-pure.view';
import { CreditUtilizationView } from './credit-utilization/credit-utilization/credit-utilization.view';
import { CreditUtilizationCardComponent } from './credit-utilization/components/credit-utilization-card/credit-utilization-card.component';
import { CreditUtilizationHeaderComponent } from './credit-utilization/components/credit-utilization-header/credit-utilization-header.component';
import { CreditUtilizationInfoComponent } from './credit-utilization/components/credit-utilization-info/credit-utilization-info.component';
import { CreditUtilizationTotalComponent } from './credit-utilization/components/credit-utilization-total/credit-utilization-total.component';
import { CreditUtilizationPercentagesComponent } from './credit-utilization/components/credit-utilization-percentages/credit-utilization-percentages.component';
import { CreditUtilizationAvailableComponent } from './credit-utilization/components/credit-utilization-available/credit-utilization-available.component';
import { CreditUtilizationNoCardsHeaderComponent } from './credit-utilization/components/credit-utilization-no-cards-header/credit-utilization-no-cards-header.component';
import { CreditUtilizationNoCardsTextComponent } from './credit-utilization/components/credit-utilization-no-cards-text/credit-utilization-no-cards-text.component';
import { CreditUtilizationColorPercentComponent } from './credit-utilization/components/credit-utilization-color-percent/credit-utilization-color-percent.component';
import { CreditMixHeaderComponent } from './credit-mix/components/credit-mix-header/credit-mix-header.component';
import { CreditMixRatingComponent } from './credit-mix/components/credit-mix-rating/credit-mix-rating.component';
import { CreditMixBadgesComponent } from './credit-mix/components/credit-mix-badges/credit-mix-badges.component';
import { CreditMixIconsComponent } from './credit-mix/components/credit-mix-icons/credit-mix-icons.component';
import { CreditMixSubHeadersComponent } from './credit-mix/components/credit-mix-sub-headers/credit-mix-sub-headers.component';
import { CreditMixCardSectionComponent } from './credit-mix/components/credit-mix-card-section/credit-mix-card-section.component';
import { CreditMixRecommendationComponent } from './credit-mix/components/credit-mix-recommendation/credit-mix-recommendation.component';
import { CreditMixFilterPipePipe } from './credit-mix/credit-mix-filter-pipe/credit-mix-filter-pipe.pipe';
import { CreditMixCardComponent } from './credit-mix/components/credit-mix-card/credit-mix-card.component';
import { DashboardCarouselComponent } from './dashboard-enrolled/components/dashboard-carousel/dashboard-carousel.component';
import { ReferralDashboardView } from './referral-dashboard/referral-dashboard/referral-dashboard.view';
import { ReferralDashboardPureView } from './referral-dashboard/referral-dashboard-pure/referral-pure.view';
import { ReferralHeaderComponent } from './referral-dashboard/components/referral-header/referral-header.component';
import { ReferralBannerComponent } from './referral-dashboard/components/referral-banner/referral-banner.component';
import { ReferralEarningsComponent } from './referral-dashboard/components/referral-earnings/referral-earnings.component';
import { ReferralAmountLinkComponent } from './referral-dashboard/components/referral-amount-link/referral-amount-link.component';
import { ReferralBodyTextComponent } from './referral-dashboard/components/referral-body-text/referral-body-text.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { SettingsWarningComponent } from './settings/components/settings-warning/settings-warning.component';
import { DashboardAdsCarouselComponent } from './dashboard-enrolled/components/dashboard-ads-carousel/dashboard-ads-carousel.component';
import { CreditUtilizationAssessmentComponent } from './credit-utilization/components/credit-utilization-assessment/credit-utilization-assessment.component';
import { DashboardCreditScoreErrorComponent } from './dashboard-enrolled/components/dashboard-credit-score-error/dashboard-credit-score-error.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker/progress-tracker.component';
import { ProgressTrackerPureComponent } from './progress-tracker/progress-tracker-pure/progress-tracker-pure.component';
import { FutureScoreCardComponent } from './progress-tracker/components/future-score-card/future-score-card.component';
import { ProgressTrackerHeaderComponent } from './progress-tracker/components/progress-tracker-header/progress-tracker-header.component';
import { ProgressTrackerDisclaimerComponent } from './progress-tracker/components/progress-tracker-disclaimer/progress-tracker-disclaimer.component';
import { ProgressTrackerGoalCardComponent } from './progress-tracker/components/progress-tracker-goal-card/progress-tracker-goal-card.component';
import { DashboardReportMissingComponent } from './dashboard-enrolled/components/dashboard-report-missing/dashboard-report-missing.component';

const modules = [
  CommonModule,
  SharedComponentsModule,
  SharedPipesModule,
  NgxMaskModule,
  DisputesModule,
  CreditReportModule,
  DashboardRoutingModule,
  SharedDirectivesModule,
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
  SettingsWarningComponent,
  OptionPasswordResetComponent,
  OptionDeactivateComponent,
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
  CreditUtilizationColorPercentComponent,
  CreditMixHeaderComponent,
  CreditMixView,
  CreditMixPureView,
  DashboardCarouselComponent,
  CreditMixRatingComponent,
  CreditMixBadgesComponent,
  CreditMixIconsComponent,
  CreditMixSubHeadersComponent,
  CreditMixCardSectionComponent,
  CreditMixRecommendationComponent,
  DashboardCarouselComponent,
  CreditMixFilterPipePipe,
  CreditMixCardComponent,
  ReferralDashboardPureView,
  ReferralDashboardView,
  ReferralHeaderComponent,
  ReferralBannerComponent,
  ReferralEarningsComponent,
  ReferralAmountLinkComponent,
  ReferralBodyTextComponent,
  DashboardAdsCarouselComponent,
  DashboardCreditScoreErrorComponent,
  CreditUtilizationAssessmentComponent,
  ProgressTrackerComponent,
  ProgressTrackerPureComponent,
  FutureScoreCardComponent,
  ProgressTrackerHeaderComponent,
  ProgressTrackerDisclaimerComponent,
  ProgressTrackerGoalCardComponent,
  DashboardReportMissingComponent,
];

const pipes = [AccountStatusPipe];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [...modules],
  exports: [...components],
})
export class DashboardModule {}
