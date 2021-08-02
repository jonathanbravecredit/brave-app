// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

// PIPES
import { KycKbaquestionsPipe } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.pipe';

// COMPONENTS
import { SigninComponent } from './authentication/signin/signin/signin.component';
import { SigninPureComponent } from './authentication/signin/signin-pure/signin-pure.component';

import { KycAddressComponent } from '@views/onboarding/kyc-address/kyc-address/kyc-address.component';
import { KycAddressPureComponent } from '@views/onboarding/kyc-address/kyc-address-pure/kyc-address-pure.component';
import { CompliancePrivacyComponent } from './compliance/compliance-privacy/compliance-privacy.component';
import { DashboardInitComponent } from './dashboard/dashboard/dashboard-init/dashboard-init.component';
import { NegativeAccountInitialComponent } from './dashboard/snapshots/negative-account/negative-account-initial/negative-account-initial.component';
import { NegativeAccountInitialPureComponent } from './dashboard/snapshots/negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { CreditReportPureComponent } from '@views/dashboard/reports/credit-report/credit-report-pure/credit-report-pure.component';
import { CreditReportComponent } from '@views/dashboard/reports/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from './dashboard/reports/credit-report/tradelines/tradelines/tradelines.component';
import { TradelinesPureComponent } from './dashboard/reports/credit-report/tradelines/tradelines-pure/tradelines-pure.component';
import { BaseExceptionPureView } from './exceptions/base-exception/base-exception-pure/base-exception-pure.view';
import { BaseExceptionView } from './exceptions/base-exception/base-exception/base-exception.view';
import { ParseRiskScorePipe } from './dashboard/reports/credit-report/credit-report/parse-risk-score.pipe';
import { DisputesErrorComponent } from './dashboard/disputes/disputes-error/disputes-error/disputes-error.component';
import { DisputesErrorPureComponent } from './dashboard/disputes/disputes-error/disputes-error-pure/disputes-error-pure.component';
import { DisputeFindingsView } from './dashboard/disputes/disputes-findings/dispute-findings/dispute-findings.view';
import { DisputeFindingsPureView } from './dashboard/disputes/disputes-findings/dispute-findings-pure/dispute-findings-pure.view';
import {
  DisputesOverviewHistoryPureView,
  DisputesOverviewInitialPureView,
  DisputesOverviewInitialView,
  DisputesOverviewHistoryView,
} from './dashboard/disputes/disputes-overview';
import { SettingsOverviewPureView } from './dashboard/settings/settings-overview-pure/settings-overview-pure.view';
import { SettingsOverviewView } from './dashboard/settings/settings-overview/settings-overview.view';
import { CreditMixPureView } from './dashboard/snapshots/credit-mix/credit-mix-pure/credit-mix-pure.view';
import { CreditMixView } from './dashboard/snapshots/credit-mix/credit-mix/credit-mix.view';
import { DashboardUnenrolledComponent } from './dashboard/dashboard/dashboard-unenrolled/dashboard-unenrolled/dashboard-unenrolled.component';
import { DashboardEnrolledComponent } from './dashboard/dashboard/dashboard-enrolled/dashboard-enrolled/dashboard-enrolled.component';
import { DashboardEnrolledPureComponent } from '@views/dashboard/dashboard/dashboard-enrolled/dashboard-enrolled-pure/dashboard-enrolled-pure.component';
import { DashboardUnenrolledPureComponent } from '@views/dashboard/dashboard/dashboard-unenrolled/dashboard-unenrolled-pure/dashboard-unenrolled-pure.component';
import { PublicitemsView } from './dashboard/reports/credit-report/publicitems/publicitems/publicitems.view';
import { PublicitemsPureView } from './dashboard/reports/credit-report/publicitems/publicitems-pure/publicitems-pure.view';
import { PersonalitemsView } from './dashboard/reports/credit-report/personalitems/personalitems/personalitems.view';
import { PersonalitemsPureView } from './dashboard/reports/credit-report/personalitems/personalitems-pure/personalitems-pure.view';
import { ComplianceTosComponent } from '@views/compliance/compliance-tos/compliance-tos.component';
import { SigninForgotComponent } from '@views/authentication/signin-forgot/signin-forgot.component';
import { SigninRedirectComponent } from '@views/authentication/signin-redirect/signin-redirect.component';
import { SignupErrorValidationComponent } from '@views/authentication/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/authentication/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/authentication/signup-knowyou/signup-knowyou.component';
import { SignupResendComponent } from '@views/authentication/signup-resend/signup-resend.component';
import { SignupThankyouPureComponent } from '@views/authentication/signup-thankyou/signup-thankyou-pure/signup-thankyou-pure.component';
import { SignupThankyouComponent } from '@views/authentication/signup-thankyou/signup-thankyou/signup-thankyou.component';
import { SignupPureComponent } from '@views/authentication/signup/signup-pure/signup-pure.component';
import { SignupComponent } from '@views/authentication/signup/signup/signup.component';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycCongratulationsPureComponent } from '@views/onboarding/kyc-congratulations/kyc-congratulations-pure/kyc-congratulations-pure.component';
import { KycCongratulationsComponent } from '@views/onboarding/kyc-congratulations/kyc-congratulations/kyc-congratulations.component';
import { KycErrorComponent } from '@views/onboarding/kyc-error/kyc-error.component';
import { KycIdverificationPureComponent } from '@views/onboarding/kyc-idverification/kyc-idverification-pure/kyc-idverification-pure.component';
import { KycIdverificationComponent } from '@views/onboarding/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { KycKbaquestionsPureComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';
import { KycKbaquestionsComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycPhonenumberPureComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import { KycPhonenumberComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber/kyc-phonenumber.component';
import { KycSsnFullPureComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { KycSsnFullComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';
import { KycSsnPureComponent } from '@views/onboarding/kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { KycSsnComponent } from '@views/onboarding/kyc-ssn/kyc-ssn/kyc-ssn.component';
import { KycWelcomePureComponent } from '@views/onboarding/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';
import { KycWelcomeComponent } from '@views/onboarding/kyc-welcome/kyc-welcome/kyc-welcome.component';
import { KycWelcomebackPureComponent } from '@views/onboarding/kyc-welcomeback/kyc-welcomeback-pure/kyc-welcomeback-pure.component';
import { KycWelcomebackComponent } from '@views/onboarding/kyc-welcomeback/kyc-welcomeback/kyc-welcomeback.component';
import { DisputesPersonalPureView } from '@views/dashboard/disputes/disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { DisputesPersonalView } from '@views/dashboard/disputes/disputes-personal/disputes-personal/disputes-personal.view';
import { DisputesPublicPureView } from '@views/dashboard/disputes/disputes-public/disputes-public-pure/disputes-public-pure.view';
import { DisputesPublicView } from '@views/dashboard/disputes/disputes-public/disputes-public/disputes-public.view';
import { DisputesTradelinePureView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { DisputesTradelineView } from '@views/dashboard/disputes/disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { DisputesReconfirmView } from './dashboard/disputes/disputes-reconfirm/disputes-reconfirm/disputes-reconfirm.view';
import { DisputesReconfirmPureView } from './dashboard/disputes/disputes-reconfirm/disputes-reconfirm-pure/disputes-reconfirm-pure.view';
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

const views = [
  SignupComponent,
  SignupPureComponent,
  SignupErrorComponent,
  SignupErrorValidationComponent,
  SignupKnowyouComponent,
  SignupThankyouComponent,
  SignupThankyouPureComponent,
  SignupResendComponent,
  SigninComponent,
  SigninPureComponent,
  SigninForgotComponent,
  SigninRedirectComponent,
  KycBaseComponent,
  KycAddressComponent,
  KycAddressPureComponent,
  KycCongratulationsComponent,
  KycCongratulationsPureComponent,
  KycIdverificationComponent,
  KycIdverificationPureComponent,
  KycKbaquestionsComponent,
  KycKbaquestionsPureComponent,
  KycPhonenumberComponent,
  KycPhonenumberPureComponent,
  KycSsnComponent,
  KycSsnPureComponent,
  KycSsnFullComponent,
  KycSsnFullPureComponent,
  KycWelcomeComponent,
  KycWelcomePureComponent,
  KycWelcomebackComponent,
  KycWelcomebackPureComponent,
  KycErrorComponent,
  CompliancePrivacyComponent,
  ComplianceTosComponent,
  DashboardInitComponent,
  DashboardUnenrolledComponent,
  DashboardUnenrolledPureComponent,
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
  BaseExceptionPureView,
  BaseExceptionView,
  DisputesErrorComponent,
  DisputesErrorPureComponent,
  DisputeFindingsView,
  DisputeFindingsPureView,
  DisputesOverviewInitialPureView,
  DisputesOverviewInitialView,
  DisputesOverviewHistoryPureView,
  DisputesOverviewHistoryView,
  SettingsOverviewPureView,
  SettingsOverviewView,
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

const pipes = [KycKbaquestionsPipe, ParseRiskScorePipe];

@NgModule({
  declarations: [...views, ...pipes],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedComponentsModule, SharedPipesModule, RouterModule],
  exports: [...views, ...pipes],
  providers: [],
})
export class ViewsModule {}
