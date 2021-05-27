import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

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
}
