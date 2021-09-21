import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { KycAddressComponent } from '@views/onboarding/kyc-address/kyc-address/kyc-address.component';
import { KycCongratulationsComponent } from '@views/onboarding/kyc-congratulations/kyc-congratulations/kyc-congratulations.component';
import { KycIdverificationComponent } from '@views/onboarding/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { KycKbaquestionsComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycPhonenumberComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber/kyc-phonenumber.component';
import { KycSsnFullComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';
import { KycSsnComponent } from '@views/onboarding/kyc-ssn/kyc-ssn/kyc-ssn.component';
import { KycWelcomeComponent } from '@views/onboarding/kyc-welcome/kyc-welcome/kyc-welcome.component';
import { KycWelcomebackComponent } from '@views/onboarding/kyc-welcomeback/kyc-welcomeback/kyc-welcomeback.component';
import { KycDeactivateGuard } from '@views/onboarding/kyc-deactivate-guard/kyc-deactivate.guard';
import { KycExceptionsView } from '@views/onboarding/kyc-exceptions/kyc-exceptions/kyc-exceptions.view';
import { KycRetryComponent } from '@views/onboarding/kyc-retry/kyc-retry.component';

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
        canDeactivate: [KycDeactivateGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'address',
        component: KycAddressComponent,
        canDeactivate: [KycDeactivateGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'identity',
        component: KycSsnComponent,
        canDeactivate: [KycDeactivateGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'identityfull',
        component: KycSsnFullComponent,
        canDeactivate: [KycDeactivateGuard],
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
        component: KycExceptionsView,
        canActivate: [AuthGuard],
      },
      {
        path: 'retry',
        component: KycRetryComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(OnboardingRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class OnboardingRoutingModule {}
