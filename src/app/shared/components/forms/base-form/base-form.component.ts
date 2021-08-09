import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

interface ISubmitError {
  [key: string]: AbstractControl;
}

@Component({
  selector: 'brave-base-form',
  template: '',
})
export class BaseFormComponent {
  @Output() onChanges: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<FormGroup> = new EventEmitter();
  @Output() onSubmitError: EventEmitter<ISubmitError> = new EventEmitter();

  @Input() hideHint: boolean = false;

  haveError$ = new BehaviorSubject<boolean>(false);
  haveError: boolean = false;
  errorMessage: string = '';

  get formValues(): any {
    return this.parentForm.value;
  }

  parentForm: FormGroup;
  constructor(fb: FormBuilder, @Inject('name') private name: string) {
    this.parentForm = fb.group({
      name: [name],
    });
    this.parentForm.valueChanges.subscribe((value) => {
      this.onChanges.emit(value);
    });
  }

  addChild(childName: string, childGroup: FormGroup) {
    this.parentForm.addControl(childName, childGroup);
  }

  submitForm(): void {
    this.parentForm.markAllAsTouched();
    this.parentForm.valid ? this.onSubmit.emit(this.parentForm) : this.onSubmitError.emit(this.parentForm.controls);
  }

  formatInputName(idx: number): string {
    return `input-${idx}`;
  }
}
