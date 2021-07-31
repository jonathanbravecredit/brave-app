import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-verificationcode-form',
  templateUrl: './outline-verificationcode-form.component.html',
  providers: [{ provide: 'name', useValue: 'code-form' }],
})
export class OutlineVerificationcodeFormComponent extends BaseFormComponent {
  public codeConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: 'Code',
    placeholder: '5-digit Code',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'code-form');
  }
}
