import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome.component';
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
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn.component';
import { KycSsnFullComponent } from '@views/kyc-ssn-full/kyc-ssn-full.component';
import { KycWelcomebackComponent } from '@views/kyc-welcomeback/kyc-welcomeback.component';

const views = [
  SignupComponent,
  SignupErrorComponent,
  SignupErrorValidationComponent,
  SignupKnowyouComponent,
  SignupThankyouComponent,
  SignupResendComponent,
  SigninComponent,
  KycAddressComponent,
  KycCongratulationsComponent,
  KycIdverificationComponent,
  KycKbaquestionsComponent,
  KycPhonenumberComponent,
  KycSsnComponent,
  KycSsnFullComponent,
  KycWelcomeComponent,
  KycWelcomebackComponent,
];

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
})
export class ViewsModule {}
