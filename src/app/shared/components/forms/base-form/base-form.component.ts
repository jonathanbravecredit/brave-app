import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'brave-base-form',
  template: '',
})
export class BaseFormComponent {
  @Output() onChanges: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output()
  onSubmitError: EventEmitter<{
    [key: string]: AbstractControl;
  }> = new EventEmitter();

  @Input() hideHint: boolean = false;

  parentForm: FormGroup;
  constructor(fb: FormBuilder, @Inject('name') private name: string) {
    this.parentForm = fb.group({
      name: [name],
    }); // simple parent form with name of form
  }

  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }

  submitForm(): void {
    this.parentForm.markAllAsTouched();
    this.parentForm.valid ? this.onSubmit.emit(this.parentForm) : this.onSubmitError.emit(this.parentForm.controls);
  }
}
