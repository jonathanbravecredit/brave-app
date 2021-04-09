import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BraveEmailValidator } from '@shared/validators/email.validator';

interface FormFields {
  fullName: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      fullName: ['', [Validators.required]],
      username: ['', [Validators.required, BraveEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get validForm() {
    return this.signUpForm.valid;
  }
  get signUpValues() {
    return this.signUpForm.value;
  }

  async signUpUser(formData: FormFields) {
    if (!this.validForm) {
      return;
    }

    const { username, password, fullName } = this.signUpValues;

    // Auth.signUp({
    //   username,
    //   password,
    //   attributes: {
    //     email: username,
    //     'custom:fullName': fullName,
    //   },
    // })
    //   .then((_) => {
    //     // fire fb pixel
    //     // this.facebookService.fireCompleteRegistration(0.0, 'USD');
    //     // this.googleService.fireSignUpEvent();
    //     sessionStorage.setItem('userEmail', username);
    //     const unconfirmedUserState = {
    //       userFirstName: 'Guest',
    //       userAttributes: {
    //         'custom:firstName': 'Guest',
    //         'custom:lastName': '',
    //         'custom:legalFullName': '',
    //         'custom:dob': '',
    //         'custom:address': '',
    //         email: username,
    //         email_verified: false,
    //         sub: '',
    //       },
    //       isSignedIn: true,
    //       isAdmin: false,
    //     };
    //     this.accountMgmtService.updateUser(unconfirmedUserState); // signed up not confirmed...manually update state.
    //     this.accountMgmtService.isWaiting$.next(false);
    //     this.router.navigate(['/userportal/stepone']);
    //   })
    //   .catch((err) => {
    //     this.error = true;
    //     this.errorMessage = err.message;
    //     this.accountMgmtService.isWaiting$.next(false);
    //   });
  }
}
