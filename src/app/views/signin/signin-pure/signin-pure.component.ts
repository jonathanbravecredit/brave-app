import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewUser } from '@shared/services/auth/auth.service';

@Component({
  selector: 'brave-signin-pure',
  templateUrl: './signin-pure.component.html',
})
export class SigninPureComponent implements OnInit {
  @Output() clickGoogle: EventEmitter<void> = new EventEmitter();
  @Output() clickFacebook: EventEmitter<void> = new EventEmitter();
  @Output() clickSignup: EventEmitter<NewUser> = new EventEmitter();
  @Output() clickForgot: EventEmitter<void> = new EventEmitter();
  @Output() clickLogin: EventEmitter<void> = new EventEmitter();
  @Output() clickPrivacy: EventEmitter<void> = new EventEmitter();
  @Output() clickTerms: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
