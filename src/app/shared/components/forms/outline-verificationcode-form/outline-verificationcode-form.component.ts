import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { FilledSpinningButtonComponent } from '../../buttons/filled-spinning-button/filled-spinning-button.component';

@Component({
  selector: 'brave-outline-verificationcode-form',
  templateUrl: './outline-verificationcode-form.component.html',
  providers: [{ provide: 'name', useValue: 'code-form' }],
})
export class OutlineVerificationcodeFormComponent extends BaseFormComponent {
  @ViewChild("spinner") spinner: FilledSpinningButtonComponent | undefined;
  constructor(fb: FormBuilder) {
    super(fb, 'code-form');
  }
}
