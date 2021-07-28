import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-phone-form',
  templateUrl: './outline-phone-form.component.html',
  providers: [{ provide: 'name', useValue: 'phone-form' }],
})
export class OutlinePhoneFormComponent extends BaseFormComponent {
  public phoneConfig: IOutlineInputeConfig = {
    size: 'sm',
    type: 'tel',
    label: 'Phone Number',
    placeholder: 'Phone Number',
    autocomplete: 'phone',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'phone-form');
  }
}
