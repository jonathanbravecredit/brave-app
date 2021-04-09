import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '@shared/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '@shared/components/auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [SignInComponent, SignUpComponent];

@NgModule({
  declarations: [...components],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [...components],
})
export class SharedComponentsModule {}
