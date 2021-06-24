import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-tradeline-remarks',
  templateUrl: './tradeline-remarks.component.html',
})
export class TradelineRemarksComponent implements OnInit {
  @Input() remarks: string = '';
  @Input() address: string = '';
  @Output() disputeClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
