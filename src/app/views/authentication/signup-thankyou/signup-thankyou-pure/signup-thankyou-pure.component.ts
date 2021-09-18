import { Component, EventEmitter, Output } from '@angular/core';
import { signupThankyouPureContent } from '@views/authentication/signup-thankyou/signup-thankyou-pure/content';

@Component({
  selector: 'brave-signup-thankyou-pure',
  templateUrl: './signup-thankyou-pure.component.html',
})
export class SignupThankyouPureComponent {
  @Output() resendClick: EventEmitter<void> = new EventEmitter();
  content = signupThankyouPureContent;
  constructor() {}
}
