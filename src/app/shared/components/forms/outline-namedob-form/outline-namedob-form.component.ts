import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { dobValidator } from '@shared/components/forms/outline-namedob-form/outline-namedob-form.validators';

@Component({
  selector: 'brave-outline-namedob-form',
  templateUrl: './outline-namedob-form.component.html',
  providers: [{ provide: 'name', useValue: 'namedob-form' }],
})
export class OutlineNamedobFormComponent extends BaseFormComponent {
  constructor(fb: FormBuilder) {
    super(fb, 'namedob-form', [dobValidator]);
  }
}
