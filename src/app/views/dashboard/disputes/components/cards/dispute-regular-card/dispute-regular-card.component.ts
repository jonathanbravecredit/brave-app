import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-dispute-regular-card',
  templateUrl: './dispute-regular-card.component.html',
})
export class DisputeRegularCardComponent implements OnInit {
  @Input() hideViewDetails: boolean = false;
  @Output() viewDetailsClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
