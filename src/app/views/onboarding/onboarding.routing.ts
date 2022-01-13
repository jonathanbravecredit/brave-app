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
import { KycRetryComponent } from '@views/onboarding/kyc-retry/kyc-retry/kyc-retry.component';
import { ActiveGuard } from '@shared/guards/active.guard';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';
const onboarding = routes.root.onboarding;

// our routing scheme ===> layout/view/subview/subview2...
const OnboardingRoutes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    canActivate: [ActiveGuard, AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'returning',
        pathMatch: 'full',
      },
      {
        path: `${onboarding.name.segment}`,
        component: KycWelcomeComponent,
        canDeactivate: [KycDeactivateGuard],
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.address.segment}`,
        component: KycAddressComponent,
        canDeactivate: [KycDeactivateGuard],
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.identity.segment}`,
        component: KycSsnComponent,
        canDeactivate: [KycDeactivateGuard],
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.identityfull.segment}`,
        component: KycSsnFullComponent,
        canDeactivate: [KycDeactivateGuard],
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.verify.segment}`,
        component: KycPhonenumberComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.code.segment}`,
        component: KycIdverificationComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.kba.segment}`,
        component: KycKbaquestionsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.congratulations.segment}`,
        component: KycCongratulationsComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.returning.segment}`,
        component: KycWelcomebackComponent,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.error.segment}`,
        component: KycExceptionsView,
        canActivate: [ActiveGuard, AuthGuard],
      },
      {
        path: `${onboarding.retry.segment}`,
        component: KycRetryComponent,
        canActivate: [ActiveGuard, AuthGuard],
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
