import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';

@Component({
  selector: 'brave-outline-verificationcode-form',
  templateUrl: './outline-verificationcode-form.component.html',
  providers: [{ provide: 'name', useValue: 'code-form' }],
})
export class OutlineVerificationcodeFormComponent extends BaseFormComponent {
  constructor(fb: FormBuilder) {
    super(fb, 'code-form');
  }
}
