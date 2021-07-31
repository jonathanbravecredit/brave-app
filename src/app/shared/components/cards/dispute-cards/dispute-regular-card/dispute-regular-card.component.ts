import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'brave-dispute-regular-card',
  templateUrl: './dispute-regular-card.component.html',
  styleUrls: ['./dispute-regular-card.component.css']
})
export class DisputeRegularCardComponent implements OnInit {
  @Input() hideViewDetails: boolean = false;
  @Output() viewDetailsClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
}
