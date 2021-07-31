import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'brave-signup-thankyou-pure',
  templateUrl: './signup-thankyou-pure.component.html',
})
export class SignupThankyouPureComponent {
  @Output() resendClick: EventEmitter<void> = new EventEmitter();
  constructor() {}
}
