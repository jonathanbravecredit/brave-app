import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { ConfirmPasswordState, IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { SigninState } from '@views/authentication/signin/signin/signin.component';
import { Observable } from 'rxjs';

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
  passwordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Current Password',
    type: 'password',
    placeholder: 'Current Password',
    autocomplete: 'off',
  };

  newPasswordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'New Password',
    type: 'password',
    placeholder: 'New Password',
    autocomplete: 'off',
  };

  confirmPasswordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Confirm New Password',
    type: 'password',
    placeholder: 'Confirm New Password',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'simple-change-password-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  // /**
  //  * toggle on the error message
  //  * @param viewState
  //  */
  // updateViewState(viewState: SigninState): void {
  //   this.viewState = viewState;
  // }

  // /**
  //  * Update the message based on the error response from AWS
  //  * @param error
  //  */
  // updateInvalidMessage(error: string): void {
  //   this.error = error;
  // }

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
}
