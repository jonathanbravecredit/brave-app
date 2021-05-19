import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { NewUser } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-simple-signup-form',
  templateUrl: './simple-signup-form.component.html',
})
export class SimpleSignupFormComponent {
  @Output() forgotClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() signupClick: EventEmitter<NewUser> = new EventEmitter();

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
      name: ['simple-signup-form'],
    }); // simple parent form with name of form
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
  signupUser(form: FormGroup): NewUser {
    const { email, password } = form.value;
    return {
      username: email.input,
      password: password.input,
    };
  }
}
