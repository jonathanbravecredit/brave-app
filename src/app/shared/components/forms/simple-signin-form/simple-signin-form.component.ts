import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { NewUser } from '@shared/services/auth/auth.service';
import { SigninState } from '@views/authentication/signin/signin/signin.component';

@Component({
  selector: 'brave-simple-signin-form',
  templateUrl: './simple-signin-form.component.html',
})
export class SimpleSigninFormComponent {
  @Output() forgotClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() signinClick: EventEmitter<NewUser> = new EventEmitter();

  @Input() viewState: SigninState = 'init';
  @Input() message: string = '';

  parentForm: FormGroup;
  emailConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Email',
    type: 'email',
    placeholder: 'Email address',
    autocomplete: 'email',
  };
  passwordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder) {
    this.parentForm = fb.group({
      name: ['simple-signin-form'],
    }); // simple parent form with name of form
  }

  /**
   * toggle on the error message
   * @param viewState
   */
  updateViewState(viewState: SigninState): void {
    this.viewState = viewState;
  }

  /**
   * Update the message based on the error response from AWS
   * @param message
   */
  updateInvalidMessage(message: string): void {
    this.message = message;
  }

  /**
   * Add a new child form control using the child form group
   * @param childName
   * @param childGroup
   */
  addChild(childName: string, childGroup: FormGroup): void {
    this.parentForm.addControl(childName, childGroup);
  }

  /**
   * Take the sign up form and transform into NewUser object
   * @param form
   * @returns {NewUser}
   */
  signinUser(form: FormGroup): NewUser {
    const { email, password } = form.value;
    return {
      username: email.input,
      password: password.input,
    };
  }
}
