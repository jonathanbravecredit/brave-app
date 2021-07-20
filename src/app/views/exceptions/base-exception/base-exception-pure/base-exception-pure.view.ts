import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-base-exception-pure-view',
  templateUrl: './base-exception-pure.view.html',
})
export class BaseExceptionPureView implements OnInit {
  @Output() actionButtonClicked: EventEmitter<void> = new EventEmitter();
  @Input() code: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
