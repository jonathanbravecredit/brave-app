import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from '@layouts/authentication/authentication.component';
import { OnboardingComponent } from '@layouts/onboarding/onboarding.component';
import { RouterModule } from '@angular/router';
import { KycLayoutComponent } from '@layouts/onboarding/kyc-layout/kyc-layout.component';
import { SignupLayoutComponent } from '@layouts/onboarding/signup-layout/signup-layout.component';

const layouts = [
  AuthenticationComponent,
  OnboardingComponent,
  KycLayoutComponent,
  SignupLayoutComponent,
];

@NgModule({
  declarations: [...layouts],
  imports: [CommonModule, RouterModule],
  exports: [...layouts],
})
export class LayoutsModule {}
