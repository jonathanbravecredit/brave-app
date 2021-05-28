import { Component, EventEmitter, Output } from '@angular/core';
import { NewUser } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-signup-pure',
  templateUrl: './signup-pure.component.html',
})
export class SignupPureComponent {
  @Output() clickGoogle: EventEmitter<void> = new EventEmitter();
  @Output() clickFacebook: EventEmitter<void> = new EventEmitter();
  @Output() clickSignup: EventEmitter<NewUser> = new EventEmitter();
  @Output() clickForgot: EventEmitter<void> = new EventEmitter();
  @Output() clickLogin: EventEmitter<void> = new EventEmitter();
  @Output() clickPrivacy: EventEmitter<void> = new EventEmitter();
  @Output() clickTerms: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
