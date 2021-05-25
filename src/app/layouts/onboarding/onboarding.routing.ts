import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome.component';
import { KycAddressComponent } from '@views/kyc-address/kyc-address.component';
import { KycSsnComponent } from '@views/kyc-ssn/kyc-ssn.component';
import { KycSsnFullComponent } from '@views/kyc-ssn-full/kyc-ssn-full.component';
import { KycPhonenumberComponent } from '@views/kyc-phonenumber/kyc-phonenumber.component';
import { KycIdverificationComponent } from '@views/kyc-idverification/kyc-idverification.component';
import { KycKbaquestionsComponent } from '@views/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycWelcomebackComponent } from '@views/kyc-welcomeback/kyc-welcomeback.component';
import { KycCongratulationsComponent } from '@views/kyc-congratulations/kyc-congratulations.component';

const OnboardingRoutes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      { path: 'name', component: KycWelcomeComponent },
      { path: 'address', component: KycAddressComponent },
      { path: 'identity', component: KycSsnComponent },
      { path: 'identityfull', component: KycSsnFullComponent },
      { path: 'verify', component: KycPhonenumberComponent },
      { path: 'code', component: KycIdverificationComponent },
      { path: 'kba', component: KycKbaquestionsComponent },
      { path: 'congratulations', component: KycCongratulationsComponent },
      { path: 'returning', component: KycWelcomebackComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(OnboardingRoutes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
