import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// componenents
import { SignUpComponent } from '@shared/components/auth/sign-up/sign-up.component';
import { SignInComponent } from '@shared/components/auth/sign-in/sign-in.component';
import { FilledOnlytextButtonComponent } from './buttons/filled-onlytext-button/filled-onlytext-button.component';
import { LinksOnlytextButtonComponent } from './buttons/links-onlytext-button/links-onlytext-button.component';
import { OutlineOnlytextButtonComponent } from './buttons/outline-onlytext-button/outline-onlytext-button.component';
import { OutlineInputComponent } from './inputs/outline-input/outline-input.component';
import { OutlineOnecolumnFormComponent } from './forms/outline-onecolumn-form/outline-onecolumn-form.component';
import { GoogleIconsigninButtonComponent } from './buttons/google-iconsignin-button/google-iconsignin-button.component';
import { FacebookOnlytextsigninButtonComponent } from './buttons/facebook-onlytextsignin-button/facebook-onlytextsignin-button.component';
import { SimpleSignupFormComponent } from './forms/simple-signup-form/simple-signup-form.component';
import { OutlineSelectInputComponent } from './inputs/outline-select-input/outline-select-input.component';
import { DateofbirthFormComponent } from './forms/dateofbirth-form/dateofbirth-form.component';
import { KnowYouFormComponent } from './forms/know-you-form/know-you-form.component';

// pipes
import { FilledOnlytextButtonPipe } from './buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonPipe } from './buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineOnlytextButtonPipe } from './buttons/outline-onlytext-button/outline-onlytext-button.pipe';
import { OutlineInputPipe } from './inputs/outline-input/outline-input.pipe';
import { OutlineSelectInputPipe } from './inputs/outline-select-input/outline-select-input.pipe';

const components = [
  SignInComponent,
  SignUpComponent,
  FilledOnlytextButtonComponent,
  LinksOnlytextButtonComponent,
  OutlineOnlytextButtonComponent,
  OutlineInputComponent,
  OutlineOnecolumnFormComponent,
  GoogleIconsigninButtonComponent,
  FacebookOnlytextsigninButtonComponent,
  SimpleSignupFormComponent,
  OutlineSelectInputComponent,
  DateofbirthFormComponent,
  KnowYouFormComponent,
];

// component specific pipes only
const pipes = [
  FilledOnlytextButtonPipe,
  LinksOnlytextButtonPipe,
  OutlineOnlytextButtonPipe,
  OutlineInputPipe,
  OutlineSelectInputPipe,
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  exports: [...components, ...pipes],
})
export class SharedComponentsModule {}
