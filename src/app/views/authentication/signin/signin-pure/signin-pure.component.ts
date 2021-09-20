import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NewUser } from '@shared/services/auth/auth.service';
import { SigninState } from '@views/authentication/signin/signin/signin.component';

@Component({
  selector: 'brave-signin-pure',
  templateUrl: './signin-pure.component.html',
})
export class SigninPureComponent {
  @Output() clickGoogle: EventEmitter<void> = new EventEmitter();
  @Output() clickFacebook: EventEmitter<void> = new EventEmitter();
  @Output() clickForgot: EventEmitter<void> = new EventEmitter();
  @Output() clickLogin: EventEmitter<NewUser> = new EventEmitter();
  @Output() clickGoToSignup: EventEmitter<void> = new EventEmitter();
  @Input() viewState: SigninState = 'init';
  @Input() message: string = '';

  constructor() {}
}
