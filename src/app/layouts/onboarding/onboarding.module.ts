import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from '@layouts/onboarding/onboarding.component';
import { OnboardingRoutingModule } from '@layouts/onboarding/onboarding.routing';
import { ViewsModule } from '@views/views.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

const components = [OnboardingComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ViewsModule,
    OnboardingRoutingModule,
  ],
  exports: [...components],
})
export class OnboardingModule {}
