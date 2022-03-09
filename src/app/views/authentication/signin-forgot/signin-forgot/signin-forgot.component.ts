import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilledClosingAlertConfig } from '@shared/components/alerts/filled-closing-alert/filled-closing-alert.component';
import { IOutlineInputeConfig } from '@shared/components/inputs/outline-input/outline-input.component';
import { AuthService } from '@shared/services/auth/auth.service';
import { InterstitialService } from '@shared/services/interstitial/interstitial.service';
import { SigninForgotPureComponent } from '@views/authentication/signin-forgot/signin-forgot-pure/signin-forgot-pure.component';
import { SigninForgotViewState } from '@views/authentication/signin-forgot/signin-forgot/interface';
import { ROUTE_NAMES as routes } from '@shared/routes/routes.names';

@Component({
  selector: 'brave-signin-forgot',
  templateUrl: './signin-forgot.component.html',
})
export class SigninForgotComponent {
  @ViewChild(SigninForgotPureComponent) pure: SigninForgotPureComponent | undefined;
  viewState: SigninForgotViewState = 'init';
  emailConfig: IOutlineInputeConfig[] = [
    {
      size: 'base',
      label: 'Email',
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      autocomplete: 'off',
      required: true,
    },
  ];

  codesConfig: IOutlineInputeConfig[] = [
    {
      size: 'base',
      label: 'Email',
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      autocomplete: 'off',
      required: true,
    },
    {
      size: 'base',
      label: 'New Password',
      name: 'password',
      type: 'password',
      placeholder: 'New Password',
      autocomplete: 'off',
      required: true,
    },
    {
      size: 'base',
      label: 'Code',
      name: 'code',
      type: 'text',
      placeholder: 'Code',
      autocomplete: 'off',
      required: true,
    },
  ];

  alertConfig: IFilledClosingAlertConfig = {
    size: 'base',
    backgroundColor: 'bg-indigo-800',
    color: 'text-white',
    alertBody: `Success! You've changed your password. Redirecting you back to login.`,
  };

  constructor(private auth: AuthService, private router: Router, private interstitial: InterstitialService) {}

  onSubmitEmailClick(form: FormGroup): void {
    const email = form.value.email.input;
    this.interstitial.fetching$.next(true);
    this.auth
      .forgotPassword(email)
      ?.then((res) => {
        this.interstitial.fetching$.next(false);
        this.viewState = 'submitted';
      })
      .catch((err) => {
        this.interstitial.fetching$.next(false);
        this.pure?.form?.updateErrorMessage(err.message);
      });
  }

  onSubmitCodeClick(form: FormGroup): void {
    const email = form.value.email.input;
    const password = form.value.password.input;
    const code = form.value.code.input;
    this.interstitial.fetching$.next(true);
    this.auth
      .forgotPasswordSubmit(email, code, password)
      ?.then((res) => {
        this.interstitial.fetching$.next(false);
        this.pure?.showAlert();
        setTimeout(() => {
          this.router.navigate([routes.root.auth.signin.full]);
        }, 3000);
      })
      .catch((err) => {
        this.interstitial.fetching$.next(false);
        this.pure?.form?.updateErrorMessage(err.message);
      });
  }
}
