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

// COMPONENTS
import { BaseExceptionPureView } from './exceptions/base-exception/base-exception-pure/base-exception-pure.view';
import { BaseExceptionView } from './exceptions/base-exception/base-exception/base-exception.view';
import { NgxMaskModule } from 'ngx-mask';

const views = [BaseExceptionPureView, BaseExceptionView];

@NgModule({
  declarations: [...views],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    SharedPipesModule,
    NgxMaskModule,
    AuthenticationModule,
    ComplianceModule,
    DashboardModule,
    OnboardingModule,
    RouterModule,
  ],
  exports: [...views],
  providers: [],
})
export class ViewsModule {}
