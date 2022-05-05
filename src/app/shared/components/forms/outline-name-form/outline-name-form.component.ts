import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';

@Component({
  selector: 'brave-outline-name-form',
  templateUrl: './outline-name-form.component.html',
  providers: [{ provide: 'name', useValue: 'address-form' }],
})
export class OutlineNameFormComponent extends BaseFormComponent {
  constructor(fb: FormBuilder) {
    super(fb, 'name-form');
  }
}
