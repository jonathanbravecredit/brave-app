import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { KycWelcomeComponent } from '@views/kyc-welcome-temp/kyc-welcome/kyc-welcome.component';
import { SignupErrorValidationComponent } from '@views/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/signup-knowyou/signup-knowyou.component';
import { SignupThankyouComponent } from '@views/signup-thankyou/signup-thankyou.component';
import { SignupComponent } from '@views/signup/signup.component';
import { SignupResendComponent } from '@views/signup-resend/signup-resend.component';
import { SigninComponent } from './signin/signin.component';
import { KycAddressComponent } from '@views/kyc-address/kyc-address.component';
import { KycCongratulationsComponent } from '@views/kyc-congratulations/kyc-congratulations.component';
import { KycIdverificationComponent } from '@views/kyc-idverification/kyc-idverification.component';
import { KycKbaquestionsComponent } from '@views/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycPhonenumberComponent } from '@views/kyc-phonenumber/kyc-phonenumber.component';
import { KycSsnComponent } from '@views/kyc-ssn-temp/kyc-ssn/kyc-ssn.component';
import { KycSsnFullComponent } from '@views/kyc-ssn-full-temp/kyc-ssn-full/kyc-ssn-full.component';
import { KycWelcomebackComponent } from '@views/kyc-welcomeback-temp/kyc-welcomeback/kyc-welcomeback.component';
import { SigninForgotComponent } from './signin-forgot/signin-forgot.component';
import { CompliancePrivacyComponent } from './compliance-privacy/compliance-privacy.component';
import { ComplianceTosComponent } from './compliance-tos/compliance-tos.component';
import { KycSsnPureComponent } from './kyc-ssn-temp/kyc-ssn-pure/kyc-ssn-pure.component';
import { KycWelcomePureComponent } from '@views/kyc-welcome-temp/kyc-welcome-pure/kyc-welcome-pure.component';
import { KycWelcomebackPureComponent } from '@views/kyc-welcomeback-temp/kyc-welcomeback-pure/kyc-welcomeback-pure.component';
import { KycBaseComponent } from './kyc-base/kyc-base.component';
import { KycSsnFullPureComponent } from '@views/kyc-ssn-full-temp/kyc-ssn-full-pure/kyc-ssn-full-pure.component';

const views = [
  SignupComponent,
  SignupErrorComponent,
  SignupErrorValidationComponent,
  SignupKnowyouComponent,
  SignupThankyouComponent,
  SignupResendComponent,
  SigninComponent,
  SigninForgotComponent,
  KycBaseComponent,
  KycAddressComponent,
  KycCongratulationsComponent,
  KycIdverificationComponent,
  KycKbaquestionsComponent,
  KycPhonenumberComponent,
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
];

// const services = [
// ]

@NgModule({
  declarations: [...views],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    RouterModule,
  ],
  exports: [...views],
  providers: [],
})
export class ViewsModule {}
