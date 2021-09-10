import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_EXCEPTION } from '@shared/components/exceptions/base-exception/constants';

@Component({
  selector: 'brave-base-exception-pure-view',
  templateUrl: './base-exception-pure.view.html',
})
export class BaseExceptionPureView {
  @Output() actionButtonClicked: EventEmitter<string> = new EventEmitter();
  @Input() code: string = DEFAULT_EXCEPTION.code;

  constructor() {}
}
