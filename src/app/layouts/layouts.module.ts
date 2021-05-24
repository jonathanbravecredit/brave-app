import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from '@layouts/authentication/authentication.component';
import { OnboardingComponent } from '@layouts/onboarding/onboarding.component';
import { RouterModule } from '@angular/router';
import { KycLayoutComponent } from '@layouts/onboarding/kyc-layout/kyc-layout.component';
import { SignupLayoutComponent } from '@layouts/onboarding/signup-layout/signup-layout.component';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { ViewsModule } from '@views/views.module';

const layouts = [
  AuthenticationComponent,
  OnboardingComponent,
  KycLayoutComponent,
  SignupLayoutComponent,
];

@NgModule({
  declarations: [...layouts],
  imports: [CommonModule, ViewsModule, SharedComponentsModule, RouterModule],
  exports: [...layouts],
})
export class LayoutsModule {}
