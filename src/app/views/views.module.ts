// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

// PIPES
import { KycKbaquestionsPipe } from './kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.pipe';

// COMPONENTS
import { SigninComponent } from './signin/signin/signin.component';
import { SigninPureComponent } from './signin/signin-pure/signin-pure.component';
import { SigninForgotComponent } from './signin-forgot/signin-forgot.component';
import { SignupComponent } from '@views/signup/signup/signup.component';
import { SignupPureComponent } from './signup/signup-pure/signup-pure.component';
import { SignupErrorValidationComponent } from '@views/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/signup-knowyou/signup-knowyou.component';
import { SignupThankyouComponent } from '@views/signup-thankyou/signup-thankyou.component';
import { SignupResendComponent } from '@views/signup-resend/signup-resend.component';
import { KycBaseComponent } from './kyc-base/kyc-base.component';
import { KycAddressComponent } from '@views/kyc-address/kyc-address/kyc-address.component';
import { KycAddressPureComponent } from '@views/kyc-address/kyc-address-pure/kyc-address-pure.component';
import { KycCongratulationsComponent } from '@views/kyc-congratulations/kyc-congratulations/kyc-congratulations.component';
import { KycCongratulationsPureComponent } from './kyc-congratulations/kyc-congratulations-pure/kyc-congratulations-pure.component';
import { KycIdverificationComponent } from '@views/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { KycIdverificationPureComponent } from './kyc-idverification/kyc-idverification-pure/kyc-idverification-pure.component';
import { KycKbaquestionsComponent } from '@views/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycKbaquestionsPureComponent } from './kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';
import { KycPhonenumberComponent } from '@views/kyc-phonenumber/kyc-phonenumber/kyc-phonenumber.component';
import { KycPhonenumberPureComponent } from './kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import { KycSsnPureComponent } from './kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { KycSsnFullComponent } from '@views/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';
import { KycSsnFullPureComponent } from '@views/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome/kyc-welcome.component';
import { KycWelcomePureComponent } from '@views/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';
import { KycWelcomebackComponent } from '@views/kyc-welcomeback/kyc-welcomeback/kyc-welcomeback.component';
import { KycWelcomebackPureComponent } from '@views/kyc-welcomeback/kyc-welcomeback-pure/kyc-welcomeback-pure.component';
import { CompliancePrivacyComponent } from './compliance-privacy/compliance-privacy.component';
import { ComplianceTosComponent } from './compliance-tos/compliance-tos.component';
import { KycErrorComponent } from './kyc-error/kyc-error.component';
import { DashboardInitComponent } from './dashboard-init/dashboard-init.component';
import { SigninRedirectComponent } from './signin-redirect/signin-redirect.component';
import { NegativeAccountInitialComponent } from './negative-account/negative-account-initial/negative-account-initial.component';
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn/kyc-ssn.component';
import { NegativeAccountInitialPureComponent } from './negative-account/negative-account-initial-pure/negative-account-initial-pure.component';
import { CreditReportPureComponent } from '@views/credit-report/credit-report-pure/credit-report-pure.component';
import { CreditReportComponent } from '@views/credit-report/credit-report/credit-report.component';
import { TradelinesComponent } from './tradelines/tradelines/tradelines.component';
import { TradelinesPureComponent } from './tradelines/tradelines-pure/tradelines-pure.component';
import { DisputesPersonalView } from './disputes-personal/disputes-personal/disputes-personal.view';
import { DisputesPersonalPureView } from './disputes-personal/disputes-personal-pure/disputes-personal-pure.view';
import { DisputesPublicPureView } from './disputes-public/disputes-public-pure/disputes-public-pure.view';
import { DisputesPublicView } from './disputes-public/disputes-public/disputes-public.view';
import { DisputesTradelinePureView } from './disputes-tradeline/disputes-tradeline-pure/disputes-tradeline-pure.view';
import { DisputesTradelineView } from './disputes-tradeline/disputes-tradeline/disputes-tradeline.view';
import { BaseExceptionPureView } from './exceptions/base-exception/base-exception-pure/base-exception-pure.view';
import { BaseExceptionView } from './exceptions/base-exception/base-exception/base-exception.view';
import { ParseRiskScorePipe } from './credit-report/credit-report/parse-risk-score.pipe';
import { DisputesErrorComponent } from './disputes-error/disputes-error/disputes-error.component';
import { DisputesErrorPureComponent } from './disputes-error/disputes-error-pure/disputes-error-pure.component';
import { DisputeFindingsView } from './dashboard/disputes/dispute-findings/dispute-findings.view';
import { DisputeFindingsPureView } from './dashboard/disputes/dispute-findings-pure/dispute-findings-pure.view';
import { DisputesOverviewInitialPureView, DisputesOverviewInitialView } from './dashboard/disputes/disputes-overview';

const views = [
  SignupComponent,
  SignupPureComponent,
  SignupErrorComponent,
  SignupErrorValidationComponent,
  SignupKnowyouComponent,
  SignupThankyouComponent,
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
  DisputesOverviewInitialView
];

const pipes = [KycKbaquestionsPipe, ParseRiskScorePipe];

@NgModule({
  declarations: [...views, ...pipes],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedComponentsModule, SharedPipesModule, RouterModule],
  exports: [...views, ...pipes],
  providers: [],
})
export class ViewsModule {}
