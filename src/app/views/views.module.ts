// MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { AuthenticationModule } from '@views/authentication/authentication.module';
import { ComplianceModule } from '@views/compliance/compliance.module';
import { DashboardModule } from '@views/dashboard/dashboard.module';
import { OnboardingModule } from '@views/onboarding/onboarding.module';
import { NgxMaskModule } from 'ngx-mask';
import { SharedDirectivesModule } from '@shared/directives/shared-directives.module';
import { DataBreachesModule } from '@views/dashboard/data-breaches/data-breaches.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    SharedPipesModule,
    SharedDirectivesModule,
    NgxMaskModule,
    AuthenticationModule,
    ComplianceModule,
    DashboardModule,
    OnboardingModule,
    RouterModule,
    DataBreachesModule
  ],
  exports: [],
  providers: [],
})
export class ViewsModule {}
