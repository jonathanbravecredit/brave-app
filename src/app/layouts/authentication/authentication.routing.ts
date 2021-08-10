import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { SigninForgotComponent } from '@views/authentication/signin-forgot/signin-forgot.component';
import { SigninRedirectComponent } from '@views/authentication/signin-redirect/signin-redirect.component';
import { SigninComponent } from '@views/authentication/signin/signin/signin.component';
import { SignupErrorValidationComponent } from '@views/authentication/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/authentication/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/authentication/signup-knowyou/signup-knowyou.component';
import { SignupResendComponent } from '@views/authentication/signup-resend/signup-resend.component';
import { SignupThankyouComponent } from '@views/authentication/signup-thankyou/signup-thankyou/signup-thankyou.component';
import { SignupComponent } from '@views/authentication/signup/signup/signup.component';

const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'forgot', component: SigninForgotComponent },
      { path: 'redirect', component: SigninRedirectComponent },
      { path: 'thankyou', component: SignupThankyouComponent },
      { path: 'name', component: SignupKnowyouComponent },
      { path: 'error', component: SignupErrorComponent },
      { path: 'invalid', component: SignupErrorValidationComponent },
      { path: 'resend', component: SignupResendComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AuthenticationRoutes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
