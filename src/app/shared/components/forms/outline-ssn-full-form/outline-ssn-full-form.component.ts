import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-outline-ssn-full-form',
  templateUrl: './outline-ssn-full-form.component.html',
})
export class OutlineSsnFullFormComponent extends BaseFormComponent {
  values$: Observable<any>;
  status$: Observable<any>;
  public full: IOutlineInputeConfig = {
    size: 'sm',
    type: 'text',
    label: '',
    mask: 'XXX-XX-XXXX',
    unmask: '000-00-0000',
    maxLength: 11,
    minLength: 11,
    hidden: true,
    placeholder: 'XXX-XX-XXXX',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'ssnfull-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  ngOnInit(): void {}
}
