import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'brave-kyc-base',
  template: '',
})
export class KycBaseComponent {
  @Output() nextClick: EventEmitter<void> = new EventEmitter();
  @Output() backClick: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
