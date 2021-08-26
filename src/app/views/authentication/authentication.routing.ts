import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from '@views/authentication/authentication.component';
import { SigninForgotComponent } from '@views/authentication/signin-forgot/signin-forgot/signin-forgot.component';
import { SigninRedirectComponent } from '@views/authentication/signin-redirect/signin-redirect.component';
import { SigninComponent } from '@views/authentication/signin/signin/signin.component';
import { SignupErrorValidationComponent } from '@views/authentication/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/authentication/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/authentication/signup-knowyou/signup-knowyou.component';
import { SignupResendComponent } from '@views/authentication/signup-resend/signup-resend.component';
import { SignupThankyouComponent } from '@views/authentication/signup-thankyou/signup-thankyou/signup-thankyou.component';
import { SignupComponent } from '@views/authentication/signup/signup/signup.component';
import { RedirectGuard } from '@shared/guards/redirect.guard';
import { RedirectResolver } from '@shared/resolvers/redirect.resolver';

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
      { path: 'redirect', component: SigninRedirectComponent, resolve: RedirectResolver },
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
  providers: [RedirectResolver],
})
export class AuthenticationRoutingModule {}
