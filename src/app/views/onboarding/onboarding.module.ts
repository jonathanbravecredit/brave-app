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
import { KycIdverificationPureComponent } from '@views/onboarding/kyc-idverification/kyc-idverification-pure/kyc-idverification-pure.component';
import { KycIdverificationComponent } from '@views/onboarding/kyc-idverification/kyc-idverification/kyc-idverification.component';
import { KycErrorValidationComponent } from './kyc-exceptions/components/kyc-error-validation/kyc-error-validation.component';
import { KycExceptionsView } from './kyc-exceptions/kyc-exceptions/kyc-exceptions.view';
import { KycExceptionsPureView } from './kyc-exceptions/kyc-exceptions-pure/kyc-exceptions-pure.view';
import { KycErrorComponent } from '@views/onboarding/kyc-exceptions/components/kyc-error/kyc-error.component';
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
import { KycRetryComponent } from '@views/onboarding/kyc-retry/kyc-retry/kyc-retry.component';
import { KycRetryPureComponent } from '@views/onboarding/kyc-retry/kyc-retry-pure/kyc-retry-pure.component';

// SERVICES
import { OnboardingService } from '@views/onboarding/onboarding.service';

// PIPES
import { KycKbaquestionsPipe } from '@views/onboarding/kyc-kbaquestions/kyc-kbaquestions/kyc-kbaquestions.pipe';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { KycGoalChoiceComponent } from '@views/onboarding/kyc-goal-choice/kyc-goal-choice/kyc-goal-choice.component';
import { KycGoalChoicePureComponent } from './kyc-goal-choice/kyc-goal-choice-pure/kyc-goal-choice-pure.component';
import { KycGoalChoiceCardComponent } from './kyc-goal-choice/components/kyc-goal-choice-card/kyc-goal-choice-card.component';
import { KycGoalChoiceHeaderComponent } from './kyc-goal-choice/components/kyc-goal-choice-header/kyc-goal-choice-header.component';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';

const components = [
  OnboardingComponent,
  KycBaseComponent,
  KycAddressComponent,
  KycAddressPureComponent,
  KycCongratulationsComponent,
  KycCongratulationsPureComponent,
  KycIdverificationComponent,
  KycIdverificationPureComponent,
  KycErrorComponent,
  KycErrorValidationComponent,
  KycExceptionsView,
  KycExceptionsPureView,
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
  KycRetryComponent,
  KycRetryPureComponent,
  KycGoalChoiceComponent,
  KycGoalChoicePureComponent,
  KycGoalChoiceCardComponent,
  KycGoalChoiceHeaderComponent,
];

const pipes = [KycKbaquestionsPipe];

const services = [OnboardingService];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, SharedComponentsModule, SharedPipesModule, SharedDirectivesModule, OnboardingRoutingModule],
  exports: [...components, ...pipes],
  providers: [...services],
})
export class OnboardingModule {}
