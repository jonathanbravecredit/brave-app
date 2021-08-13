import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-disputes-success-pure',
  templateUrl: './disputes-success-pure.view.html',
})
export class DisputesSuccessPureView implements OnInit {
  @Output() goBackClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
