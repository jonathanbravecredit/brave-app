import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'brave-kyc-welcome-pure',
  templateUrl: './kyc-welcome-pure.component.html',
})
export class KycWelcomePureComponent {
  @Output() nextClick: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
