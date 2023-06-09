import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransunionErrorAction } from '@shared/interfaces/tu-error-codes.interface';
import { TransunionUtil as tu } from '@shared/utils/transunion/transunion';

@Component({
  selector: 'brave-kyc-exceptions-pure',
  templateUrl: './kyc-exceptions-pure.view.html',
})
export class KycExceptionsPureView implements OnInit {
  @Output() actionButtonClicked: EventEmitter<string> = new EventEmitter();
  @Input() code: string = '11';
  tuActions = TransunionErrorAction;
  action: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.action = tu.queries.exceptions.getErrorCodeDetails(this.code).action || 'retry';
  }
}
