// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { OnboardingComponent } from '@views/onboarding/onboarding.component';
import { OnboardingRoutingModule } from '@views/onboarding/onboarding.routing';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { KycBaseComponent } from '@views/onboarding/kyc-base/kyc-base.component';
import { KycCongratulationsPureComponent } from '@views/onboarding/kyc-congratulations/kyc-congratulations-pure/kyc-congratulations-pure.component';
import { KycCongratulationsComponent } from '@views/onboarding/kyc-congratulations/kyc-congratulations/kyc-congratulations.component';
import { KycErrorComponent } from '@views/onboarding/kyc-error/kyc-error.component';
import { KycIdverificationPureComponent } from '@views/onboarding/kyc-idverification/kyc-idverification-pure/kyc-idverification-pure.component';
import { KycIdverificationComponent } from '@views/onboarding/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { KycErrorValidationComponent } from './kyc-error-validation/kyc-error-validation.component';
import { KycKbaquestionsPureComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions-pure/kyc-kbaquestions-pure.component';
import { KycKbaquestionsComponent } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.component';
import { KycPhonenumberPureComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber-pure/kyc-phonenumber-pure.component';
import { KycPhonenumberComponent } from '@views/onboarding/kyc-phonenumber/kyc-phonenumber/kyc-phonenumber.component';
import { KycSsnFullPureComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full-pure/kyc-ssn-full-pure.component';
import { KycSsnFullComponent } from '@views/onboarding/kyc-ssn-full/kyc-ssn-full/kyc-ssn-full.component';
import { KycSsnPureComponent } from '@views/onboarding/kyc-ssn/kyc-ssn-pure/kyc-ssn-pure.component';
import { KycSsnComponent } from '@views/onboarding/kyc-ssn/kyc-ssn/kyc-ssn.component';
import { KycWelcomePureComponent } from '@views/onboarding/kyc-welcome/kyc-welcome-pure/kyc-welcome-pure.component';
import { KycWelcomeComponent } from '@views/onboarding/kyc-welcome/kyc-welcome/kyc-welcome.component';
import { KycWelcomebackPureComponent } from '@views/onboarding/kyc-welcomeback/kyc-welcomeback-pure/kyc-welcomeback-pure.component';
import { KycWelcomebackComponent } from '@views/onboarding/kyc-welcomeback/kyc-welcomeback/kyc-welcomeback.component';
import { KycAddressComponent } from '@views/onboarding/kyc-address/kyc-address/kyc-address.component';
import { KycAddressPureComponent } from '@views/onboarding/kyc-address/kyc-address-pure/kyc-address-pure.component';

// SERVICES
import { OnboardingService } from '@views/onboarding/onboarding.service';

// PIPES
import { KycKbaquestionsPipe } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.pipe';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';

const components = [
  OnboardingComponent,
  KycBaseComponent,
  KycAddressComponent,
  KycAddressPureComponent,
  KycCongratulationsComponent,
  KycCongratulationsPureComponent,
  KycIdverificationComponent,
  KycIdverificationPureComponent,
  KycErrorValidationComponent,
  KycKbaquestionsComponent,
  KycKbaquestionsPureComponent,
  KycPhonenumberComponent,
  KycPhonenumberPureComponent,
  KycSsnComponent,
  KycSsnPureComponent,
  KycSsnFullComponent,
  KycSsnFullPureComponent,
  KycWelcomeComponent,
  KycWelcomePureComponent,
  KycWelcomebackComponent,
  KycWelcomebackPureComponent,
  KycErrorComponent,
];

const pipes = [KycKbaquestionsPipe];

const services = [OnboardingService];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, OnboardingRoutingModule],
  exports: [...components, ...pipes],
  providers: [...services],
})
export class OnboardingModule {}
