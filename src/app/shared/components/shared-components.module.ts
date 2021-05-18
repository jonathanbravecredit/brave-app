import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '@shared/components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '@shared/components/auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilledOnlytextButtonComponent } from './buttons/filled-onlytext-button/filled-onlytext-button.component';
import { LinksOnlytextButtonComponent } from './buttons/links-onlytext-button/links-onlytext-button.component';
import { OutlineOnlytextButtonComponent } from './buttons/outline-onlytext-button/outline-onlytext-button.component';
import { FilledOnlytextButtonPipe } from './buttons/filled-onlytext-button/filled-onlytext-button.pipe';
import { LinksOnlytextButtonPipe } from './buttons/links-onlytext-button/links-onlytext-button.pipe';
import { OutlineOnlytextButtonPipe } from './buttons/outline-onlytext-button/outline-onlytext-button.pipe';

const components = [
  SignInComponent,
  SignUpComponent,
  FilledOnlytextButtonComponent,
  LinksOnlytextButtonComponent,
  OutlineOnlytextButtonComponent,
];
const pipes = [
  FilledOnlytextButtonPipe,
  LinksOnlytextButtonPipe,
  OutlineOnlytextButtonPipe,
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  exports: [...components, ...pipes],
})
export class SharedComponentsModule {}
