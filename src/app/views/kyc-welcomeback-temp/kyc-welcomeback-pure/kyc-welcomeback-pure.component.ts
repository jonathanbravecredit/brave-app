import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-kyc-welcomeback-pure',
  templateUrl: './kyc-welcomeback-pure.component.html',
})
export class KycWelcomebackPureComponent implements OnInit {
  @Output() nextClick: EventEmitter<void> = new EventEmitter();
  @Output() backClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
