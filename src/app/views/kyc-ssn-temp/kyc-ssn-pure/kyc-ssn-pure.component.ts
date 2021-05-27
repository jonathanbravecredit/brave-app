import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-kyc-ssn-pure',
  templateUrl: './kyc-ssn-pure.component.html',
})
export class KycSsnPureComponent implements OnInit {
  @Output() nextClick: EventEmitter<void> = new EventEmitter();
  @Output() backClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
