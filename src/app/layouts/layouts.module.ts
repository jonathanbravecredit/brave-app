import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from '@layouts/authentication/authentication.component';
import { OnboardingComponent } from '@layouts/onboarding/onboarding.component';
import { RouterModule } from '@angular/router';

const components = [AuthenticationComponent, OnboardingComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class LayoutsModule {}
