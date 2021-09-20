import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { signinRedirectNewUserContent } from '@views/authentication/signin-redirect-newuser/signin-redirect-newuser-pure/content';

@Component({
  selector: 'brave-signin-redirect-newuser-pure',
  templateUrl: './signin-redirect-newuser-pure.component.html',
})
export class SigninRedirectNewuserPureComponent implements OnInit {
  @Output() manualRedirectClick: EventEmitter<void> = new EventEmitter();
  content = signinRedirectNewUserContent;
  constructor() {}

  ngOnInit(): void {}
}
