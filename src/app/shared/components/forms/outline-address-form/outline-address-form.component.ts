import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { IOutlineSelectInputConfig } from '@shared/components/inputs/outline-select-input/outline-select-input.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-outline-address-form',
  templateUrl: './outline-address-form.component.html',
  providers: [{ provide: 'name', useValue: 'address-form' }],
})
export class OutlineAddressFormComponent extends BaseFormComponent {
  values$: Observable<any>;
  status$: Observable<any>;

  constructor(fb: FormBuilder) {
    super(fb, 'address-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }
}
