import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { Observable } from 'rxjs';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';

@Component({
  selector: 'brave-simple-change-password-form',
  templateUrl: './simple-change-password-form.component.html',
})
export class SimpleChangePasswordFormComponent extends BaseFormComponent {
  @Output() changePasswordClick: EventEmitter<IConfirmPassword> = new EventEmitter();
  @Input() haveResetError: boolean = false;
  @Input() resetError: string = '';
  values$: Observable<any>;
  status$: Observable<any>;
  submitted: boolean = false;

  constructor(fb: FormBuilder) {
    super(fb, 'simple-change-password-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  get doPasswordsMatch(): boolean {
    const newPassword = this.formValues?.newPassword?.input as string;
    const conPassword = this.formValues?.confirmPassword?.input as string;
    return newPassword == conPassword;
  }
  /**
   * Take the sign up form and transform into NewUser object
   * @param form
   * @returns {NewUser}
   */
  changePassword(form: FormGroup): IConfirmPassword {
    const { password, newPassword, confirmPassword } = form.value;
    return {
      password: password.input,
      newPassword: newPassword.input,
      confirmPassword: confirmPassword.input,
    };
  }

  validatePasswords(form: FormGroup): any {
    if (!this.doPasswordsMatch) {
      this.haveResetError = true;
      this.resetError = 'New password and confirm password do not match';
    } else {
      this.changePasswordClick.emit(this.changePassword(form));
    }
  }
}
