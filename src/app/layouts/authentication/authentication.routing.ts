import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { SignupThankyouComponent } from '@views/signup-thankyou/signup-thankyou.component';
import { SignupKnowyouComponent } from '@views/signup-knowyou/signup-knowyou.component';
import { SignupErrorComponent } from '@views/signup-error/signup-error.component';
import { SignupErrorValidationComponent } from '@views/signup-error-validation/signup-error-validation.component';
import { SignupComponent } from '@views/signup/signup.component';
import { SignupResendComponent } from '@views/signup-resend/signup-resend.component';

const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'thankyou', component: SignupThankyouComponent },
      { path: 'name', component: SignupKnowyouComponent },
      { path: 'error', component: SignupErrorComponent },
      { path: 'invalid', component: SignupErrorValidationComponent },
      { path: 'resend', component: SignupResendComponent },
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(AuthenticationRoutes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
