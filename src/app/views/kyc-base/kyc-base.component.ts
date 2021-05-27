import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

interface FlatForm {
  [key: string]: string;
}

@Component({
  selector: 'brave-kyc-base',
  template: '',
})
export class KycBaseComponent {
  @Output() nextClick: EventEmitter<void> = new EventEmitter();
  @Output() backClick: EventEmitter<void> = new EventEmitter();
  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output()
  formError: EventEmitter<{
    [key: string]: AbstractControl;
  }> = new EventEmitter();

  constructor() {}

  formatAttributes(
    form: FormGroup,
    mapObj: Record<string, any>,
    inputType: string = 'input'
  ): FlatForm {
    return this.flattenAttributes(form.value, mapObj, inputType);
  }

  flattenAttributes(
    formValues: any,
    mapObj: Record<string, any>,
    inputType: string
  ): FlatForm {
    let values: FlatForm = {};
    Object.keys(formValues).forEach((key) => {
      if (mapObj[key]) {
        values[key] = formValues[key][`${inputType}`];
      }
    });
    return values;
  }
}
