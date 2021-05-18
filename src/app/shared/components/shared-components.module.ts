import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// componenents
import { SignUpComponent } from '@shared/components/auth/sign-up/sign-up.component';
import { SignInComponent } from '@shared/components/auth/sign-in/sign-in.component';
import { FilledOnlytextButtonComponent } from './buttons/filled-onlytext-button/filled-onlytext-button.component';
import { LinksOnlytextButtonComponent } from './buttons/links-onlytext-button/links-onlytext-button.component';
import { OutlineOnlytextButtonComponent } from './buttons/outline-onlytext-button/outline-onlytext-button.component';
import { OutlineInputComponent } from './inputs/outline-input/outline-input.component';
import { OutlineOnecolumnFormComponent } from './forms/outline-onecolumn-form/outline-onecolumn-form.component';

// pipes
import { FilledOnlytextButtonPipe } from './buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonPipe } from './buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineOnlytextButtonPipe } from './buttons/outline-onlytext-button/outline-onlytext-button.pipe';
import { OutlineInputPipe } from './inputs/outline-input/outline-input.pipe';

const components = [
  SignInComponent,
  SignUpComponent,
  FilledOnlytextButtonComponent,
  LinksOnlytextButtonComponent,
  OutlineOnlytextButtonComponent,
  OutlineInputComponent,
  OutlineOnecolumnFormComponent,
];

// component specific pipes only
const pipes = [
  FilledOnlytextButtonPipe,
  LinksOnlytextButtonPipe,
  OutlineOnlytextButtonPipe,
  OutlineInputPipe,
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [...components, ...pipes],
})
export class SharedComponentsModule {}
