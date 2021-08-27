import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { AuthenticationComponent } from '@views/authentication/authentication.component';
import { AuthenticationRoutingModule } from '@views/authentication/authentication.routing';
import { SigninComponent } from '@views/authentication/signin/signin/signin.component';
import { SigninPureComponent } from '@views/authentication/signin/signin-pure/signin-pure.component';
import { SigninRedirectComponent } from '@views/authentication/signin-redirect/signin-redirect.component';
import { SignupErrorValidationComponent } from '@views/authentication/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/authentication/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/authentication/signup-knowyou/signup-knowyou.component';
import { SignupResendComponent } from '@views/authentication/signup-resend/signup-resend.component';
import { SignupThankyouPureComponent } from '@views/authentication/signup-thankyou/signup-thankyou-pure/signup-thankyou-pure.component';
import { SignupThankyouComponent } from '@views/authentication/signup-thankyou/signup-thankyou/signup-thankyou.component';
import { SignupPureComponent } from '@views/authentication/signup/signup-pure/signup-pure.component';
import { SignupComponent } from '@views/authentication/signup/signup/signup.component';
import { SigninForgotComponent } from '@views/authentication/signin-forgot/signin-forgot/signin-forgot.component';
import { SigninForgotPureComponent } from './signin-forgot/signin-forgot-pure/signin-forgot-pure.component';
import { SigninRedirectNewuserComponent } from './signin-redirect-newuser/signin-redirect-newuser/signin-redirect-newuser.component';
import { SigninRedirectNewuserPureComponent } from './signin-redirect-newuser/signin-redirect-newuser-pure/signin-redirect-newuser-pure.component';

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
  SigninForgotPureComponent,
  SigninRedirectComponent,
  SigninRedirectNewuserComponent,
  SigninRedirectNewuserPureComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedComponentsModule, AuthenticationRoutingModule],
  exports: [...components],
})
export class AuthenticationModule {}
