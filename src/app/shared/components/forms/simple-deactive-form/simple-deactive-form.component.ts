import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '@shared/components/forms/base-form/base-form.component';
import { IConfirmPassword } from '@shared/components/forms/simple-change-password-form/interface';
import { IDeactivateAccount } from '@shared/components/forms/simple-deactive-form/interface';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'brave-simple-deactive-form',
  templateUrl: './simple-deactive-form.component.html',
})
export class SimpleDeactiveFormComponent extends BaseFormComponent {
  @Output() deactivateClick: EventEmitter<IDeactivateAccount> = new EventEmitter();
  @Input() haveDeactivateError: boolean = false;
  @Input() deactivateError: string = '';
  values$: Observable<any>;
  status$: Observable<any>;

  passwordConfig: IOutlineInputeConfig = {
    size: 'sm',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
    autocomplete: 'off',
  };

  constructor(fb: FormBuilder) {
    super(fb, 'simple-deactivate-form');
    this.values$ = this.parentForm.valueChanges;
    this.status$ = this.parentForm.statusChanges;
  }

  /**
   * Take the sign up form and transform into NewUser object
   * @param form
   * @returns {NewUser}
   */
  deactivateAccount(form: FormGroup): IDeactivateAccount {
    const { password } = form.value;
    return {
      password: password.input,
    };
  }
}
