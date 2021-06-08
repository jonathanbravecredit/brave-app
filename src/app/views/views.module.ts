import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
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
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn/kyc-ssn.component';
import { KycSsnPureComponent } from './kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { KycSsnFullComponent } from '@views/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';
import { KycSsnFullPureComponent } from '@views/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome/kyc-welcome.component';
import { KycWelcomePureComponent } from '@views/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';
import { KycWelcomebackComponent } from '@views/kyc-welcomeback/kyc-welcomeback/kyc-welcomeback.component';
import { KycWelcomebackPureComponent } from '@views/kyc-welcomeback/kyc-welcomeback-pure/kyc-welcomeback-pure.component';
import { CompliancePrivacyComponent } from './compliance-privacy/compliance-privacy.component';
import { ComplianceTosComponent } from './compliance-tos/compliance-tos.component';
import { DashboardInitComponent } from './dashboard-init/dashboard-init.component';
import { SigninRedirectComponent } from './signin-redirect/signin-redirect.component';
import { KycKbaquestionsPipe } from './kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.pipe';

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
  CompliancePrivacyComponent,
  ComplianceTosComponent,
  DashboardInitComponent
];

const pipes = [KycKbaquestionsPipe];

@NgModule({
  declarations: [...views, ...pipes],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    RouterModule,
  ],
  exports: [...views, ...pipes],
  providers: [],
})
export class ViewsModule {}
