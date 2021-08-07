import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { AuthenticationComponent } from '@views/authentication/authentication.component';
import { AuthenticationRoutingModule } from '@views/authentication/authentication.routing';
import { SigninComponent } from '@views/authentication/signin/signin/signin.component';
import { SigninPureComponent } from '@views/authentication/signin/signin-pure/signin-pure.component';
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

const components = [
  AuthenticationComponent,
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
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, AuthenticationRoutingModule],
  exports: [...components],
})
export class AuthenticationModule {}
