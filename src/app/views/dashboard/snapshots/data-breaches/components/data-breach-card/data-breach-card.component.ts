import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dataBreachCardContent } from '@views/dashboard/snapshots/data-breaches/components/data-breach-card/content';

@Component({
  selector: 'brave-data-breach-card',
  templateUrl: './data-breach-card.component.html',
})
export class DataBreachCardComponent implements OnInit {
  @Input() subscriber: string = 'Unknown';
  @Input() paragraphs: string[] = ['Unknown'];
  @Input() reason: string = 'Unknown';
  @Output() closeClick: EventEmitter<void> = new EventEmitter();

  content = dataBreachCardContent;
  constructor() {}

  ngOnInit(): void {}
}
