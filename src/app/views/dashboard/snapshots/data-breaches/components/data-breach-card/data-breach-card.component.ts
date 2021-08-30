import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brave-data-breach-card',
  templateUrl: './data-breach-card.component.html',
})
export class DataBreachCardComponent implements OnInit {
  @Input() subscriberName: string = 'Unknown';
  @Input() message: string = 'Unknown';
  constructor() {}

  ngOnInit(): void {}
}
