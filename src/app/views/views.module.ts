import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycWelcomeComponent } from '@views/kyc-welcome/kyc-welcome.component';
import { SignupErrorValidationComponent } from '@views/signup-error-validation/signup-error-validation.component';
import { SignupErrorComponent } from '@views/signup-error/signup-error.component';
import { SignupKnowyouComponent } from '@views/signup-knowyou/signup-knowyou.component';
import { SignupThankyouComponent } from '@views/signup-thankyou/signup-thankyou.component';
import { SignupComponent } from '@views/signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

const components = [
  SignupComponent,
  SignupErrorComponent,
  SignupErrorValidationComponent,
  SignupKnowyouComponent,
  SignupThankyouComponent,
  KycWelcomeComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    RouterModule,
  ],
  exports: [...components],
})
export class ViewsModule {}
