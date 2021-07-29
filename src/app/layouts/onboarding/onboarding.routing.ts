import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome/kyc-welcome.component';
import { KycAddressComponent } from '@views/kyc-address/kyc-address/kyc-address.component';
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn/kyc-ssn.component';
import { KycSsnFullComponent } from '@views/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';
import { KycPhonenumberComponent } from '@views/kyc-phonenumber/kyc-phonenumber/kyc-phonenumber.component';
import { KycIdverificationComponent } from '@views/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { KycKbaquestionsComponent } from '@views/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycWelcomebackComponent } from '@views/kyc-welcomeback/kyc-welcomeback/kyc-welcomeback.component';
import { KycCongratulationsComponent } from '@views/kyc-congratulations/kyc-congratulations/kyc-congratulations.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { KycErrorComponent } from '@views/kyc-error/kyc-error.component';

// our routing scheme ===> layout/view/subview/subview2...
const OnboardingRoutes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'returning',
        pathMatch: 'full',
      },
      {
        path: 'name',
        component: KycWelcomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'address',
        component: KycAddressComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'identity',
        component: KycSsnComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'identityfull',
        component: KycSsnFullComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'verify',
        component: KycPhonenumberComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'code',
        component: KycIdverificationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'kba',
        component: KycKbaquestionsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'congratulations',
        component: KycCongratulationsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'returning',
        component: KycWelcomebackComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'error',
        component: KycErrorComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(OnboardingRoutes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
