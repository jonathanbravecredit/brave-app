import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { NewUser } from '@shared/services/auth/auth.service';
import { SignupState } from '@views/authentication/signup/signup/signup.component';
import { FilledSpinningButtonComponent } from '../../buttons/filled-spinning-button/filled-spinning-button.component';
import { IFilledOnlyTextButtonConfig } from "../../buttons/filled-onlytext-button/filled-onlytext-button.component";

@Component({
  selector: 'brave-simple-signup-form',
  templateUrl: './simple-signup-form.component.html',
})
export class SimpleSignupFormComponent {
  @Input() viewState: SignupState = 'init';
  @Input() message: string = '';
  @Output() forgotClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() signupClick: EventEmitter<NewUser> = new EventEmitter();

  parentForm: FormGroup;
  emailConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Enter the email you want to register',
    type: 'email',
    placeholder: 'Email address',
    autocomplete: 'email',
  };
  passwordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Create a strong password',
    type: 'password',
    placeholder: 'Your new pasword',
    autocomplete: 'off',
  };
  buttonConfig: IFilledOnlyTextButtonConfig ={
    buttonSize: 'lg',
    backgroundColor: 'bg-indigo-800',
    activeColor: 'bg-indigo-900',
    color: 'text-white',
    full: false,
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

  
  submit(spinner: FilledSpinningButtonComponent) {
    if (this.parentForm.valid) {
      this.signupClick.emit(this.signupUser(this.parentForm));
      spinner.clicked = true;
      spinner.spinning = true;
      spinner.refreshClass();
    }
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
